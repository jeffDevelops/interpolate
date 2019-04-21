import React, { Component, Fragment } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './_styled/GlobalStyles';
import theme from './_styled/theme';

import Interpolate from './_components/Interpolation/Interpolate';
import TextEditor from './_components/TextEditor/TextEditor';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={ theme }>
        <Fragment>
          <GlobalStyles />

          <Interpolate />

        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;