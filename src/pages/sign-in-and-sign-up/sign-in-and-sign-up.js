import React, { useState } from "react";
import "./sign-in-and-sign-up.scss";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

const SignInAndSignUpPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="auth-page">

      <div className="flip-card-container">

        <div
          className={`flip-card ${
            isFlipped ? "flipped" : ""
          }`}
        >

          {/* FRONT SIDE */}
<div className="card-face card-front">
  <div className="form-section">
    <SignIn />
  </div>

  <div className="info-section">
    <h1>Hello Friend!</h1>

    <p>
      New here?
    </p>

    <button
      className="flip-btn"
      onClick={() => setIsFlipped(true)}
    >
      SIGN UP
    </button>
  </div>
</div>

          {/* BACK SIDE */}
<div className="card-face card-back">
  <div className="form-section">
    <SignUp />
  </div>

  <div className="info-section">
    <h1>Welcome Back!</h1>

    <p>
      Already have an account?
    </p>

    <button
      className="flip-btn"
      onClick={() => setIsFlipped(false)}
    >
      LOG IN
    </button>
  </div>
</div>

        </div>

      </div>

    </div>
  );
};

export default SignInAndSignUpPage;