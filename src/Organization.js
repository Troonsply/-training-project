import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const connect = require("react-redux").connect;
const actions = require("./actions.jsx");

class Organization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Number", field: "number", checkboxSelection: true
      }, {
        headerName: "Name", field: "name"
      }, {
        headerName: "Contract", field: "contract"
      }],
      rowData: [{
        number: "1", name: "Test", contract: 13
      }, {
        number: "2", name: "Test", contract: 14
      }, {
        number: "3", name: "Test", contract: 15
      }],
      defaultColDef: {
        flex: 1,
        minWidth: 100,
        editable: true,
        sortable: true,
        filter: true,
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
          width: '600px',
          margin: '0 auto',
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
          singleClickEdit={true}
          rowData={this.state.rowData}
          onGridReady={this.onGridReady}>
        </AgGridReact>
      </div>
    );
  }
}
ReactDOM.render(
  <Organization />,
  document.getElementById('root')
);
export default Organization;
function mapStateToProps(state) {
  return {
    buttons: state.get("buttons")
  };
}
connect(mapStateToProps, actions)(Organization)