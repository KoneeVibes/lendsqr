import { styled } from '@mui/material/styles';
import MuiDialog from '@mui/material/Dialog';

export const StyledWrapper = styled(MuiDialog, { shouldForwardProp: () => true })`
    ${({ theme }) => ({
        '& .MuiDialog-container': {
            position: 'absolute',
            right: 0,
            top: theme.spacing(8),
            height: 'auto',
        }
    })}
`