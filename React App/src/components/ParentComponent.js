import React, { Component } from 'react';
import Table from './Table';
import Navbar from './Navbar';
import Sidebar from './Sidebar'
import StudentForm from './StudentForm';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }
  //Add Row to the Table
  handleAddStudent = (addStudent) => {
    this.setState((prevState) => ({
      students: [...prevState.students, addStudent],
    }));
  };

  //Delete the row  from Table
  handleDeleteStudent = (updatedStudents) => {

    this.setState({

      students: updatedStudents, // Update the state with the modified students array

    });

  };
  handleUpdateStudent = (updatedStudents) => {
    this.setState({
      students: updatedStudents, // Update the state with the modified students array
    });
  };

  render() {
    const { students } = this.state;
    return (

      <div>
        <Navbar />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Sidebar />
            </div>

            <div className="col-md-8">
              <StudentForm onAddStudent={this.handleAddStudent} />
              <Table students={students} onDeleteStudent={this.handleDeleteStudent} onUpdateStudent={this.handleUpdateStudent} />
            </div>
          </div>
        </div>
      </div>


    );
  }
}
export default ParentComponent;
