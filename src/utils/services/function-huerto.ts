// import { API_URL } from '@env';
import { API_URL } from '../envs/microservices.env';
import { IPlantResponse } from '../interfaces/Plant';

interface ILoggedInHuertoResponse {
    ok: boolean
    message: string
    http_code?: number
    data: string | null
}

interface IRegisterUserResponse {
    ok: boolean
    message: string
    http_code?: number
    data: string | null
}

export async function loggedInHuerto(nick = "", password = ""): Promise<ILoggedInHuertoResponse> {
    try {
        const request = {
            nick,
            password
        }
        const response = await fetch(
            `${API_URL}api/v1/user/login`,
            {
                method: "POST",
                body: JSON.stringify(request),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )
        const json: ILoggedInHuertoResponse = await response.json()
        return json
    } catch (error) {
        console.log("❌ Error System (loggedInHuerto):", error)
        return { ok: false, http_code: 5003, message: "Upps! Verifica tu conexión a internet.", data: null}
    }
}


export async function registerUser(nick = "", password = "", confirmPassword = ""): Promise<IRegisterUserResponse> {
    try {
        if (password !== confirmPassword) {
            return {ok: false, message: "La contraseña de confirmación no es igual a la contraseña inicial.", data: null}
        }
        const request = {
            nick,
            password
        }
        const response = await fetch(
            `${API_URL}api/v1/user/register`,
            {
                method: "POST",
                body: JSON.stringify(request),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )
        const json: ILoggedInHuertoResponse = await response.json()
        return json
    } catch (error) {
        console.log("❌ Error System (registerUser):", error)
        return { ok: false, http_code: 5003, message: "Upps! Verifica tu conexión a internet.", data: null}
    }
}


export async function getPlantsLibrary(page: number, limit: number) {
    try {
        const response = await fetch(
            `${API_URL}api/v1/plant/list/${limit}/${page}`,
            {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )
        const json: IPlantResponse = await response.json()
        return json
    } catch (error) {
        console.log("❌ Error System (getPlants):", error)
        return { ok: false, http_code: 5003, message: "Upps! Verifica tu conexión a internet.", data: []}
    }
}