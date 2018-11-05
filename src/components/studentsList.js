import React, { Component } from 'react'
import {listStudents} from "../repository/studentRepository";
import StudentItem from "./studentItem";

class StudentList extends React.Component{

    constructor(props){
        super(props);

    }

    render() {

        return (
            this.props.students.map((el,el_index) =>{
              return  <StudentItem student={el} key={el_index}/>
            })


        );
    }
};
export default StudentList;