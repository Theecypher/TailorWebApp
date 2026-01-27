import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type FontSize = "small" | "medium" | "large";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  fontSize: FontSize;
  changeFontSize: (size: FontSize) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [fontSize, setFontSize] = useState<FontSize>("medium");

  console.log({
    theme,
    fontSize,
  });

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const changeFontSize = useCallback((size: FontSize) => {
    setFontSize(size);
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, fontSize, changeFontSize }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
