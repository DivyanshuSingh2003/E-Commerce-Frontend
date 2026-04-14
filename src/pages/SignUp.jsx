import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-overlay">
      <div className="signup-modal">
        {/* Header */}
        <div className="signup-header">
          <div className="tabs">
            <span className="active">SIGN UP</span>
            <span className="inactive">SIGN IN</span>
          </div>
          <span className="close-btn">&times;</span>
        </div>

        {/* Title */}
        <h3 className="signup-title">
          Create an account to enjoy exclusive benefits.
        </h3>

        {/* Form */}
        <form className="signup-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-field">
              <input type="password" placeholder="Create password" />
              <span className="eye-icon">👁️</span>
            </div>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <div className="password-field">
              <input type="password" placeholder="Confirm password" />
              <span className="eye-icon">👁️</span>
            </div>
          </div>

          {/* Terms */}
          <div className="terms">
            <input type="checkbox" />
            <span>I agree to Terms & Conditions</span>
          </div>

          <button className="btn-primary">CREATE ACCOUNT</button>

          <div className="divider">OR</div>

          <button type="button" className="btn-secondary">
            SIGN UP WITH OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
