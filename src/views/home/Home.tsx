import { useEffect, useContext } from "react";
import Options from "../../components/options/Options";
import ApiContext from "../../context/ApiContext";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { drugsNames } from "../../assets/drugsNames";

function Home() {
  //destructuring from context
  const {
    bringApiData,
    setInputValue,
    setInputLetter,
    noErrorData,
    setNoErrorData,
    clearData,
  } = useContext(ApiContext);
  let navigate = useNavigate();

  interface LanguageDrug {
    en: string;
    es: string;
    class: string;
  }

  useEffect(() => {
    setNoErrorData(true);
  }, [handleSubmit]);

  function handleSubmit(e: any) {
    e.preventDefault();
    clearData();
    //e.stopPropagation()
    bringApiData(e.target[0].value.toUpperCase());
    setInputValue(e.target[0].value.toUpperCase());
    //para que funcione lo siguiente tuve que poner el ? antes de class, que indicaría que si todo lo anterior existe, busque el valor de "class"
    setInputLetter(
      drugsNames.find((el: LanguageDrug) => el.en === e.target[0].value)?.class
    );
    navigate("/drug");
  }

  return (
    <>
      <section className="home-first-section-container">
        <div className="pregnancy-background-before"></div>
        <img
          src="./img/pregnancy-desktop.jpg"
          alt="pregnancy"
          className="pregnancy-background"
        />

        <div className="home-first-section-inner-container">
          <h2>Can I prescribe this medicine during pregnancy?</h2>
          <form onSubmit={handleSubmit} className="home-form-container">
            <input
              list="drugs"
              name="drugs"
              type="text"
              placeholder="Choose by generic name"
              className="home-input"
            />
            <datalist id="drugs">
              {drugsNames.map((el, index) => (
                <Options key={index} en={el.en} es={el.es} />
              ))}
            </datalist>
            <h6>Please begin typing and you'll find the drug.</h6>
            <input type="submit" className="btn-light-aqua" />
          </form>
        </div>
      </section>

      <section className="home-second-section">
        <h3>Information obtained from FDA</h3>
        <p>
          For patients: This information don't replace your doctor
          recommendation.
        </p>
        <img
          src="/img/logo-dulce-espera.png"
          alt=""
          className="navbar-logo animated-logo"
        />
        <p>
          Created and developed by Valeria Paulina Lustres, Medical specialist
          in General and Family Medicine and specialist in Occupational Health,
          Epidemiologist, Teacher and Frontend Developer, with the purpose of
          providing updated and efficient information to pregnant mothers and
          health care professionals.
        </p>
        <img src="/img/valeria.jpg" className="home-img"></img>
        <p>
          Can't find a drug? Do you have any suggestions? Please feel free to
          contact: valeriapaulinalustres@yahoo.com.ar
        </p>
      </section>
    </>
  );
}

export default Home;
