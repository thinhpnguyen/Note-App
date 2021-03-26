import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import notes from '../notes';
import CreateArea from "./CreateArea";

function App() {
  const [notes, updateNotes] = useState([]);

  function handleAdd(input) {
    updateNotes(prev => {
      return [...prev, input];
    });
    //console.log(input);
  }

  function handleDelete(id){
    // state function => virtual func with prev as para => filter => virtual with index of each item as para
    updateNotes(prev => {
      return prev.filter((_, index) => {
        // return only items that index is not id
        return index !== id;
      })
    })
    // console.log("delete");
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd} />
      <ul>
        {notes.map((item, index) => {
          return <Note key={index} id={index} title={item.title} content={item.content} onDelete = {handleDelete} />;
        })}
      </ul>

      <Footer />
    </div>
  );
}

export default App;
