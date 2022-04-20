import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Calendar, Gear, People } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

const CardCar = () => {
    const cars = useSelector((state) => state.allCars.cars);
    const renderList = cars.map((car) => {
        return (
            <Grid item>
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
                            {car.description}
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
                            /> {car.penumpang}
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
                            {car.transmisi}
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
                            {car.time}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            color="success"
                            size="large"
                            sx={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '1rem',
                                borderRadius: '10px',
                            }}
                            href={`/detail/${car.id}`}
                        >
                            Detail Rental
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
