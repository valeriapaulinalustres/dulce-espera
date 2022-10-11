import "./footer.css";
import { useState } from "react";
import Share from "../share/Share";

function Footer() {
  const [shareFooter, setShareFooter] = useState(false);
  return (
    <div className="footer-container">
      <section className="footer-first-section">
        <div className="footer-logo-container">
          <img src="/img/logo-dulce-espera.png" alt="logo Dulce Espera"></img>
          <h1>Sweet Expect</h1>
        </div>
        <div className="footer-btn-container">
          {shareFooter ? (
            <div className="footer-share-container">
              <Share />
            </div>
          ) : (
            <button
              className="btn-light-aqua"
              onClick={() => setShareFooter(true)}
            >
              Compartir
            </button>
          )}
          <div className="footer-contact">
            <a
              href="mailto:valeriapaulinalustres@yahoo.com.ar?subject=contacto%20desde%20web"
              target="_blank"
              className="icono-contacto"
            >
              <img src="/img/Circled Envelope.png" className="icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/valeria-paulina-lustres/"
              target="_blank"
            >
              <img src="/img/Linkedin Circled.png" className="icons" />
            </a>
            <a href="https://github.com/valeriapaulinalustres" target="_blank">
              <img src="/img/GitHub.png" className="icons" />
            </a>
          </div>
        </div>
      </section>
      <section className="footer-second-section">
        <p>Copyright 2022</p>
      </section>
    </div>
  );
}

export default Footer;
