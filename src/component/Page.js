import { Link } from "react-router-dom";
function Page404() {
  return (
    <>
      <h1>Error 404 - Page Not Found !!!</h1>
      <br />
      <br />

      <Link to="/">Go to Home Page</Link>
    </>
  );
}
export default Page404;
