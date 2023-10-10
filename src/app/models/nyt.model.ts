export interface NYTArticleResponse {
  status: string;
  response: {
    docs: NYTArticle[];
  };
}

export interface NYTArticle {
  web_url: string;
  headline: {
    main: string;
  }
  snippet: string;
  multimedia: NYTMedia[];
}

export interface NYTMedia {
  url?: string;
  subtype: string;
}