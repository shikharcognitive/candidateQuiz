import { Box, Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { FC, useState} from 'react';
import { useNavigate} from 'react-router-dom';
interface IQ2Props {
    ques?: String,
    setAnswers?:any
  }

const QuesTwo:FC<IQ2Props> = (props:any) => {
    const[ answer, setAnswer] = useState<any>('');
    const navigate = useNavigate();

    const reRoute:any = (type:any) => {
        if(answer === '') return alert('please submit the answer first');

            if(type === 'f') {
                props.setAnswers('2', answer);
                navigate('/q3')
            }

            if(type==='p') {
                props.setAnswers('2', answer);
                navigate('/q1');
            }
    }

    return (
        <div>
        <h5>Question - {props.ques.id} </h5>
        <h5>{props.ques.question} </h5>
        <Box>
        <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                sx={{ alignItems : 'center' , flexDirection:'row', justifyContent:'center'}}
                onChange={(e:any) =>setAnswer(e.target.value) }
            >
                {
                    props.ques.option.map( (e:any) => {
                        return (
                            <FormControlLabel key={e} value={e} control={<Radio />} label={e} />
                        )
                    })

                }
            </RadioGroup>
        </Box>
        <Box mt={2}>
        <Button variant="contained" onClick={() => reRoute('p')}>Previous</Button> &nbsp;&nbsp;&nbsp; <Button variant="contained" onClick={() => reRoute('f')}>Next</Button>
        </Box>
        </div>
    )
};

export default QuesTwo;