import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SigninType } from "@harshashetty67/common-app/dist/index";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Login = () => {
  const [inputList, setInputList] = useState<SigninType>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function singInUser() {
    try {
      const response = await axios.post(`${BACKEND_URL}/user/signin`, {
        email: inputList.email,
        password: inputList.password,
      });
      console.log(response.data.jwt);
      localStorage.setItem("token", response.data.jwt);
      navigate("/blog/1");
    } catch (e) {
      alert(`Some error occured while signin : ${e}`);
    }
  }

  return (
    <div className="h-screen w-full flex justify-center items-center px-10">
      <div className="flex flex-col">
        <h2 className="text-4xl font-extrabold">Login to your account</h2>
        <span className="text-gray-500 text-md font-medium mt-4 text-center">
          Don't have an account?
          <Link className="underline ml-2" to="/signup">
            Signup
          </Link>
        </span>

        <div className="mt-4">
          <InputComponent
            type="text"
            label="Email"
            placeholder="Enter your email"
            onChange={(e) => {
              setInputList({ ...inputList, email: e.target.value });
            }}
          />
          <InputComponent
            type="password"
            label="Password"
            placeholder="Enter your password"
            onChange={(e) => {
              setInputList({ ...inputList, password: e.target.value });
            }}
          />
          <button
            onClick={singInUser}
            className="w-full bg-black text-white text-lg font-medium text-center rounded-lg py-3"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

interface InputFormat {
  placeholder: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLElement>) => void;
  type: string;
}

const InputComponent = ({
  label,
  placeholder,
  type,
  onChange,
}: InputFormat) => {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
};
