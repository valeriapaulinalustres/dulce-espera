import { useContext, useState } from "react";
import ApiContext from "../../context/ApiContext";
import "./drug.css";
import { Link } from "react-router-dom";

function Drug() {
  //destructuring from context
  const {
    pregnancyData,
    nursingData,
    teratogenicData,
    warningsData,
    warningsAndCautionsData,
    inputValue,
    inputLetter,
    noErrorData,
  } = useContext(ApiContext);

  const [nursingBtn, setNursingBtn] = useState(false);
  const [teratogenicBtn, setTeratogenicBtn] = useState(false);
  const [warningsBtn, setWarningsBtn] = useState(false);
  const [cautionsBtn, setCautionsBtn] = useState(false);
  const [showCategory, setShowCategory] = useState<string | undefined>(
    "Let's click in the circles above for more information"
  );
  const [showLogo, setShowLogo] = useState(true);

  interface Letter {
    letter: string;
    color: string;
  }

  const letters: Array<Letter> = [
    { letter: "A", color: "green" },
    { letter: "B", color: "yellow" },
    { letter: "C", color: "orange" },
    { letter: "D", color: "red" },
    { letter: "X", color: "black" },
  ];
  interface Category {
    id: string;
    text: string;
  }

  const categories: Array<Category> = [
    {
      id: "A",
      text: "Pregnancy category A: Adequate and well-controlled studies in pregnant women have failed to demonstrate a risk to the fetus in the first trimester of pregnancy, and there is no evidence of a risk in later trimesters.",
    },
    {
      id: "B",
      text: "Pregnancy category B: Animal reproduction studies have failed to demonstrate a risk to the fetus and there are no adequate and well-controlled studies in pregnant women.",
    },
    {
      id: "C",
      text: "Pregnancy category C: Animal reproduction studies have shown an adverse effect on the fetus, there are no adequate and well-controlled studies in humans, and the benefits from the use of the drug in pregnant women may be acceptable despite its potential risks.",
    },
    {
      id: "D",
      text: "Pregnancy category D: There is positive evidence of human fetal risk based on adverse reaction data from investigational or marketing experience or studies in humans, but the potential benefits from the use of the drug in pregnant women may be acceptable despite its potential risks (for example, if the drug is needed in a life-threatening situation or serious disease for which safer drugs cannot be used or are ineffective).",
    },
    {
      id: "X",
      text: "Pregnancy category X: Studies in animals or humans have demonstrated fetal abnormalities or there is positive evidence of fetal risk based on adverse reaction reports from investigational or marketing experience, or both, and the risk of the use of the drug in a pregnant woman clearly outweighs any possible benefit (for example, safer drugs or other forms of therapy are available).",
    },
  ];

  function handleCircles(e: any) {
    setShowCategory(
      categories.find((el: Category) => el.id === e.target.innerText)?.text
    );
    setShowLogo(false);
  }

  return (
    <main className="drug-container">
      <section className="drug-first-section-container">
        {inputValue && <p className="drug-name">{inputValue}</p>}
        {noErrorData ? (
          <div className="actual-category-container">
            {inputLetter !== undefined ? (
              <p
                className={
                  letters.find((el: any) => el.letter === inputLetter)?.color
                }
              >
                Categoría {inputLetter}
              </p>
            ) : (
              <p className="no-clasification">No clasification</p>
            )}
          </div>
        ) : (
          <div className="not-found-container">
            <p>
              Not found in database. <br /> Please, do another search.
            </p>
            <Link to="/">
              <div className="search-container">
                <img src="/img/Search More.png" alt="share" />
              </div>
            </Link>
          </div>
        )}
        {noErrorData && (
          <p className="actual-category-text">
            {categories.find((el) => el.id === inputLetter)?.text}
          </p>
        )}
        <p className="risk-categories">Risk Categories</p>
        <div className="drug-circles-container">
          {letters.map((el, index) => (
            <div
              id={el.letter}
              className={`${el.color} circle`}
              onClick={handleCircles}
            >
              {el.letter}
            </div>
          ))}
        </div>

        <div className="category-explanation">
          <p>{showCategory}</p>
        </div>
        {showLogo && (
          <img
            src="/img/favicon-dulce-espera.png"
            alt=""
            className="drug-logo"
          />
        )}
      </section>

      {noErrorData && (
        <section className="drug-second-section-container">
          <p className="drug-second-section-title">
            Information for Health Care Professionals
          </p>
          <p>
            This information is provided by FDA throw one of the different
            laboratories which produce this drug, that's the reason why you can
            find some comercial names.
          </p>
          <hr />
          {pregnancyData && <p>Pregnancy information: {pregnancyData}</p>}

          {nursingData && (
            <button onClick={() => setNursingBtn(!nursingBtn)}>
              Nursing Mothers
            </button>
          )}
          {nursingData && nursingBtn && (
            <p>Information for nursing mothers: {nursingData}</p>
          )}

          {teratogenicData && (
            <button onClick={() => setTeratogenicBtn(!teratogenicBtn)}>
              Teratogenics
            </button>
          )}
          {teratogenicData && teratogenicBtn && (
            <p>Teratogenic information: {teratogenicData}</p>
          )}

          {warningsData && (
            <button onClick={() => setWarningsBtn(!warningsBtn)}>
              Warnings
            </button>
          )}
          {warningsData && warningsBtn && <p>Warnings: {warningsData}</p>}

          {warningsAndCautionsData && (
            <button onClick={() => setCautionsBtn(!cautionsBtn)}>
              Cautions
            </button>
          )}
          {warningsAndCautionsData && cautionsBtn && (
            <p>Warnings and Cautions: {warningsAndCautionsData}</p>
          )}
        </section>
      )}
    </main>
  );
}

export default Drug;
