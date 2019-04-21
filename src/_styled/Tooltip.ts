import styled from 'styled-components';

export enum Direction {
  up = 'up',
  down = 'down',
  right = 'right',
  left = 'left',
}

interface TooltipProps {
  /* Tooltip positioning */
  readonly facing: Direction,
  readonly top?: string,
  readonly left?: string,
  readonly right?: string,
  readonly bottom?: string,
  readonly width?: string,
  readonly height?: string,
}

export const Tooltip = styled.div<TooltipProps>`
  position: absolute;
  z-index: 12;
  top: ${props => props.top ? props.top : 'auto'};
  left: ${props => props.left ? props.left : 'auto'};
  right: ${props => props.right ? props.right : 'auto'};
  bottom: ${props => props.bottom ? props.bottom : 'auto'};
  margin: auto;
  background: #fff;
  color: ${props => props.theme.ui_text};
  border-radius: ${props => props.theme.br};
  filter: drop-shadow(0px 5px 15px rgba(100, 100, 100, .3));
  padding: 15px;
  height: ${props => props.height ? props.height : 'auto'};
  width: ${props => props.width ? props.width : 'auto'};

  &:after {
    left: ${props => props.facing === 'left' && 0};
    right: ${props => props.facing === 'right' && 0};
    bottom: ${props => props.facing === 'down' && 0};
    content: '';
    position: absolute;
    width: 0;
    height: 0;

    ${props => {
      if (props.facing === 'right') return `
        right: 0;
        top: 50%;
        border: 10px solid transparent;
        border-left-color: #fff;
        border-right: 0;
        margin-top: -10px;
        margin-right: -10px;
      `;

      if (props.facing === 'left') return `
        left: 0;
        top: 50%;
        border: 10px solid transparent;
        border-right-color: #fff;
        border-left: 0;
        margin-top: -10px;
        margin-left: -10px;
      `;

      if (props.facing === 'up') return `
        top: 0;
        left: 50%;
        border: 10px solid transparent;
        border-bottom-color: #fff;
        border-top: 0;
        margin-top: -10px;
        margin-left: -10px;
      `;

      if (props.facing === 'down') return `
        bottom: 0;
        left: 50%;
        border: 10px solid transparent;
        border-top-color: #fff;
        border-bottom: 0;
        margin-bottom: -10px;
        margin-left: -10px;
      `;
    }};
  }
`;


// export const Tooltip = styled(Panel)<TooltipProps>`
//   border: 0;
//   width: auto;
//   height: auto;
//   padding: 5px;
//   margin: auto;
//   font-size: .9em;
//   position: absolute;
// `;

// export const TooltipPointer = styled.div<PointerProps>`
//   width: 0; 
//   height: 0;
//   margin: auto;
//   position: absolute;
//   top: ${props => props.posTop ? props.posTop : 'auto'};
//   left: ${props => props.posLeft ? props.posLeft : 'auto'};
//   right: ${props => props.posRight ? props.posRight : 'auto'};
//   bottom: ${props => props.posBottom ? props.posBottom : 'auto'};
//   filter: drop-shadow(4px 4px 5px #eeeeee);

//   border-left: ${props => props.up || props.down ? '20px solid transparent' : 0};
//   border-right: ${props => props.up || props.down ? '20px solid transparent' : 0};
//   border-top: ${props => props.left || props.right ? '20px solid transparent' : 0};
//   border-bottom: ${props => props.left || props.right ? '20px solid transparent' : 0};

//   border-top: ${props => props.down && '20px solid #fff'};
//   border-right: ${props => props.left && '20px solid #fff'};
//   border-bottom: ${props => props.up && '20px solid #fff'};
//   border-left: ${props => props.right && '20px solid #fff'};
// `;