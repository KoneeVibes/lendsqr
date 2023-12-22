import { AuthFormType, SignUp } from '../../types/app.type';
import { BaseForm } from './styled';
import { useForm } from 'react-hook-form';
import { Typography } from "@mui/material";
import { LoadingButton } from '@mui/lab';

export const AuthForm: React.FC<AuthFormType> = ({
    onSubmit, auth, navigate, component, onClick, isLoading
}) => {

    const { register, handleSubmit, formState: { errors } } = useForm<SignUp>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    return (
        <BaseForm onSubmit={handleSubmit(onSubmit)}>
            <legend>Enter details to {auth}.</legend>
            <input
                {...register('email', {
                    required: 'Enter your email address',
                })}
                type='email'
                placeholder='Email'
            />
            {errors.email && <p>{errors.email.message}</p>}
            <input
                {...register('password', {
                    required: 'Enter a password',
                })}
                type='password'
                placeholder='Password'
            />
            {errors.password && <p>{errors.password.message}</p>}
            <Typography
                component={component}
                href={navigate.url}
                fontFamily={'Avenir Next'}
                fontWeight={600}
                lineHeight={'normal'}
                color={'#39CDCC'}
                textTransform={'uppercase'}
                letterSpacing={'0.075rem'}
                overflow={'hidden'}
                textOverflow={'ellipsis'}
                display={'inline-block'}
                width={'stretch'}
                sx={{
                    fontSize: '0.75rem',
                    textDecoration: 'none',
                    cursor: 'pointer',
                }}
                onClick={onClick}
            >
                {navigate.message}
            </Typography>
            <LoadingButton
                type='submit'
                variant='contained'
                loading={isLoading}
                disableElevation
                sx={{
                    width: "stretch",
                    minWidth: "unset",
                    backgroundColor: "#39CDCC",
                    marginTop: "2rem",
                    padding: "1rem",
                    border: "none",
                    borderRadius: "8px",
                    outline: "none",
                    ":hover": {
                        backgroundColor: "#39CDCC",
                    }
                }}
            >
                <Typography
                    variant='button'
                    fontFamily={"Avenir Next"}
                    fontWeight={600}
                    lineHeight={'normal'}
                    color={'var(--6, #FFF)'}
                    textTransform={'uppercase'}
                    letterSpacing={'0.0875rem'}
                    sx={{
                        fontSize: { laptop: '0.875rem' },
                        opacity: isLoading ? 0 : 1
                    }}
                >
                    {auth}
                </Typography>
            </LoadingButton>
        </BaseForm>
    )
}