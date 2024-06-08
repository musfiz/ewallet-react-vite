const customStyles = {
  tableWrapper: {
    style: {
      display: "table",
      // borderLeft: "1px solid #c5c5c5",
      // borderRight: "1px solid #c5c5c5",
    },
  },
  headRow: {
    style: {
      background: "#5f5f5f",
      color: "#ffffff",
      fontSize: "13px",
      fontWeight: "bold",
    },
  },
  headCells: {
    style: {
      "&:not(:last-of-type)": {
        // borderRightStyle: "solid",
        borderRightWidth: "1px",
        borderRightColor: "#c5c5c5",
      },
      justifyContent: "center",
    },
  },
  cells: {
    style: {
      "&:not(:last-of-type)": {
        // borderRightStyle: "solid",
        borderRightWidth: "1px",
        borderRightColor: "#c5c5c5",
      },
    },
  },
  rows: {
    style: {
      fontWeight: "bold",
      borderLeft: "1px solid #c5c5c5",
      borderRight: "1px solid #c5c5c5",
    },
  },
};

export default customStyles;
