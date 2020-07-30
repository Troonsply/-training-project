import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import FormProject from './FormaProject'

const connect = require("react-redux").connect;
const actions = require("./actions.jsx");

class Project extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      columnDefs: [
        {
        headerName: "Check", 
        rowDrag: true,
        checkboxSelection: true, 
      },
      {
        headerName: "Наименование Проекта", 
        field: "name", 
      }, 
      {
        headerName: "Организация Проекта", 
        field: "organization",
      },
      {
        headerName: "Участники Проекта", 
        field: "list",
      },
      {
        headerName: "Дата Проекта", 
        field: "dateProject",
      },
    ],
      rowData: [{
        name: "ABC", organization: "Post", list: 'Ivanov', dateProject: '02/03/20'
      }, {
        name: "CBA", organization: "Tost", list: 'Petrov', dateProject: '02/03/20'
      }, {
        name: "CAB", organization: "Most", list: 'Kikimorov', dateProject: '02/03/20' 
      }],
      defaultColDef: {
        resizable: true,
        sortable: true,
        filter: true
      },
    }
  }
  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }
//   onButtonClickAdd() {
//     const array = this.state.rowData;
//     console.log(this.state.rowData);
//     const element = { name: "", organization: " ", list:"" };
//     array.push(element);
//     return this.gridApi.setRowData(array);
//   }
   onButtonClickDelete() {
    const selected = this.gridApi.getFocusedCell();
    this.state.rowData.splice(selected.rowIndex, 1);
    this.gridApi.setRowData(this.state.rowData);   
  }
  
  render() {
    return (
      <div
        style={{ display:'flex','flex-direction': 'column'}}
        >
        <div style={{display:'flex','justify-content':'space-between',}} >
          <FormProject />
          <Button 
            style={{margin:'15px',}}
            variant="contained" 
            color="primary" 
            onClick={this.onButtonClickDelete.bind(this)}
            deleteButton={this.props.deleteButton}>Delete
          </Button>
          </div>
          <div className="ag-theme-alpine" style={ {height: '100vh', width: '85vw', marginLeft:'20px'} }>
            <AgGridReact
              columnDefs={this.state.columnDefs}
              defaultColDef={this.state.defaultColDef}
              rowData={this.state.rowData}
              onGridReady={this.onGridReady}
              rowDragManaged={true}
              animateRows={true}>
            </AgGridReact>
          </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Project></Project>, document.querySelector('#root')
);
export default Project;
function mapStateToProps(state) {
  return {
    buttons: state.get("buttons")
  };
}
connect(mapStateToProps, actions)(Project)