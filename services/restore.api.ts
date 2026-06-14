import { APIRequestContext, expect } from "@playwright/test";


export class RestoreApi {
    constructor(private request: APIRequestContext) {};

    async restoreDefaultDB() {
        const response = await this.request.get('/api/restoreDB');
        await expect(response).toBeOK();
        return await response.json();
    };
    
    async restoreEmptyDb() {
        const response = await this.request.get('/api/restoreEmptyDB');
        await expect(response).toBeOK();
        return await response.json();
    }
    
    async restoreBigDb() {
        const response = await this.request.get('/api/restoreBigDB');
        await expect(response).toBeOK();
        return await response.json();
    }
};