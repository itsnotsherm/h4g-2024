import React, { useState } from "react";

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate signup success
    if (name && email && password) {
      setMessage({ type: "success", text: "Signup successful! Please log in." });
    } else {
      setMessage({ type: "error", text: "Please fill in all fields." });
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center">Sign Up</h1>
      {message.text && (
        <div
          className={`alert ${
            message.type === "success" ? "alert-success" : "alert-danger"
          } text-center`}
        >
          {message.text}
        </div>
      )}
      <form className="w-50 mx-auto mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
