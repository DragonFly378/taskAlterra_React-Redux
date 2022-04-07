import React from "react";
import ShowList from "../components/ShowList";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { delTask } from "../store/Tasks/actions";

const Author = () => {
  const dispatch = useDispatch();
  /* Memanggil initState tasks dari reducer */
  const { tasks } = useSelector((state) => state.tasks);

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
  return (
    <>
      {/* <div className="container" style={{ textAlign: "center" }}>
        <div style={{ padding: "40px" }}>
          <div className="judul">About The Author</div>
          <p style={{ fontSize: "25px", marginTop: "50px" }}>
            Halo perkenalkan, saya Dragonfly, orang biasa memanggil saya
            Capung... Program ini saya buat atas tugas praktikum React Js
            Alterra Academy, Terima Kasih
          </p>
        </div>
      </div> */}
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

export default Author;
