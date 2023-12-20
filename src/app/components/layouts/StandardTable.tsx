import { ColDef } from "ag-grid-community";
import CustomSortHeader from "../CustomSortHeader";
import { AgGridReact } from "ag-grid-react";

const StandardTable = ({
  rowData,
  columnDefs,
  pinnedBottomRowData,
  pagination = false,
}: {
  rowData: object[];
  columnDefs: ColDef[];
  pinnedBottomRowData?: object[];
  pagination?: boolean;
}) => {
  const noRowsMessage = "No data available to show";
  const gridOptions = {
    groupUseEntireRow: true,
    groupIncludeFooter: true,
    overlayNoRowsTemplate: `<span class="ag-overlay-no-rows-center">${noRowsMessage}</span>`,

    // Other grid options...
  };

  const defaultColDef = {
    sortable: true,
    flex: 1,
    cellStyle: {
      textAlign: "right",
      fontWeight: "100",
      fontSize: "15px",
      paddingRight: "35px",
    },
    // resizable: true,
    suppressMovable: true,
    headerComponent: CustomSortHeader,
  };
  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "100%",
        width: "100%",
        border: "0px solid #dadada",
        boxShadow: "none",
      }}
    >
      <AgGridReact
        gridOptions={gridOptions}
        domLayout="autoHeight"
        className="myCustomTable"
        overlayNoRowsTemplate={`<span class="ag-overlay-no-rows-center">${noRowsMessage}</span>`}
        defaultColDef={defaultColDef}
        rowData={rowData}
        columnDefs={columnDefs}
        pinnedBottomRowData={pinnedBottomRowData}
        pagination={pagination}
        paginationPageSize={10}
        paginationPageSizeSelector={false}
      ></AgGridReact>
    </div>
  );
};

export default StandardTable;
