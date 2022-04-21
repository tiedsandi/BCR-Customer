import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars, fetchCars1 } from '../redux/actions/carsActions';
import { Grid } from '@mui/material';
import CardCar from '../containers/CardCar';

const Dashboard = () => {
    const cars = useSelector((state) => state.allCars.cars);
    const show = useSelector((state) => state.show.show);
    const cars1 = useSelector((state) => state.allCars.cars1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCars());
        dispatch(fetchCars1());
    }, [dispatch]);

    console.log("cars : ", cars);
    console.log("cars1 : ", cars1);

    return (
        <>
            {
                !show && (
                    Object.keys(cars1).length === 0 ? (
                        <div>...Loading</div>
                    ) : (

                        <Grid
                            container
                            mx={-4}
                            display='flex'
                            spacing={2}
                        >
                            {
                                <CardCar />
                            }
                        </Grid>
                    )
                )
            }
        </>

    )
}

export default Dashboard
