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
                if (res.ok) return res.json()
                throw res.json();
            })
        } catch (e) {
            return e
        }
    }

    static async login(user: any): Promise<any> {
        return await fetch(`${this._apiURI}/api/auth/login`, {
            body: JSON.stringify(user),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            return res.json();
        })
    }

    static async getUser(session: string): Promise<any> {
        return await fetch(`${this._apiURI}/api/auth/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session}`
            }
        }).then((res) => {
            return res.json();
        })
    }
}