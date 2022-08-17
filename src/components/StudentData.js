import React,{Component} from "react";
import "./style.css"

class StudentData extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return (<>
            <h1>Student Information</h1>
            <div id="data_container">
                {this.props.data.map( (ele) => {
                    // console.log(ele);
                    return (
                        <div id="inner_container">
                            <h3>{ele.studName} <br />
                                {ele.emailId} <br /> 
                                {ele.dob} <br />
                                {ele.gender} <br />
                                {ele.phoneNumber}<br />  
                            </h3>
                        </div>
                    );
                    })
                }
            </div>
            <button className="dynamic_button" onClick={this.props.toggleFunc}>Go back</button>
        </>
    )
    }
}

export default StudentData;