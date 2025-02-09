	import React, { useState, useEffect } from "react";
	import axios from "axios";
	import { Link,useNavigate,useParams } from "react-router-dom";

	function CrudGridView() {
		const [cruds, setCruds] = useState([]);

		const { _id } = useParams();
		const navigate = useNavigate();


		useEffect(function () {
					async function getCruds() {
						try {
							
							const response = await axios.get("http://localhost:8080/api/cruds/admin/grid");							console.log(response.data);	
							setCruds(response.data);
						} catch (error) {
							console.log("error", error);
						}
					}
					getCruds();
				}, []);	

		return (
			<div className="container">
				<h2>
					CRUD - Grid View
					{/* <p>
						<Link to="/cruds/new" className="btn btn-primary float-right">
							Create CRUD
						</Link>
					</p> */}
				</h2>
				<hr />
				<div>
					<div className="d-flex flex-wrap">
						{cruds.map((crud) => {
							return (
								<div
									className="card"
									style={{ width: 350, margin: 30 }}
									key={crud._id}
								>
									<div class="card-header">
										<h5 className="card-title">
											<Link to={`/cruds/${crud._id}`} className="link-line">
												{crud.CompanyName}
											</Link>
										</h5>
									</div>
									<div className="card-body">
										<h5 className="d-flex align-items-center">
										<i className="bi bi-envelope-fill text-success"></i>

											<a className="card-subtitle" href={`tel:+${crud.email}`}>
												{crud.email}
											</a>
										</h5>
										{/* <h6 className="card-subtitle mb-2 text-muted">
											{crud.phone}
										</h6> */}
										<p className="card-text d-flex align-items-center">
											<i className="bi bi-geo-alt-fill text-warning"></i>
											<small className="text-muted one-liner">
												{crud.address}
											</small>
										</p>
									</div>
									<div class="card-footer d-flex align-items-center">
										{/* <Link
											to={`/cruds/${cruds._id}/edit`}
											className="btn btn-primary"
										>
											Edit
										</Link> */}

										 <span>
											<small>
											
											<Link to={`/cruds/${crud._id}/temp`} className="link-line">
													Read More...
												</Link>
											</small>
										</span> 
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}

	export default CrudGridView;



// 	import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function CrudGridView() {
// 	const [cruds, setCruds] = useState([]);

// 	useEffect(function () {
// 		async function getCruds() {
// 			try {
// 				const response = await axios.get("http://localhost:8080/api/cruds");
// 				setCruds(response.data);
// 			} catch (error) {
// 				console.log("error", error);
// 			}
// 		}
// 		getCruds();
// 	}, []);

// 	return (
// 		<div className="container">
// 			<h2>
// 				CRUD - Grid View
// 				<p>
// 					<Link to="/cruds/new" className="btn btn-primary float-right">
// 						Create CRUD
// 					</Link>
// 				</p>
// 			</h2>
// 			<hr />
// 			<div>
// 				<div className="d-flex flex-wrap">
// 					{cruds.map((crud) => {
// 						return (
// 							<div
// 								className="card"
// 								style={{ width: 250, margin: 30 }}
// 								key={crud._id}
// 							>
// 								<div class="card-header">
// 									<h5 className="card-title">
// 										<Link to={`/cruds/${crud._id}`} className="link-line">
// 											{crud.studentName}
// 										</Link>
// 									</h5>
// 								</div>
// 								<div className="card-body">
// 									<h5 className="d-flex align-items-center">
// 										<i className="bi bi-telephone-fill text-success"></i>
// 										<a className="card-subtitle" href={`tel:+${crud.phone}`}>
// 											{crud.phone}
// 										</a>
// 									</h5>
// 									{/* <h6 className="card-subtitle mb-2 text-muted">
// 										{crud.phone}
// 									</h6> */}
// 									<p className="card-text limit-char">{crud.SKIILS}</p>
// 									<p className="card-text d-flex align-items-center">
// 										<i className="bi bi-geo-alt-fill text-warning"></i>
// 										<small className="text-muted one-liner">
// 											{crud.College}
// 										</small>
// 									</p>
// 								</div>
// 								<div class="card-footer d-flex align-items-center">
// 									<Link
// 										to={`/cruds/${cruds._id}/edit`}
// 										className="btn btn-primary"
// 									>
// 										Edit
// 									</Link>
// 									<span>
// 										<small>
// 											<Link to={`/cruds/${crud._id}`} className="link-line">
// 												Read More...
// 											</Link>
// 										</small>
// 									</span>
// 								</div>
// 							</div>
// 						);
// 					})}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default CrudGridView;
