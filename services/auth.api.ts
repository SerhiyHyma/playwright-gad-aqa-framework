import { APIRequestContext, expect } from "@playwright/test";
import { testUsers } from "../data/users";
import { config } from '../config/env';
import { LoginResponse } from "../types/api.types";


export class AuthApi {
    constructor(private request: APIRequestContext) {};

    async login(): Promise<string> {
        const response = await this.request.post('/api/login', {
            data: {
                email: config.user.email,
                password: config.user.password,
            }
        });
        await expect(response).toBeOK();
        const body = await response.json() as LoginResponse;
        return body.access_token;
    }
}