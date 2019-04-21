import styled from 'styled-components';

interface HeaderProps {
  readonly width?: string,
  readonly textTransform?: string,
}

interface ListProps {
  readonly width?: string,
}

interface ListItemProps {
}

export const DropdownListItem = styled.li<ListItemProps>`
  padding: 10px;
  background-color: #fff;
  transition: background-color ${props => props.theme.transition_out};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.light_gray};
    transition: background-color ${props => props.theme.transition_in};
  }
`;

export const DropdownHeader = styled.div<HeaderProps>`
  border: ${props => props.theme.panel_border};
  border-radius: ${props => props.theme.br};
  padding: 4px 10px;
  min-height: 40px;
  width: ${props => props.width ? props.width : '100%'};
  background-color: #fff;
  color: ${props => props.theme.ui_text};
  font-size: .8em;
  text-transform: ${props => props.textTransform ? props.textTransform : 'none'};
  transition: background-color ${props => props.theme.transition_out};
  display: flex;
  justify-content: justify-content;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const DropdownList = styled.ul<ListProps>`
  position: absolute;
  z-index: 9;
  left: 0;
  right: 0;
  top: 35px;
  height: auto;
  margin: auto;
  padding: 0;
  list-style: none;
  width: ${props => props.width ? props.width : '100%'};
  box-shadow: ${props => props.theme.box_shadow};
  border-radius: ${props => props.theme.br};
  background-color: #fff;
  overflow: hidden;
`;
