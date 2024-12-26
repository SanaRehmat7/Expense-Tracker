import React from "react";
import "./subHead.css";
import { Button, TextField } from "@mui/material"; // Optional for Material UI components

const SecondHeader = () => {
  return (
    <div className="second-header">
      <div className="search-container">
        <TextField
          variant="outlined"
          placeholder="Search Expenses"
          size="small"
          className="search-bar"
        />
      </div>
      <div className="action-container">
        <Button
          variant="contained"
          color="primary"
          className="quick-add-button"
          onClick={() => console.log("Add Expense")}
        >
          Save Expenses
        </Button>
      </div>
    </div>
  );
};

export default SecondHeader;
