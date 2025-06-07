import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

/**
 * A reusable component for providing a search input field with a Material UI icon.
 * It expects the parent component to manage the search item state
 * and to perform the actual filtering. The content to be filtered (e.g., a list of items)
 * is passed as `children` and rendered below the search input.
 *
 * @param {object} props - The component's props.
 * @param {string} props.searchItem - The current value of the search input, controlled by the parent component.
 * @param {function(string): void} props.setSearchItem - A function to update the search input value in the parent component's state.
 * @param {string} [props.placeholderText="Sök..."] - Optional placeholder text for the search input field. Defaults to "Sök...".
 * @param {React.ReactNode | (() => React.ReactNode)} props.children - The content (React elements or a function returning React elements) to be rendered below the search input. This is typically the list of items that will be filtered by the search.
 */
export default function SearchFilter({
  searchItem,
  setSearchItem,
  placeholderText = "Sök...",
  children,
}) {
  /**
   * Handles changes in the search input field.
   * Updates the `searchItem` state in the parent component via `setSearchItem`.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event from the input field.
   */
  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <div>
      {/* Material-UI TextField for the search input */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder={placeholderText}
        value={searchItem}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
          sx: {
            // Apply sx directly to the input container for themed styling
            borderRadius: "8px",
            backgroundColor: "background.paper",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "secondary.main",
            },
          },
        }}
        sx={{ mb: 4 }} // Applies Material-UI system styling for a margin-bottom
      />
      {/*
        Renders the children passed to this component.
        This allows the parent component to control what content appears
        below the search input (e.g., the filtered list of courses or posts).
        If `children` is a function (a render prop pattern), it's called to get the JSX to render;
        otherwise, it's rendered directly.
      */}
      {typeof children === "function" ? children() : children}
    </div>
  );
}
