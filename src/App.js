import React, { useState } from "react";
import './App.css';


export default function App() {
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
      confirmPassword: "",
      joinedNewsletter: true
    }
  )

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }))
  }


  function handleSubmit(event) {
    event.preventDefault()
    if (formData.password === formData.passwordConfirm) {
      console.log("Successfully signed up")
    } else {
      console.log("Passwords do not match")
      return
    }

    if (formData.joinedNewsletter) {
      console.log("Thanks for signing up for our newsletter!")
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            checked={formData.joinedNewsletter}
            onChange={handleChange}
            name="joinedNewsletter"
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button
          className="form--submit"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}
