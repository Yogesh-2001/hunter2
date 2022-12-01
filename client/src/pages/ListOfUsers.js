import MaterialTable from "@material-table/core";
import { useState, useEffect } from "react";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
import "../styles/list_of_users.css";
const userdata = collection(db, "details");

const column = [
  { title: "Application Id", field: "id", filtering: true },
  { title: "Name", field: "firstname", filtering: true },
  { title: "Surname", field: "lastname" },
  { title: "Mobile No", field: "phoneNo", filtering: true },
  { title: "Email", field: "email", filtering: true },
  { title: "Branch", field: "branch", filtering: true },
  { title: "Division", field: "division", filtering: true },
];

const ListOfUsers = () => {
  const [rows, setrows] = useState([]);
  useEffect(() => {
    const getuser = async () => {
      const data = await getDocs(userdata);

      console.log("Hello ", data);
      setrows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log("rows", rows);
    };
    getuser();
  }, []);
  return (
    <>
      <div className="users-list-table col-10 mx-auto">
        <MaterialTable
          className="users_material_table"
          title={"List Of Users"}
          columns={column}
          data={rows}
          options={{
            search: true,
            paging: true,
            filtering: true,

            //Export Options
            exportMenu: [
              {
                label: "Export PDF",
                exportFunc: (cols, datas) =>
                  ExportPdf(cols, datas, "List_of_Users"),
              },
              {
                label: "Export CSV",
                exportFunc: (cols, datas) =>
                  ExportCsv(cols, datas, "List_of_Users"),
              },
            ],

            //style
            headerStyle: {
              backgroundColor: "#131517",
              color: "#FFF",
            },
            rowStyle: {
              backgroundColor: "#FDFFFF",
            },
          }}
        />
      </div>
    </>
  );
};

export default ListOfUsers;
