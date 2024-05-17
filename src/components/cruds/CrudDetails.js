
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function CrudDetails(props) {
  const [crud, setCrud] = useState({});
  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(
    function () {
      async function getCrudById() {
        try {
          const response = await axios.get(`http://localhost:8080/api/cruds/${_id}`);
          setCrud(response.data);
        } catch (error) {
          console.log("error", error);
        }
      }
      getCrudById();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props]
  );

  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:8080/api/cruds/${_id}`);
      navigate("/cruds");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <h2>{crud.studentName}</h2>
      <p>
        <b>Phone</b>: <a href={`tel:+${crud.phone}`}>{crud.phone}</a>
      </p>
      <p>
        <b>Email</b>: {crud.email}
      </p>
      <p>
        <b>College</b>: {crud.College}
      </p>
      <p>
        <b>CGPA</b>: {crud.CGPA}
      </p>
      <p>
        <b>PRN</b>: {crud.PRN}
      </p>
      <p>
        <b>DOB</b>: {crud.DOB}
      </p>
      <p>
        <b>Branch</b>: {crud.Branch}
      </p>
      <p>
        <b>SSC</b>: {crud.SSC}
      </p>
      <p>
        <b>SSC Board</b>: {crud.SSCBOARD}
      </p>
      <p>
        <b>City</b>: {crud.City}
      </p>
      <p>
        <b>Skills</b>: <p align="justify">{crud.SKILLS}</p>
      </p>
      <p>
        <small>
          <b>ID</b>: {crud._id}
        </small>
      </p>
      <div className="btn-group ">
        <Link to={`/cruds/${crud._id}/edit`} className="btn btn-primary">
          Edit
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
        <Link to="/cruds" className="btn btn-secondary">
          Close
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default CrudDetails;