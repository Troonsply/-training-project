import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
        maxWidth:150
      },
      {
        headerName: "Name", 
        field: "name", 
      }, 
      {
        headerName: "Organization", 
        field: "organization",
      },
      {
        headerName: "List of people", 
        field: "list",
      },
    ],
      rowData: [{
        name: "ABC", organization: "Purchase", list: ''
      }, {
        name: "CBA", organization: "Sale", list: ''
      }, {
        name: "CAB", organization: "Rent", list: '' 
      }],
      defaultColDef: {
        flex: 1,
        minWidth: 100,
        editable: true,
        sortable: true,
        filter: true
      },
    }
  }
  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onButtonClickAdd() {
    const array = this.state.rowData;
    console.log(this.state.rowData);
    const element = { name: "", organization: " ", list:"" };
    array.push(element);
    return this.gridApi.setRowData(array);
  }
   onButtonClickDelete() {
    const selected = this.gridApi.getFocusedCell();
    this.state.rowData.splice(selected.rowIndex, 1);
    this.gridApi.setRowData(this.state.rowData);   
  }
  render() {
    return (
      <div
        className="ag-theme-alpine"
        style={{
          height: '250px',
          width: '450px',
          margin: '0 auto'
    }} 
      >
        <button onClick={this.onButtonClickAdd.bind(this)}
        addButton={this.props.addButton}>Add rows</button>
        <button onClick={this.onButtonClickDelete.bind(this)}
        deleteButton={this.props.deleteButton}>Delete rows</button>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowSelection="multiple"
          defaultColDef={this.state.defaultColDef}
          rowData={this.state.rowData}
          onGridReady={this.onGridReady}
          rowDragManaged={true}
          animateRows={true}>
        </AgGridReact>
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