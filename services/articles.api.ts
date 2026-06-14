import { APIRequestContext, expect } from '@playwright/test';
import { buildArticlePayload } from '../factories/article.factory';


export class ArticlesApi {
    constructor(private request: APIRequestContext) {};

    async createArticle(token: string, title?: string): Promise<Record<string, unknown>> {
        const payload = buildArticlePayload(title ? { title } : undefined);

        const response = await this.request.post('/api/articles', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: payload,
        });
        await expect(response).toBeOK();
        return await response.json();
    };

    async createDefaultArticle(token: string) {
        return await this.createArticle(token);
    }
};