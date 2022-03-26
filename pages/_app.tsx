import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <NextNProgress color="#000" options={{ showSpinnner: false }} />
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
