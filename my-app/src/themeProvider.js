import React from 'react';
import PropTypes from 'prop-types';
import { css, ThemeProvider } from 'styled-components';

/*
 * const ExampleStyledComponent = styled.div`
 *   color: ${(props) => props.theme.colors.orange};
 * `;
 */
const black = '#000000';
const white = '#ffffff';
const lighterGray = '#F8f8f8';
const lightGray = '#f5f5f5';
const mediumGray = '#E7E7E7';
const darkGray = '#797979';
const darkerGray = '#5a5a5a';
const orange = '#ff5f00';
const brown = '#676157';
const darkBrown = '#59544B';
const lightBrown = '#84827D';

/*
 * const ExampleStyledComponent = styled.div`
 *   ${(props) => props.theme.desktop`background-color: pink;`}
 * `;
 */
const sizes = [
  { name: 'xl', size: '75em' },
  { name: 'large', size: '60em' },
  { name: 'medium', size: '45em' },
  { name: 'small', size: '30em' },
  { name: 'default', size: '0px' },
];

const accumulator = (prevAccumulated, val) => {
  const accumulated = prevAccumulated;
  accumulated[val.name] = (...args) => css`
    @media (min-width: ${val.size}) {
      ${css(...args)};
    }
  `;
  return accumulated;
};

const breakPoints = sizes.reduce(accumulator, {});

const theme = {
  colors: {
    black,
    white,
    lightGray,
    lightGrey: lightGray,
    lighterGray,
    lighterGrey: lighterGray,
    mediumGray,
    mediumGrey: mediumGray,
    darkGray,
    darkGrey: darkGray,
    darkerGray,
    darkerGrey: darkerGray,
    brown,
    darkBrown,
    lightBrown,
    orange,
  },
  ...breakPoints, // Expand media queries so they are accessible at 'props.theme.desktop' etc.
};

function Provider({ children, ...props }) {
  return (
    <ThemeProvider theme={theme} {...props}>
      {React.Children.only(children)}
    </ThemeProvider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};

export default Provider;
