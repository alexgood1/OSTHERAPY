import React from "react";
import "./oauth-button.css";

const OAuthButton = props => (
  <div>
      <div className="btn-text--anim-trig">
      <a href="/auth/facebook" className="btn-text">
          <i className="fa fa-facebook" aria-hidden="true"/>
      </a>
      </div>
      <div className="btn-text--anim-trig">
          <a href="/auth/google" className="btn-text">
              <i className="fa fa-google" aria-hidden="true"/>
          </a>
      </div>
  </div>
);

export default OAuthButton;
