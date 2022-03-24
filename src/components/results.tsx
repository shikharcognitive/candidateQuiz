import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React, {FC, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

interface IResultProps {
    answers?: Array<any>,
    questions?:any
  }


const Result:FC<IResultProps> = (props:any) => {

    const [ percentage, setPercentage ] = useState<any>(0);
    const [ totalCount, setTotalCount ] = useState<any>(0);
    const [answerStyle, setAnswerStyle] = useState<any>([])
    const navigate = useNavigate();

    useEffect( () => {
        if(props.answers && props.answers.length === 0 ) {
            return navigate('/');
        }

        if( props.answers.length === props.questions.length ) {
            setAnswersPercentage();
        }
// console.log(props.answers);
    },[]);

    const setAnswersPercentage:any = () => {
        const answered = props.answers;
        const questions = props.questions;
        let changePercentage = 0;
        let total = 0;
        if(answered[0].id === questions[0].id) {
            if(answered[0].answer === questions[0].answer) { changePercentage += 20; total += 1; setAnswerStyle([true,...answerStyle]) };
        }
        if(answered[1].id === questions[1].id) {
           if( answered[1].answer === questions[1].answer ) { changePercentage += 20 ; total += 1 };
        }
        if(answered[2].id === questions[2].id) {
            if(answered[2].answer === questions[2].answer ) { changePercentage += 20 ; total += 1 };
        }
        if(answered[3].id === questions[3].id) {
            if(answered[3].answer.length === questions[3].answer.length ) {
                if(answered[3].answer[0] === questions[3].answer[0] && answered[3].answer[1] === questions[3].answer[1] )
                {
                    changePercentage += 20 ; total += 1
                }
            };
        }
        if(answered[4].id === questions[4].id) {
            if(answered[4].answer.length === questions[4].answer.length ) {
                if(answered[4].answer[0] === questions[4].answer[0] && answered[4].answer[1] === questions[4].answer[1] &&
                    answered[4].answer[2] === questions[4].answer[2] && answered[4].answer[3] === questions[4].answer[3] )
                {
                    changePercentage += 20 ; total += 1
                    
                }
            }
        }
        setPercentage(changePercentage);
        setTotalCount(total)
        
    }

    const renderStyleColor:any = (id:any) => {
        const answered = props.answers;
        const questions = props.questions;

        if( answered[id].answer === questions[id].answer)  {return 'green' } else { return 'red'}

    }

    return (
        <Box mt={2} sx={{justifyContent:'center', alignItems:'center'}}>
            <h3>{`Result ${totalCount}/5`}</h3>
            <h5> Result Percentage Here</h5>
            <Box
                sx={{
                    width: 200,
                    height: 200,
                    marginLeft:'45%',
                    background: `conic-gradient(green ${percentage}% ,red 0)`,
                    borderRadius: "50%",
                }}
            ></Box>
             <Box mt={2}>
                 <h3>Result answer</h3>
                 <Grid container direction='column' spacing={2} sx={{alignItems:'center'}}>
                    
                    <Grid item xs={8}>
                        <Card sx={{ width: 370 , background:renderStyleColor('0')}}>
                            <CardContent>
                                <Typography variant="h5" component="div" color="text.secondary" gutterBottom>
                                {props.questions[0].question} = {props.answers[0].answer} 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={8}>
                        <Card sx={{ width: 370 , background:renderStyleColor('1')}}>
                            <CardContent>
                                <Typography variant="h5" component="div" color="text.secondary" gutterBottom>
                                {props.questions[1].question} = {props.answers[1].answer} 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={8}>
                        <Card sx={{ width: 370, background:renderStyleColor('2')}}>
                            <CardContent>
                                <Typography variant="h5" component="div" color="text.secondary" gutterBottom>
                                {props.questions[2].question} = {props.answers[2].answer} 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={8}>
                        <Card sx={{ width: 370 , background:renderStyleColor('3')}}>
                            <CardContent>
                                <Typography variant="h5" component="div" color="text.secondary" gutterBottom>
                                {props.questions[3].question} = {props.answers[3].answer} 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={8}>
                        <Card sx={{ width: 370, background:renderStyleColor('4')}}>
                            <CardContent>
                                <Typography variant="h5" component="div" color="text.secondary" gutterBottom>
                                {props.questions[4].question} = {props.answers[4].answer} 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
             </Box>
             <Box mt={2}>
                <Button variant="contained" onClick={() => navigate('/')}>Home</Button>
            </Box>

        </Box>
    )
};

export default Result;