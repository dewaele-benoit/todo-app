import React, { useState } from "react";

const AddTodo = ({ handleAddTodo }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  return (
    <>
      <h3>Add Todo</h3>
      <div>
        <label>
          Name : <input type="text" value={name} onChange={handleChangeName} />
        </label>
      </div>
      <div>
        <label>
          Description :
          <input
            type="text"
            value={description}
            onChange={handleChangeDescription}
          />
        </label>
      </div>
      <div>
        <button onClick={() => handleAddTodo(name, description)}>Submit</button>
      </div>
    </>
  );
};

export default AddTodo;
