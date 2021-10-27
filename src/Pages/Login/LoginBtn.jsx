import React from "react";

const LoginBtn = () => {
  return (
    <div className="google-btn">
      <div className="google-icon-wrapper">
        <img
          className="google-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="Google Icon"
        />
      </div>

      <p className="btn-text">Login with Google</p>
    </div>
  );
};

export default LoginBtn;
