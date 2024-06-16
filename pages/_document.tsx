import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="follow, index" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        !function(e){if(!window.pintrk){window.pintrk = function () {
                            window.pintrk.queue.push(Array.prototype.slice.call(arguments))
                        };var
                        n=window.pintrk;n.queue=[],n.version="3.0";var
                        t=document.createElement("script");t.async=!0,t.src=e;var
                        r=document.getElementsByTagName("script")[0];
                        r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
                        pintrk('load', '2612695586321', {em: '<user_email_address>'});
                        pintrk('page');`
                    }}
                />
                <noscript>
                    <img height="1" width="1" style={{ display: 'none' }} alt=""
                        src="https://ct.pinterest.com/v3/?event=init&tid=2612695586321&pd[em]=<hashed_email_address>&noscript=1" />
                </noscript>
            </Head>
            <body className="bg-white text-gray-700 antialiased">
                <Main />
                <NextScript />
                <Analytics />
            </body>
        </Html>
    );
}
