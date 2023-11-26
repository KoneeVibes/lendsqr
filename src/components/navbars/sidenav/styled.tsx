import { CSSObject, styled, Theme } from "@mui/material/styles";
import MuiDrawer from '@mui/material/Drawer';

const sideNavWidth = 283;

const openedMixin = (theme: Theme): CSSObject => ({
    width: sideNavWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    border: '1px solid rgba(33, 63, 125, 0.06)',
    boxShadow: '3px 5px 20px 0px rgba(0, 0, 0, 0.04)',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(8)} + 1px)`,
    border: '1px solid rgba(33, 63, 125, 0.06)',
    boxShadow: '3px 5px 20px 0px rgba(0, 0, 0, 0.04)',
    [theme.breakpoints.down('miniTablet')]: {
        width: '0px',
    },
});

export const SideNavHeader = styled('div')
    `${({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        padding: `0 calc(var(--cardPadding) / 2)`,
        minHeight: '100px',
    })}
`;

export const StyledWrapper = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})`
    ${({ theme, open }) => ({
        width: sideNavWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    })}
`;