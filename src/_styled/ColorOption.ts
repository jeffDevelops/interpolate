import styled from 'styled-components';

interface IColorOptionProps {
  readonly backgroundColor: string,
}

const ColorOption = styled.div<IColorOptionProps>`
  width: 20px;
  height: 20px;
  background-color: ${props => props.backgroundColor};
  display: inline-block;
  margin-right: 5px;

  &:last-of-type {
    margin-right: 0;
  }

  &:first-of-type { /* If it's the only color option, DO add a margin-right by overriding the previous rule */
    margin-right: 5px;
  }
`;

export default ColorOption;