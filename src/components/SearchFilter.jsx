// src/components/SearchFilter.jsx
import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

/**
 * A reusable component for providing a search input field with a Material UI icon.
 * It expects the parent component to manage the search item state
 * and to perform the actual filtering.
 *
 * @param {Object} props
 * @param {string} props.searchItem - The current value of the search input, controlled by the parent.
 * @param {function} props.setSearchItem - Function to update the search input value in the parent.
 * @param {string} [props.placeholderText="Sök..."] - Placeholder text for the search input.
 */
export default function SearchFilter({
  searchItem,
  setSearchItem,
  placeholderText = "Sök...",
}) {
  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <div>
      <TextField
        fullWidth
        variant="outlined"
        placeholder={placeholderText}
        value={searchItem}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 4 }} // margin-bottom for spacing
      />
    </div>
  );
}