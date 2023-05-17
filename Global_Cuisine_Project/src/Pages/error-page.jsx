import { useRouteError } from "react-router-dom";
import "./error-page.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div  >
      <div className="Error-page" >

      
      <h1 className="Ooops-container">Oooops!!! Something Went Wrong</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    </div>
  );
}