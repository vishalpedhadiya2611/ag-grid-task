import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import BtnCellRenderer from "./BtnCellRenderer.jsx";
import { useSelector } from "react-redux";
import StatusCellRenderer from "./statusRender.jsx";
const GridExample = () => {
  const contactList = useSelector((state) => state.item.itemList);
  const columnDefs = [
    {
      field: "id",
      maxWidth: 100,
    },
    {
      field: "name",
      maxWidth: 800,
    },
    {
      field: "status",
      maxWidth: 200,
      cellRenderer: "statusCellRenderer",
    },
    {
      field: "Action",
      cellRenderer: "btnCellRenderer",
      cellRendererParams: {
        clicked: function (field) {
          alert(`${field} was clicked`);
        },
      },
      maxWidth: 200,
    },
  ];
  const defaultColDef = {
    flex: 1,
    minWidth: 100,
  };
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    setRowData(contactList);
  }, [contactList]);
  const frameworkComponents = {
    btnCellRenderer: BtnCellRenderer,
    statusCellRenderer: StatusCellRenderer,
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        id="myGrid"
        style={{
          height: "100vh",
        }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          frameworkComponents={frameworkComponents}
          rowData={rowData}
        />
      </div>
    </div>
  );
};

export default GridExample;
