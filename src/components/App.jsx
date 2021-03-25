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
    console.log(input);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd} />
      <ul>
        {notes.map((item, index) => {
          return <Note key={index} title={item.title} content={item.content} />;
        })}
      </ul>

      <Footer />
    </div>
  );
}

export default App;
