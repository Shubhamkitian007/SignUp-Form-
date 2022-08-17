import React, { Component } from "react";


class showData extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <>
                <h1>Student Data</h1>
                <div className="container">
                    {this.props.data.map((ele) => {
                        console.log(ele);
                        return(
                            <div className="inner">
                                <h3 className="head">{ele.studName}</h3>
                                <h3 className="head">{ele.emailId}</h3>
                                <h3 className="head">{ele.dob}</h3>
                                <h3 className="head">{ele.gender}</h3>
                                <h3 className="head">{ele.phoneNumber}</h3>
                            </div>
                        )
                    })}
                </div>
                <button className="dynamic_button" onClick={this.props.toggleFunc}>Go back</button>
            </>
        )
    }
}

export default showData;