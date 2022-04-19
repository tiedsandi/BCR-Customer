import React from 'react'
import { AppBar, Box, Typography, Link, Button } from '@mui/material'
import Logo from './Logo'
import NavLink from './NavLink'

const Nav = () => {
    return (
        <AppBar position="static"
            style={{
                background: 'transparent',
                boxShadow: 'none',
                padding: '1rem 0 8rem',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Logo />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '10px',
                    }}
                >
                    <NavLink />
                    <Button
                        component={Link}
                        to="#"
                        variant="contained"
                        color="success">
                        <Typography
                            variant="button"
                            color="white"
                        >
                            Register
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </AppBar >
    )
}
export default Nav

