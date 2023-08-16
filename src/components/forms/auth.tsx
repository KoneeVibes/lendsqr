import { AuthFormType, SignUp } from '../../types/app.type';
import './styled.css';
import { useForm } from 'react-hook-form';
import { Typography } from "@mui/material";

export const AuthForm: React.FC<AuthFormType> = ({
    onSubmit, auth, navigate, component, onClick,
}) => {

    const { register, handleSubmit, formState: { errors } } = useForm<SignUp>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <input type='submit' value={auth} />
        </form>
    )
}