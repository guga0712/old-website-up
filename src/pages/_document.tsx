import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;1,100&family=Poppins:ital,wght@0,200;0,300;0,500;1,100;1,400;1,500&family=Raleway:wght@100;200;300;400;500&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

}