import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function CrudDetails() {
	const [crud, setCrud] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
            console.log("hi");
			async function getCrudById() {
				try {
					const response = await axios.get(`http://localhost:8080/api/cruds/detail/admin/${_id}`);

					setCrud(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			getCrudById();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
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
			<h2>{crud.CompanyName}</h2>

			<p>
				<b>criteria:</b>: <a href={`tel:+${crud.criteria}`}> {crud.criteria} </a>
			</p>

			<p>
				<b>Email</b>: {crud.email}
			</p>
			<p>
				<b>address:</b>: {crud.address}
			</p>
			<p>
            <b>package:</b>: {crud.package}
			</p>
			<p>
            <b>skills:</b>: {crud.Rskills}			</p>
			{/* <p>
				<small>
					<b>ID</b>: {crud._id}
				</small>
			</p> */}
			{/* <div className="btn-group ">
				<Link to={`/cruds/${crud._id}/edit`} className="btn btn-primary">
					Edit
				</Link>
				<button onClick={handleDelete} className="btn btn-danger">
					Delete
				</button>
				<Link to="/cruds" className="btn btn-secondary">
					Close
				</Link>
			</div> */}
			<hr />
		</div>
	);
}

export default CrudDetails;
