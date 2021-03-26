import React, {useState} from "react";

function CreateArea(props) {

  const [input, updateInput] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const {name, value} = event.target;
    updateInput(prev => {
      return {
        ...prev,
        [name]: value
      }
    });
  }
  function handleSubmit(event){
    event.preventDefault();
    props.onAdd(input);
    updateInput({title: "", content: ""});
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value = {input.title} onChange = {handleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" value = {input.content} onChange = {handleChange} />
        <button onClick = {handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
