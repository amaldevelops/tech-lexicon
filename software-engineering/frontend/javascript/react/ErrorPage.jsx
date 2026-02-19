import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh No, this route does not exist!</h1>
      <Link to="/messaging-app">
        Go Back to the main page by clicking here !
      </Link>
    </div>
  );
};

export default ErrorPage;
