import * as React from "react";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import Note from "./components/Note";
import "./components/notestyles.css";
import Typography from "@mui/joy/Typography";

function App() {
  const [arr, setArr] = React.useState([]);
  const [note, setNote] = React.useState({ title: "", noteVal: "" });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const AddNote = () => {
    if (note.title === "" || note.noteVal === "") return;
    else {
      setArr((prev) => {
        return [...prev, note];
      });
      setNote(() => {
        return { title: "", noteVal: "" };
      });
    }
  };

  const deleteNote = (index) => {
    console.log("note with index ", index, " is deleted");

    setArr((prev) => {
      return prev.filter((ele, idx) => {
        return idx !== index;
      });
    });
  };

  return (
    <>
      <Header />
      <NoteInput
        changeHandler={handleChange}
        val1={note.title}
        val2={note.noteVal}
        addFunction={AddNote}
      />
      <Typography
        color="primary"
        level="h3"
        noWrap={false}
        variant="soft"
        sx={{
          marginBottom: "20px",
          paddingBottom: "10px",
          paddingLeft: "50px"
        }}
      >
        Your Notes:
      </Typography>

      <div className="note-container">
        {arr.map((arrVal, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={arrVal.title}
              body={arrVal.noteVal}
              delFunction={deleteNote}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
