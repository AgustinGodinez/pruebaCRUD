import { NavLink } from "react-router-dom";
import './styles.css'

export default function ErrorPage() {
  return (
    <section className="errorSection">
      <article className="errorArticle">
        <figure className="errorFigure">
          <header className="errorHeader">
            <h2 className="errorH2">
              404
            </h2>
            <p className="errortitle">
              Page Not Found
            </p>
            <p className="errorMessage">
              Sorry, the page you are looking for could not be found.
            </p>
          </header>
          <NavLink to="/Home">
            <button
              className="errorButton"
            >
              Home
            </button>
          </NavLink>
        </figure>
      </article>
    </section>
  );
}
