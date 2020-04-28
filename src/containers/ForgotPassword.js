import React, { useState } from 'react';
import { Auth } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel, HelpBlock } from "react-bootstrap";
import "./ForgotPassword.css";
import LoadButton from "../components/LoadButton";
import { useFormFields } from "../libs/hooksLib";

export default function ForgotPassword(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [codeSubmitted, setCodeSubmitted] = useState(false);

  // uses custom hook to handle form fields
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    newPassword: "",
    confirmNewPassword: "",
    confirmationCode: ""
  });

  //validates code submit form
  function validateCodeSubmitForm() {
    return fields.email.length > 0;
  }

  // validates new Password form
  function validateNewPasswordForm() {
    return (
      fields.confirmationCode > 0 &&
      fields.newPassword.length > 0 &&
      fields.confirmNewPassword.length > 0 &&
      fields.confirmNewPassword === fields.newPassword
    );
  }

  // sends confirmation code to user email on submit
  async function handleCodeSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    //tells cognito that the password was forgotton
    try {
      await Auth.forgotPassword(fields.email)
          .then(data => console.log(data))
          .catch(err => console.log(err));
      setIsLoading(false);
      setCodeSubmitted(true);

    } catch (e) {
      alert (e.message);
      setIsLoading(false);
    }
  }

  // sets new password for user on submit
  async function handleNewPasswordSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      // adds new password to cognito
      await Auth.forgotPasswordSubmit(fields.email, fields.confirmationCode, fields.newPassword)
          .then(data => {
            console.log(data);
            props.history.push("/");
          })
          .catch(err => {
            console.log(err);
            alert (err.message);
            setIsLoading(false);
          })
    } catch (e) {
      alert (e.message);
      setIsLoading(false);
    }
  }

  function sendCodeForm() {
    return (
      <>
        <h1 className="txt">A confirmation code will be sent to your email</h1>
        <form onSubmit={handleCodeSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </FormGroup>
          <LoadButton
            block
            type="submit"
            bsSize="large"
            isLoading={isLoading}
            disabled={!validateCodeSubmitForm()}
          >
            Reset Password
          </LoadButton>
        </form>
      </>
    );
  }

  function newPasswordForm() {
    return (
      <form onSubmit={handleNewPasswordSubmit}>
        <FormGroup controlId="confirmationCode" bsSize="large">
          <ControlLabel>Confirmation Code</ControlLabel>
          <FormControl
            autoFocus
            type="tel"
            value={fields.confirmationCode}
            onChange={handleFieldChange}
          />
          <HelpBlock
            style={{color:"white"}}
            >Please check your email for the code</HelpBlock>
        </FormGroup>
        <FormGroup controlId="newPassword" bsSize="large">
          <ControlLabel>New Password</ControlLabel>
          <FormControl
            type="password"
            value={fields.newPassword}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="confirmNewPassword" bsSize="large">
          <ControlLabel>Confirm New Password</ControlLabel>
          <FormControl
            type="password"
            value={fields.confirmNewPassword}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <LoadButton
          block
          type="submit"
          bsSize="lg"
          isLoading={isLoading}
          disabled={!validateNewPasswordForm()}
        >
          Save New Password
        </LoadButton>
      </form>
    );
  }

  return (
    <div className="ForgotPassword">
      {codeSubmitted === false ? sendCodeForm() : newPasswordForm()}
    </div>
  );
}
