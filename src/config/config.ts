export const config = {
    app: {
        ENV: process.env.NODE_ENV,
    },
    api: {
        URL: process.env.NODE_ENV === "production" ? 'https://backend-develop.coletivogloma.com.br' : 'https://backend-develop.coletivogloma.com.br',
    }
}