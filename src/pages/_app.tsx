import { FunctionComponent as FC } from "react";
import type { AppProps } from "next/app";
import Theme from "../theme";
import GlobalStyle from "../theme/global";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<Theme>
			<GlobalStyle />
			<Component {...pageProps} />
		</Theme>
	);
};
export default MyApp;
