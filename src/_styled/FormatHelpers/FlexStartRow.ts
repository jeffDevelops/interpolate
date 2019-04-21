import styled from 'styled-components';

interface Props {
  readonly alignItems?: string,
  readonly margin?: string,
  readonly padding?: string,
  readonly borderBottom?: boolean,
}

const FlexStartRow = styled.section<Props>`
  display: flex;
  justify-content: flex-start;
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  margin: ${props => props.margin ? props.margin : '0'};
  border-bottom: ${props => props.borderBottom ? `2px solid ${props.theme.light_gray}` : '0'};
  padding: ${props => props.padding ? props.padding : '10px 15px'};
  width: 100%;
  font-size: inherit;
`;

export default FlexStartRow;