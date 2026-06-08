import styled from 'styled-components'

const LogoWrapper = styled.div`
  & svg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    animation: 1.5s svg-animation ease-in forwards;
  }
  .logo {
    transform-origin: 50% 50%;
    transform-box: fill-box;
    padding: 100px;
  }
  .logo path:nth-child(2) {
    stroke-width: 0.6px;
    stroke-dasharray: ${({ senseLength }) => senseLength || '299'};
    stroke: url(#brand-gradient);
    animation: 3s text-slide reverse forwards 1.5s;
  }
  @keyframes text-slide {
    0% {
      stroke-dashoffset: ${({ senseLength }) => senseLength || '299'};
    }

    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes svg-animation {
    0% {
      transform: scale(2);
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`

export { LogoWrapper }
