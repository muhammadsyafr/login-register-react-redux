import React from "react";
import "./Hero.scss";
const Hero = () => {
    return (
      <section className={`hero`}>
        <div className="hero-body">
          <div className="columns">
            <div className="column is-three-fifths is-mobile">
              <h3 className="is-3 subtitle">Support 24/7</h3>
              <h2 className="title-text title is-2">Indonesia Art Marketplace</h2>
              <h3 className="subtitle is-3">
                Jual beli aset Kesenian seperti Headset, Topeng, Selendang, dll
                secara mudah dan aman.
              </h3>
              <div className="field is-grouped">
                <p className="control">
                  <a
                    className="button is-success is-rounded btn-reg"
                    href="https://github.com/jgthms/bulma/releases/download/0.8.0/bulma-0.8.0.zip"
                  >
                    Register!
                  </a>
                </p>
              </div>
            </div>
            <div className="column column-right"></div>
          </div>
        </div>
      </section>
    );
  };

  export default Hero;