import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";

class Landing extends Component {
  render() {
    return (
        <div className="landing">
          {/* LANDING DECORATION */}
          <div className="landing-decoration" />
          {/* /LANDING DECORATION */}
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
              The next generation social network &amp; community! Connect with
              your friends and play with our quests and badges gamification
              system!
            </p>
            {/* /LANDING INFO TEXT */}
            {/* TAB SWITCH */}
            <div className="tab-switch">
              {/* TAB SWITCH BUTTON */}
              <p className="tab-switch-button login-register-form-trigger">
                Login
              </p>
              {/* /TAB SWITCH BUTTON */}
              {/* TAB SWITCH BUTTON */}
              <p className="tab-switch-button login-register-form-trigger">
                Register
              </p>
              {/* /TAB SWITCH BUTTON */}
            </div>
            {/* /TAB SWITCH */}
          </div>
          {/* /LANDING INFO */}
          {/* LANDING FORM */}
          <div className="landing-form">
            {/* FORM BOX */}
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
                      <input
                        type="text"
                        id="login-username"
                        name="login_username"
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
            {/* /FORM BOX */}
            {/* FORM BOX */}
            <div className="form-box login-register-form-element">
              {/* FORM BOX DECORATION */}
              <img
                className="form-box-decoration"
                src="img/landing/rocket.png"
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
                      <input
                        type="text"
                        id="register-email"
                        name="register_email"
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
                      <label htmlFor="register-password-repeat">
                        Repeat Password
                      </label>
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
                    <button className="button medium primary">
                      Register Now!
                    </button>
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
            {/* /FORM BOX */}
          </div>
          {/* /LANDING FORM */}
        </div>
    );
  }
}

export default Landing;
