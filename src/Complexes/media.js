import { css } from 'styled-components';

const media = {
  xs: (...args) => css`@media (max-width: 48em) { ${css(...args)} }`,
  sm: (...args) => css`@media (min-width: 48em) { ${css(...args)} }`,
  md: (...args) => css`@media (min-width: 64em) { ${css(...args)} }`,
  lg: (...args) => css`@media (min-width: 75em) { ${css(...args)} }`,
};

export default media;
