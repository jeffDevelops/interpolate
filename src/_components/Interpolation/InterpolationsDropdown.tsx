import React, { Component } from 'react';
import styled from 'styled-components';

import { DropdownHeader, DropdownList, DropdownListItem } from '../../_styled/Dropdown';
import FlexStartRow from '../../_styled/FormatHelpers/FlexStartRow';
import ColorOption from '../../_styled/ColorOption';
import { ArrowDropDown } from 'styled-icons/material/ArrowDropDown';

import onClickOutside, { InjectedOnClickOutProps, HandleClickOutside } from 'react-onclickoutside';

import { IInterpolation } from './interpolation.interface';

const DropdownArrow = styled(ArrowDropDown)`
  color: ${props => props.theme.ui_icon};
  width: 25px;
`;

interface IProps {
  interpolations: IInterpolation[],
  currentSelection: number,
}

class InterpolationsDropdown extends Component<IProps> {
  state = {
    shouldShowInterpolationsList: false,
  }

  handleClickOutside = () => this.setState({ shouldShowInterpolationsList: false });

  render() {
    const { state, props } = this;
    return (
      <DropdownHeader
        width="275px"
        textTransform={ props.interpolations.length === 0 ? 'uppercase' : 'none' }
        onClick={ () => this.setState({ shouldShowInterpolationsList: true }) }
      >
      
        { props.interpolations.length !== 0
          ? props.interpolations[props.currentSelection].string.length > 30 // If there are interpolations at all...
            ? <FlexStartRow padding="0">
                <ColorOption backgroundColor={ props.interpolations[props.currentSelection].hexColor} />
                { `${props.interpolations[props.currentSelection].string.substring(0, 30)}...` } {/*} If the current interpolation is too long to display */}
              </FlexStartRow>
            : <FlexStartRow padding="0">
                <ColorOption backgroundColor={ props.interpolations[props.currentSelection].hexColor} />
                { props.interpolations[props.currentSelection].string } {/* The current interpolation is a length that can fit in the dropdown header */}
              </FlexStartRow>
          : <FlexStartRow padding="0"> {/* No interpolations have been saved yet */}
              Select text to interpolate
            </FlexStartRow>
        }
        <DropdownArrow />

        { (state.shouldShowInterpolationsList && props.interpolations.length > 0) &&
          <DropdownList>
            { props.interpolations.map(interpolation => (
              <DropdownListItem
                onMouseEnter={ e => e.stopPropagation() }
                key={ interpolation.string }>
                <FlexStartRow padding="0">
                  <ColorOption backgroundColor={ interpolation.hexColor } />
                  { interpolation.string }
                </FlexStartRow>
              </DropdownListItem>
            ))}
          </DropdownList>
        }

      </DropdownHeader>
    )
  }
}

export default onClickOutside(InterpolationsDropdown);