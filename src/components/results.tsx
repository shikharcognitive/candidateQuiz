import React, {FC, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

interface IResultProps {
    answers?: Array<any>,
  }


const Result:FC<IResultProps> = (props:any) => {
    const navigate = useNavigate();

    useEffect( () => {
        if(props.answers && props.answers.length === 0 ) {
            return navigate('/');
        }
console.log(props.answers);
    },[])
    return (
        <h5>all questions results </h5>
    )
};

export default Result;