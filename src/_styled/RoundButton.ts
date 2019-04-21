import styled from 'styled-components';

interface Props {
  readonly color?: string,
  readonly fontFamily?: string,
}

const RoundButton = styled.button<Props>`
  font-family: ${props => props.fontFamily ? props.fontFamily : 'inherit'};
  border-radius: 50%;
  background-color: ${props => props.theme.red};
  color: #fff;
  height:40px;
  width: 40px;
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: .9em;
  position: relative;
`;

export default RoundButton;