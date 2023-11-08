import { useState } from "react";
import { createCertificateSchema } from "../helper/schema";
import { v4 as uuidv4 } from "uuid";

const uuId = uuidv4().slice(0, 6);
const initialValue = {
  name: "",
  from: "",
  to: "",
  email: "",
  options: "",
  id: uuId,
};
const useCreateCertificateHook = () => {
  const [inputVal, setInputVal] = useState(initialValue);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setInputVal((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const handleCreateCertificate = async () => {
    try {
      const value = await createCertificateSchema.validateAsync(inputVal);
      setInputVal(initialValue);
      console.log(value);
    } catch (err) {
      alert(err);
    }
  };

  return {
    inputChange,
    inputVal,
    setInputVal,
    handleCreateCertificate,
  };
};

export default useCreateCertificateHook;
