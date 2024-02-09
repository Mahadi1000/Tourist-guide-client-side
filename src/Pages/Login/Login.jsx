import {  useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../firebase/AuthProvider";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";

/* eslint-disable react/no-unescaped-entities */
const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [disabled, setDisabled] = useState(true);
  const { signIn, signInWithGoogle,  } = useContext(AuthContext)
  const navigate = useNavigate();
  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@#$!%^&*]{6,}$/;
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate("/");
    });
    if (!email.match(emailRegex)) {
      toast.error("Invalid email format. Please enter a valid email address.");
    }

    if (!password.match(passwordRegex)) {
      toast.error(
        "Password must be at least 6 characters and contain at least one uppercase letter, one lowercase letter, and one digit."
      );
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      toast.success("Successfully Logged In!");
      console.log(result.user);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    });
  };

  const handleValidateCaptcha = (event) => {
    const userCaptchaValue = event.target.value;
    if (validateCaptcha(userCaptchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-center bg-no-repeat bg-cover text-white"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/bgR6Mpb/pexels-ariful-haque-3675856.jpg')",
      }}
    >
      <form onSubmit={handleLogin}>
        <div className="bg-transparent backdrop-blur-sm p-8 rounded-lg shadow-2xl transform transition-transform hover:scale-105">
          <h2 className="text-3xl font-bold text-black text-center mb-4 ">
            Login
          </h2>

          <div className="mb-4">
            <label className="block text-black">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 border rounded-md text-black focus:ring focus:ring-blue-200"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-3 py-2 text-black border rounded-md border-gray-300 focus:ring focus:ring-blue-200"
              placeholder="Password"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <LoadCanvasTemplate></LoadCanvasTemplate>
            </label>
            <input
              onBlur={handleValidateCaptcha}
              type="text"
              name="captcha"
              placeholder="type the captcha above"
              className="input input-bordered text-black"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 font-bold hover:underline">
              Forgot Password?
            </a>
          </div>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Login
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="w-full mt-2 btn btn-outline btn-info"
          >
            Sign In with Google.
          </button>

          <p className="mt-4 text-center text-gray-200">
            Dont have an account?
            <Link
              to="/register"
              className="text-blue-600 font-bold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Login;
