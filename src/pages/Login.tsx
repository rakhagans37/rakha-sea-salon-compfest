import { useState } from "react";
import { InputText } from "../components/InputText";
import { ButtonCustom } from "../components/Button";
import { InputPassword } from "../components/InputPassword";
import { login } from "../service/database";
import { BannerCustom } from "../components/Banner";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if(localStorage.getItem("user")) {
    window.location.href = "/";
  }

  const submitLogin = () => {
    console.log(email, password);
    if (email.trim() === "" || password.trim() === "") return;

    try {
      login(email, password).then((res) => {
        localStorage.setItem("user", JSON.stringify(res));
        if(res.role === "Customer"){
          window.location.href = "/";
        } else {
          window.location.href = "/admin";
        }
      });
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="h-screen font-poppins">
      <div className="relative flex h-max min-h-screen flex-col justify-center gap-20 border-2 border-black bg-cashmere-50 object-cover px-4 py-10 sm:p-14 lg:px-96">
        {error != "" ? <BannerCustom errorMessage={error} /> : ""}
        <div className="text-center text-blue-dianne-900 sm:mr-10">
          <p className="text-3xl font-extrabold leading-tight sm:text-5xl">
            Login to{" "}
            <span className="bg-gradient-to-br from-blue-dianne-600 to-cashmere-200 bg-clip-text text-transparent">
              Your Account
            </span>{" "}
          </p>
        </div>
        <form
          action="submit"
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            submitLogin();
          }}
        >
          <InputText
            id="email"
            placeholder="Your email"
            textState={email}
            setTextState={setEmail}
            label="Email"
          />
          <InputPassword
            id="password"
            placeholder="Your password"
            passwordState={password}
            setPasswordState={setPassword}
            label="Password"
          />
          <p className="text-sm text-red-500">{error}</p>
          <ButtonCustom text="Login" type="submit" />
        </form>
        <div>
          <p className="text-center text-blue-dianne-900">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-dianne-600">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
