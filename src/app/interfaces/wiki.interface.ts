interface i_Wiki {
  query: {
    search: i_WikiArticle[];
  };
}

interface i_WikiArticle {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: Date;
}

export { i_Wiki, i_WikiArticle };
