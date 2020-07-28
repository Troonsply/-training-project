import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import FormaContract from "./FormaContract";
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const connect = require("react-redux").connect;
const actions = require("./actions.jsx");

class Organization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
      {
        headerName: "Check", 
        rowDrag: true,
        checkboxSelection: true,  
      },{
        headerName: "Name", 
        field: "name"
      },{
        headerName: "Adress", 
        field: "adress"
      },{
        headerName: "Contract", 
        field: "contract"
      }],
      rowData: [{
        adress: "Perm'", name: "Test", contract: 13
      }, {
        adress: "Ekaterinburg", name: "Test", contract: 14
      }, {
        adress: "Saint-P", name: "Test", contract: 15
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
        style={{ display:'flex',}} 
      >
        <div style={{display:'flex', 'flex-direction': 'column', width:'15vw', padding:'10px',}} >
          <Button
            style={{margin:'10px',}}
            variant="contained" 
            color="primary" 
            onClick={this.onButtonClickAdd.bind(this)}
            addButton={this.props.addButton}>Add rows
          </Button>
          <Button 
            style={{margin:'10px',}}
            variant="contained" 
            color="primary" 
            onClick={this.onButtonClickDelete.bind(this)}
            deleteButton={this.props.deleteButton}>Delete
          </Button>
          </div>
          <div className="ag-theme-alpine" style={ {height: '100vh', width: '100vw'} }>
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
  <Organization></Organization>,
  document.getElementById('root')
);
export default Organization;
function mapStateToProps(state) {
  return {
    buttons: state.get("buttons")
  };
}
connect(mapStateToProps, actions)(Organization)