import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.tsx';

const Layout = () => {
    return (
        <Box minH="100vh" bg="gray.50">
            <Navbar />
            <Outlet />
        </Box>
    );
};

export default Layout;
