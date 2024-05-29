export class ApiHandler {
    static _apiURI = "http://backend-develop.coletivogloma.com.br"

    static async register(user: any): Promise<any> {
        try {
            await fetch(`${this._apiURI}/auth/register`, {
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } catch (e) {
            console.error(e)
        }
    }

    static async login(user: any): Promise<any> {
        try {
            await fetch(`${this._apiURI}/auth/login`, {
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } catch (e) {
            console.error(e)
        }
    }
}