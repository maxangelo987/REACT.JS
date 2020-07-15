import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  maxangelo: {
    background: ""
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

export default function BasicTextFields() {
  const [data, setData] = useState("");
  const [arr, setArr] = useState([]);

  /*
  state = {
    arr: []
  }
  */
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    setArr([...arr, { name: data }]);
    setData("");
  };

  const handleOnChange = e => {
    setData(e.target.value);
  };

  const handleDelete = item => {
    var filteredArr = arr.filter(objects => objects !== item);
    setArr(filteredArr);
  };

  return (
    <div className={classes.maxangelo}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={e => handleSubmit(e)}
      >
        <TextField
          id="standard-basic"
          label="Standard"
          value={data}
          onChange={e => handleOnChange(e)}
        />
      </form>
      {arr &&
        arr.map(item => {
          return <Chip label={item.name} onDelete={() => handleDelete(item)} />;
        })}
    </div>
  );
}
