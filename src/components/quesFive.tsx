import { Box, Button, Grid } from '@mui/material';
import React, { FC, useState} from 'react';
import { useNavigate} from 'react-router-dom';

interface IQ5Props {
    ques?: String,
    setAnswers?:any
  }


  const styles:any = {
    pointer: {
        cursor: 'pointer'
    },
  };

const QuesFive:FC<IQ5Props> = (props:any) => {
    const navigate = useNavigate();
    const[ answerArr, setAnswerArr] = useState<any>([]);

    const reRoute:any = (type:any) => {
        if(answerArr.length < 4 ) return alert('please submit all answers first');

            if(type === 'f') {
                props.setAnswers('5', answerArr);
                navigate('/result')
            }

            if(type==='p') {
                props.setAnswers('5', answerArr);
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
                    {
                        answerArr.length > 0 && answerArr.map( (e:any) => {
                            return (<h4  aria-disabled={true}>{e}</h4>)
                        })
                    }
                </Grid>
                <Grid item xs={2}>
                {
                        props.ques.option.map( (e:string) => {
                            return (<h4 className={styles.pointer} onClick={(event:any) =>setAnswerArr([e,...answerArr]) }>{e}</h4>)
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