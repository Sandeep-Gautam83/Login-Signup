import React, { useState } from "react";
import axios from "axios";

function Register() {
    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value,
        });
    };

    // ✅ Make function async
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        console.log("User registered:", register);

        try {
            const response = await axios.post("http://localhost:8080/addUser", register);

            if (response.data === "false") {
                alert("Registration failed. User already exists.");
            } else {
                alert("Registration Successful");
                window.location.href = "/login"; // Redirect after registration
            }
        } catch (error) {
            console.error("Error registering user:", error);
            alert("Registration failed. Please try again later.");
        }
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Register Page</h1>

                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                        value={register.name}
                        onChange={handleChange}
                    />
                    <br /><br />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        value={register.email}
                        onChange={handleChange}
                    />
                    <br /><br />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                        value={register.password}
                        onChange={handleChange}
                    />
                    <br /><br />

                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    );
}

export default Register;
