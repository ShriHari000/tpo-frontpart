// import React, { useState } from "react";
// import { post } from "axios";
// import { Link,useNavigate,useParams } from "react-router-dom";

// function AddAdmin(props) {
// 	const initialState = {
// 		CompanyName: "",
// 		criteria: "",
// 		email: "",
// 		address: "",
// 		package: "",
// 		Rskills: "",
//         about:"",
// 	};
// 	const [crud, setCrud] = useState(initialState);

//     const { _id } = useParams();
// 	const navigate = useNavigate();

// 	function handleSubmit(event) {
// 		event.preventDefault();
// 		//if (!crud.companyName || !crud.email) return;
// 		async function postCrud() {
// 			try {
// 				console.log(crud)
// 				const response = await post(`http://localhost:8080/api/cruds/admin`, crud);
// 				// navigate(`/cruds/${response.data._id}`);
// 			} catch (error) {
// 				console.log("error", error);
// 			}
// 		}
// 		postCrud();
// 	}

// 	function handleChange(event) {
// 		setCrud({ ...crud, [event.target.name]: event.target.value });
// 	}

// 	function handleCancel() {
// 		navigate("/cruds");
// 	}

// 	return (
        
// 		<div className="container" style={{ maxWidth: "400px" }}>
// 			<h1>Create CRUD</h1>
// 			<hr />
// 			<form onSubmit={handleSubmit}>
// 				<div className="form-group">    
// 					<label>company Name</label>
// 					<input
// 						name="CompanyName"
// 						type="text"
// 						required
// 						value={crud.CompanyName}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<label>criteria</label>
// 					<input
// 						name="criteria"
// 						type="text"
// 						required
// 						value={crud.criteria}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
					
// 				</div>
// 				<div className="form-group">
// 					<label>Email</label>
// 					<input
// 						name="email"
// 						type="email"
// 						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
// 						required
// 						value={crud.email}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<label>address</label>
// 					<input
// 						name="address"
// 						type="text"
// 						required
// 						value={crud.address}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<label>package</label>
// 					<input
// 						name="package"
// 						type="text"
// 						value={crud.package}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
					
// 				</div>

// 				<div className="form-group">
// 					<label>skills</label>
// 					<textarea
// 						name="Rskills"
// 						row="10"
// 						value={crud.Rskills}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
// 				</div>

//                 <div className="form-group">
// 					<label>about</label>
// 					<textarea
// 						name="about"
// 						row="10"
// 						value={crud.about}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
// 				</div>

// 				<div className="btn-group">
// 					<input type="submit" value="Submit" className="btn btn-primary" />
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

// export default AddAdmin;


// ///FaA6CoxjFSyIf83n


import React, { useState } from "react";
import { post } from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function AddAdmin(props) {
  const initialState = {
    CompanyName: "",
    criteria: "",
    email: "",
    address: "",
    package: "",
    Rskills: "",
    about: "",
  };
  const [crud, setCrud] = useState(initialState);
  const { _id } = useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    //if (!crud.companyName || !crud.email) return;
    async function postCrud() {
      try {
        console.log(crud);
        const response = await post(`http://localhost:8080/api/cruds/admin`, crud);
        // navigate(`/cruds/${response.data._id}`);
      } catch (error) {
        console.log("error", error);
      }
    }
    postCrud();
  }

  function handleChange(event) {
    setCrud({ ...crud, [event.target.name]: event.target.value });
  }

  function handleCancel() {
    navigate("/cruds");
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card bg-light mb-3">
            <div className="card-header bg-primary text-white">
              <h1 className="mb-0">Create CRUD</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="CompanyName">Company Name</label>
                  <input
                    name="CompanyName"
                    type="text"
                    required
                    value={crud.CompanyName}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="criteria">Criteria</label>
                  <input
                    name="criteria"
                    type="text"
                    required
                    value={crud.criteria}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                    required
                    value={crud.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    name="address"
                    type="text"
                    required
                    value={crud.address}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="package">Package</label>
                  <input
                    name="package"
                    type="text"
                    value={crud.package}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Rskills">Skills</label>
                  <textarea
                    name="Rskills"
                    rows="3"
                    value={crud.Rskills}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="about">About</label>
                  <textarea
                    name="about"
                    rows="3"
                    value={crud.about}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="btn-group mt-3">
                  <button type="submit" className="btn btn-success mr-2">
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="btn btn-danger"
                  >
                    Cancel
                  </button>
				  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAdmin;