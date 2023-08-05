import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { Logo, SignIn } from '../../assets';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SignUp } from '../../types/app.type';
import './styled.css';
import { useMediaQuery } from '@mui/material';

export const Login: React.FC<{}> = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<SignUp>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<SignUp> = async (data) => {
        prompt(`Currently working on registering ${data.email} and ${data.password} to the database`);
    };

    const laptopScreenUpward = useMediaQuery('(min-width: 1024px)');

    return (
        <Container
            maxWidth={false}
            sx={{
                padding: 0,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: { mobile: 'column', laptop: 'row' },
                minHeight: '100vh',
            }}
        >
            <Box
                flex={1}
                padding={'var(--pagePadding)'}
                position={'relative'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                sx={{
                    backgroundColor: "#FDFDFD",
                }}
            >
                <Logo
                    style={{
                        position: laptopScreenUpward ? 'absolute' : 'static',
                        top: laptopScreenUpward ? '10%' : 'unset',
                        left: laptopScreenUpward ? '10%' : 'unset',
                        width: '20%',
                    }}
                />
                <SignIn
                    style={{
                        position: laptopScreenUpward ? 'absolute' : 'static',
                        top: laptopScreenUpward ? '50%' : 'unset',
                        left: laptopScreenUpward ? '50%' : 'unset',
                        transform: laptopScreenUpward ? 'translate(-50%, -50%)' : 'unset',
                        width: laptopScreenUpward ? '80%' : '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>
            <Box
                flex={1}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                padding={'var(--pagePadding)'}
            >
                <Typography
                    variant='h1'
                    fontFamily={'Avenir Next'}
                    fontWeight={700}
                    lineHeight={'normal'}
                    color={'#213F7D'}
                    sx={{
                        fontSize: { mobile: '1.5rem', laptop: '2.5rem' },
                        marginBlock: '1rem',
                    }}
                >
                    Welcome!
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <legend>Enter details to login.</legend>
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
                        component={'a'}
                        href='#'
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
                            textDecoration: 'none'
                        }}
                    >
                        Forgot PASSWORD?
                    </Typography>
                    <input type='submit' value={'LOG IN'} />
                </form>
            </Box>
        </Container>
    )
}