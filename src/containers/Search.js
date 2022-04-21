import { Button, FormControl, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setShow, filterResult } from '../redux/actions/carsActions';

const Search = () => {
    const show = useSelector((state) => state.show.show)
    const cars = useSelector((state) => state.allCars.cars);
    // const button = useSelector((state) => state.button.button);

    const transmisi = [...new Set(cars.map((car) => car.transmisi))];
    const tipe = [{ label: 'Small', value: 'Small' }, { label: 'Medium', value: 'Medium' }, { label: 'Large', value: 'Large' }];
    const year = [...new Set(cars.map((car) => car.year))];
    const penumpang = [...new Set(cars.map((car) => car.penumpang))];

    const [transmisiValue, setTransmisiValue] = React.useState('semua');
    const [tipeValue, setTipeValue] = React.useState('semua');
    const [tahun, setTahun] = React.useState('semua');
    const [passenger, setPassenger] = React.useState('semua');

    console.log("transmisi : ", transmisiValue);
    console.log("tipe : ", tipeValue);
    console.log("tahun : ", tahun);
    console.log("passenger : ", passenger);

    const dispatch = useDispatch()
    const handleClick = () => {
        const newData = (cars)
            .filter(cars => cars.transmisi === (transmisiValue === 'semua' ? cars.transmisi : transmisiValue))
            .filter(cars => cars.category === (tipeValue === 'semua' ? cars.category : tipeValue))
            // .filter(cars => cars.year <= (tahun === 'semua' ? cars.year : tahun))
            .filter(cars => cars.year === (tahun === 'semua' ? cars.year : tahun))
            .filter(cars => cars.penumpang === (passenger === 'semua' ? cars.penumpang : passenger))
        dispatch(filterResult(newData))
    }

    // React.useEffect(() => {
    //     dispatch(setButton('Pilih Mobil'))
    // }, [dispatch])

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
                        defaultValue='semua'
                        onChange={(e) => setTransmisiValue(e.target.value)}
                    >
                        <MenuItem disabled value="">
                            <em>Pilih Jenis Mesin</em>
                        </MenuItem>
                        <MenuItem value={'semua'}>Semua</MenuItem>
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
                        onChange={(event) => setTipeValue(event.target.value)}
                        defaultValue='semua'
                    >
                        <MenuItem disabled value="">
                            <em>Pilih Tipe Mobil</em>
                        </MenuItem>

                        <MenuItem value={'semua'}>Semua</MenuItem>
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
                    <Typography paragraph>Max Harga</Typography>
                    <TextField
                        select
                        defaultValue='semua'
                        onChange={(event) => setTahun(event.target.value)}
                    >
                        <MenuItem disabled value="">
                            <em>Pilih Harga Mobil</em>
                        </MenuItem>

                        <MenuItem value={'semua'}>Semua</MenuItem>
                        {year.map((tahun) => (
                            <MenuItem key={tahun} value={tahun}>
                                {tahun}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>

            </Grid>

            <Grid item xs={3} display={'flex'}>
                <Grid item xs={10}>
                    <FormControl >
                        <Typography paragraph>Jumlah Penumpang (optional)</Typography>
                        <TextField
                            select
                            defaultValue='semua'
                            onChange={(event) => setPassenger(event.target.value)}
                        >
                            <MenuItem disabled value="">
                                <em>Pilih Tipe Mobil</em>
                            </MenuItem>

                            <MenuItem value={'semua'}>Semua</MenuItem>
                            {/* Menu item from array transmisi*/}
                            {penumpang.map((penumpang) => (
                                <MenuItem key={penumpang} value={penumpang}>
                                    {penumpang}
                                </MenuItem>
                            ))}
                        </TextField>

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
                                    handleClick()
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
                                    handleClick()
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
