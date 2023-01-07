import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
function About() {
  return (
    <>
      <h1>Welcome To BrainWorks</h1>
      <p>
        Brainworks, we provide best in class trainings across Agile,Project
        Management, IT– Service Management & Quality –Assurance –spaces. Our
        –trainers worked– with world renowned MNCs and are committed raiseyour
        excellence levels thereby accelerating your careers!
      </p>
      <p>
        <h3>Our Vision</h3>
        Our vision is to be globally regarded as a leading organization working
        towards fulfilling educational needs of working professionals and
        students.
      </p>
      <h6>Management Team</h6>
      <NavLink
        className="head"
        to="/head/Amit/Zagade/Director – Operations, Brainworks Business Solutions.
An Post Graduate in Comuter Science & Business Admin .. With 15+ years Industrial and 
12+ years of IT experience in India as worked in multiple MNC’S like (Wipro ,L&T,PWC).
He has core knowledge of Consulting in ERP and BI (Business Intelliegence ) and
 he has expertised in all roles in IT industry."
      >
        Director
      </NavLink>
      <NavLink
        className="head"
        to="/head/Dattatraya/Tompe/He has Expertised in All Roles in IT Industry.
      He is heading Operations for Brainworks Business Solutions & expertise
 in Strategy Planning,Recruitment & Training, Project Executation, Building Organization."
      >
        Technical Head
      </NavLink>{" "}
      <h6>Here we have some Technolgies</h6>
      <nav>
        <ul className="navbar1">
          <NavLink className="head" to="mernstack">
            MERNStack
          </NavLink>
          <NavLink className="head" to="python">
            Python
          </NavLink>
          <NavLink className="head" to="aws">
            AWS{" "}
          </NavLink>
          <NavLink className="head" to="java">
            Java
          </NavLink>
        </ul>
      </nav>
      <Outlet />
      <br />
      <br />
      <Link to="/">Go to Home Page Page</Link>
    </>
  );
}
export default About;
