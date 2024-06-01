export const config = {
    app: {
        ENV: process.env.NODE_ENV,
    },
    api: {
        URI: process.env.NODE_ENV === "development" ? process.env.API_URI_DEV : process.env.API_URI_PROD,
    }
}