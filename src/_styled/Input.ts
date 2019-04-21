import styled from 'styled-components';

interface Props {
  readonly width?: string,
  readonly margin?: string,
}

const Input = styled.input<Props>`
  width: ${props => props.width ? props.width : '100%'};
  margin: ${props => props.margin ? props.margin : '0 0 5px 0'};
  height: 30px;
  padding: 0 8px;
  border: 0;
  outline: none;
  border-bottom: 2px solid ${props => props.theme.light_gray};
  transition: border-bottom ${props => props.theme.transition_out};

  &:focus {
    border-bottom: 2px solid ${props => props.theme.red};
    transition: border-bottom ${props => props.theme.transition_in};
  }
`;

const Label = styled.label`
 /* TODO: */
`;

export { Input, Label };