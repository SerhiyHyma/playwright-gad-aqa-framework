import { APIRequestContext, expect } from "@playwright/test";
import { RestoreResponse } from "../types/api.types";


export class RestoreApi {
    constructor(private request: APIRequestContext) {};

    async restoreDefaultDB(): Promise<RestoreResponse> {
        const response = await this.request.get('/api/restoreDB');
        await expect(response).toBeOK();
        return await response.json() as RestoreResponse;
    };
    
    async restoreEmptyDb(): Promise<RestoreResponse> {
        const response = await this.request.get('/api/restoreEmptyDB');
        await expect(response).toBeOK();
        return await response.json() as RestoreResponse;
    }
    
    async restoreBigDb(): Promise<RestoreResponse> {
        const response = await this.request.get('/api/restoreBigDB');
        await expect(response).toBeOK();
        return await response.json() as RestoreResponse;
    }
};