import React from "react";
import img from "../../assets/img/landing/rocket.png";

const Register = () => {
  return (
    <div className="form-box login-register-form-element">
      {/* FORM BOX DECORATION */}
      <img
        className="form-box-decoration"
        src={img}
        alt="rocket"
      />
      {/* /FORM BOX DECORATION */}
      {/* FORM BOX TITLE */}
      <h2 className="form-box-title">Create your Account!</h2>
      {/* /FORM BOX TITLE */}
      {/* FORM */}
      <form className="form">
        {/* FORM ROW */}
        <div className="form-row">
          {/* FORM ITEM */}
          <div className="form-item">
            {/* FORM INPUT */}
            <div className="form-input">
              <label htmlFor="register-email">Your Email</label>
              <input type="text" id="register-email" name="register_email" />
            </div>
            {/* /FORM INPUT */}
          </div>
          {/* /FORM ITEM */}
        </div>
        {/* /FORM ROW */}
        {/* FORM ROW */}
        <div className="form-row">
          {/* FORM ITEM */}
          <div className="form-item">
            {/* FORM INPUT */}
            <div className="form-input">
              <label htmlFor="register-username">Username</label>
              <input
                type="text"
                id="register-username"
                name="register_username"
              />
            </div>
            {/* /FORM INPUT */}
          </div>
          {/* /FORM ITEM */}
        </div>
        {/* /FORM ROW */}
        {/* FORM ROW */}
        <div className="form-row">
          {/* FORM ITEM */}
          <div className="form-item">
            {/* FORM INPUT */}
            <div className="form-input">
              <label htmlFor="register-password">Password</label>
              <input
                type="password"
                id="register-password"
                name="register_password"
              />
            </div>
            {/* /FORM INPUT */}
          </div>
          {/* /FORM ITEM */}
        </div>
        {/* /FORM ROW */}
        {/* FORM ROW */}
        <div className="form-row">
          {/* FORM ITEM */}
          <div className="form-item">
            {/* FORM INPUT */}
            <div className="form-input">
              <label htmlFor="register-password-repeat">Repeat Password</label>
              <input
                type="password"
                id="register-password-repeat"
                name="register_password_repeat"
              />
            </div>
            {/* /FORM INPUT */}
          </div>
          {/* /FORM ITEM */}
        </div>
        {/* /FORM ROW */}
        {/* FORM ROW */}
        <div className="form-row">
          {/* FORM ITEM */}
          <div className="form-item">
            {/* CHECKBOX WRAP */}
            <div className="checkbox-wrap">
              <input
                type="checkbox"
                id="register-newsletter"
                name="register_newsletter"
                defaultChecked
              />
              {/* CHECKBOX BOX */}
              <div className="checkbox-box">
                {/* ICON CROSS */}
                <svg className="icon-cross">
                  <use xlinkHref="#svg-cross" />
                </svg>
                {/* /ICON CROSS */}
              </div>
              {/* /CHECKBOX BOX */}
              <label htmlFor="register-newsletter">
                Send me news and updates via email
              </label>
            </div>
            {/* /CHECKBOX WRAP */}
          </div>
          {/* /FORM ITEM */}
        </div>
        {/* /FORM ROW */}
        {/* FORM ROW */}
        <div className="form-row">
          {/* FORM ITEM */}
          <div className="form-item">
            {/* BUTTON */}
            <button className="button medium primary">Register Now!</button>
            {/* /BUTTON */}
          </div>
          {/* /FORM ITEM */}
        </div>
        {/* /FORM ROW */}
      </form>
      {/* /FORM */}
      {/* FORM TEXT */}
      <p className="form-text">
        You'll receive a confirmation email in your inbox with a link to
        activate your account. If you have any problems,{" "}
        <a href="#">contact us</a>!
      </p>
      {/* /FORM TEXT */}
    </div>
  );
};

export default Register;
