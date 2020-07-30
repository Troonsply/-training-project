import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import FormContract from './FormaContract'

const connect = require("react-redux").connect;
const actions = require("./actions.jsx");
// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));
class Contract extends Component {
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
        headerName: "Номер", 
        field: "number",
        
      }, 
      {
        headerName: "Предмет", 
        field: "topic",
        
      },
      {
        headerName: "Организация", 
        field: "organization",
        
      },
      {
        headerName: "Участники", 
        field: "member",
        
      },
      {
        headerName: "Проект", 
        field: "project",
        
      },
      {
        headerName: "Дата договора", 
        field: "date",
        
      },
    ],
    rowData: [{
        number: "1", topic: "Purchase", organization: 13, member: 'Ivanov', project: 'ABC', date: '01/02/23'
      }, {
        number: "2", topic: "Sale", organization: 14, member: 'Petrov', project: 'CBA', date: '03/04/25'
      }, {
        number: "3", topic: "Rent", organization: 15, member: 'Kryokov', project: 'CAB', date: '04/05/26' 
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
    this.gridColumnApi.sizeColumnsToFit();
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
        style={{ display:'flex','flex-direction': 'column'}} 
      >
        <div style={{display:'flex','justify-content':'space-between',}} >
          <FormContract />
          <Button 
            style={{margin:'15px',}}
            variant="contained" 
            color="primary" 
            onClick={this.onButtonClickDelete.bind(this)}
            deleteButton={this.props.deleteButton}>Удалить Договор
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
  <Contract></Contract>, document.querySelector('#root')
);
export default Contract;
function mapStateToProps(state) {
  return {
    buttons: state.get("buttons")
  };
}
connect(mapStateToProps, actions)(Contract)