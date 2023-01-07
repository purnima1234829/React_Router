import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLethVsFLAlVwzQVVcqK4ZPLRgdqSB1h3uNQ&usqp=CAU"
        alt="randomimage"
      />
      <h5>
        "Success Consists of Going From Failure to Failure Without Loss of
        Enthusiasm"
      </h5>
      <h2>
        Team Brainworks is the right place <br />
        which help you to get your Dream Job Be a Part of <br />
        winning Team
      </h2>
      <h4>
        Almost 300+ Students placed in last six Months with Avg.
        <br />
        Salary of 15L and Max salary of 34L and
        <br /> previous All batches 100% Placed.
      </h4>
      <br />
      <br />
      <Link to="/about">Go to ABout Page</Link>
    </>
  );
}
export default Home;
