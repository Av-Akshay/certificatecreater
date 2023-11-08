import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginInfoSchema } from "../helper/schema";

const INITIAL_STATE = {
  username: "",
  password: "",
};
const useLoginHook = () => {
  const [loginInfo, setLoginInfo] = useState(INITIAL_STATE);

  const history = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSignIn = async () => {
    try {
      const value = await loginInfoSchema.validateAsync(loginInfo);
      if (Object.keys(value).length > 0) {
        history("/certificates");
        setLoginInfo(INITIAL_STATE);
      }
    } catch (err) {
      alert(err);
    }
  };
  return {
    loginInfo,
    setLoginInfo,
    handleSignIn,
    handleChange,
  };
};

export default useLoginHook;
