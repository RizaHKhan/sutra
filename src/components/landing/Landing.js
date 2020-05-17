import React from "react";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-decoration"></div>
      {/* LANDING INFO */}
      <div className="landing-info">
        {/* LOGO */}
        <div className="logo">
          {/* ICON LOGO VIKINGER */}
          <svg className="icon-logo-vikinger">
            <use xlinkHref="#svg-logo-vikinger" />
          </svg>
          {/* /ICON LOGO VIKINGER */}
        </div>
        {/* /LOGO */}
        {/* LANDING INFO PRETITLE */}
        <h2 className="landing-info-pretitle">Welcome to</h2>
        {/* /LANDING INFO PRETITLE */}
        {/* LANDING INFO TITLE */}
        <h1 className="landing-info-title">Vikinger</h1>
        {/* /LANDING INFO TITLE */}
        {/* LANDING INFO TEXT */}
        <p className="landing-info-text">
          The next generation social network &amp; community! Connect with your
          friends and play with our quests and badges gamification system!
        </p>
        {/* /LANDING INFO TEXT */}
        {/* TAB SWITCH */}
        <div className="tab-switch">
          {/* TAB SWITCH BUTTON */}
          <p className="tab-switch-button login-register-form-trigger">Login</p>
          {/* /TAB SWITCH BUTTON */}
          {/* TAB SWITCH BUTTON */}
          <p className="tab-switch-button login-register-form-trigger">
            Register
          </p>
          {/* /TAB SWITCH BUTTON */}
        </div>
        {/* /TAB SWITCH */}
      </div>
      {/* /LANDING INFO -- */}
    </div>
  );
};

export default Landing;
