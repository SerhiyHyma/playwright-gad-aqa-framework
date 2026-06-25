export type LoginResponse = {
  access_token: string;
};

export type ArticleResponse = {
  id: number;
  title: string;
  body: string;
  date: string;
  image: string;
};

export type RestoreResponse = {
  message: string;
  entitles: {
    users: number;
    articles: number;
    comments: number;
    likes: number;
    articleLikes: number;
  };
};

export type HealthResponse = {
  status: string;
};

export type DbHealthResponse = {
  status: string;
  result: {
    missingTablesInCurrentDb: string[];
    missingKeysInCurrentDb: string[];
    invalidObjects: string[];
  };
};
