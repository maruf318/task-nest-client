import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

import useAxiosPublic from "../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const Board = ({ todoTasks: tasks, refetch }) => {
  const notifySuccess = () =>
    toast.success("Task Updated", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifyError = (error) =>
    toast.error(error, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const axiosPublic = useAxiosPublic();
  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log(destination, source, draggableId);
    if (!destination) return; // Dropping outside the droppable area

    if (source?.droppableId == destination?.droppableId) return;

    let category = "";
    if (destination?.droppableId == 1) {
      category = "to-do";
    } else if (destination?.droppableId == 2) {
      category = "ongoing";
    } else if (destination?.droppableId == 3) {
      category = "completed";
    }
    axiosPublic
      .patch(`/tasks/${draggableId}`, { category })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          notifySuccess();
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
        notifyError();
      });
  };

  console.log(tasks);
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex justify-between items-center md:flex-row flex-col">
        <Column
          title={"To-Do"}
          tasks={tasks.filter((task) => task.category === "to-do")}
          id={"1"}
        />
        <Column
          title={"Current Ongoing"}
          tasks={tasks.filter((task) => task.category === "ongoing")}
          id={"2"}
        />
        <Column
          title={"Completed"}
          tasks={tasks.filter((task) => task.category === "completed")}
          id={"3"}
        />
      </div>
    </DragDropContext>
  );
};

export default Board;
