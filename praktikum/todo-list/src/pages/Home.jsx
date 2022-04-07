import Button from "../components/Button";
import ShowList from "../components/ShowList";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTask, delTask } from "../store/Tasks/actions";

const Home = () => {
  const dispatch = useDispatch();
  /* Memanggil initState tasks dari reducer */
  const { tasks } = useSelector((state) => state.tasks);

  const [title, setTitle] = useState("");

  const [complete, setComplete] = useState(false);

  const [tmp, setTmp] = useState(false);

  /* jika task nya selesai, maka nilai dari akan disimpan
  kedalam variabel obj.complete, lalu dikembalikan lagi ke setTmp */
  const checkCompleted = (obj, tmp, setTmp) => {
    if (tmp) {
      obj.completed = false;
      setTmp(obj.completed);
    } else {
      obj.completed = true;
      setTmp(obj.completed);
    }
  };

  /* Delete Task */
  const deleteTask = (id) => {
    const newTask = tasks.filter((task) => task.id !== id);
    dispatch(delTask(newTask));
  };

  /* Add task */
  const addTaskToSubmit = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    // console.log(newTask);
    dispatch(addTask(newTask));
  };

  /* ketika disubmit, data akan dikirim ke addTask */
  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Tambahkan Task Gan!");
      return;
    }

    addTaskToSubmit({
      title,
      complete,
    });

    setTitle("");
    setComplete("");
  };
  return (
    <>
      <div className="home-section">
        <div className="container">
          <div className="header">
            <div className="judul">Todos</div>{" "}
            <p>
              Tambahkan list <br />{" "}
              <span> Kebutuhan/Tugas/Belanjaan/Dosa/Pahala</span> <br /> Anda
              dimari...
            </p>
          </div>

          <div className="konten">
            <form className="addtask" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Add todo..."
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <Button text={"Add Task"} color={"black"} type="submit" />
            </form>
            <div className="showtask">
              {tasks.map((task, index) => {
                return (
                  <ShowList
                    key={index}
                    checkCompleted={() => checkCompleted(task, tmp, setTmp)}
                    classTitle={`task-title ${
                      task.completed ? "completed" : ""
                    }`}
                    title={task.title}
                    onClick={() => deleteTask(task.id)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
