import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { Header, Icon, Message } from 'semantic-ui-react';
import styled from 'styled-components';

import { DummyData } from '../../data/';

const ArticleList: FunctionComponent = () => {
  const onRemove = () => {
    console.log('removing...');
  };
  return (
    <>
      <Header as="h2" style={{ margin: '1rem 0 2rem 1rem' }}>
        <Icon name="list layout" />
        <Header.Content>Articles</Header.Content>
      </Header>
      {DummyData.map(data => (
        <Message onDismiss={onRemove} style={{ margin: '1rem 0' }}>
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
