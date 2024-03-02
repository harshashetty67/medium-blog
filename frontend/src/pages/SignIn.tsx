import { Login } from "../components/Login";
import { Quote } from "../components/Quote";

export const SignIn = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Login />
      </div>

      <div className="hidden lg:block ">
        <Quote />
      </div>
    </div>
  );
};
