import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Header, Icon, Message } from 'semantic-ui-react';
import styled from 'styled-components';

import { DummyData } from '../../data/';
import { ArticleInfo } from '../../data/';

const ArticleList: FunctionComponent = () => {
  const [articleList, setArticleList] = useState<ArticleInfo[]>([]);

  const onRemove = () => {
    console.log('removing...');
  };

  useEffect(() => {
    const articles = localStorage.getItem('smileGate');
    if (articles === null) {
      setArticleList(DummyData);
      localStorage.setItem('smileGate', JSON.stringify(DummyData));
    } else {
      setArticleList(JSON.parse(articles));
    }
  }, []);

  return (
    <>
      <Header as="h2" style={{ margin: '1rem 0 2rem 1rem' }}>
        <Icon name="list layout" />
        <Header.Content>Articles</Header.Content>
      </Header>
      {articleList.map(data => (
        <Message key={data.id} onDismiss={onRemove} style={{ margin: '1rem 0' }}>
          <ArticleLink to={'list:' + data.id}>
            <Message.Header>{data.title}</Message.Header>
            <p>{data.content}</p>
          </ArticleLink>
        </Message>
      ))}
    </>
  );
};

export default ArticleList;

const ArticleLink = styled(Link)`
  color: black;
  &: hover {
    color: black;
  }
`;
