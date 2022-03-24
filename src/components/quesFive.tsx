import { Box, Button, TextField } from '@mui/material';
import React, { FC, useState} from 'react';
import { useNavigate} from 'react-router-dom';

interface IQ5Props {
    ques?: String,
    setAnswers?:any
  }


const QuesFive:FC<IQ5Props> = (props:any) => {
    const[ answer, setAnswer] = useState<any>('');
    const navigate = useNavigate();

    const reRoute:any = (type:any) => {
        if(answer === '') return alert('please submit the answer first');

            if(type === 'f') {
                props.setAnswers('5', answer);
                navigate('/result')
            }

            if(type==='p') {
                props.setAnswers('5', answer);
                navigate('/q4');
            }
    }

    return (
        <div>
        <h5>{props.ques.heading} </h5>
        <h5>{props.ques.question} </h5>
        <TextField onChange={(e:any) =>setAnswer(e.target.value) }></TextField>
        <Box mt={2}>
        <Button variant="contained" onClick={() => reRoute('p')}>Previous</Button> &nbsp;&nbsp;&nbsp; <Button variant="contained" onClick={() => reRoute('f')}>Next</Button>
        </Box>
        </div>
    )
};

export default QuesFive;