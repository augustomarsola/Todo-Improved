import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #8284FA;
    --purple-dark: #5E60CE;
    --blue: #4EA8DE;
    --blue-dark: #1E6F9F;
    --hover-blue: #0C1C26;
    --danger: #E25858;

    --orange-700: #8C3908;
    --orange-600: #F24405;
    --orange-500: #F25C05;

    --gray-700: #0D0D0D;
    --gray-600: #1a1a1a;
    --gray-500: #262626;
    --gray-400: #333333;
    --gray-300: #808080;
    --gray-200: #d9d9d9;
    --gray-100: #f2f2f2;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #000000; /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #000000, #333333); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #000000, #333333); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-attachment: fixed;
  }

  body, input[type="text"], textarea, button {
    font-size: 1rem;
    font-weight: 400;
    color: var(--gray-100);
  }

  input[type="text"] {
    width: 100%;
    background: var(--gray-500);
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: .5rem;
    outline: var(--orange-700);
    transition: .2s;

    &::placeholder {
      color: var(--gray-300);
    }
    
    &:hover, &:focus {
      border: 1px solid var(--orange-700);
    }
  }

  .formInput {
    margin: 0;
    appearance: none;
    border: .125rem solid var(--orange-500);
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    background: transparent;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    transition: .1s;
    cursor: pointer;

    &:hover {
      border: .125rem solid var(--orange-600);
      background: var(--orange-600);
    }
    
    &:checked {
      border: .125rem solid var(--orange-700);
      background: var(--orange-700);

      &:hover {
        border: .125rem solid var(--orange-600);
        background: var(--orange-600);
      }
    }
  }

  button {
    cursor: pointer;
    padding: 1rem;
    background: transparent;
    border: none;
    border-radius: .5rem;
  }

  .font-bold {
    font-weight: 700;
  }

  .sr-only {
  position:absolute;
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;
  }
`;
