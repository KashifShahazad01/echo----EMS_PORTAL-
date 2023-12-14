import { useState } from "react";
import "./App.css";
import { LoginScreen } from "./components/LoginScreen/LoginScreen";
import axios from "axios";

interface User {
  id: number;
  username: string;
  password: string;
}
interface School {
  id: number;
  name: string;
  address: string;
}
interface Class {
  id: number;
  schoolId: number;
  name: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [school, setSchool] = useState<School | null>(null);
  const [classes, setClasses] = useState<Class[]>([]);
  // const [newSchoolName, setNewSchoolName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newClassName, setNewClassName] = useState("");

  const handleLogin = () => {
    axios
      .get(`http://localhost:3000/schools`, {
        params: {
          username: newUsername,
          password: newPassword,
        },
      })
      .then((response) => {
        if (response.data.length > 0) {
          setUser(response.data[0]);
          console.log(response.data);
        } else {
          console.log("Login failed. Check your credentials.");
        }
      })
      .catch((error) => console.error("Error logging in:", error));
  };
  const handleLogout = () => {
    setUser(null);
    setSchool(null);
    setClasses([]);
  };
  const handleCreateClass = () => {
    if (classes.some((classItem) => classItem.name === newClassName)) {
      console.log("A class with the same name already exists in the school.");
      return;
    }

    axios
      .post("http://localhost:3000/classes", {
        schoolId: school?.id,
        name: newClassName,
      })
      .then((response) => setClasses([...classes, response.data]))
      .catch((error) => console.error("Error creating class:", error));
  };
  const handleRemoveClass = (classId: number) => {
    axios
      .delete(`http://localhost:3000/classes/${classId}`)
      .then(() =>
        setClasses(classes.filter((classItem) => classItem.id !== classId))
      )
      .catch((error) => console.error("Error removing class:", error));
  };

  return (
    <>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <h3>School: {school?.name}</h3>
          <button onClick={handleLogout}>Logout</button>

          <div>
            <h3>Classes:</h3>
            <ul>
              {classes.map((classItem) => (
                <li key={classItem.id}>
                  {classItem.name}{" "}
                  <button onClick={() => handleRemoveClass(classItem.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Create Class:</h3>
            <label>
              Class Name:
              <input
                type="text"
                value={newClassName}
                onChange={(e) => setNewClassName(e.target.value)}
              />
            </label>
            <button onClick={handleCreateClass}>Create Class</button>
          </div>
        </div>
      ) : (
        <LoginScreen
          userName={newUsername}
          newPassword={newPassword}
          login={handleLogin}
          setPass={(e) => setNewPassword(e)}
          setUser={(e) => setNewUsername(e)}
        />
      )}
    </>
  );
};

export default App;
