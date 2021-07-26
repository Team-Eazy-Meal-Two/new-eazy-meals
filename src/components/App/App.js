import React from "react";
import { createGlobalStyle } from "styled-components"
import { CssBaseline } from "@material-ui/core";
import { StylesProvider } from '@material-ui/core/styles';

const Global = createGlobalStyle`
overflow-x: hidden;
overflow-y: scroll;
`;


export const App = (props) => {
const { children } = props;
return (
<StylesProvider injectFirst>
<CssBaseline />
<Global />
{children}
</StylesProvider>
);
}; 