import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useLocation, useNavigate} from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#eefeee',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius:50,
  width:60,
  justifyContent:'center',
  cursor: 'pointer'
}));

export default function BasicGrid() {

    const location = useLocation();
    const navigate = useNavigate();
    const [ showQuesBar ,setShowQuesBar] = React.useState<Boolean>(false)

    React.useEffect( () => {
        const navbarPosition:any = location.pathname.indexOf('q');
        if(navbarPosition === 1) {
            setShowQuesBar(true);
        } else {
            setShowQuesBar(false);
        }

        console.log(location.pathname);
    }, [location]);


  return (
    <Box sx={{ flexGrow: 1 }}>
        {
            showQuesBar ? 
            <Grid container spacing={8} direction="row"  justifyContent="center"  alignItems="center">
            <Grid item m={2}>
              <Item onClick={(e:any) => navigate('/q1')}>1</Item>
            </Grid>
            <Grid item m={2}>
              <Item onClick={(e:any) => navigate('/q2')}>2</Item>
            </Grid>
            <Grid item m={2}>
              <Item onClick={(e:any) => navigate('/q3')}>3</Item>
            </Grid>
            <Grid item m={2}>
              <Item onClick={(e:any) => navigate('/q4')}>4</Item>
            </Grid>
            <Grid item m={2}>
              <Item onClick={(e:any) => navigate('/q5')}>5</Item>
            </Grid>
          </Grid>
          :

          <Grid container spacing={8} direction="row"  justifyContent="center"  alignItems="center">
        <Grid item m={4}>
          <Item sx={{width:220, cursor:'none'}}>Enter Your Details</Item>
        </Grid>
      </Grid>
        }
    </Box>
  );
}
