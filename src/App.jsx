import { useEffect, useState } from "react";
import "./App.css";
import fields from "./fields";
import handleData from "./data";

function App() {
  const [itemStates, setItemStates] = useState({});
  const setItemState = (fieldName, value) => {
    setItemStates((prevStates) => ({
      ...prevStates,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    const initialState = {};
    fields.forEach((field) => {
      initialState[field.name] = field.name;
    });
    setItemStates(initialState);
    handleData(itemStates);
  }, []);

  const handleForm = (e) => {
    e.preventDefault();

    navigator.clipboard
      .writeText(handleData(itemStates))
      .then(() => console.log("Text copied to clipboard"))
      .catch((error) =>
        console.error("Unable to copy text to clipboard:", error)
      );
  };

  return (
    <>
      <form style={{ width: "50%" }}>
        {fields.map((field, index) => (
          <div style={{ marginTop: "10px" }} key={index}>
            <label
              style={{ float: "left", marginBottom: "10px" }}
              htmlFor={field.name}
            >
              {field.name}
            </label>

            {field.type === "text" && (
              <input
                style={{ width: "100%", padding: "20px" }}
                type='text'
                onChange={(e) => {
                  setItemState(field.name, e.target.value);
                }}
              />
            )}

            {field.type === "textarea" && (
              <textarea
                style={{ width: "100%", padding: "20px" }}
                onChange={(e) => {
                  setItemState(field.name, e.target.value);
                }}
              />
            )}
          </div>
        ))}
      </form>
      <div className='formgroup' style={{ marginTop: "20px", width: "50%" }}>
        <label style={{ float: "left", marginBottom: "10px" }} htmlFor='Result'>
          Result
        </label>
        <textarea
          style={{ width: "100%", padding: "20px" }}
          id='Result'
          name='Result'
          rows={10}
          value={handleData(itemStates)}
          readOnly
        ></textarea>
      </div>

      <button onClick={handleForm}>Copy Code</button>
    </>
  );
}

export default App;
