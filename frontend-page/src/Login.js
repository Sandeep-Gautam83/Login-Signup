import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState("");

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };

    // ✅ Make this function async
    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page reload

        // Log data
        console.log("This is our data: " + userId + " " + password);

        const userData = {
            userId: userId,
            password: password,
        };

        try {
            const response = await axios.post("http://localhost:8080/loginUser", userData);

            if (response.data === "false") {
                alert("Invalid User Id or Password");
            } else {
                alert("Login Successful");
                window.location.href = "/register"; // Redirect after login
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Login failed. Please try again later.");
        }
    };

    const redirectToRegister = () => {
        window.location.href = "/register";
    };

    return (
        <>
            <h1>This is Login Page!</h1>

            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="userId">User Id</label>
                    <input
                        type="email"
                        name="userId"
                        required
                        placeholder="Enter your User Id"
                        value={userId}
                        onChange={handleUserIdChange}
                    />
                    <br /><br />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <br /><br />

                    <p>
                        Don’t have an account?{" "}
                        <button type="button" onClick={redirectToRegister}>
                            Register here
                        </button>
                    </p>

                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;
