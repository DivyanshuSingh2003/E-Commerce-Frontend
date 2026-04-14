import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="signin-overlay">
      <div className="signin-modal">
        {/* Header */}
        <div className="signin-header">
          <div className="tabs">
            <span className="inactive">SIGN UP</span>
            <span className="active">SIGN IN</span>
          </div>
          <span className="close-btn">&times;</span>
        </div>

        {/* Title */}
        <h3 className="signin-title">Sign in to access your member perks.</h3>

        {/* Features */}
        <div className="features">
          <div>
            🚚
            <p>Free Shipping & Returns</p>
          </div>
          <div>
            ⭐<p>Exclusive Offers</p>
          </div>
          <div>
            🛍️
            <p>Better Shopping Experience</p>
          </div>
        </div>

        {/* Form */}
        <form className="signin-form">
          <div className="form-group">
            <label>Email address</label>
            <input type="email" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-field">
              <input type="password" placeholder="Enter password" />
              <span className="eye-icon">👁️</span>
            </div>
          </div>

          <div className="forgot-password">FORGOT PASSWORD?</div>

          <button type="submit" className="btn-primary">
            SIGN IN
          </button>

          <div className="divider">OR</div>

          <button type="button" className="btn-secondary">
            LOGIN BY OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
