import { useTheme } from "@pokt-foundation/ui";
import React from "react";
import { useMemo } from "react";
import { ThemeProvider as Theme } from "styled-components";

function ThemeProvider({ children }) {
  const poktTheme = useTheme();

  const theme = useMemo(
    () => ({
      colors: {
        white: poktTheme.content,
        secondaryWhite: "#FAFAFA",
        black: poktTheme.contentInverted,
        secondaryBlack: "#212121",
        blue: poktTheme.accentAlternative,
        green: poktTheme.accent,
        transparent: "transparent",
        gray: "#5F6569",
        secondaryGray: poktTheme.placeholder,
      },
      backgroundBorder: `linear-gradient(to right, ${poktTheme.accent} 27%, ${poktTheme.accent} 27%) right bottom no-repeat`,
      ...poktTheme,
    }),
    [poktTheme]
  );

  return <Theme theme={theme}>{children}</Theme>;
}

export default ThemeProvider;
