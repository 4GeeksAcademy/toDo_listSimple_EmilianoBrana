import React, { useState } from "react";


//create your first component
const Home = () => {

	const [task, setTask] = useState("")
	const [list, setList] = useState([])

function addTask (event) {
	event.preventDefault()
		if (task !="") {
			setList ([...list, task])
			setTask("")
		} else {
			alert("Ingresar Tarea")
		}
		if (event.key == "Enter"){
			setList([...list, task])
			setTask("")
		}
	}

	return (
		<div className="container text-center ">
			<h1 className="text-center mt-5 ">To Do's</h1>
			<form className="row">
				<div className="col-12 ">
					<input type="text "
						className="form-control border" placeholder="Nueva Tarea" value={task} onChange={(event) => setTask(event.target.value)} />
				</div>
				<div className="col-12 mt-2">
					<button type="submit" onClick={(event) => addTask(event)} className="btn btn-primary mb-3">Agregar Tarea</button>
				</div>
			</form>
			<ul className="list-group">
				{list.map((item, index) => (
					<li className="list-group-item border border-dark-subtle d-flex justify-content-between" key={index}>{item}<i onClick={() => {

						let listFilt = list.filter((task, subindex) => {
							return (subindex != index)
						})
						setList(listFilt)

					}}
						className="m-1 fa-solid fa-x icon-hidden"></i></li>
				))}
				<li
				className="list-group-item border border-dark-subtle"
				style={{ display: list.length === 0 ? 'none' : 'block' }}
				>
				<span className="text-success">{list.length} Items Left</span>
				</li>
			</ul>
			<span className="text-primary
			">{(list.length==0)?"No hay Tareas , Agregar Una ":""}</span>
		</div>
	);
};

export default Home;
