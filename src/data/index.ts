import { v4 as uuidv4 } from 'uuid';

export interface ArticleInfo {
  id: string;
  title: string;
  content: string;
}

export const DummyData: ArticleInfo[] = [
  {
    id: uuidv4(),
    title: 'Test Artcle 1',
    content: '### hello \n This is Derek.',
  },
  {
    id: uuidv4(),
    title: 'Test Artcle 2',
    content: '### hello \n This is Smilegate Project.',
  },
];
