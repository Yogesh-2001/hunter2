import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";

// css file
import "../styles/list_of_users.css"


// installed packages
// @material-table/core
// @material-table/exporters
// material-table

const rows = [
  {
    application_Id: "143545", //database uid
    rollNo: "19102A0068",
    email: "yogeshyewale2001@gmail.com",
    name: "Swapnil",
    surname: "Titkare",
    Birth_Year: "2001",
    mobile: "5656321245",
    branch: "Computer Engineering",
    div: "A",
    placedStatus: "yes",
    placedCompany: "Tata Service",
    CTC: " ",


  },
  {
    application_Id: "145245",
    name: "Swapnil",
    surname: "Titkare",
    Birth_Year: "2001",
    mobile: "5656321245",
  },
  {
    application_Id: "145245",
    name: "Swapnil",
    surname: "Titkare",
    Birth_Year: "2001",
    mobile: "5656321245",
  },
  {
    application_Id: "145445",
    name: "Swapnil",
    surname: "Titkare",
    Birth_Year: "2001",
    mobile: "5656321245",
  },
  {
    application_Id: "145145",
    name: "yogesh",
    surname: "Yewale",
    Birth_Year: "2001",
    mobile: "5656321245",
  },
];

const column = [
  { title: "Application Id", field: "application_Id", filtering: true },
  { title: "Name", field: "name", filtering: true },
  { title: "Surname", field: "surname" },
  { title: "Birth Year", field: "Birth_Year" },
  { title: "Mobile No", field: "mobile", filtering: true },
];

const ListOfUsers = () => {
  return (
    <>
      <div className="users-list-table col-10 mx-auto">
        <MaterialTable
          className='users_material_table'
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
