import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

import { AppContext } from '../App'
const Hero = () => {
    const { show } = React.useContext(AppContext)
    return (
        <>
            {show && (
                <Box>
                    <Grid container spacing={0}>
                        <Grid item md={12} lg={6}
                            sx={{
                                mt: { xs: 5 },
                                mb: { xs: 15 },
                            }}
                        >
                            <Box mb={0.8} >
                                < Typography variant="h3" >
                                    Sewa & Rental Mobil Terbaik di kawasan(Lokasimu)
                                </ Typography>
                            </Box>
                            <Box sx={{ width: { sm: '100%', md: '60%' }, }}>
                                <Typography paragraph>
                                    Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}
                        >
                            <Box
                                sx={{
                                    bottom: '-0.5rem',
                                    position: 'absolute',
                                    right: '4rem',
                                }}
                            >
                                <img src="images/img_car.png" alt="car" width={'110%'} />
                            </Box>
                        </Grid>
                    </Grid>

                </Box >
            )}

        </>

    )
}

export default Hero
