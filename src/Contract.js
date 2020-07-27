import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormaContract from "./FormaContract";

const connect = require("react-redux").connect;
const actions = require("./actions.jsx");

class Contract extends Component {
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
        headerName: "Number", 
        field: "number", 
        maxWidth:150
      }, 
      {
        headerName: "Topic", 
        field: "topic",
        maxWidth:150
      },
      {
        headerName: "Organization", 
        field: "organization",
        maxWidth:150
      },
    ],
      rowData: [{
        number: "1", topic: "Purchase", organization: 13
      }, {
        number: "2", topic: "Sale", organization: 14
      }, {
        number: "3", topic: "Rent", organization: 15 
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
    const element = { number: "", topic: " ", organization:"" };
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
  <Contract></Contract>, document.querySelector('#root')
);
export default Contract;
function mapStateToProps(state) {
  return {
    buttons: state.get("buttons")
  };
}
connect(mapStateToProps, actions)(Contract)