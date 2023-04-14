import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";
import "./RegisterForm.css";

function RegisterForm() {
  const [users, setUsers] = useState([]);
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...userFormData, id: uuid4() };
    setUsers([...users, newUser]);
    setUserFormData({ username: "", email: "", password: "" });
  };

  return (
    <>
      <section className="container">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="UserName"
            value={userFormData.username}
            onChange={handleFormInputChange}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={userFormData.email}
            onChange={handleFormInputChange}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={userFormData.password}
            onChange={handleFormInputChange}
            required
          />
          <button>Register</button>
        </form>
      </section>

      {users.length > 0 && (
        <section className="result">
          {users.map(({ id, username, email }) => (
            <div key={id}>
              <p>{id}</p>
              <p>{username}</p>
              <p>{email}</p>
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default RegisterForm;
