// ... Other imports
await
import ("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,

    images: {
        domains: ['ipfs.io'],
    },

    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
};

export default config;