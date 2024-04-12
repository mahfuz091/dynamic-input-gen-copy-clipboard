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
      <form>
        {fields.map((field, index) => (
          <div style={{ marginTop: "10px" }} key={index} field={field}>
            <label htmlFor={field.name}>{field.name}</label>

            {field.type === "text" && (
              <input
                type='text'
                onChange={(e) => {
                  setItemState(field.name, e.target.value);
                }}
              />
            )}

            {field.type === "textarea" && (
              <textarea
                onChange={(e) => {
                  setItemState(field.name, e.target.value);
                }}
              />
            )}
          </div>
        ))}
      </form>
      <div className='formgroup'>
        <label htmlFor='Result'>Result</label>
        <textarea
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
