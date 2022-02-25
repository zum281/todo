import { ThemeProvider } from "styled-components";

const theme = {
	color: {
		black: "#333",
		white: "#fffef8",
	},
	font: {
		body: "Roboto, sans-serif",
		heading: "Poppins, sans-serif",
	},
};

const Theme: React.FunctionComponent = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;

export type ThemeType = typeof theme;
