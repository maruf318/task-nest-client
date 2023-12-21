import { useContext } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyTasks = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { data: todoTasks = [] } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks?email=${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  console.log(todoTasks);
  return (
    <div>
      <h2>This is my tasks : {todoTasks?.length}</h2>
      {/* <div className="overflow-x-auto">
        <table className="table">
   
          <thead>
            <tr>
              <th>Title</th>
              <th>Deadline</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todoTasks?.map((task) => (
              <tr key={task._id}>
                <th>{task.title}</th>
                <td>{task.deadline}</td>
                <td className="capitalize">{task.priority}</td>
                <td>
                  <button className="btn btn-sm btn-primary mr-2">Edit</button>
                  <button className="btn btn-sm btn-primary">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="text-center my-10 font-bold ">This is Ongoing section</h2>
      <div className="overflow-x-auto">
        <table className="table">
   
          <thead>
            <tr>
              <th>Title</th>
              <th>Deadline</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todoTasks?.map((task) => (
              <tr key={task._id}>
                <th>{task.title}</th>
                <td>{task.deadline}</td>
                <td className="capitalize">{task.priority}</td>
                <td>
                  <button className="btn btn-sm btn-primary mr-2">Edit</button>
                  <button className="btn btn-sm btn-primary">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>This is Completed section</h2> */}
    </div>
  );
};

export default MyTasks;
