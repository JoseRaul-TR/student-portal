import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { visuallyHidden } from "@mui/utils";

import CloseIcon from "@mui/icons-material/Close";

// --- Table Sorting Logic ---
function descendingComparator(a, b, orderBy) {
  // Handle Date objects for sorting 'registrationTime'
  if (orderBy === "registrationTime") {
    const dateA = new Date(a[orderBy]);
    const dateB = new Date(b[orderBy]);
    if (dateB < dateA) {
      return -1;
    }
    if (dateB > dateA) {
      return 1;
    }
    return 0;
  }

  // Default comparison for other types
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Head cells for the registered courses table
const registeredCoursesHeadCells = [
  {
    id: "courseName",
    numeric: false,
    disablePadding: false,
    label: "Kurs",
  },
  {
    id: "studentName",
    numeric: false,
    disablePadding: false,
    label: "Studentnamn",
  },
  {
    id: "studentEmail",
    numeric: false,
    disablePadding: false,
    label: "E-postadress",
  },
  {
    id: "registrationTime",
    numeric: true, // Treat time as numeric for sorting
    disablePadding: false,
    label: "Registreringsdatum",
  },
];

// --- EnhancedTableHead for Registered Courses ---
function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead
      sx={{
        backgroundColor: "primary.light",
        "& .MuiTableCell-head": {
          color: "primary.contrastText",
          fontWeight: "bold",
        },
      }}
    >
      <TableRow>
        {registeredCoursesHeadCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              sx={{
                fontWeight: "normal",
                color: "primary.contrastText",
                "& .MuiSvgIcon-root": {
                  color: "primary.contrastText",
                },
                "&.Mui-active": {
                  fontWeight: "bolder",
                  color: "primary.contrastText",
                  "& .MuiSvgIcon-root": {
                    color: "primary.contrastText",
                  },
                },
              }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

// --- EnhancedTableToolbar for Registered Courses ---
function EnhancedTableToolbar({ onClose }) {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        backgroundColor: "secondary.main",
        color: "secondary.contrastText",
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Registrerade kurser
      </Typography>
      <Tooltip title="Stäng tabell">
        <IconButton
          onClick={onClose}
          aria-label="stäng"
          sx={{
            color: "secondary.contrastText",
            transition: "color 0.2s ease-in-out",
            "&:hover": {
              color: "action.active",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  onClose: PropTypes.func.isRequired,
};

// --- Main RegisteredCoursesTable Component ---
export default function RegisteredCoursesTable({ data, onClose }) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("registrationTime");

  // Dense padding default in the table
  const dense = true;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedData = useMemo(
    () => [...data].sort(getComparator(order, orderBy)),
    [order, orderBy, data]
  );

  return (
    <Box
      sx={{
        width: "100%",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          mb: 2,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <EnhancedTableToolbar onClose={onClose} />
        <TableContainer sx={{ overflowX: "auto", flexGrow: 1 }}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {sortedData.length > 0 ? (
                sortedData.map((row) => (
                  <TableRow
                    tabIndex={-1}
                    key={row.id}
                    sx={{
                      "&:nth-of-type(odd)": {
                        backgroundColor: "hogwarts.parchment",
                      },
                      "&:nth-of-type(even)": {
                        backgroundColor: "background.paper",
                      },
                    }}
                  >
                    <TableCell align="left">{row.courseName}</TableCell>
                    <TableCell align="left">{row.studentName}</TableCell>
                    <TableCell align="left">{row.studentEmail}</TableCell>
                    <TableCell align="right">
                      {new Date(row.registrationTime).toLocaleString("sv-SE", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={registeredCoursesHeadCells.length}
                    sx={{ textAlign: "center", p: 4, color: "text.secondary" }}
                  >
                    Inga kurser är registrerade ännu.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

RegisteredCoursesTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      studentName: PropTypes.string.isRequired,
      studentEmail: PropTypes.string.isRequired,
      courseId: PropTypes.string.isRequired,
      courseName: PropTypes.string.isRequired,
      registrationTime: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};
