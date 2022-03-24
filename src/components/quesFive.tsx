import { Box, Button, TextField, Grid } from '@mui/material';
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
        <h5>Question - {props.ques.id} </h5>
        <h5>{props.ques.question} </h5>
        <Box>
            <Grid container  sx={{ justifyContent : 'center'}}>
                <Grid item xs={2}>
                    {
                        props.ques.questionOption.map( (e:string) => {
                            return (<h4>{e}</h4>)
                        })
                    }
                </Grid>
                <Grid item xs={2}>
                    <h5>8</h5>
                </Grid>
                <Grid item xs={2}>
                {
                        props.ques.option.map( (e:string) => {
                            return (<h4>{e}</h4>)
                        })
                    }
                </Grid>
            </Grid>
        </Box>
        {/* <TextField onChange={(e:any) =>setAnswer(e.target.value) }></TextField> */}
        <Box mt={2}>
        <Button variant="contained" onClick={() => reRoute('p')}>Previous</Button> &nbsp;&nbsp;&nbsp; <Button variant="contained" onClick={() => reRoute('f')}>Next</Button>
        </Box>
        </div>
    )
};

export default QuesFive;