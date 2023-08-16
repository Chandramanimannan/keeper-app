import React from "react";

// import DeleteIcon from '@mui/icons-material/Delete';https://icons8.com/icon/102350/delete
function Note(props) {

function handleClick(){
  props.onDelete(props.id);
}

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {/* <DeleteIcon/> */}
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
