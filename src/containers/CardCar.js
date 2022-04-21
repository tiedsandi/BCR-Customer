import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Calendar, Gear, People } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

const CardCar = () => {
    const cars = useSelector((state) => state.allCars.cars);
    const cars1 = useSelector((state) => state.allCars.cars1);
    const renderList = cars.map((car) => {
        return (

            <Grid item key={car.id}>
                <Card
                    sx={{
                        width: '480px',
                        height: '100%',
                        borderRadius: '10px',
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <CardMedia
                        component="img"
                        alt="Car"
                        height="300px"

                        image={car.image}
                    />
                    <CardContent sx={{ minHeight: '15rem' }}>
                        <Typography>
                            {car.name} / {car.category}
                        </Typography>
                        <Typography variant='h5' fontWeight={'700'} >
                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(car.price)} / hari
                        </Typography>
                        <Typography variant='body2' >
                            {cars1[car.id + 1].description}
                        </Typography>
                        <Typography variant="p" color="text.secondary"
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: '.6rem',
                            }}
                        >
                            <People
                                size={20}
                                color="primary"
                                style={{ marginRight: '.5rem' }}
                            /> {cars1[car.id + 1].penumpang}
                        </Typography>
                        <Typography variant="p" color="text.secondary"
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                // justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: '.6rem',
                            }}
                        >
                            <Gear
                                size={20}
                                color="primary"
                                style={{ marginRight: '.5rem' }}
                            />
                            {cars1[car.id + 1].transmisi}
                        </Typography>
                        <Typography variant="p" color="text.secondary"
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: '.6rem',
                            }}
                        >
                            <Calendar
                                size={20}
                                color="primary"
                                style={{ marginRight: '.5rem' }}
                            />
                            {cars1[car.id + 1].time}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            color="success"
                            sx={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '10px',
                            }}
                            href={`/detail/${car.id}`}
                        >
                            <Typography color={'white'} sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}
                            >Detail Rental</Typography>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

        )
    })
    return (
        <>
            {renderList}
        </>
    )
}

export default CardCar
