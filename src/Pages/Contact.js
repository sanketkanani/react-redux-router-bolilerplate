import React, { Component } from "react";
import ContactForm from "../Components/ContactForm";
import ContactList from "../Components/ContactList";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedData: []
    };
    this.setSubmittedData = this.setSubmittedData.bind(this);
  }

  setSubmittedData(newData) {
    this.setState({ submittedData: newData });
  }

  render() {
    const { submittedData } = this.state;

    return (
      <div className="contact-form">
        <ContactForm
          submittedData={submittedData}
          setSubmittedData={this.setSubmittedData}
        />

        <ContactList contactList={submittedData} />
      </div>
    );
  }
}

export default Contact;