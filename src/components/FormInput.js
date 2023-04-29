import React, { useState } from "react";
import "../App.css";

const FormInput = () => {
  const [name, setName] = useState("")
  const [fullName, setFullName] = useState()

  const inputHandler = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const onSubmitHandler = () => {
    setFullName(name);
  };

  return (
    <>
      <div className="eventDiv">
        <h1 className="h1Event">Hello {fullName}</h1>
        <input
          className="formInput"
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={inputHandler}
        />
        <button className="buttonEvent" onClick={onSubmitHandler}>
          click me
        </button>
      </div>
    </>
  );
};

export default FormInput