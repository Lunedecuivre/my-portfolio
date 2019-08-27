import React, { Component } from "react";
import "./contact.css";
import axios from "axios";
import Loading from "./Loading";
import { Link } from "react-router-dom";

export class Contact extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: {
        name: name,
        email: email,
        messsage: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    document.getElementById("form").reset();
  }

  state = { isLoading: true };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <div id="contact">
        <div className="homebarcontact">
          <Link to="/">
            <img className="projet-logo" src="./images/logo.gif" />
          </Link>{" "}
          <h3> home</h3>
        </div>
        <div className="maincontact">
          <h1 className="socod">stay in touch</h1>
        </div>{" "}
        <img id="photocontact" src="images/photocontact.png" alt="" />
        <div className="contact-txt">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/l%C3%A9na-de-firmas-78568982/">
                // linkedin //
              </a>
            </li>
            <li>
              <a href="https://github.com/Lunedecuivre">// github //</a>
            </li>
            <li>
              <a href="https://www.instagram.com/lunedecuivre/">
                // instagram //
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.fr/lunedecuivre/">
                // pinterest //
              </a>
            </li>
          </ul>
          <p>
            mais aussi: <br />
            x 06 09 63 05 43 <br />x lena.defirmas@gmail.com
          </p>
        </div>
        <form
          id="form"
          className="topBefore"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <input id="name" type="text" placeholder="NAME" />
          <input id="email" type="text" placeholder="E-MAIL" />
          <textarea id="message" type="text" placeholder="MESSAGE" />
          <input id="submit" type="submit" value="GO!" />
        </form>
      </div>
    );
  }
}

export default Contact;
