// @flow

import { css } from 'styled-components';

const media = {
  xs: (...args: any) => css`@media (min-width: 0em) { ${css(...args)} }`,
  sm: (...args: any) => css`@media (min-width: 48em) { ${css(...args)} }`,
  md: (...args: any) => css`@media (min-width: 64em) { ${css(...args)} }`,
  lg: (...args: any) => css`@media (min-width: 75em) { ${css(...args)} }`,
};

export default media;
