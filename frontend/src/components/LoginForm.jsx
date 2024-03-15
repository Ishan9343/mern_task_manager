import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validateManyFields from "../validations";
import Input from "./utils/Input";
import { useDispatch, useSelector } from "react-redux";
import { postLoginData } from "../redux/actions/authActions";
import Loader from "./utils/Loader";
import { useEffect } from "react";

const LoginForm = ({ redirectUrl }) => {
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const authState = useSelector((state) => state.authReducer);
  const { loading, isLoggedIn } = authState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(redirectUrl || "/");
    }
  }, [authState, redirectUrl, isLoggedIn, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateManyFields("login", formData);
    setFormErrors({});
    if (errors.length > 0) {
      setFormErrors(
        errors.reduce((total, ob) => ({ ...total, [ob.field]: ob.err }), {})
      );
      return;
    }
    dispatch(postLoginData(formData.email, formData.password));
  };

  const fieldError = (field) => (
    <p
      className={`mt-1 text-pink-600 text-sm ${
        formErrors[field] ? "block" : "hidden"
      }`}
    >
      <i className="mr-2 fa-solid fa-circle-exclamation"></i>
      {formErrors[field]}
    </p>
  );

  return (
    <>
    <div className="bg-purple-50 min-h-screen flex justify-center items-center">
      <form className="m-auto my-16 max-w-[500px] bg-white p-8 border-2 shadow-md rounded-md">
        {loading ? (
          <Loader />
        ) : (
          <>
          <h2 className="text-center mb-4">Enter details to login here</h2>
            <div class="md:flex md:items-center mb-6">
              
              <div class="md:w-1/3">
                <label
                  htmlFor="email"
                  className="after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Email
                </label>
              </div>
              <div class="md:w-2/3">
                <Input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  placeholder="youremail@domain.com"
                  onChange={handleChange}
                />
                {fieldError("email")}{" "}
              </div>
            </div>

            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  htmlFor="password"
                  className="after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Password
                </label>
              </div>
              <div class="md:w-2/3">
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  placeholder="Your password.."
                  onChange={handleChange}
                />
                {fieldError("password")}{" "}
              </div>
            </div>

            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <button
                  class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={handleSubmit}
                >
                  Login
                </button>
                <div className="pt-4">
                  <Link to="/signup" className="text-blue-400">
                    Don't have an account? Signup here
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </form>
      </div>
    </>
  );
};

export default LoginForm;
