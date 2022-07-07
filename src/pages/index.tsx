import Layout from '@/Layouts/Main.layout';
import { Link, Text } from '@chakra-ui/react';
import { FC } from 'react';

const Home: FC = () => {
    return (
        <Layout>
            <Text as="h2" fontFamily="sans-serif" fontSize="5xl">
                Next.js + Chakra Starter Template
            </Text>
            <Link
                _hover={{
                    background: 'blue.500',
                }}
                background="blue.600"
                borderRadius="0.5rem"
                color="white"
                href="https://github.com/avneesh0612/next-chakra"
                isExternal
                marginTop="1rem"
                padding="0.5rem 1rem"
                size="lg"
                target="_blank"
            >
                View repository
            </Link>
        </Layout>
    );
};

export default Home;
