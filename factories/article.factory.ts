import { articleTemplates } from "../data/articles";


type ArticlePayload = {
    title: string,
    body: string,
    date: string,
    image: string,
};

export function buildArticlePayload(overrides?: Partial<ArticlePayload>): ArticlePayload {
    return {
        title: `Test Article ${Date.now()}`,
        body: articleTemplates.defaultArticle.body,
        date: new Date().toISOString(),
        image: articleTemplates.defaultArticle.image,
        ...overrides,
    };
};