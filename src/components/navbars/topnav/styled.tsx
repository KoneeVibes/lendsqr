import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { TopNavStyledWrapperProps } from "../../../types/app.type";
import { InputBase } from '@mui/material';

const sideNavWidth = 283;

export const SearchBox = styled('div')
    `${({ theme }) => ({
        borderRadius: '8px',
        border: '1px solid rgba(33, 63, 125, .2)',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.up('miniTablet')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    })}
`;

export const SearchIconWrapper = styled('div')
    `${({ theme }) => ({
        padding: theme.spacing(0, 2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#39CDCC',
        borderRadius: '0px 7px 7px 0px',
        zIndex: 100,
    })}
`;

export const StyledInputBase = styled(InputBase)
    `${({ theme }) => ({
        color: 'var(--545-f-7-d, rgba(84, 95, 125, .7))',
        fontFamily: 'Work Sans',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: 'normal',
        [theme.breakpoints.up('desktop')]: {
            minWidth: '344px'
        },
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 2),
            width: '100%',
        },
    })}
`;

// interestingly I have struggled with passing props (in styled components) like this in other codebases I've worked in. 
// super impressed by how easy this was for me. knowledge compounds, clarity is a function of time.

export const StyledWrapper = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
}) <TopNavStyledWrapperProps>`
    ${({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        boxShadow: '3px 5px 20px 0px rgba(0, 0, 0, 0.04)',
        flexDirection: 'row',
        ...(open && {
            marginLeft: sideNavWidth,
            width: `calc(100% - ${sideNavWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    })}
`;

