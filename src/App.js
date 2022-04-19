import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './containers/Header';
import { ThemeProvider } from '@mui/material';
import { Theme } from './Theme';
import Dashboard from './Layouts/Dashboard';
import Detail from './Layouts/Detail';
import Pembayaran from './Layouts/Pembayaran';
import Footer from './containers/Footer';

// use context
export const AppContext = React.createContext();

function App() {
    const [show, setShow] = React.useState(true);
    return (
        <ThemeProvider theme={Theme}>
            <AppContext.Provider value={{ show, setShow }}>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/detail/:id" element={<Detail />} />
                        <Route path="/pembayaran/:id" element={<Pembayaran />} />
                        <Route path="*" element={<div>404</div>} />
                    </Routes>
                    <Footer />
                </Router>
            </AppContext.Provider>
        </ThemeProvider>
    );
}

export default App;
