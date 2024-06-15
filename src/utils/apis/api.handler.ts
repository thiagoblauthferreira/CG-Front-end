import { config } from "../../config/config";

export class ApiHandler {
    private static _apiURI = config.api.URL;

    static async register(user: any): Promise<any> {
        try {
            return await fetch(`${this._apiURI}/api/auth/register`, {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                if(res.ok) return true
                return res.json()
            })
        } catch (e) {
            return e
        }
    }

    static async login(user: any): Promise<boolean> {
        try {
            return await fetch(`${this._apiURI}/auth/login`, {
                body: JSON.stringify(user),
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                if (res.ok) return true
                return false
            })
        } catch (e) {
            return false
        }
    }
}