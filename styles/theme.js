import { extendTheme } from "@chakra-ui/react";
const customTheme = {
  styles: {
    global: {
      html: {
        bg: "gray.400",
        color: "white",
      },
    },
  },
};

const theme = extendTheme({ customTheme });

export default theme;
