import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import loginAnimation from "../assets/register.json";
import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { logIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate(null);
  const location = useLocation();
  // function timeout(delay: number) {
  //   return new Promise((res) => setTimeout(res, delay));
  // }
  // console.log(location);
  const notifySuccess = () =>
    toast.success("Logged in Successful", {
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
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    logIn(email, password)
      .then(() => {
        notifySuccess();
        //delay 1second here
        setTimeout(() => {
          // Delay for 1 second
          navigate(location?.state ? location.state : "/");
        }, 2000); // 1000 milliseconds = 1 second
        // navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        notifyError(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        // swal(
        //   "Google Login",
        //   "You are one step away of your events ",
        //   "success"
        // );
        notifySuccess();
        setTimeout(() => {
          // Delay for 1 second
          navigate(location?.state ? location.state : "/");
        }, 2000); // 1000 milliseconds = 1 second

        // navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // setErrorText(error.message);
        // swal("Error", errorText, "error");
        notifyError(error.message);
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        console.log(result.user);
        notifySuccess();
        setTimeout(() => {
          // Delay for 1 second
          navigate(location?.state ? location.state : "/");
        }, 2000); // 1000 milliseconds = 1 second
      })
      .catch((error) => {
        // setErrorText(error.message);
        // swal("Error", errorText, "error");
        notifyError(error.message);
      });
  };
  return (
    <div>
      <h1 className="text-5xl font-bold text-center text-gray-500 md:my-10">
        Login now!
      </h1>
      <p className="py-6 text-center text-gray-500 md: my-5">
        Welcome back! Log in to continue your journey and access your
        personalized experience.
      </p>
      <div className=" flex justify-center mx-auto mb-10">
        <div className="flex p-4 gap-4 md:flex-row flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-secondary">Login</button>
              </div>
            </form>
            <p className="text-center border-y-2 mb-4">OR</p>
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-secondary
           w-1/2 mx-auto capitalize"
            >
              SignIn By<FcGoogle className="text-2xl"></FcGoogle>
            </button>
            <button
              onClick={handleGithubSignIn}
              className="btn bg-secondary
         w-1/2 mx-auto capitalize"
            >
              SignIn By<FaGithub className="text-2xl"></FaGithub>
            </button>
            <p className="text-gray-500 text-center my-4">
              Create a account here :
              <Link
                to={"/register"}
                className="font-bold text-primary underline "
              >
                Register
              </Link>
            </p>
          </div>
          <div className="">
            <Lottie animationData={loginAnimation}></Lottie>
            {/* <img className="w-[500px]" src={animation} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
