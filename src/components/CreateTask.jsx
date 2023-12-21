import { useForm } from "react-hook-form";
import { AiOutlinePlus } from "react-icons/ai";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const CreateTask = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const notifySuccess = () =>
    toast.success("Task Added Successfully", {
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

  const onSubmit = async (data) => {
    // console.log(data);
    const taskInfo = {
      title: data?.title,
      priority: data?.priority,
      description: data?.description,
      category: "to-do",
      deadline: data?.date,
      userEmail: user?.email,
    };
    console.log(taskInfo);
    const taskRes = await axiosPublic.post("/tasks", taskInfo);
    console.log(taskRes.data);
    if (taskRes.data.insertedId) {
      //show success popup
      reset();
      notifySuccess();
    } else notifyError();
  };
  return (
    <div>
      <h2>This is create task</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              // for="first_name"
              className="block mb-2 text-sm font-medium text-pink-600  dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              {...register("title", { required: true })}
              id="Task_name"
              className="bg-gray-500 text-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title"
              name="title"
            />
            {errors.title && (
              <span className="text-secondary">This field is required</span>
            )}
          </div>
          <div>
            <label
              // for="last_name"
              className="block mb-2 text-sm font-medium text-pink-600 dark:text-white"
            >
              Priority
            </label>
            <select
              className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-5000"
              name="priority"
              {...register("priority")}
              id=""
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* <div>
            <label
              // for="image"
              className="block mb-2 text-sm font-medium text-pink-600 dark:text-white"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Image Url"
              name="image"
              required
            />
          </div> */}
        </div>

        <div className="mb-6">
          <label
            // for="Short Description"
            className="block mb-2 text-sm font-medium text-pink-600 dark:text-white"
          >
            Deadline
          </label>
          <input
            type="date"
            id="date"
            className=" border bg-gray-500 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // placeholder="Date"
            name="date"
            {...register("date", { required: true })}
          />
          {errors.date && (
            <span className="text-secondary">Date is required</span>
          )}
        </div>
        <div className="mb-6">
          <label
            // for="Short Description"
            className="block mb-2 text-sm font-medium text-pink-600 dark:text-white"
          >
            Description
          </label>
          <input
            type="text"
            id="short_description"
            className="bg-gray-500 h-20 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description"
            name="description"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-secondary">Description is required</span>
          )}
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            // for="remember"
            className="ml-2 text-sm font-medium text-pink-600 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions.
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="flex justify-center items-center mx-auto text-white bg-primary hover:bg-primary-focus focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-24 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <AiOutlinePlus></AiOutlinePlus> Add Task
          <AiOutlinePlus></AiOutlinePlus>
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
