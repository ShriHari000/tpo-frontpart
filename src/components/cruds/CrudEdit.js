// import React, { useState, useEffect } from "react";
// import { get, patch } from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// function CrudEdit(props) {
// 	const initialState = {
// 		companyName: "",
// 		phone: "",
// 		email: "",
// 		location: "",
// 		link: "",
// 		description: "",
// 	};
// 	const [crud, setCrud] = useState(initialState);

// 	const { _id } = useParams();
// 	const navigate = useNavigate();

// 	useEffect(
// 		function () {
// 			async function updateCrud() {
// 				try {
// 					const response = await get(`http://localhost:8080/api/cruds/${_id}`);
// 					setCrud(response.data);
// 				} catch (error) {
// 					console.log(error);
// 				}
// 			}
// 			updateCrud();
// 		},
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 		[props]
// 	);

// 	function handleSubmit(event) {
// 		event.preventDefault();
// 		async function updateCrud() {
// 			try {
// 				await patch(`http://localhost:8080/api/cruds/${crud._id}`, crud);
// 				navigate(`/cruds/${crud._id}`);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		}
// 		updateCrud();
// 	}

// 	function handleChange(event) {
// 		setCrud({ ...crud, [event.target.name]: event.target.value });
// 	}

// 	function handleCancel() {
// 		navigate(`/cruds/${crud._id}`);
// 	}

// 	return (
// 		<div className="container">
// 			<h1>Edit</h1>
// 			<hr />
// 			<form onSubmit={handleSubmit}>
// 				<div className="form-group">
// 					<label> student Name</label>
// 					<input
// 						name="studentName"
// 						type="text"
// 						value={crud.studentName}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<label>Phone</label>
// 					<input
// 						name="phone"
// 						type="tel"
// 						required
// 						value={crud.phone}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
// 					<small>Format: 251-XXX-XXXXXX</small>
// 				</div>
// 				<div className="form-group">
// 					<label>Email</label>
// 					<input
// 						name="email"
// 						type="email"
// 						required
// 						value={crud.email}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<label>College</label>
// 					<input
// 						name="College"
// 						type="text"
// 						required
// 						value={crud.College}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<label>CGPA</label>
// 					<input
// 						name="CGPA"
// 						type="text"
// 						value={crud.CGPA}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
// 				</div>

// 				<div className="form-group">
// 					<label>SKIILS</label>
// 					<textarea
// 						name="SKIILS"
// 						row="5"
// 						value={crud.SKIILS}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
// 				</div>
// 				<div className="btn-group">
// 					<button type="submit" className="btn btn-primary">
// 						Update
// 					</button>
// 					<button
// 						type="button"
// 						onClick={handleCancel}
// 						className="btn btn-secondary"
// 					>
// 						Cancel
// 					</button>
// 				</div>
// 			</form>
// 		</div>
// 	);
// }

// export default CrudEdit;


import React, { useState, useEffect } from "react";
import { get, patch } from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CrudEdit(props) {
  const initialState = {
    studentName: "",
    phone: "",
    email: "",
    College: "",
    CGPA: "",
    PRN: "",
    DOB: "",
    Branch: "",
    SSC: "",
    SSCBOARD: "",
    HSC: "",
    HSCBOARD: "",
    City: "",
    SKILLS: "",
  };

  const [crud, setCrud] = useState(initialState);

  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(
    function () {
      async function updateCrud() {
        try {
          const response = await get(`http://localhost:8080/api/cruds/${_id}`);
          setCrud(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      updateCrud();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props]
  );

  function handleSubmit(event) {
    event.preventDefault();
    async function updateCrud() {
      try {
        await patch(`http://localhost:8080/api/cruds/${crud._id}`, crud);
        navigate(`/cruds/${crud._id}`);
      } catch (error) {
        console.log(error);
      }
    }
    updateCrud();
  }

  function handleChange(event) {
    setCrud({ ...crud, [event.target.name]: event.target.value });
  }

  function handleCancel() {
    navigate(`/cruds/${crud._id}`);
  }

  return (
    <div className="container">
      <h1>Edit</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Student Name</label>
          <input
            name="studentName"
            type="text"
            value={crud.studentName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            name="phone"
            type="tel"
            required
            value={crud.phone}
            onChange={handleChange}
            className="form-control"
          />
          <small>Format: 251-XXX-XXXXXX</small>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            required
            value={crud.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>College</label>
          <input
            name="College"
            type="text"
            required
            value={crud.College}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>CGPA</label>
          <input
            name="CGPA"
            type="text"
            value={crud.CGPA}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>PRN</label>
          <input
            name="PRN"
            type="text"
            value={crud.PRN}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>DOB</label>
          <input
            name="DOB"
            type="text"
            value={crud.DOB}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Branch</label>
          <input
            name="Branch"
            type="text"
            value={crud.Branch}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>SSC</label>
          <input
            name="SSC"
            type="text"
            value={crud.SSC}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>SSC Board</label>
          <input
            name="SSCBOARD"
            type="text"
            value={crud.SSCBOARD}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>HSC</label>
          <input
            name="HSC"
            type="text"
            value={crud.HSC}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>HSC Board</label>
          <input
            name="HSCBOARD"
            type="text"
            value={crud.HSCBOARD}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            name="City"
            type="text"
            value={crud.City}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Skills</label>
          <textarea
            name="SKILLS"
            rows="5"
            value={crud.SKILLS}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CrudEdit;