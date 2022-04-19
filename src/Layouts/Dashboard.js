import { Grid, Typography } from '@mui/material';
import React from 'react'
import axios from 'axios';

import { AppContext } from '../App';
import CardCar from '../components/CardCar';

const Dashboard = () => {
    const { show, setCars, cars, } = React.useContext(AppContext);

    const getCars = async () => {
        const res = await axios.get(
            "https://625bcc2d50128c57020785c4.mockapi.io/binarcar/mobil"
        )
        console.log(res.data);
        setCars(res.data)
    }

    React.useEffect(() => {
        getCars()
    }, [])

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
                            cars.map((car) => {
                                return (
                                    <CardCar car={car} />
                                )
                            })
                        }
                    </Grid>
                )
            }
        </>

    )
}

export default Dashboard
