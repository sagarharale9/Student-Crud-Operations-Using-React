import React, { Component } from 'react';
import './styles/style.css';

const addimg = "https://icon-library.com/images/plus-icon-transparent/plus-icon-transparent-15.jpg";
class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      name: "",
      gender: "",
      hobbies: "",
      course: "",
    };
  }

  handleAddClick = () => {
    this.setState({ showForm: true });
  };

  handleCancelClick = () => {
    this.setState({
      showForm: false,

    });
  };

  handleUpdate = () => {
    const { name, gender, hobbies, course } = this.state;
    if (name === "") {
      return;
    }

    const student = { name, gender, hobbies, course };
    this.props.onAddStudent(student);
    this.setState({
      name: "",
      gender: "",
      hobbies: "",
      course: "",
    });
  };
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { showForm, name, gender, hobbies, course } = this.state;
    return (
      <div className="col py-3">
        {showForm && (
          <div className="col-sm-10" id="form">
            <div className="" id="rowss">
              <h3 id="heading">Student Information</h3>

              <div className="form-row">
                <div className="form-group col-md-5">
                  <h5>
                    <label htmlFor="inputEmail4">Name</label>
                  </h5>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <h5>
                    <label htmlFor="inputEmail4">Gender</label>
                  </h5>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="gender"
                      id="genderM"
                      value="Male"
                      checked={gender === "Male"}
                      onChange={this.handleInputChange}
                    />
                    <label htmlFor="genderM" className="form-check-label">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="gender"
                      id="genderF"
                      value="Female"
                      checked={gender === "Female"}
                      onChange={this.handleInputChange}
                    />
                    <label htmlFor="genderF" className="form-check-label">
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-5">
                  <h5>
                    <label htmlFor="inputCity">Hobbies</label>
                  </h5>
                  <input
                    type="text"
                    className="form-control"
                    id="hobbies"
                    name="hobbies"
                    placeholder="Enter Hobbies"
                    value={hobbies}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group col-md-3">
                  <h5>
                    <label htmlFor="inputState">Course</label>
                  </h5>
                  <select
                    id="course"
                    className="form-control"
                    name="course"
                    value={course}
                    onChange={this.handleInputChange}
                  >
                    <option value="">select....</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="B.Com">B.Com</option>
                    <option value="B.A">B.A</option>
                    <option value="BCA">BCA</option>
                  </select><br />

                  <div className="btn-group">
                    <button type="button" id="btn2" title="Cancel" className="btn btn-danger mr-2"
                      onClick={this.handleCancelClick} >Cancel
                    </button>
                    <button
                      title="Click here to sumbit" type="button" id="btn1" className="btn btn-primary"
                      onClick={this.handleUpdate}  >Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="clm col-md-10 w3-container">
          <img
            title="Click to open Form" id="addbtn" className="btn  btn-lg   float-right" src={addimg} width="80px" height="60px" alt="add"
            onClick={this.handleAddClick}
          />
        </div>
      </div>
    );
  }
}

export default StudentForm;
