import styled, { css } from 'styled-components'

export const TwitterIconAnimated = styled.g`
  .twitter-outline,
  .twitter-icon {
    transition: 300ms all;
    transform-origin: 50% 50%;
    transform-box: fill-box;
  }
  .twitter-icon-group:hover .twitter-outline {
    transform: scale(0);
  }
  .twitter-icon-group:hover .twitter-icon {
    transform: scale(2);
    stroke: #4099ff;
    opacity:0%;
  }
  /* .twitter-icon-group:hover > path:nth-child(2) {
    fill: none;
    opacity:0;
    transition: 300ms all;
  } */
`
