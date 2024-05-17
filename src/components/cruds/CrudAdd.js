// import React, { useState } from "react";
// import { post } from "axios";
// import { useNavigate } from "react-router-dom";

// function CrudAdd(props) {
// 	const initialState = {
// 		studentName: "",
// 		phone: "",
// 		email: "",
// 		College: "",
// 		CGPA: "",
// 		SKIILS: "",
// 	};
// 	const [crud, setCrud] = useState(initialState);

// 	const navigate = useNavigate();

// 	function handleSubmit(event) {
// 		event.preventDefault();
// 		//if (!crud.companyName || !crud.email) return;
// 		async function postCrud() {
// 			try {
// 				console.log(crud)
// 				const response = await post("http://localhost:8080/api/cruds/", crud);
// 				navigate(`/cruds/${response.data._id}`);
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
// 					<label>Student Name</label>
// 					<input
// 						name="studentName"
// 						type="text"
// 						required
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
// 						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
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
// 						row="10"
// 						value={crud.SKIILS}
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

// export default CrudAdd;


///FaA6CoxjFSyIf83n


// import React, { useState } from "react";
// import { post } from "axios";
// import { useNavigate } from "react-router-dom";

// function CrudAdd(props) {
//   const initialState = {
//     studentName: "",
//     phone: "",
//     email: "",
//     College: "",
//     CGPA: "",
//     SKIILS: "",
//   };
//   const [crud, setCrud] = useState(initialState);
//   const navigate = useNavigate();

//   function handleSubmit(event) {
//     event.preventDefault();
//     //if (!crud.companyName || !crud.email) return;
//     async function postCrud() {
//       try {
//         console.log(crud);
//         const response = await post("http://localhost:8080/api/cruds/", crud);
//         navigate(`/cruds/${response.data._id}`);
//       } catch (error) {
//         console.log("error", error);
//       }
//     }
//     postCrud();
//   }

//   function handleChange(event) {
//     setCrud({ ...crud, [event.target.name]: event.target.value });
//   }

//   function handleCancel() {
//     navigate("/cruds");
//   }

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card mt-5 bg-light">
//             <div className="card-header bg-primary text-white">
//               <h1 className="text-center">Create CRUD</h1>
//             </div>
//             <div className="card-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="studentName">Student Name</label>
//                   <input
//                     name="studentName"
//                     type="text"
//                     required
//                     value={crud.studentName}
//                     onChange={handleChange}
//                     className="form-control"
//                     id="studentName"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="phone">Phone</label>
//                   <input
//                     name="phone"
//                     type="tel"
//                     required
//                     value={crud.phone}
//                     onChange={handleChange}
//                     className="form-control"
//                     id="phone"
//                   />
//                   <small className="form-text text-muted">
//                     Format: 251-XXX-XXXXXX
//                   </small>
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">Email</label>
//                   <input
//                     name="email"
//                     type="email"
//                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
//                     required
//                     value={crud.email}
//                     onChange={handleChange}
//                     className="form-control"
//                     id="email"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="College">College</label>
//                   <input
//                     name="College"
//                     type="text"
//                     required
//                     value={crud.College}
//                     onChange={handleChange}
//                     className="form-control"
//                     id="College"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="CGPA">CGPA</label>
//                   <input
//                     name="CGPA"
//                     type="text"
//                     value={crud.CGPA}
//                     onChange={handleChange}
//                     className="form-control"
//                     id="CGPA"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="SKIILS">SKIILS</label>
//                   <textarea
//                     name="SKIILS"
//                     row="10"
//                     value={crud.SKIILS}
//                     onChange={handleChange}
//                     className="form-control"
//                     id="SKIILS"
//                   />
//                 </div>
//                 <div className="btn-group d-flex justify-content-between">
//                   <input
//                     type="submit"
//                     value="Submit"
//                     className="btn btn-success btn-lg"
//                   />
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="btn btn-danger btn-lg"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CrudAdd;



// import React, { useState } from "react";
// import { post } from "axios";
// import { useNavigate } from "react-router-dom";

// function CrudAdd(props) {
//   const initialState = {
//     studentName: "",
//     phone: "",
//     email: "",
//     College: "",
//     CGPA: "",
//     SKIILS: "",
//     PRN: "",
//     DOB: "",
//     Branch: "",
//     SSC: "",
//     SSCBOARD: "",
//     HSC: "",
//     HSCBOARD: "",
//     Diploma: "",
//     DiplomaYear: "",
//     City: "",
//   };
//   const [crud, setCrud] = useState(initialState);

//   const navigate = useNavigate();

//   function handleSubmit(event) {
//     event.preventDefault();
//     //if (!crud.companyName || !crud.email) return;
//     async function postCrud() {
//       try {
//         console.log(crud);
//         const response = await post("http://localhost:8080/api/cruds/", crud);
//         navigate(`/cruds/${response.data._id}`);
//       } catch (error) {
//         console.log("error", error);
//       }
//     }
//     postCrud();
//   }

//   function handleChange(event) {
//     setCrud({ ...crud, [event.target.name]: event.target.value });
//   }

//   function handleCancel() {
//     navigate("/cruds");
//   }

