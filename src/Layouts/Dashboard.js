import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/actions/carsActions';
import { Grid } from '@mui/material';
import CardCar from '../containers/CardCar';

const Dashboard = () => {
    const cars = useSelector((state) => state.allCars.cars);
    const show = useSelector((state) => state.show.show);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);

    console.log("cars : ", cars);

    return (
        <>
            {
                !show && (
                    Object.keys(cars).length === 0 ? (
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
