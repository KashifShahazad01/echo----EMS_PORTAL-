import LoginForm from "../LoginForm/LoginForm";
import "./LoginScreen.css";
import bg from "../../assets/img/bg.svg";
import wave from "../../assets/img/wave.png";
export const LoginScreen = () => {
  return (
    <div>
      <img className="wave" src={wave} alt="wave" />
      <div className="container">
        <div className="img">
          <img src={bg} alt="background" />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};
