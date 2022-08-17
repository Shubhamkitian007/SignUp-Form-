import React, { Component } from "react";    
import './style.css'    
import StudentData from "./StudentData";

class Form extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            studName: '',    
            emailId: '',    
            dob: '',    
            gender: 'select',    
            phoneNumber: '', 
            array: [],   
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { studName, emailId, dob, gender, phoneNumber } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Student name     
        if (!studName) {    
            formIsValid = false;    
            formErrors["studNameErr"] = "Name is required.";    
        }    
    
        //Email    
        if (!emailId) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Email id is required.";    
        }    
        else if (!6(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {    
    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Invalid email id.";    
        }    
    
        //DOB    
        if (!dob) {    
            formIsValid = false;    
            formErrors["dobErr"] = "Date of birth is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(dob)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "Invalid date of birth";    
            }    
        }    
    
        //Gender    
        if (gender === '' || gender === "select") {    
            formIsValid = false;    
            formErrors["genderErr"] = "Select gender.";    
        }    
    
        //Phone number    
        if (!phoneNumber) {    
            formIsValid = false;    
            formErrors["phoneNumberErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
            if (!mobPattern.test(phoneNumber)) {    
                formIsValid = false;    
                formErrors["phoneNumberErr"] = "Invalid phone number.";    
            }    
        }      
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    toggleFormClick = () => {
        this.setState({clicked:!this.state.clicked})
    };

    handleSubmit = (e) => {    
        e.preventDefault();    
    
        const temp_obj = {
            studName:this.state.studName,
            emailId:this.state.emailId,
            dob:this.state.dob,
            gender:this.state.gender,
            phoneNumber:this.state.phoneNumber,
        };

        this.state.array.push(temp_obj);

        this.setState({
            clicked: true,
            studName: "",
            emailId: "",
            dob: "",
            gender: "",
            phoneNumber: ""
        });
    }    
    
    render() {    
    
        const { studNameErr, emailIdErr, dobErr, genderErr, phoneNumberErr} = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
            {!this.state.clicked ? 
                <>
                    <h3 className="heading" style={{ textAlign: "center" }} >Student Form </ h3>    
                    <div>    
                        <form>    
                            <div>    
                                <label htmlFor="studName">Name</label>    
                                <input type="text" name="studName"    
                                    value={this.state.studName}    
                                    onChange={this.handleChange}    
                                    placeholder="Your name.."    
                                    className={studNameErr ? ' showError' : ''} />    
                                    {studNameErr &&    
                                    <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                                }       
    
                            </div>    
                            <div>    
                                <label htmlFor="emailId">Email Id</label>    
                            <input type="text" name="emailId"    
                                value={this.state.emailId}    
                                onChange={this.handleChange}    
                                placeholder="Your email id.."    
                                className={emailIdErr ? ' showError' : ''} />    
                            {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                            }    
    
                            </div>    
                            <div>    
                                <label htmlFor="text">Birth Date</label>    
                                <input type="text" name="dob"    
                                    value={this.state.dob}    
                                    onChange={this.handleChange}    
                                    placeholder="DD/MM/YYYY.."    
                                    className={dobErr ? ' showError' : ''} />    
                                {dobErr &&    
                                    <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                                }    
                            </div>    
                            <div>    
                                <label htmlFor="gender">Gender</label>    
                                <select name="gender" onChange={this.handleChange}    
                                    className={genderErr ? ' showError' : ''}    
                                    value={this.state.gender} >    
                                    <option value="select">--Select--</option>    
                                    <option value="Male">Male</option>    
                                    <option value="Female">Female</option>    
                                    <option value="Other">Other</option>    
                                </select>    
                                {genderErr &&    
                                    <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                                }    
                            </div>    
                            <div>    
                                <label htmlFor="phoneNumber">Phone Number</label>    
                                <input type="text" name="phoneNumber"    
                                    onChange={this.handleChange}    
                                    value={this.state.phoneNumber}    
                                    placeholder="Your phone number.."    
                                    className={phoneNumberErr ? ' showError' : ''} />    
                                {phoneNumberErr &&    
                                    <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
                                }    
                            </div>    
                            <button className="btn" type="submit" onClick={this.handleSubmit.bind(this)}> Submit </button>    
                        </form>    
                    </div>    
                </> :
                    <StudentData data={this.state.array} toggleFunc={this.toggleFormClick} />
                    }
            </div>    
        )    
    }    
}    
    
export default Form;