import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Note(props) {
  const [expanded, setExpanded] = React.useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        width: expanded ? "auto" : 300,
        minWidth: 300,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
      }}
    >
      <div>
        <Typography level="title-lg">{props.title}</Typography>
      </div>

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "200px",
          overflow: "hidden"
        }}
      >
        <div style={{ flex: 1 }}>
          <Typography
            level="body-s"
            sx={{
              whiteSpace: "pre-wrap", // Allow text to wrap to the next line
              overflow: expanded ? "visible" : "hidden",
              maxHeight: expanded ? "none" : "100px", // Adjust the maximum height
              overflowWrap: "break-word" // Allow the text to wrap
            }}
            onClick={toggleExpanded}
          >
            {props.body}
          </Typography>
          <IconButton
            aria-label="delete"
            size="large"
            color="danger"
            sx={{ paddingTop: "10px" }}
            onClick={() => props.delFunction(props.id)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}
