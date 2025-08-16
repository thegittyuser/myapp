import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    if (!form.username && !form.email && !form.password) {
      alert("All Fields Are Blank");
    } else {
      alert("Form is Submitted");
      setForm({
        username: "",
        email: "",
        password: "",
      });
    }
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Name"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <br />
      <br />

      <h1>Key-Value Pairs</h1>

      <p>Name: {form.username}</p>
      <p>Email: {form.email}</p>
      <p>Password: {form.password}</p>
    </>
  );
}

export default Form;