//   return (
//     <div className="container" style={{ maxWidth: "400px" }}>
//       <h1>Create CRUD</h1>
//       <hr />
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Student Name</label>
//           <input
//             name="studentName"
//             type="text"
//             required
//             value={crud.studentName}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input
//             name="phone"
//             type="tel"
//             required
//             value={crud.phone}
//             onChange={handleChange}
//             className="form-control"
//           />
//           <small>Format: 251-XXX-XXXXXX</small>
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             name="email"
//             type="email"
//             pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
//             required
//             value={crud.email}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>College</label>
//           <input
//             name="College"
//             type="text"
//             required
//             value={crud.College}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>CGPA</label>
//           <input
//             name="CGPA"
//             type="text"
//             value={crud.CGPA}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>

//         <div className="form-group">
//           <label>SKIILS</label>
//           <textarea
//             name="SKIILS"
//             row="10"
//             value={crud.SKIILS}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>

//         {/* New fields */}
//         <div className="form-group">
//           <label>PRN</label>
//           <input
//             name="PRN"
//             type="text"
//             value={crud.PRN}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>DOB</label>
//           <input
//             name="DOB"
//             type="date"
//             value={crud.DOB}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Branch</label>
//           <input
//             name="Branch"
//             type="text"
//             value={crud.Branch}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>SSC</label>
//           <input
//             name="SSC"
//             type="text"
//             value={crud.SSC}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>SSCBOARD</label>
//           <input
//             name="SSCBOARD"
//             type="text"
//             value={crud.SSCBOARD}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>HSC</label>
//           <input
//             name="HSC"
//             type="text"
//             value={crud.HSC}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>HSCBOARD</label>
//           <input
//             name="HSCBOARD"
//             type="text"
//             value={crud.HSCBOARD}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Diploma</label>
//           <input
//             name="Diploma"
//             type="text"
//             value={crud.Diploma}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>DiplomaYear</label>
//           <input
//             name="DiplomaYear"
//             type="text"
//             value={crud.DiplomaYear}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>City</label>
//           <input
//             name="City"
//             type="text"
//             value={crud.City}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>

//         <div className="btn-group">
//           <input type="submit" value="Submit" className="btn btn-primary" />
//           <button
//             type="button"
//             onClick={handleCancel}
//             className="btn btn-secondary"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CrudAdd;

import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function CrudAdd(props) {
  const initialState = {
    studentName: "",
    phone: "",
    email: "",
    College: "",
    CGPA: "",
    SKILLS: "",
    PRN: "",
    DOB: "",
    Branch: "",
    SSC: "",
    SSCBOARD: "",
    HSC: "",
    HSCBOARD: "",
    Diploma: "",
    DiplomaYear: "",
    City: "",
  };
  const [crud, setCrud] = useState(initialState);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    //if (!crud.companyName || !crud.email) return;
    async function postCrud() {
      try {
        console.log(crud);
        const response = await post("http://localhost:8080/api/cruds/", crud);
        navigate(`/cruds/${response.data._id}`);
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
      <div className="card shadow-lg mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <h1 className="text-center mb-4 text-primary">Create CRUD</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label className="fw-bold">Student Name</label>
              <input
                name="studentName"
                type="text"
                required
                value={crud.studentName}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label className="fw-bold">Phone</label>
              <input
                name="phone"
                type="tel"
                required
                value={crud.phone}
                onChange={handleChange}
                className="form-control"
              />
              <small className="text-muted">Format: 251-XXX-XXXXXX</small>
            </div>
            <div className="form-group mb-3">
              <label className="fw-bold">Email</label>
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
            <div className="form-group mb-3">
              <label className="fw-bold">College</label>
              <input
                name="College"
                type="text"
                required
                value={crud.College}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label className="fw-bold">CGPA</label>
              <input
                name="CGPA"
                type="text"
                value={crud.CGPA}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group mb-3">
              <label className="fw-bold">SKIILS</label>
              <textarea
                name="SKILLS"
                rows="3"
                value={crud.SKILLS}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            {/* New fields */}
            <div className="form-group mb-3">
              <label className="fw-bold">PRN</label>
              <input
                name="PRN"
                type="text"
                value={crud.PRN}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label className="fw-bold">DOB</label>
              <input
                name="DOB"
                type="date"
                value={crud.DOB}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label className="fw-bold">Branch</label>
              <input
                name="Branch"
                type="text"
                value={crud.Branch}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label className="fw-bold">SSC</label>
              <input
                name="SSC"
                type="text"
                value={crud.SSC}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label className="fw-bold">SSCBOARD</label>
              <input
                name="SSCBOARD"
                type="text"
                value={crud.SSCBOARD}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label className="fw-bold">HSC</label>
              <input
                name="HSC"
                type="text"
                value={crud.HSC}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label className="fw-bold">HSCBOARD</label>
              <input
                name="HSCBOARD"
                type="text"
                value={crud.HSCBOARD}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label className="fw-bold">Diploma</label>
              <input
                name="Diploma"
                type="text"
                value={crud.Diploma}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label className="fw-bold">DiplomaYear</label>
              <input
                name="DiplomaYear"
                type="text"
                value={crud.DiplomaYear}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label className="fw-bold">City</label>
              <input
                name="City"
                type="text"
                value={crud.City}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="d-flex justify-content-between">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary"
              />
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
      </div>
    </div>
  );
}

export default CrudAdd;