import React, { FunctionComponent, useState, useRef, useEffect } from 'react';

import { DummyData as articleList } from '../../data/';

import { v4 as uuidv4 } from 'uuid';
import { Input, Button } from 'semantic-ui-react';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router';

const ArticleCreate: FunctionComponent = () => {
  const history = useHistory();
  const location = useLocation<{ id: string; title: string; content: string }>();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const editorRef = useRef<Editor>(null);

  const onChangeTitle: React.ChangeEventHandler<HTMLInputElement> = e => {
    setTitle(e.target.value);
  };

  const onChangeContent = () => {
    const editorInstance = editorRef.current?.getInstance();
    const getContentMarkdown = editorInstance?.getMarkdown();
    if (getContentMarkdown !== undefined) {
      setContent(getContentMarkdown);
    }
  };

  const onCancelPosting: React.MouseEventHandler<HTMLButtonElement> = () => {
    history.goBack();
  };

  const onPostArticle: React.MouseEventHandler<HTMLButtonElement> = () => {
    const newId = uuidv4();
    const articles = localStorage.getItem('smileGate');

    if (location.state !== undefined) {
      console.log(title, content);
      if (articles !== null) {
        const current = JSON.parse(articles);
        for (let i = 0; i < current.length; i++) {
          if (current[i].id === location.state.id) {
            current[i].title = title;
            current[i].content = content;
          }
        }
        console.log(current);
        localStorage.setItem('smileGate', JSON.stringify(current));
      }
      history.push(`/list:${location.state.id}`);
    } else {
      if (articles === null) {
        localStorage.setItem(
          'smileGate',
          JSON.stringify([
            ...articleList,
            {
              id: uuidv4(),
              title: title,
              content: content,
            },
          ]),
        );
      } else {
        const addedResult = JSON.parse(articles);
        localStorage.setItem(
          'smileGate',
          JSON.stringify([
            ...addedResult,
            {
              id: newId,
              title: title,
              content: content,
            },
          ]),
        );
      }
      history.push(`/list:${newId}`);
    }
  };

  useEffect(() => {
    if (location.state !== undefined) {
      setTitle(location.state.title);
      setContent(location.state.content);
    }
  }, [location.state]);

  return (
    <>
      <ArticleHeaderInput
        onChange={onChangeTitle}
        fluid
        icon="pencil"
        size="large"
        placeholder="Input title..."
        defaultValue={title}
      />
      {location.state !== undefined ? (
        content && (
          <Editor
            initialValue={content}
            previewStyle="vertical"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut
            onChange={onChangeContent}
            ref={editorRef}
            plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          />
        )
      ) : (
        <Editor
          initialValue=""
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut
          onChange={onChangeContent}
          ref={editorRef}
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        />
      )}
      <Button.Group style={{ float: 'right', margin: '1rem 0 0.1rem 0' }}>
        <Button onClick={onCancelPosting}>Cancel</Button>
        <Button.Or />
        <Button color="orange" onClick={onPostArticle}>
          Save
        </Button>
      </Button.Group>
    </>
  );
};

export default ArticleCreate;

const ArticleHeaderInput = styled(Input)`
  margin-bottom: 1rem;
`;
