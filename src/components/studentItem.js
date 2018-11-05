import React, { Component } from 'react'

class StudentItem extends Component{

    constructor(props){
        super(props);
    }

     render(){
         return(
             <li className={'list-group-item'}>
            <div className={'row'}>
                <div className={'col-md-2'}>
                    {this.props.student.name}
                </div>
                <div className={'col-md-2'}>
                    {this.props.student.surname}
                </div>
            </div>
            </li>
         );
     }
}
export default StudentItem;