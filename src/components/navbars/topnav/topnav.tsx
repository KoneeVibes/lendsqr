import { useState } from 'react';
import { TopNavProps } from '../../../types/app.type';
import { IconButton, Link, Stack, Toolbar, Avatar, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { SearchBox, SearchIconWrapper, StyledInputBase, StyledWrapper } from './styled';
import { theme } from '../../../theme';
import { DummyAvatar } from '../../../assets';
import { DialogBox } from '../../dialog/dialog';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { dialogBoxItems } from '../../../configs/content';

export const TopNav: React.FC<TopNavProps> = ({ isSideNavOpen, handleSideNavOpen }) => {

    const [isAvatarOpen, setIsAvatarOpen] = useState<boolean>(false);

    const handleAvatarOpen = () => {
        setIsAvatarOpen(true);
    };

    const handleAvatarClose = () => {
        setIsAvatarOpen(false);
    };

    return (
        <StyledWrapper
            position='fixed'
            theme={theme}
            open={isSideNavOpen}
            sx={{
                background: "#FFFFFF"
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleSideNavOpen}
                    edge="start"
                    sx={{
                        marginRight: 4.5,
                        background: '#213F7D',
                        borderRadius: '8px',
                        ...(isSideNavOpen && { display: 'none' }),
                        '&:hover': {
                            background: '#213F7D'
                        }
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Stack
                    direction={'row'}
                    width={'-webkit-fill-available'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <SearchBox>
                        <StyledInputBase
                            placeholder='Search for anything'
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                    </SearchBox>
                    <Stack
                        direction={'row'}
                        spacing={3}
                        alignItems={'center'}
                    >
                        <Link
                            fontFamily={'Roboto'}
                            fontWeight={400}
                            fontSize={'16px'}
                            lineHeight={'normal'}
                            color={'#213F7D'}
                            sx={{
                                cursor: 'pointer'
                            }}
                        >
                            Docs
                        </Link>
                        <IconButton>
                            <NotificationsNoneOutlinedIcon sx={{ color: '#213F7D' }} />
                        </IconButton>
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            spacing={1}
                        >
                            <Avatar>
                                <DummyAvatar />
                            </Avatar>
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                            >
                                <Button
                                    variant='text'
                                    onClick={handleAvatarOpen}
                                    endIcon={<ArrowDropDownIcon sx={{ color: '#213F7D' }} />}
                                    sx={{
                                        maxWidth: '110px'
                                    }}
                                >
                                    <Typography
                                        variant='button'
                                        fontFamily={'Work Sans'}
                                        fontWeight={500}
                                        fontSize={'16px'}
                                        lineHeight={'normal'}
                                        color={'#213F7D'}
                                        textTransform={'capitalize'}
                                    >
                                        Adedeji
                                    </Typography>
                                </Button>
                                <DialogBox
                                    isOpen={isAvatarOpen}
                                    onClose={handleAvatarClose}
                                    content={dialogBoxItems}
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Toolbar>
        </StyledWrapper>
    )
}