import React, { useState } from "react";



function Admin() {
    return (
        <div style={{ width: "350px", margin: "auto", padding: "30px" }}>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <input type="name" name="name" placeholder="Name"
                    onChange={handleChange} /><br /><br />
                <input type="email" name="email" placeholder="Email"
                    onChange={handleChange} /><br /><br />

                <input type="password" name="password" placeholder="Password"
                    onChange={handleChange} /><br /><br />

                <button type="submit">Login</button>
            </form>

            <br />


        </div>
    );
};

export default Admin;
