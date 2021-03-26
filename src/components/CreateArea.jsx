import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [input, updateInput] = useState({
    title: "",
    content: ""
  });

  //use for button zoom in and expand the text area the first time
  let [zoomIn, setZoomIn] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    updateInput(prev => {
      return {
        ...prev,
        [name]: value
      }
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.onAdd(input);
    updateInput({ title: "", content: "" });
  }

  function handleFirstClick() {
    setZoomIn(true);
  }

  return (
    <div>
      <form className="create-note">
        {/* only display the text area the first time */}
        {zoomIn && <input name="title" placeholder="Title" value={input.title} onChange={handleChange} />}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={zoomIn ? 3 : 1} value={input.content}
          onChange={handleChange}
          onClick={handleFirstClick}
        />
        <Zoom in={zoomIn}>
          <Fab onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
