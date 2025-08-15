import { useState } from "react";
import "./form.css";

function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault(); //STOPS PAGE FROM RELOADING
    if (username && email && password == "") {
      alert("All Fields Are Required");
    } else {
      alert("Form Submission Successful");
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="form-box">
        <h1>Form Control in ReactJS</h1>
        <form onSubmit={handleForm}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div className="user-data">
          <h2>Username: {username}</h2>
          <h2>Email: {email}</h2>
          <h2>Password: {password}</h2>
        </div>
      </div>
    </>
  );
}

export default Form;
