import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveAuth } from "../Redux/auth/action";

export const LoginData = () => {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setCreds({ ...creds, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", creds)
      .then((res) => {
        dispatch(saveAuth(res.data.token));
        window.location.href = "/";
      })
      .catch((er) => {
        alert("invalid credentials");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={creds.email}
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          value={creds.password}
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
