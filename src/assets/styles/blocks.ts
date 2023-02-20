import { css } from 'styled-components';
import { colors } from './colors';
import { source } from './sources';

const headerStyle = () => css`
font-family: ${source.FontFamily};
font-size: ${source.FontSize};
background-color: ${colors.baseBg1};
`;

const bodyStyle = () => css`
font-family: ${source.FontFamily};
font-size: ${source.FontSize};
background-color: ${colors.baseBg2};
`

export const blocks = {
    headerStyle,
    bodyStyle,
}