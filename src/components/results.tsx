import { Box } from '@mui/material';
import React, {FC, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

interface IResultProps {
    answers?: Array<any>,
    questions?:any
  }


const Result:FC<IResultProps> = (props:any) => {

    const [ percentage, setPercentage ] = useState<any>(0)

    const navigate = useNavigate();

    useEffect( () => {
        if(props.answers && props.answers.length === 0 ) {
            return navigate('/');
        }
        setAnswersPercentage()
// console.log(props.answers);
    },[]);

    const setAnswersPercentage:any = () => {
        // console.log(percentage);
        const answered = props.answers;
        const questions = props.questions;
        let changePercentage = 0;
        if(answered[0].id === questions[0].id) {
            if(answered[0].answer === questions[0].answer) { changePercentage += 20 };
        }
        if(answered[1].id === questions[1].id) {
           if( answered[1].answer === questions[1].answer ) { changePercentage += 20  };
        }
        if(answered[2].id === questions[2].id) {
            if(answered[2].answer === questions[2].answer ) { changePercentage += 20  };
        }
        if(answered[3].id === questions[3].id) {
            if(answered[3].answer.length === questions[3].answer.length ) {
                if(answered[3].answer[0] === questions[3].answer[0] && answered[3].answer[1] === questions[3].answer[1] )
                {
                    changePercentage += 20 
                }
            };
        }
        if(answered[4].id === questions[4].id) {
            if(answered[4].answer.length === questions[4].answer.length ) {
                if(answered[4].answer[0] === questions[4].answer[0] && answered[4].answer[1] === questions[4].answer[1] &&
                    answered[4].answer[2] === questions[4].answer[2] && answered[4].answer[3] === questions[4].answer[3] )
                {
                    changePercentage += 20 
                }
            }
        }
        setPercentage(changePercentage)
    }

    return (
        <Box mt={2} sx={{justifyContent:'center', alignItems:'center'}}>
            <h3>Results</h3>
            <h5> Result Percentage Here</h5>
                <Box
                    sx={{
                        width: 200,
                        height: 200,
                        background: `conic-gradient(green ${percentage}% ,red 0)`,
                        borderRadius: "50%",
                    }}
                ></Box>

        </Box>
    )
};

export default Result;