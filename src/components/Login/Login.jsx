import React, { useState, useLayoutEffect } from "react";
import { Container, Image, Title, Desc, Response } from "./Login.style";
import PropTypes from "prop-types";
import LOGO from "../../../public/assets/images/logo.png";
import Textbox from "Components/Textbox/Textbox";
import Button from "Components/Button/Button";
import { login } from "../../services/app.service.js";
import { EMAIL_REGEX, PASSWORD_REGEX } from "Constants/global.constants";

const Login = function (props) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: null,
    password: null,
  });

  const [isDisabled, toggleButton] = useState(1);

  const [isLoading, setLoading] = useState(0);

  const [generalError, setGeneralError] = useState(null);

  useLayoutEffect(() => {
    if (data["email"] && data["password"]) toggleButton(0);
    else toggleButton(1);
    return () => {};
  }, [error]);

  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
    if (key === "email") {
      if (value) {
        let errorEmail = EMAIL_REGEX.test(value);
        if (!errorEmail) {
          setError({ ...error, email: "Please enter a valid Email" });
        } else {
          if (value.length > 5) setError({ ...error, email: null });
          else
            setError({
              ...error,
              email: "Email should be more than 5 characters long",
            });
        }
      } else {
        setError({ ...error, email: "This is a required field" });
      }
    } else if (key === "password") {
      if (value) {
        let errorPassword = PASSWORD_REGEX.test(value);
        if (!errorPassword) {
          setError({
            ...error,
            password:
              "Password must be 6 characters long and contain atleast 1 uppercase letter",
          });
        } else {
          setError({ ...error, password: null });
        }
      }
    } else {
      setError({ ...error, password: "This is a required field" });
    }
  };

  const submitData = async () => {
    if (data["email"] && data["password"]) {
      setLoading(1);
      const response = await login();
      if (response && response.status === 200) {
        setLoading(0);
        setGeneralError(response.data.result);
      } else {
        setLoading(0);
        setGeneralError("Something Went Wrong");
      }
    } else {
      if (!data["email"])
        setError({
          ...error,
          email: "This is a required field",
        });
      else
        setError({
          ...error,
          password: "This is a required field",
        });
    }
  };

  return (
    <Container data-test="Login-container">
      <Image src={LOGO} />
      <Title>Sign In</Title>
      <Desc>Use your Healthifyme Account</Desc>
      <Textbox
        placeholder="Enter your Email*"
        update={(e) => handleChange("email", e)}
        error={error["email"]}
      />
      <Textbox
        type="password"
        placeholder="Enter Your Password*"
        update={(e) => handleChange("password", e)}
        error={error["password"]}
      />
      <Button
        text="Login"
        marginTop={20}
        onClick={submitData}
        isDisabled={isDisabled}
        isLoading={isLoading}
      />
      {generalError && <Response>{generalError}</Response>}
    </Container>
  );
};

Login.propTypes = {
  /** This is your amazing breadcrumb text*/
  text: PropTypes.string,
};

Login.defaultProps = {
  text: "Welcome!",
};

export default React.memo(Login);
