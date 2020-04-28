import React, { useState, useEffect } from "react";
import "./Contact.css";

export default function Contact(props) {

  function contactPage() {
    return (
      <div className="wrapper">
        <h1>Contact Us</h1>
        <h3>Contact us using any of the information below! <br /> Please fill out the form to the right :) </h3>
        <div className="information">
          <div>
            <info className="fa fa-map-marked-alt" /><span className="details"> Loyola University Chicago </span><br />
            <info className="fa fa-phone-volume fa-lg" /><span className="details"> 1234567890 </span><br />
            <info className="fa fa-envelope fa-lg" /><span className="details"> hello@gmail.com </span>
          </div>
          <form>
            <div className="form" id="form1">
              <h4>The fields with * are required.</h4>
              <input type="text" className="input" placeholder="First & Last Name *" required /><br />
              <input type="Email" className="input" placeholder="Email Address *" required /><br />
              <input type="text" className="input" placeholder="Phone Number" /><br />
              <textarea name="message" placeholder="Message *" rows={5} required defaultValue={""} /><br />
              <button className="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="Contact">
      {contactPage()}
    </div>
  );

}
