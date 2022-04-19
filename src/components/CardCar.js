import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Calendar, Gear, People } from 'react-bootstrap-icons'

const CardCar = ({ car }) => {

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
                <CardContent>
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
                {/* <CardBody
                    car={car}
                /> */}
                {/* button full color success */}
                {/* <CarButton car={car} /> */}
            </Card>
        </Grid>
    )
}

export default CardCar
