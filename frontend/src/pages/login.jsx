import { useState } from "react";
import "../style/login.css";
import { useLoginMutation } from "../redux/rtkQuery";
// import { assetIcons } from "../../assets/assets";

function Login() {
  const [currentState, setCurrentState] = useState("Login");
  const [loginData, setLoginData] = useState({
    email: "mathnyanlin@gmail.com",
    password: "mathnyanlin",
  });
  const [login] = useLoginMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    login(loginData);

    setLoginData({ email: "", password: "" });
  };
  return (
    <div className="login-popup">
      <form onSubmit={handleSubmit} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setCurrentState(Login)} alt="" src="" />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="your name" required />
          )}
          <input
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            type="email"
            placeholder="your email"
            required
          />
          <input
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privicy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account? <span>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
