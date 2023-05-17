import { useRouteError } from "react-router-dom";
import "./error-page.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div  >
      <div className="bg">
        <div className="Error-page">
          <h1 className="Ooops-container">Oooops!!! Something Went Wrong</h1>
          <p>
            <i className="error-text">{error.statusText || error.message}</i>
          </p>
          <Link to="/"><button className="btn">HOME</button></Link>
        </div>
      </div>
    </div>

  );
}