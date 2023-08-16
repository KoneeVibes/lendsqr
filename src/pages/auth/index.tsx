import React, { useContext } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { Logo, SignIn } from '../../assets';
import { useMediaQuery } from '@mui/material';
import { Signup } from './signup';
import { Context } from '../../context';
import { Login } from './login';

export const Auth: React.FC<{}> = () => {

    const laptopScreenUpward = useMediaQuery('(min-width: 1024px)');
    const { isSignedUp } = useContext(Context);

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
                {
                    isSignedUp ? <Login /> : <Signup />
                }
            </Box>
        </Container>
    )
}