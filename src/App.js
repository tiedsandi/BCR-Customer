import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './containers/Header';
import { Box, ThemeProvider } from '@mui/material';
import { Theme } from './Theme';
import Dashboard from './Layouts/Dashboard';
import Detail from './Layouts/Detail';
import Pembayaran from './Layouts/Pembayaran';
import Footer from './containers/Footer';

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <Router>
                <Header />
                <Box sx={{ marginX: '11.2rem' }}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/detail/:id" element={<Detail />} />
                        <Route path="/pembayaran/:id" element={<Pembayaran />} />
                        <Route path="*" element={<div>404</div>} />
                    </Routes>
                </Box>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
