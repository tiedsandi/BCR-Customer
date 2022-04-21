import { Button, FormControl, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setShow } from '../redux/actions/carsActions';

const Search = () => {
    const show = useSelector((state) => state.show.show)
    const dispatch = useDispatch()
    const cars1 = useSelector((state) => state.allCars.cars1);
    // const cars = useSelector((state) => state.allCars.cars);

    const transmisi = [...new Set(cars1.map((car) => car.transmisi))];
    const tipe = [{ label: 'small', value: 'small' }, { label: 'medium', value: 'medium' }, { label: 'large', value: 'large' }];



    return (
        <Grid
            position={'absolute'}
            container
            width={'80%'}
            pb={'2rem'}
            pr={'2rem'}

            bgcolor="white"
            sx={{
                left: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',

            }}
            spacing={2}
            display='flex'
            justifyContent='center'
            zIndex={'100'}
        >
            <Grid item xs={12}>
                <Typography variant='h6'>
                    {show ? '' : 'Pencarianmu'}
                </Typography>
            </Grid>

            <Grid item xs={3}>
                <FormControl fullWidth>
                    <Typography paragraph>Tipe Mesin</Typography>
                    <TextField
                        select
                        defaultValue={'Semua'}
                    >
                        <MenuItem disabled value="">
                            <em>Pilih Jenis Mesin</em>
                        </MenuItem>
                        <MenuItem value={'Semua'}>Semua</MenuItem>
                        {/* Menu item from array transmisi*/}
                        {transmisi.map((transmisi) => (
                            <MenuItem key={transmisi} value={transmisi}>
                                {transmisi}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
            </Grid>

            <Grid item xs={3}>
                <FormControl fullWidth>
                    <Typography paragraph>Tipe Mobil</Typography>
                    <TextField
                        select
                        defaultValue={'Semua'}
                    >
                        <MenuItem disabled value="">
                            <em>Pilih Tipe Mobil</em>
                        </MenuItem>

                        <MenuItem value={'Semua'}>Semua</MenuItem>
                        {/* Menu item from array transmisi*/}
                        {tipe.map((tipe) => (
                            <MenuItem key={tipe.value} value={tipe.value}>
                                {tipe.label}
                            </MenuItem>
                        ))}
                    </TextField>

                </FormControl>

            </Grid>

            <Grid item xs={3}>
                <FormControl fullWidth>
                    <Typography paragraph>Tanggal</Typography>
                    <TextField type={'date'} placeholder="Pilih Tanggal" />
                </FormControl>

            </Grid>

            <Grid item xs={3} display={'flex'}>
                <Grid item xs={10}>
                    <FormControl >
                        <Typography paragraph>Jumlah Penumpang (optional)</Typography>
                        <TextField type={'number'} placeholder="Jumlah Penumpang" />

                    </FormControl>
                </Grid>
                <Grid item xs={5}
                    position={'relative'}
                    justifyContent={'center'}
                    alignItems={'center'}

                >
                    {
                        show ?
                            <Button
                                variant="contained"
                                color="success"
                                fullWidth
                                onClick={() => {
                                    dispatch(setShow(false))
                                    // handleClick()
                                }}
                                sx={{ position: 'absolute', bottom: '0', height: '3.5rem' }}
                            >
                                <Typography color={'white'} sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}
                                >Cari Mobil</Typography>
                            </Button>

                            :
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={() => {
                                    // handleClick()
                                }}
                                sx={{ position: 'absolute', bottom: '0', height: '3.5rem' }}
                            >
                                <Typography color={'white'} sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}
                                >Edit</Typography>
                            </Button>
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Search
