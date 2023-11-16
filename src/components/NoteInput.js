import * as React from "react";
import Card from "@mui/joy/Card";
import Textarea from "@mui/joy/Textarea";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Input from "@mui/joy/Input";
import "./notestyles.css";

export default function NoteInput(props) {
  const [titledisplay, setTitleDisplay] = React.useState(false);
  const TitleToggle = () => {
    setTitleDisplay(true);
  };

  return (
    <div className="main_note">
      <Card
        sx={{
          width: "60%",
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" // Adjust the shadow here
        }}
      >
        {titledisplay && (
          <Input
            placeholder="Title"
            size="lg"
            variant="plain"
            name="title"
            value={props.val1}
            onChange={props.changeHandler}
          />
        )}
        <Textarea
          disabled={false}
          minRows={2}
          placeholder="Take a note..."
          variant="soft"
          value={props.val2}
          name="noteVal"
          onClick={TitleToggle}
          onChange={props.changeHandler}
        />
        <div style={{ position: "relative", marginLeft: "90%" }}>
          <Fab color="primary" s aria-label="add" onClick={props.addFunction}>
            <AddIcon />
          </Fab>
        </div>
      </Card>
    </div>
  );
}
