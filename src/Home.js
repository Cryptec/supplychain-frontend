import React, { Component } from 'react';
import axios from "axios";

import './App.css';
import './css/colors.css'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            Time: "",
            Location: "",
            status: "Submit",
            answerOk: "Success",
            answerDenied: "Denied"
        };
    }

    render() {

        let buttonText = this.state.status;

        var today = new Date();

        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '---' +
            today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        return (
            
                <header className="submitbox">

                    <form onSubmit={this.handleSubmit.bind(this)} method="POST" className="form">
                        <input
                            type='text'
                            className='form-group'
                            id="Time"
                            value={date}
                            onChange={this.handleChange.bind(this)}
                            required
                            placeholder='Time'
                            readonly="readonly"
                        />
                        <br />
                        <input
                            type='text'
                            className='form-group'
                            id="Location"
                            value={this.state.Location}
                            onChange={this.handleChange.bind(this)}
                            required
                            placeholder='Location'
                        />
                        <br />

                        <button className="submitButton">{buttonText}</button>

                    </form>
                </header>
                
            
        );
    }

    handleChange(event) {
        const field = event.target.id;
        if (field === "Time") {
            this.setState({ Time: event.target.value });
        } else if (field === "Location") {
            this.setState({ Location: event.target.value });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ status: "Submit" });

        axios({
            method: "POST",
            url: "http://213.196.200.119:8080/login",
            headers: { 'Content-Type': 'application/json' },
            data: { Time: this.state.Time, Location: this.state.Location }

        }).then((response, props) => {

            console.log(response);
            if (response.data.answer === this.state.answerOk) {

                this.setState({ Time: "", Location: "", status: "Submitted" })
                this.handleLogin()
                alert("Ready to track");



            } else if (response.data.answer === this.state.answerDenied) {
                this.setState({ status: "Failed" });
                alert("Failed writing in Supply Chain");
            }
        });

    }
}

export default Home;
