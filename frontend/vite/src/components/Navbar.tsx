import { Box, Button, Container, Heading, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <Box bg="white" boxShadow="sm" position="sticky" top={0} zIndex={10}>
            <Container maxW="7xl" py={4}>
                <HStack justify="space-between" align="center">
                    <Heading
                        asChild
                        size="lg"
                        color="blue.600"
                        _hover={{ color: 'blue.700' }}
                    >
                        <RouterLink to="/">Vite</RouterLink>
                    </Heading>

                    <HStack gap={4}>
                        <Button asChild variant="ghost" size="sm">
                            <RouterLink to="/list">List</RouterLink>
                        </Button>

                        <Button asChild variant="ghost" size="sm">
                            <RouterLink to="/add">Add</RouterLink>
                        </Button>
                    </HStack>
                </HStack>
            </Container>
        </Box>
    );
};

export default Navbar;
