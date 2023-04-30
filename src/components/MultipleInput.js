import React, { useState } from "react";
import "./MultipleInput.css";

const MultipleInput = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNo: "",
  });

  const inputHandler = (event) => {
    const { value, name } = event.target;

    setFullName((preVal) => {
      console.log(preVal);
      return {...preVal,
        [name]:value,
      };

      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: preVal.lname,
      //     email: preVal.email,
      //     phoneNo: preVal.phoneNo,
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: preVal.fname,
      //     lname: value,
      //     email: preVal.email,
      //     phoneNo: preVal.phoneNo,
      //   };
      // } else if (name === "email") {
      //   return {
      //     fname: preVal.fname,
      //     lname: preVal.lname,
      //     email: value,
      //     phoneNo: preVal.phoneNo,
      //   };
      // } else if (name === "phoneNo") {
      //   return {
      //     fname: preVal.fname,
      //     lname: preVal.lname,
      //     email: preVal.email,
      //     phoneNo: value,
      //   };
      // }
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmitHandler}>
          <div className="eventDivMulti">
            <h1 className="h1EventMulti">
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <p>{fullName.email}</p>
            <p>{fullName.phoneNo}</p>

            <input
              className="formInput"
              type="text"
              placeholder="FirstName"
              name="fname"
              value={fullName.fname}
              onChange={inputHandler}
              autoComplete="off"
            />
            <input
              className="formInput"
              type="text"
              placeholder="LastName"
              name="lname"
              value={fullName.lname}
              onChange={inputHandler}
              autoComplete="off"
            />
            <input
              className="formInput"
              type="email"
              placeholder="Email"
              name="email"
              value={fullName.email}
              onChange={inputHandler}
              autoComplete="off"
            />
            <input
              className="formInput"
              type="number"
              placeholder="Phone No"
              name="phoneNo"
              value={fullName.phoneNo}
              onChange={inputHandler}
              autoComplete="off"
            />
            <br />
            <button className="buttonEvent" type="submit">
              Submit 👍
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MultipleInput;
