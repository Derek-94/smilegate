import React, { FunctionComponent, useState } from 'react';
import { Route, Link } from 'react-router-dom';

import Navigation from './Navigation';
import ArticleCreateContainer from './Article/container/ArticleCreateContainter';

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
      <Grid>
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

        <Grid.Column stretched width={12}>
          <Segment>
            <Route path="/write" component={ArticleCreateContainer} exact />
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Main;
