import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <div className="container">
          <div className="content">
            <p>Contact </p>
            <h2>
              Food Stalls with Persons but also specialized equipment, Skills to
              manage.
            </h2>
            <form>
              <input
                type="text"
                placeholder="Enter your message"
                name="text"
                id="text"
              />
              <button>Send</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
