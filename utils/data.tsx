enum Type {
  Article = "article",
  Event = "event",
  News = "news"
}

export const data= [
  {id: 4, type: Type.Article , title: 'Title1', content: 'content1'},
  {id: 5, type: Type.Event, title: 'Title2', content: 'content2', hidden: true},
  {id: 6, type: Type.News, title: 'Title3', content: 'content3'},
]
