import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { ArticleInfo } from '../../data/';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

const ArticleDetail: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const articles = localStorage.getItem('smileGate');
    if (articles !== null) {
      const targetArticle = JSON.parse(articles).filter(
        (article: ArticleInfo) => article.id === id.substr(1),
      );
      setTitle(targetArticle[0].title);
      setContent(targetArticle[0].content);
    }
  }, []);

  return (
    <>
      <h1>{title}</h1>
      {content && (
        <Viewer initialValue={content} plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} />
      )}
    </>
  );
};

export default ArticleDetail;
