import "./LoginScreen.css";
import bg from "../../assets/img/Background.svg";
import wave from "../../assets/img/bg_wave.png";
import profile from "../../assets/img/profile.svg";
import InputField from "../InputField/InputField";
import { MouseEventHandler } from "react";

interface LoginScreenProps {
  userName: string;
  newPassword: string;
  setPass: (e: string) => void;
  setUser: (e: string) => void;
  login: MouseEventHandler<HTMLInputElement>;
}

export const LoginScreen = ({
  userName,
  newPassword,
  login,
  setPass,
  setUser,
}: LoginScreenProps) => {
  return (
    <div>
      <img className="wave" src={wave} alt="wave" />
      <div className="container">
        <div className="img">
          <img src={bg} alt="background" />
        </div>
        <div className="login-content">
          <form action="index.html">
            <img src={profile} alt="Profile" />
            <h2 className="title">Ems</h2>

            {/* Use InputField component for username */}
            <InputField
              label="Username"
              type="text"
              pass="user"
              value={userName}
              inputValue={(e) => setUser(e)}
            />

            {/* Use InputField component for password */}
            <InputField
              label="Password"
              type="password"
              pass="pass"
              value={newPassword}
              inputValue={(e) => setPass(e)}
            />

            <a href="#">Forgot Password?</a>
            <input
              type="submit"
              className="btn"
              value="Login"
              onClick={login}
            />
            <div className="create">
              <a href="#">Creat a new account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
