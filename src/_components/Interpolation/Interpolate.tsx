import React, { Component, Fragment, createRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import InterpolationsDropdown from './InterpolationsDropdown';
import TextEditor from '../TextEditor/TextEditor';

import SpaceBetweenRow from '../../_styled/FormatHelpers/SpaceBetweenRow';
import FlexStartRow from '../../_styled/FormatHelpers/FlexStartRow';
import Panel from '../../_styled/Panel';
import RoundButton from '../../_styled/RoundButton';
import { Input } from '../../_styled/Input';
import { Tooltip, Direction } from '../../_styled/Tooltip';
import ColorOption from '../../_styled/ColorOption';

import { ICursor } from 'styled-icons/fa-solid/ICursor';

import { IInterpolation } from './interpolation.interface';

import selectionColors from '../../config/selectionColors';

import _ from 'lodash';

const Container = styled.div`
  height: 100%;
  padding: 25px;
`;

const FlexGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 335px;
`;

const CursorIcon = styled(ICursor)`
  color: #fff;
  width: 8px;
  margin-top: 5px;
`;

interface SelectionColorOverrideProps {
  readonly backgroundColor: string,
}

const SelectionColorOverride = createGlobalStyle<SelectionColorOverrideProps>`
  .CodeMirror .CodeMirror-selected {
    background-color: ${props => props.backgroundColor} !important;
  }

  .CodeMirror {
    .cm-m-javascript.CodeMirror-selectedtext,
    .cm-m-javascript.cm-variable.CodeMirror-selectedtext,
    .cm-string.CodeMirror-selectedtext,
    .cm-m-xml.cm-string.CodeMirror-selectedtext,
    .cm-string-2.CodeMirror-selectedtext,
    .cm-keyword.CodeMirror-selectedtext,
    .cm-atom.CodeMirror-selectedtext,
    .cm-number.CodeMirror-selectedtext,
    .cm-unit.CodeMirror-selectedtext,
    .cm-def.CodeMirror-selectedtext,
    .cm-variable.CodeMirror-selectedtext,
    .cm-variable-2.CodeMirror-selectedtext,
    .cm-property.CodeMirror-selectedtext,
    .cm-operator.CodeMirror-selectedtext,
    .cm-meta.CodeMirror-selectedtext,
    .cm-header.CodeMirror-selectedtext,
    .cm-tag.CodeMirror-selectedtext,
    .cm-m-xml.cm-tag.CodeMirror-selectedtext,
    .cm-m-xml.cm-tag.cm-bracket.CodeMirror-selectedtext,
    .cm-attribute.CodeMirror-selectedtext,
    .cm-m-xml.cm-attribute.CodeMirror-selectedtext,
    .cm-m-xml.CodeMirror-selectedtext,
    span.CodeMirror-selectedtext {
      color: ${props => props.backgroundColor ? '#fff' : 'inherit'} !important;
    }
  }
`;

interface IProps {
}

interface IState {
}

class Interpolate extends Component<IProps, IState> {
  selectionChangeEvent: void;
  mouseUpAfterSelection: void;
  clickOutsideOfDropdown: void;
  
  constructor(
    props: IProps,
    selectionChangeEvent: void,
    mouseUpAfterSelection: void,
    clickOutsideOfDropdown: void,
  ) {
    super(props);
    this.selectionChangeEvent = selectionChangeEvent;
    this.mouseUpAfterSelection = mouseUpAfterSelection;
    this.clickOutsideOfDropdown = clickOutsideOfDropdown;
  }

  state = {
    interpolateMode: false,
    replaceWithInput: '',

    interpolations: [] as IInterpolation[],
    currentColor: '',
    usedColors: [] as string[],
    currentSelection: 0,
    shouldShowConfirmModal: false,

    shouldShowInterpolationTooltip: false,
    shouldShowSelectionColorTooltip: false,
    shouldShowInterpolationsList: false,
  }

  componentDidMount() {
    this.selectionChangeEvent = document.addEventListener('mouseup', this.setInterpolation);
  }

  componentWillUnmount() {
    this.selectionChangeEvent = document.removeEventListener('mouseup', this.setInterpolation);
  }

  setInterpolation = () => {
    // Set the text var
    let text: string | null = "";
    if (window === null) return;
    if (window.getSelection()) text = window.getSelection()!.toString();

    // If it doesn't exist already, place it in state at the user-specified index
    if (text && !this.state.interpolations.map(interpolation => interpolation.string).includes(text)) {
      const interpolations: IInterpolation[] = [ ...this.state.interpolations ];
      interpolations.push({ string: text, hexColor: this.state.currentColor });
      this.setState({ interpolations });
    }
  }

  handleClickOutside = () => {
    this.setState({ shouldShowInterpolationsList: false });
  }

  render() {
    const { state, props } = this;
    return (
      <Fragment>
        <Container>
          <SelectionColorOverride backgroundColor={ state.currentColor } />
          <Panel>
            <SpaceBetweenRow borderBottom margin="0">
              <FlexGroup>

                <RoundButton
                  onMouseEnter={ () => {
                    (!state.shouldShowSelectionColorTooltip && !state.interpolateMode) && this.setState({ shouldShowInterpolationTooltip: true });
                    state.interpolateMode && this.setState({ shouldShowTextEditorTooltip: true });
                  }}
                  onMouseLeave={ () => this.setState({ shouldShowInterpolationTooltip: false }) }
                  onClick={ () => this.setState({
                    interpolateMode: true,
                    shouldShowSelectionColorTooltip: true,
                    shouldShowInterpolationTooltip: false,
                  })}
                  onBlur={ () => this.setState({
                    shouldShowSelectionColorTooltip: false,
                    shouldShowInterpolationTooltip: false,
                  })}
                  fontFamily="Overpass Mono"
                >
                  
                  { state.interpolateMode ? <CursorIcon /> : '${}' }

                  { state.shouldShowInterpolationTooltip &&

                    <Tooltip
                      width="250px"
                      height="75px"
                      top="0"
                      bottom="0"
                      left="60px"
                      facing={ Direction.left }>
                      Allow users of this code to interpolate their own text
                    </Tooltip>

                  }

                  { state.shouldShowSelectionColorTooltip &&

                    <Tooltip
                      width="175px"
                      height="75px"
                      top="0"
                      bottom="0"
                      left="60px"
                      facing={ Direction.left }>
                      <Fragment>
                        <FlexStartRow padding="0" margin="0 0 5px 0">
                          <p>Select a color:</p>
                        </FlexStartRow> 

                        <FlexStartRow padding="0">
                          { selectionColors.map(color => (
                            <ColorOption
                              onClick={ () => this.setState({ currentColor: color }) }
                              key={ color }
                              backgroundColor={ color }
                            />
                          ))}
                        </FlexStartRow>

                      </Fragment>

                    </Tooltip>

                  }
                  
                </RoundButton>

                { (state.interpolateMode || state.interpolations.length > 0) &&
                  <InterpolationsDropdown
                    interpolations={ state.interpolations }
                    currentSelection={ state.currentSelection }
                  />
                }

              </FlexGroup>

              <Input
                width="30%"
                value={ state.replaceWithInput }
                placeholder="Interpolate with"
                onChange={ e => this.setState({ replaceWithInput: e.target.value }) }
              />
              
            </SpaceBetweenRow>


            <TextEditor />
          </Panel>
        </Container>
      </Fragment>
    )
  }
}

export default Interpolate;