import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="form-box login-register-form-element">
        {/* FORM BOX DECORATION */}
        <img
          className="form-box-decoration overflowing"
          src="img/landing/rocket.png"
          alt="rocket"
        />
        {/* /FORM BOX DECORATION */}
        {/* FORM BOX TITLE */}
        <h2 className="form-box-title">Account Login</h2>
        {/* /FORM BOX TITLE */}
        {/* FORM */}
        <form className="form">
          {/* FORM ROW */}
          <div className="form-row">
            {/* FORM ITEM */}
            <div className="form-item">
              {/* FORM INPUT */}
              <div className="form-input">
                <label htmlFor="login-username">Username or Email</label>
                <input type="text" id="login-username" name="login_username" />
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
                <label htmlFor="login-password">Password</label>
                <input
                  type="password"
                  id="login-password"
                  name="login_password"
                />
              </div>
              {/* /FORM INPUT */}
            </div>
            {/* /FORM ITEM */}
          </div>
          {/* /FORM ROW */}
          {/* FORM ROW */}
          <div className="form-row space-between">
            {/* FORM ITEM */}
            <div className="form-item">
              {/* CHECKBOX WRAP */}
              <div className="checkbox-wrap">
                <input
                  type="checkbox"
                  id="login-remember"
                  name="login_remember"
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
                <label htmlFor="login-remember">Remember Me</label>
              </div>
              {/* /CHECKBOX WRAP */}
            </div>
            {/* /FORM ITEM */}
            {/* FORM ITEM */}
            <div className="form-item">
              {/* FORM LINK */}
              <a className="form-link" href="#">
                Forgot Password?
              </a>
              {/* /FORM LINK */}
            </div>
            {/* /FORM ITEM */}
          </div>
          {/* /FORM ROW */}
          {/* FORM ROW */}
          <div className="form-row">
            {/* FORM ITEM */}
            <div className="form-item">
              {/* BUTTON */}
              <button className="button medium secondary">
                Login to your Account!
              </button>
              {/* /BUTTON */}
            </div>
            {/* /FORM ITEM */}
          </div>
          {/* /FORM ROW */}
        </form>
        {/* /FORM */}
        {/* LINED TEXT */}
        <p className="lined-text">Login with your Social Account</p>
        {/* /LINED TEXT */}
        {/* SOCIAL LINKS */}
        <div className="social-links">
          {/* SOCIAL LINK */}
          <a className="social-link facebook" href="#">
            {/* ICON FACEBOOK */}
            <svg className="icon-facebook">
              <use xlinkHref="#svg-facebook" />
            </svg>
            {/* /ICON FACEBOOK */}
          </a>
          {/* /SOCIAL LINK */}
          {/* SOCIAL LINK */}
          <a className="social-link twitter" href="#">
            {/* ICON TWITTER */}
            <svg className="icon-twitter">
              <use xlinkHref="#svg-twitter" />
            </svg>
            {/* /ICON TWITTER */}
          </a>
          {/* /SOCIAL LINK */}
          {/* SOCIAL LINK */}
          <a className="social-link twitch" href="#">
            {/* ICON TWITCH */}
            <svg className="icon-twitch">
              <use xlinkHref="#svg-twitch" />
            </svg>
            {/* /ICON TWITCH */}
          </a>
          {/* /SOCIAL LINK */}
          {/* SOCIAL LINK */}
          <a className="social-link youtube" href="#">
            {/* ICON YOUTUBE */}
            <svg className="icon-youtube">
              <use xlinkHref="#svg-youtube" />
            </svg>
            {/* /ICON YOUTUBE */}
          </a>
          {/* /SOCIAL LINK */}
        </div>
        {/* /SOCIAL LINKS */}
      </div>
    );
  }
}
export default Login;
