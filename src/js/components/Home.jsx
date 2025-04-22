import React, {useState} from "react";


//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("");
	const [ toDoList, setToDoList ] = useState([]);
	return (
		<div className="container">
			<h1>To Do List</h1>
            <ul>
				<li><input type="text"
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
				onKeyPress={(e) => {
					if (e.key === "Enter") {
						setToDoList(toDoList.concat ([inputValue]));
						setInputValue("");
					}
				}}
				placeholder="Mis cosas por hacer"></input>
				</li>
				{toDoList.map((item, index) => (
						<li>
							{item}{" "}
							<i 
							className="fa-solid fa-trash-can"  
							onClick={() =>
								setToDoList(
									 toDoList.filter(
										(t, currentIndex) => 
											index != currentIndex
									)
								)
							}></i>
						</li>
					))
				}
			</ul>
			<div>{toDoList.length} Tareas Pendientes</div>
		</div>
	);
};

export default Home;