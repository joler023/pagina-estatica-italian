import React from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_bgkky1j", "template_6rl64lm", e.target,'TUKDGztQhG4wtHJsz')
        .then(response => console.log(response))
        .catch(error => console.log(error))
  };
  return (
    <div>
      <div className="container py-4">
        <form
          id="contactForm"
          data-sb-form-api-token="API_TOKEN"
          onSubmit={sendEmail}
        >
          <div className="mb-3">
            <label className="form-label" for="name">
              Name
            </label>
            <input
              className="form-control"
              id="name"
              name="user_name"
              type="text"
              placeholder="Name"
              data-sb-validations="required"
            />
            <div className="invalid-feedback" data-sb-feedback="name:required">
              Name is required.
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label" for="emailAddress">
              Email Address
            </label>
            <input
              className="form-control"
              id="emailAddress"
              type="email"
              name="user_email"
              placeholder="Email Address"
              data-sb-validations="required, email"
            />
            <div
              className="invalid-feedback"
              data-sb-feedback="emailAddress:required"
            >
              Email Address is required.
            </div>
            <div
              className="invalid-feedback"
              data-sb-feedback="emailAddress:email"
            >
              Email Address Email is not valid.
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label" for="message">
              Message
            </label>
            <textarea
              className="form-control"
              name="user_msj"
              id="message"
              type="text"
              placeholder="Message"
              data-sb-validations="required"
            ></textarea>
            <div
              className="invalid-feedback"
              data-sb-feedback="message:required"
            >
              Message is required.
            </div>
          </div>

          <div className="d-none" id="submitSuccessMessage">
            <div className="text-center mb-3">Form submission successful!</div>
          </div>

          <div className="d-none" id="submitErrorMessage">
            <div className="text-center text-danger mb-3">
              Error sending message!
            </div>
          </div>

          <div className="d-grid">
            <button
              className="btn btn-primary btn-lg"
              id="submitButton"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
