import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  .root {
    height: 100%;
    min-height: 100%;
    font-size: 14px;
  }

  body {
    background-color: #E5E5E5;
    height: auto;
    min-height: auto;
    margin: 0;
  }

  .hidden {
    display: none;
  }

  .activeLink {
    color: black;
    text-decoration: none;
    display: flex;
    padding: 10px;
  }

  .link {
    color: gray;
    text-decoration: none;
    display: flex;
    padding: 10px;

  }

  .image-svg-base,
  img {
    vertical-align: middle;
    max-width: 100%;
    height: auto;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
