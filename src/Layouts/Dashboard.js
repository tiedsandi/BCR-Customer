import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/actions/carsActions';
import { Grid } from '@mui/material';
import { AppContext } from '../App';
import CardCar from '../containers/CardCar';



const Dashboard = () => {
    const { show } = React.useContext(AppContext);

    const cars = useSelector((state) => state.allCars.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCars());
    }, []);

    console.log("cars : ", cars);

    return (
        <>
            {
                !show && (
                    <Grid
                        container
                        mx={-4}
                        display='flex'
                        justifyContent='center'
                        spacing={2}
                    >
                        {
                            <CardCar />
                        }
                    </Grid>
                )
            }
        </>

    )
}

export default Dashboard
