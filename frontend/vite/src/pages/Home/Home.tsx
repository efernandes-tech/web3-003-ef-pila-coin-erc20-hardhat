import { Container, Heading, VStack } from '@chakra-ui/react';

const Home = () => {
    return (
        <Container maxW="7xl" py={12}>
            <VStack gap={8} align="center" textAlign="center">
                <Heading size="2xl" color="gray.900">
                    Hello World
                </Heading>
            </VStack>
        </Container>
    );
};

export default Home;
