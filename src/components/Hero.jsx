import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";

const Hero = ({ mode }) => {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("user");
  const [model, setModel] = useState(false);
  const [currentTodo, setCurrentTodo] = useState([]);
  const [value, setValue] = useState("");

  function handle(e) {
    setTodo(e.target.value);
  }
  console.log(mode);

  useEffect(() => {
    const x = "kashif";
    setName(x);
  }, []);

  function handleD(v) {
    const it = tasks.filter((i) => i.id !== v);
    setTasks(it);
    setCount(0);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, { id: count, text: todo }]);
    setTodo("");
    setCount(count + 1);
  }
  function handleUp(todo) {
    setModel(true);
    setCurrentTodo(todo);
  }
  function handleUpdate(e) {
    setValue(e.target.value);
  }

  return (
    <div
      style={
        mode ? { backgroundColor: "rgb(85, 85, 85)" } : { backgroundColor: "" }
      }
      className="hero"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          tasks.map((t) => {
            if (t.id === currentTodo.id) {
              return (currentTodo.text = value);
            } else {
              return currentTodo.text;
            }
          });
          setValue("");
          setModel(false);
        }}
        style={model ? { display: "block" } : { display: "none" }}
        className="model"
      >
        <h1>Update {currentTodo.text}:</h1>
        <input value={value} onChange={handleUpdate} />
        <button>Update</button>
      </form>
      <div
        onClick={() => setModel(false)}
        style={model ? { display: "block" } : { display: "none" }}
        className="overlay"
      ></div>
      <div
        style={mode ? { backgroundColor: "black" } : { backgroundColor: "" }}
        className="hero-center"
      >
        <h1>Your Note</h1>
        <h4 style={mode ? { color: "white" } : { color: "black" }}>
          Welcome <span style={{ color: "#44da80" }}>{name}!</span>
        </h4>
        <br />
        <form onSubmit={handleSubmit} className="input">
          <input
            style={
              mode
                ? { backgroundColor: "rgb(85, 85, 85)", color: "white" }
                : { backgroundColor: "" }
            }
            onChange={handle}
            placeholder="Add todo entry..."
            type="text"
            name=""
            id=""
            value={todo}
          />

          <button>ADD</button>
        </form>
        <br />
        <br />

        {tasks.map((task) => {
          return (
            <FlipMove duration={250} easing="ease-out">
              <div
                style={
                  mode
                    ? { backgroundColor: "rgb(85, 85, 85)" }
                    : { backgroundColor: "" }
                }
                key={task.id}
                className="todo"
              >
                <div className="check">
                  <input className="rad" type="radio" name="" id="" />
                </div>
                <label
                  style={mode ? { color: "white" } : { color: "" }}
                  className="h5"
                >
                  {task.text}
                </label>
                <div className="icons">
                  <i
                    onClick={() => handleUp(task)}
                    className="fa fa-pencil"
                  ></i>
                  <i
                    onClick={() => handleD(task.id)}
                    className="fa fa-trash"
                  ></i>
                </div>
              </div>
            </FlipMove>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
