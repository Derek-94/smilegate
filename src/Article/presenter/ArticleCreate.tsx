import React, { FunctionComponent, useState, useRef } from 'react';

import { Input, Button } from 'semantic-ui-react';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import styled from 'styled-components';

const ArticleCreate: FunctionComponent = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const editorRef = useRef<Editor>(null);

  const onChangeTitle: React.ChangeEventHandler<HTMLInputElement> = e => {
    setTitle(e.target.value);
    console.log(title);
  };

  const onChangeContent = () => {
    const editorInstance = editorRef.current?.getInstance();
    const getContentMarkdown = editorInstance?.getMarkdown();
    if (getContentMarkdown !== undefined) {
      setContent(getContentMarkdown);
    }
  };

  const onCancelPosting: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log('canceling...');
  };

  const onPostArticle: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log(title, content);
  };

  return (
    <>
      <ArticleHeaderInput
        onChange={onChangeTitle}
        fluid
        icon="pencil"
        size="large"
        placeholder="Input title..."
      />
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
