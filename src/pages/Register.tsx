import { useState } from "react";
import { InputText } from "../components/InputText";
import { ButtonCustom } from "../components/Button";
import { InputNumber } from "../components/InputNumber";
import { registerUser } from "../service/database";
import { User } from "../models/User";
import { generateId } from "../service/generateId";
import { InputPassword } from "../components/InputPassword";
import { BannerCustom } from "../components/Banner";

export const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  if(localStorage.getItem("user")) {
    window.location.href = "/";
  }

  const submitRegister = () => {
    if (
      fullName.trim() === "" ||
      password.trim() === "" ||
      password.length < 6 ||
      password.length > 20 ||
      email.trim() == ""
    )
      return;

    try {
      registerUser(
        new User(generateId(), fullName, email, password, "Customer", phone),
      ).then(() => {
        // Redirect to the login Page
        window.location.href = "/login";
      });
    } catch (error) {
      setError("User already exists");
    } finally {
      setError("User already exists");
    }
  }

  return (
    <div className="h-screen font-poppins">
      <div className="relative flex h-max min-h-screen flex-col justify-center gap-20 border-2 border-black bg-cashmere-50 object-cover px-4 py-10 sm:p-14 lg:px-96">
        {error != "" ? <BannerCustom errorMessage={error} /> : ""}
        <div className="text-center text-blue-dianne-900 sm:mr-10">
          <p className="text-3xl font-extrabold leading-tight sm:text-5xl">
            Register{" "}
            <span className="bg-gradient-to-br from-blue-dianne-600 to-cashmere-200 bg-clip-text text-transparent">
              New Account
            </span>{" "}
          </p>
        </div>
        <form
          action="submit"
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            submitRegister();
          }}
        >
          <InputText
            id="Full Name"
            placeholder="Your full name"
            textState={fullName}
            setTextState={setFullName}
            label="Full Name"
          />
          <InputText
            id="email"
            placeholder="Your email"
            textState={email}
            setTextState={setEmail}
            label="Email"
          />
          <InputPassword
            id="password"
            passwordState={password}
            setPasswordState={setPassword}
            label="Password"
            placeholder="Your Password"
            errorTerm={password.length < 6 || password.length > 20}
            errorMessage="Password must be between 6 and 20 characters."
          />
          <InputNumber
            id="phone"
            placeholder="Your phone number"
            textState={phone}
            setTextState={setPhone}
            label="Phone Number"
            errorTerm={phone.length < 10}
            errorMessage="Phone number must be at least 10 digits."
          />
          <ButtonCustom text="Register" type="submit" />
        </form>
        <div>
          <p className="text-center text-blue-dianne-900">
            Do you already have an account?{" "}
            <a href="/login" className="text-blue-dianne-600">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
