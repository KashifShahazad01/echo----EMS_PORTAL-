import InputField from "../InputField/InputField"; // Assuming you have created the InputField component
import avatar from "../../assets/img/avatar.svg";
const LoginForm = () => {
  return (
    <div className="login-content">
      <form action="index.html">
        <img src={avatar} alt="avatar" />
        <h2 className="title">Ems</h2>

        {/* Use InputField component for username */}
        <InputField label="Username" type="text" pass="user" />

        {/* Use InputField component for password */}
        <InputField label="Password" type="password" pass="pass" />

        <a href="#">Forgot Password?</a>
        <input type="submit" className="btn" value="Login" />
        <div className="create">
          <a href="#">Creat a new account</a>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
