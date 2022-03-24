import React, {FC, useState} from 'react';
import {
    FormControl,
    TextField,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
    Button,
    Select,
    MenuItem,
    SelectChangeEvent,
    Box
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";

const UserDetails:FC<any> = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState<string>("select");
  
    const handleChange = (event: SelectChangeEvent) => {
      setValue(event.target.value as string);
    };
    const submitHandler = (e: any) => {
      e.preventDefault();
      navigate("/q1");
    };
    return (
        <Box sx={{  display:'contents', width: "500px", height: "500px"}}>
        <FormControl 
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid black",            
          }}
          component="form"
          onSubmit={submitHandler}
        >
          <TextField
            sx={{ padding: "40px", width: "400px" }}
            placeholder="Enter your name"
            required
          ></TextField>
          <TextField  sx={{ padding: "10px", width: "400px" }} placeholder="Enter your age" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontSize: "30px" }}
          >
            Gender
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
          <label style={styles.container}>Question Type</label> <br />
          <Select
            value={value}
            label="Language"
            onChange={handleChange}
          >
            <MenuItem value={"select"}>English</MenuItem>
            <MenuItem value={"english"}>English</MenuItem>
            <MenuItem value={"telugu"}>Maths</MenuItem>
            <MenuItem value={"hindi"}>Physics</MenuItem>
          </Select>
          <Button
            sx={{ width: "200px", padding: "10px", margin: "2rem" }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </FormControl>
        </Box>
      );
    };
    
    const styles = {
      container: {
        fontWeight: "bold",
        display: "grid",
      },
    };

export default UserDetails;