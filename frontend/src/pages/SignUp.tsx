import { CreateAccount } from "../components/CreateAccount";
import { Quote } from "../components/Quote";

export const SignUp = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <CreateAccount />
      </div>

      <div className="hidden lg:block ">
        <Quote />
      </div>
    </div>
  );
};
