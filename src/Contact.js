import React, { Component } from "react";
import "./contact.css";
import axios from "axios";

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

  render() {
    return (
      <div>
        <h1 className="titrecontact">Stay in touch</h1>
        <img id="photocontact" src="images/photocontact.png" alt="" />
        <p>
          mais aussi: <br />
          x 06 09 63 05 43 <br />x lena.defirmas@gmail.com
        </p>
        <ul>
          <li>linkedin</li>
          <li>github</li>
          <li>instagram</li>
          <li>pinterest</li>
        </ul>
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
