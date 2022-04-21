import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    fetchCar, fetchCar1,
} from '../redux/actions/carsActions';
import { Button, Typography, Box, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Calendar, Gear, People } from 'react-bootstrap-icons';
import { setShow } from '../redux/actions/carsActions';


const Detail = () => {
    const { id } = useParams();
    let car = useSelector(state => state.selectedCar);
    let car1 = useSelector(state => state.selectedCar1);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setShow(false));
        if (id && id !== 'undefined') {
            dispatch(fetchCar(id))
            dispatch(fetchCar1(id));
        }
    }, [dispatch, id]);

    return (
        <Grid container spacing={2} mb="5rem">
            <Grid item lg={7}>
                <Box
                    sx={{
                        padding: '1rem',
                        width: '100%',
                        border: '1px solid #E0E0E0',
                        borderRadius: '8px',
                        height: 'max-content',
                    }}
                >
                    <Typography variant='h6' sx={{ mb: '1rem' }}>
                        <b>Tentang Paket</b>
                    </Typography>
                    <Typography variant='h6' >
                        Include
                    </Typography>
                    <Typography paragraph sx={{
                        paddingLeft: '1rem',
                    }} >
                        <ul>
                            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                            <li>Sudah termasuk bensin selama 12 jam</li>
                            <li>Sudah termasuk Tiket Wisata</li>
                            <li>Sudah termasuk pajak</li>
                        </ul>
                    </Typography>
                    <Typography variant='h6' >
                        Exclude
                    </Typography>
                    <Typography paragraph sx={{
                        paddingLeft: '1rem',
                    }} >
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                    </Typography>
                    <Typography variant='h6' sx={{ mb: '1rem' }}>
                        <b>Refund, Reschedule, Overtime</b>
                    </Typography>

                    <Typography paragraph sx={{
                        paddingLeft: '1rem',
                    }} >
                        <ul>
                            <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                    </Typography>

                </Box>
                {/* button on cornner right bottom */}
                <Box
                    sx={{
                        position: 'relative',
                        bottom: '-4rem',
                    }}
                >
                    <Button
                        variant="contained"
                        color="success"
                        sx={{
                            // width: 'max-content',
                            height: '3rem',
                            marginTop: '2rem',
                            borderRadius: '8px',
                            position: 'absolute',
                            right: '0',
                            bottom: '0',
                        }}
                    >
                        <Typography color={'white'} sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}
                        >Lanjutkan Pembayaran</Typography>
                    </Button>
                </Box>
            </Grid>
            <Grid item lg={5}>
                <Grid item>
                    <Card
                        sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '10px',
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <CardMedia
                            component="img"
                            alt="Car"
                            width="200px"
                            height="200px"
                            image={car.image}
                        />
                        <CardContent>
                            <Typography>
                                {car.name} / {car.category}
                            </Typography>
                            <Box display={"flex"}>
                                <Typography mr="1rem" variant="p" color="text.secondary"
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
                                    /> {car1.penumpang}
                                </Typography>
                                <Typography mr="1rem" variant="p" color="text.secondary"
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
                                    {car1.transmisi}
                                </Typography>
                                <Typography mr="1rem" variant="p" color="text.secondary"
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
                                    {car1.time}
                                </Typography>

                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"} mt={'2rem'}>
                                <Typography variant="h6" color="text.secondary">
                                    Total
                                </Typography>

                                <Typography variant='h5' fontWeight={'700'} >
                                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(car.price)} / hari
                                </Typography>
                            </Box>
                        </CardContent>
                        <CardActions >
                            <Button
                                variant="contained"
                                color="success"
                                sx={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '10px',

                                }}
                                href={`/pembayaran/${car.id}`}
                            >
                                <Typography color={'white'} sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}
                                >Detail Rental</Typography>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Detail
