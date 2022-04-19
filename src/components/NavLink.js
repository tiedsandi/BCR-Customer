import React from 'react'
import { Link, Typography } from '@mui/material'

const NavLink = () => {
    return (
        <>
            <Link underline='none' href="#">
                <Typography
                    variant="p"
                    color="Black"
                    sx={{
                        fontWeight: '500',
                    }}
                >
                    Our Services
                </Typography>
            </Link>
            <Link underline='none' href="#">
                <Typography
                    variant="p"
                    color="Black"
                    sx={{
                        fontWeight: '500',
                    }}
                >
                    Why Us
                </Typography>
            </Link>
            <Link underline='none' href="#">
                <Typography
                    variant="p"
                    color="Black"
                    sx={{
                        fontWeight: '500',
                    }}
                >
                    Testimonial
                </Typography>
            </Link>
            <Link underline='none' href="#">
                <Typography
                    variant="p"
                    color="Black"
                    sx={{
                        fontWeight: '500',
                    }}
                >
                    FAQ
                </Typography>
            </Link>
        </>
    )
}

export default NavLink
