import React, { Component } from 'react';
import './styles/style.css';
import edit from './images/edit.png';
import trash from './images/trash.png';
import right from './images/right.png';
import wrong from './images/wrong.png';
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: props.students,
      deletingIndex: null,
      updatingIndex: null,
      updatedName: '',
      updatedGender: '',
      updatedHobbies: '',
      updatedCourse: '',
      previousData: null,
    };
  }
//compare the previous and current value from prop and update the student state
  componentDidUpdate(prevProps) {
    if (prevProps.students !== this.props.students) {
      this.setState({ students: this.props.students });
    }
  }

  handleDeleteClick = (index) => {
    this.setState({ deletingIndex: index });
  };

  handleConfirmDelete = () => {
    const { students, deletingIndex } = this.state;

    const updatedStudents = [...students];
    updatedStudents.splice(deletingIndex, 1);

    this.setState({
      students: updatedStudents,
      deletingIndex: null,
    });

    this.props.onDeleteStudent(updatedStudents);
  };

  handleCancelDelete = () => {
    this.setState({ deletingIndex: null });
  };

  handleUpdateClick = (index) => {
    const { students } = this.state;
    const student = students[index];

    this.setState({
      updatingIndex: index,
      updatedName: student.name,
      updatedGender: student.gender,
      updatedHobbies: student.hobbies,
      updatedCourse: student.course,

      //if cancels button click previousData is use.
      previousData: {
        name: student.name,
        gender: student.gender,
        hobbies: student.hobbies,
        course: student.course,
      },
    });
  };

  handleCancelUpdate = () => {
    const { previousData } = this.state;

    this.setState({
      updatingIndex: null,
      updatedName: previousData.name,
      updatedGender: previousData.gender,
      updatedHobbies: previousData.hobbies,
      updatedCourse: previousData.course,
      previousData: null,
    });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [`updated${name}`]: value });
  };

  handleUpdate = () => {
    const { students, updatingIndex, updatedName, updatedGender, updatedHobbies, updatedCourse } = this.state;

    const updatedStudents = [...students];
    updatedStudents[updatingIndex] = {...updatedStudents[updatingIndex],
      name: updatedName,
      gender: updatedGender,
      hobbies: updatedHobbies,
      course: updatedCourse,
    };

    this.setState({
      students: updatedStudents,
      updatingIndex: null,
      updatedName: '',
      updatedGender: '',
      updatedHobbies: '',
      updatedCourse: '',
      previousData: null,
    });

    this.props.onUpdateStudent(updatedStudents);
  }; 
  render() {
    const { students, deletingIndex, updatingIndex, updatedName, updatedGender, updatedHobbies, updatedCourse } = this.state;
    return (
      <div className="col py-3">
        <table className="table col-md-10" id="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Course</th>
              <th scope="col">Hobbies</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
               <td>
                  {updatingIndex === index ? (
                    <input
                      type="text"
                      className="form-control"
                      name="Name"
                      value={updatedName}
                      onChange={this.handleInputChange}
                    />
                  ) : (
                    student.name
                  )}
                </td>
                <td>
                  {updatingIndex === index ? (
                    <div class="form-check">
                      <label>
                        <input   type="radio" name="Gender" value="Male" checked={updatedGender === 'Male'} 
                        onChange={this.handleInputChange} />{' '}  Male</label>
                      <label>
                        <input   type="radio" name="Gender" value="Female" checked={updatedGender === 'Female'}
                          onChange={this.handleInputChange} />{' '} Female </label>
                    </div>
                  ) : (
                    student.gender
                  )}
                </td>
                <td>
                  {updatingIndex === index ? (
                    <select
                      className="form-control"
                      name="Course"
                      value={updatedCourse}
                      onChange={this.handleInputChange}
                    >
                      <option value="">select....</option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="B.Com">B.Com</option>
                      <option value="B.A">B.A</option>
                      <option value="BCA">BCA</option>
                    </select>
                  ) : (
                    student.course
                  )}
                </td>
                <td>
                  {updatingIndex === index ? (
                    <input
                      type="text"
                      className="form-control"
                      name="Hobbies"
                      value={updatedHobbies}
                      onChange={this.handleInputChange}
                    />
                  ) : (
                    student.hobbies
                  )}
                </td>
                <td>
                {updatingIndex === index ? (
                    <div className="update-buttons">
                      <img src={right}  id="right" alt="right" onClick={this.handleUpdate} />
                      <img src={wrong}  id="wrong" alt="wrong" onClick={this.handleCancelUpdate} />
                    </div>
                  ) : (
                    <div>
                  <img  src={edit} title="Edit"  id="edit" alt="update" onClick={() => this.handleUpdateClick(index)} />
                  <img  src={trash} title="Delete" id="trash"  alt="trash" onClick={() => this.handleDeleteClick(index)}  />
                  </div>
                )}
                  {deletingIndex === index && (
                    <div id="model" className="delete-popup">
                      <h3 id="head">Deleting  Student !!!</h3>
                      <p id="line">Are you sure you want to delete this student?</p>
                      <div className="student-details">
                        <p id="data"><strong>Name:</strong> {student.name}</p>
                        <p><strong>Gender:</strong> {student.gender}</p>
                        <p><strong>Course:</strong> {student.course}</p>
                        <p><strong>Hobbies:</strong> {student.hobbies}</p>
                      </div>
                      <div className="button-container">
                        <button className="btn btn-success mr-2" onClick={this.handleConfirmDelete}>Yes</button>
                        <button className="btn btn-danger" onClick={this.handleCancelDelete}>No</button>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;