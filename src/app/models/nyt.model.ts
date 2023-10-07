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
}