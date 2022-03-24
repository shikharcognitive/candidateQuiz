import { Box, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React, { FC, useState} from 'react';
import { useNavigate} from 'react-router-dom';

interface IQ4Props {
    ques?: String,
    setAnswers?:any
  }


const QuesFour:FC<IQ4Props> = (props:any) => {
    const[ answer, setAnswer] = useState<any>('');
    const navigate = useNavigate();

    const reRoute:any = (type:any) => {
        if(answer === '') return alert('please submit the answer first');

            if(type === 'f') {
                props.setAnswers('4', answer);
                navigate('/q5')
            }

            if(type==='p') {
                props.setAnswers('4', answer);
                navigate('/q3');
            }
    }

    return (
        <div>
        <h5>{props.ques.heading} </h5>
        <h5>{props.ques.question} </h5>
        <Box>
        <FormGroup
                sx={{ alignItems : 'center' , flexDirection:'row', justifyContent:'center'}}
                onChange={(e:any) =>setAnswer(e.target.value) }
            >
                {
                    props.ques.option.map( (e:any) => {
                        return (
                            <FormControlLabel key={e} value={e} control={<Checkbox />} label={e} />
                        )
                    })

                }
            </FormGroup>
        </Box>
        <Box mt={2}>
        <Button variant="contained" onClick={() => reRoute('p')}>Previous</Button> &nbsp;&nbsp;&nbsp; <Button variant="contained" onClick={() => reRoute('f')}>Next</Button>
        </Box>
        </div>
    )
};

export default QuesFour;