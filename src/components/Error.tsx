import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function Error() {
  const error = useRouteError() as any;
  return (
    <section className="smaller-top fade-in" id="error">
      <h1>Oops!</h1>
      <p className="extra-margin-top">
        Sorry, an unexpected error has occurred:{" "}
        <i>{error.statusText || error.message}</i>. Please return to the{" "}
        <Link to="/" title="home">
          homepage
        </Link>
        .
      </p>
    </section>
  );
}

export default Error;
