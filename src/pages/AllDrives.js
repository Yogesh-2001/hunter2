import { Button, Card, Typography } from "@material-ui/core";
import * as React from "react";
import UpComingSlider from "../components/UpComingSlider";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import "../styles/table.css";
import { useContext } from "react";
import { UserContext } from "../context/LoginContext";

const AllDrives = () => {
  const { companies } = useContext(UserContext);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "companyName", headerName: "companyName", width: 600 },
    { field: "postedBy", headerName: "postedBy", width: 130 },
    { field: "date", headerName: "date", width: 150 },
  ];

  const rows = [
    {
      id: 1,
      companyName:
        "Sogolytics pooled recruitment drive for BO -2023 - INFT , CMPN , ETRX & EXTC",
      postedBy: "Jon",
      date: "Thu, 6 Oct 2022",
    },
    {
      id: 2,
      companyName:
        "Code Array Technologies Pvt Ltd. - INFT , CMPN , EXTC & ETRX",
      postedBy: "Cersei",
      date: "Thu, 6 Oct 2022",
    },
    {
      id: 3,
      companyName: "Codemines Solutions - INFT & CMPN",
      postedBy: "Jaime",
      date: "Thu, 6 Oct 2022",
    },
    {
      id: 4,
      companyName: "C2L BIZ Solutions - INFT , CMPN & EXTC",
      postedBy: "Arya",
      date: "Thu, 6 Oct 2022",
    },
    {
      id: 5,
      companyName: "FedEx India COE Campus Hiring",
      postedBy: "Daenerys",
      date: "Thu, 6 Oct 2022",
    },
    {
      id: 6,
      companyName:
        "TATA ADVANCED SYSTEMS LIMITED (TASL) - INFT , CMPN , ETRX & EXTC -Pool Campus",
      postedBy: null,
      date: "Thu, 6 Oct 2022",
    },
    {
      id: 7,
      companyName:
        "Decimal Point Analytics Pvt Ltd. - INFT , CMPN , ETRX & EXTC",
      postedBy: "Ferrara",
      date: "Thu, 6 Oct 2022",
    },
    {
      id: 8,
      companyName: "Jio Platform ltd - INFT , CMPN & EXTC",
      postedBy: "Rossini",
      date: "Thu, 6 Oct 2022",
    },
    {
      id: 9,
      companyName: "Reliance BP Mobility Ltd - INFT & CMPN",
      postedBy: "Harvey",
      date: "Thu, 6 Oct 2022",
    },
  ];
  return (
    <>
      <section>
        <UpComingSlider />

        <main
          style={{ height: 400, fontWeight: "inherit" }}
          className="col-lg-10 col-11 mx-auto"
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick
            style={{ fontWeight: "inherit" }}
          />
        </main>
      </section>
    </>
  );
};

export default AllDrives;
