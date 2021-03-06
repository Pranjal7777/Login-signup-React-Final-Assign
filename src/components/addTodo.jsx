import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addOnce, addTodo } from "../Redux/todo/action";
import axios from "axios";

export const AddToToDo = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { value } = e.target;
    setText(value);
  };

  useEffect(() => {
    tododatareceived();
  }, []);

  const sendDataToPost = () => {
    axios
      .post("http://localhost:3001/todo", { title: text, status: false })
      .then((res) => {
        tododatareceived();
      });
  };

  const tododatareceived = () => {
    axios.get("http://localhost:3001/todo").then((res) => {
      dispatch(addOnce(res.data));
    });
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button
        onClick={() => {
          sendDataToPost();
          setText("");
        }}
      >
        ADD
      </button>
    </div>
  );
};
