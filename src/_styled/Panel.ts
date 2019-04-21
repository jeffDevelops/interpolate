import styled from 'styled-components';

interface Props {
  readonly width?: string,
  readonly margin?: string,
  readonly padding?: string,
  readonly height?: string,
}

const Panel = styled.section<Props>`
  height: ${props => props.height ? props.height : '100%'};
  width: ${props => props.width ? props.width : '100%'};
  margin: ${props => props.margin ? props.margin : '0'};
  border: ${props => props.theme.panel_border};
  border-radius: ${props => props.theme.br};
  box-shadow: ${props => props.theme.box_shadow};
  padding: ${props => props.padding ? props.padding : '0'};
  background-color: #fff;
`;

export default Panel;