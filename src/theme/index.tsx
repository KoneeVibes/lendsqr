import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true;
        miniTablet: true;
        tablet: true;
        laptop: true;
        desktop: true;
    }
}

export const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            miniTablet: 425,
            tablet: 768,
            laptop: 1024,
            desktop: 1200,
        },
    },

    typography: {
        h1: {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
        },
        h2: {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
        },
        h3: {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
        },
        body1: {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
        },
        subtitle1: {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
        },
        button: {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
        }
    },

    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    '&::before, &::after': {
                        display: 'none'
                    },
                },
                wrapper: {
                    padding: '0 1rem',
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    textTransform: 'uppercase',
                    fontFamily: 'Work Sans',
                    fontSize: '12px',
                    fontWeight: 500,
                    lineHeight: 'normal',
                    color: '#545F7D'
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontFamily: 'Work Sans',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    color: '#213F7D'
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    width: '100%',
                    minHeight: '100px',
                    paddingRight: '24px',
                }
            }
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    "&.Mui-completed": {
                        color: '#39CDCC !important'
                    },
                    "&.Mui-active": {
                        color: '#39CDCC !important'
                    }
                },
            }
        }
    }
})