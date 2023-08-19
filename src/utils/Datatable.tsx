import DataTable from "react-data-table-component";
import customStyles from "./CustomStyles";

const CustomDatatable = (props:object) => {
  const data = props.data;
  const columns = props.columns;
  const loading =  props.loading;
  const rowStyles = props.rowStyles;
  return(
    <>
      <DataTable
        progressPending={loading}
        columns={columns}
        data={data}
        selectableRows
        customStyles={customStyles}
        dense
        pagination
        // paginationServer
        paginationPerPage={20}
        paginationRowsPerPageOptions={[20, 50, 100, 200, 500]}
        persistTableHead ={true}
        striped={true}
        highlightOnHover={true}
        // pointerOnHover={true}
        conditionalRowStyles={rowStyles}
      />
    </>
  );
}

export default CustomDatatable;