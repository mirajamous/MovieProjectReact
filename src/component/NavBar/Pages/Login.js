import React from "react";
import { Form } from "react-bootstrap";
import "./Login.css"
function Login() {

    return (
        <div className="bigLogin">
            <div className="FormBox">
                <Form className="form">
                    <h2> Log in</h2>
                    <div className="Box-input-form">
                        <label>Username</label><br />
                        <input type="text" required="required" />

                        <i></i>
                    </div>
                    <div className="Box-input-form">
                        <label>Password</label><br />
                        <input type="password" required="required" />

                        <i></i>
                    </div>
                    <input className="btn-submit" type="submit" value="login" />
                </Form>
            </div>
        </div>

    )
}
export default Login;