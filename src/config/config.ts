export const config = {
    app: {
        ENV: process.env.NODE_ENV,
    },
    api: {
        URL: process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_URI_PROD : process.env.REACT_APP_API_URI_DEV,
    }
}