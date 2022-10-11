import "./header.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Share from "../share/Share";

function Header() {
  const [shareHeader, setShareHeader] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(true);

  //---Header & scroll----

  useEffect(() => {
    let lastScrollTop: number = 0;

    window.addEventListener(
      "scroll",
      function (): void {
        let st: number =
          window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          setShow(false);
        } else {
          setShow(true);
        }
        lastScrollTop = st;
      },
      false
    );
  }, []);

  return (
    <>
      {show && (
        <div className="header-container">
          <div className="navbar-container">
            <div className="navbar-logo-container">
              <Link to="/">
                <img
                  src="/img/favicon-dulce-espera.png"
                  alt=""
                  className="navbar-logo"
                />
              </Link>
              <h1>Sweet Expect</h1>
            </div>
            <div className="navbar-share-translate-container">
              <Link to="/">
                <img
                  src="/img/Search More.png"
                  alt="share"
                  className="icon-navbar"
                />
              </Link>

              <img
                src="/img/Share.png"
                alt="share"
                onClick={() => setShareHeader(!shareHeader)}
                className="icon-navbar"
              />

              <div
                id="google_translate_element"
                className="navbar-translate"
              ></div>
            </div>
          </div>

          {shareHeader && (
            <div className="header-share-container">
              <Share />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Header;
