import { APIRequestContext, expect } from '@playwright/test';
import { buildArticlePayload } from '../factories/article.factory';
import { ArticleResponse } from '../types/api.types';


export class ArticlesApi {
    constructor(private request: APIRequestContext) {};

    async createArticle(token: string, title?: string): Promise<ArticleResponse> {
        const payload = buildArticlePayload(title ? { title } : undefined);

        const response = await this.request.post('/api/articles', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: payload,
        });
        await expect(response).toBeOK();
        return await response.json() as ArticleResponse;
    };

    async createDefaultArticle(token: string): Promise<ArticleResponse> {
        return await this.createArticle(token);
    }
};