import React, { FunctionComponent, useState } from 'react';
import { Route, Link } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home/Home';
import ArticleCreateContainer from './Article/container/ArticleCreateContainer';
import ArticleListContainer from './Article/container/ArticleListContainer';
import ArticleDetailContainer from './Article/container/ArticleDetailContainer';

import { Grid, Menu, Segment, MenuItemProps } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Main: FunctionComponent = () => {
  const [menu, setMenu] = useState('main');

  const onHandleClickMenu = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    props: MenuItemProps,
  ) => {
    const { name } = props;
    if (name !== undefined) {
      setMenu(name);
    }
  };

  return (
    <>
      <Navigation />
      <Grid style={{ padding: '0 0 0 1rem' }}>
        <Grid.Column width={2}>
          <Menu fluid vertical tabular>
            <Link to="/">
              <Menu.Item name="main" active={menu === 'main'} onClick={onHandleClickMenu} />
            </Link>
            <Link to="/write">
              <Menu.Item name="write" active={menu === 'write'} onClick={onHandleClickMenu} />
            </Link>
            <Link to="/list">
              <Menu.Item name="list" active={menu === 'list'} onClick={onHandleClickMenu} />
            </Link>
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={13}>
          <Segment>
            <Route path="/" component={Home} exact />
            <Route path="/write" component={ArticleCreateContainer} exact />
            <Route path="/list" component={ArticleListContainer} exact />
            <Route path="/list:id" component={ArticleDetailContainer} exact />
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Main;
