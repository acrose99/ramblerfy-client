import React, { useState } from 'react';
import { Auth } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel, HelpBlock } from "react-bootstrap";
import "./Signup.css";
import LoadButton from "../components/LoadButton";
import { useFormFields } from "../libs/hooksLib";

export default function Signup(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [newUser, setNewUser] = useState(null);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: ""
  });

  // validates signup form
  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.confirmPassword.length > 0 &&
      fields.confirmPassword === fields.password
    );
  }

  //validates confirmation form
  function validateConfirmForm() {
    return fields.confirmationCode > 0;
  }

  // signs up user to aws Cognito User pool and then renders confirmation form
  async function handleSignupSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const newUser = Auth.signUp({
        username: fields.email,
        password: fields.password
      }).catch(e => {
        //Redirects to confirmation page if browser is exited out/refreshed during confirmation process
        if (e.name === "UsernameExistsException") {
          alert(`You are already registered. Your confirmation code has been resent to ${fields.email}`);
          //setIsLoading(false);
          Auth.resendSignUp(fields.email);
          const newUser = {
            username: fields.email,
            password: fields.password
          };

        } else {
          alert(e.message);
        }
      });

      setIsLoading(false);
      setNewUser(newUser);

    } catch(e) {

      alert(e.message);
      setIsLoading(false);
    }
  }

  // waits for user to input confirmation code from email then redirects to home
  async function handleConfirmSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      await Auth.confirmSignUp(fields.email, fields.confirmationCode);
      await Auth.signIn(fields.email, fields.password);

      props.userHasAuth(true);
      props.history.push("/");
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  }

  // contains the signup form
  function signupForm() {
    return (
      <form onSubmit={handleSignupSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            type="password"
            value={fields.confirmPassword}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <LoadButton
          block
          type="submit"
          bsSize="lg"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Signup
        </LoadButton>
      </form>
    );
  }

  // contains the confirmation form
  function confirmForm() {
    return (
      <form onSubmit={handleConfirmSubmit}>
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
        <LoadButton
          block
          type="submit"
          bsSize="lg"
          isLoading={isLoading}
          disabled={!validateConfirmForm()}
        >
          Verify
        </LoadButton>
      </form>
    );
  }

  // conditionally renders the signup or confirmation form
  return (
    <div className="Signup">
      {newUser === null ? signupForm() : confirmForm()}
    </div>
  );
}
