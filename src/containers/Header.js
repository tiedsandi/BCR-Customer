import { Box } from '@mui/material'
import React from 'react'
import Hero from './Hero'
import Nav from './Nav'
import Search from './Search'

const Header = () => {
    return (
        <Box
            bgcolor="secondary.main"
            component="header"
            position={'relative'}
            px={12}
            mb={12}
        >
            <Nav />
            <Hero />
            <Search />
        </Box >
    )
}

export default Header
