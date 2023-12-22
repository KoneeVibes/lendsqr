import { styled } from "@mui/material";

export const BaseForm = styled('form')`
    legend {
        font-family: 'Avenir Next';
        font-weight: 400;
        line-height: normal;
        color: #545F7D;
        margin-bottom: 4rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    input, select, option{
        width: stretch;
        padding: 1rem;
        border: 2px solid rgba(84, 95, 125, 0.15);
        border-radius: 5px;
        margin-bottom: 2rem;
        outline: none;
        font-family: 'Avenir Next';
        font-weight: 400;
        line-height: normal;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media screen and (min-width: 1024px) {
        legend {
            font-size: 1.25rem;
        }

        input, select {
            font-size: '1.25rem';
        }
    }
`

export const NewUserForm = styled(BaseForm)
    `${({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        backgroundColor: '#FFFFFF',
        borderRadius: `calc(${theme.spacing(4)} - 8px)`,
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: '80%',
        [theme.breakpoints.down('desktop')]: {
            '& .MuiStepLabel-labelContainer': {
                display: "none"
            }
        },
    })}
    
    legend {
        margin-bottom: 2rem;
        overflow: unset;
    }

    .stepper {
        margin-bottom: 2rem;
    }

    .stepper span {
        font-family: 'Avenir Next';
        font-weight: 400;
        line-height: normal;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`