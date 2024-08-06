import { createContext, useState } from "react";

const DarkModeContect = createContext();

// bikin provider
const DarkModeContectProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	return (
		<DarkModeContect.Provider value={{ isDarkMode, setIsDarkMode }}>
			{children}
		</DarkModeContect.Provider>
	);
};

export const DarkMode = DarkModeContect;
export default DarkModeContectProvider;
