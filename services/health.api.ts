import { APIRequestContext, expect } from "@playwright/test";
import { HealthResponse, DbHealthResponse } from "../types/api.types";


export class HealthApi {
    constructor(private request: APIRequestContext) {};

    async getHealth(): Promise<HealthResponse> {
        const response = await this.request.get('/api/health');
        await expect(response).toBeOK();

        const body = await response.json() as HealthResponse;
        return body;
    };

    async getDbHealth(): Promise<DbHealthResponse> {
        const response = await this.request.get('/api/health/dbcheck');
        await expect(response).toBeOK();
        
        const body = await response.json() as DbHealthResponse;
        return body;
    };
};