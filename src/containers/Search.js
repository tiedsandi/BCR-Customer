import { Button, FormControl, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setShow } from '../redux/actions/carsActions';

const Search = () => {
    const show = useSelector((state) => state.show.show)
    const dispatch = useDispatch()

    return (
        <Grid position={'absolute'}
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
                    <Typography paragraph>Tipe Driver</Typography>
                    <TextField select >
                        <MenuItem value={'Dengan Sopir'}>Dengan Sopir</MenuItem>
                        <MenuItem value={'Tanpa Sopir'}>Tanpa Sopir</MenuItem>
                    </TextField>
                </FormControl>
            </Grid>
            <Grid item xs={3}>
                <FormControl fullWidth>
                    <Typography paragraph>Tanggal</Typography>
                    <TextField type={'date'} placeholder="Pilih Tanggal" />
                </FormControl>

            </Grid>


            <Grid item xs={3}>
                <FormControl fullWidth>
                    <Typography paragraph>Waktu Jemput/Ambil</Typography>
                    <TextField type={'time'} />

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
                                onClick={() => dispatch(setShow(false))}
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
