
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class FormaContract extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {number: '', topic: '', organization:''};
    //     this.onChangeNumber = this.onChangeNumber.bind(this);
    //     this.onChangeTopic = this.onChangeTopic.bind(this);
    //     this.onChangeOrganization = this.onChangeOrganization.bind(this);
    // }
    render() {
        return (
          <form onSubmit={this.onSubmit}>
            <p><label> Номер: <input type="text" name="number" 
                             /></label></p>
            <p><label> Тема: <input type="text" name="topic"
                              /></label></p>
            <p><label> Организация: <input type="text" name="organization" 
                              /></label></p>
            <p><input type="submit" value="Submit" /></p>
          </form>
        );
      }
}
ReactDOM.render(<FormaContract />,  document.getElementById('root'));