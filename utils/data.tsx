// Define data type: declare there is a kind of object structure called TitleInfo
interface TitleInfo {
  id: number;
  type: string;
  title: string;
  content: string;
  hidden?: boolean;
}

// Declare a array object variable with type TitleInfo
const data: TitleInfo[] =  [
  {id: 4, type: 'article' , title: 'Title1', content: 'content1'},
  {id: 5, type: 'event' , title: 'Title2', content: 'content2', hidden: true},
  {id: 6, type: 'news', title: 'Title3', content: 'content3'},
]

export { data }