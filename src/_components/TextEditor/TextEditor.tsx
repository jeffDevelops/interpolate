import React, { Component } from 'react';
import styled from 'styled-components';

import { Controlled as Editor } from 'react-codemirror2';

import { ControlledCodeMirrorOptions } from '../../interfaces/ControlledCodeMirrorOptions';

import 'codemirror/lib/codemirror.css';
import './Themes/tundrameteor.css';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
// import './Scripts/MarkSelected';
import 'codemirror/addon/selection/mark-selection';

const options: ControlledCodeMirrorOptions = {
  mode: 'jsx',
  theme: 'tundrameteor',
  lineNumbers: true,
  styleSelectedText: true,
}

interface Props {
}

const Container = styled.div`
  padding: 0 15px;
  height: calc(100% - 35px);
`;

class TextEditor extends Component<Props, any> {

  state = {
    code: '',
  }

  render() {
    const { state, props } = this;
    return (
      <Container>
        <Editor
          value={ state.code }
          options={ options }
          onBeforeChange={ (editor, data, code) => this.setState({ code }) }
        />
      </Container>
    );
  }
}

export default TextEditor;
