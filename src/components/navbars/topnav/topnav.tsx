import { useState, useEffect } from 'react';
import { TopNavProps } from '../../../types/app.type';
import { IconButton, Link, Stack, Toolbar, Avatar, Button, Typography, Modal } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { SearchBox, SearchIconWrapper, StyledInputBase, StyledWrapper } from './styled';
import { theme } from '../../../theme';
import { DummyAvatar } from '../../../assets';
import { DialogBox } from '../../dialog/dialog';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { dialogBoxItems } from '../../../configs/content';
import { AddUserForm } from '../../forms/addUser';
import Cookies from "universal-cookie";
import { useNavigate } from 'react-router-dom';
import userConfigs from '../../../configs/manageUsers';

export const TopNav: React.FC<TopNavProps> = ({ isSideNavOpen, handleSideNavOpen }) => {
    const [isAvatarOpen, setIsAvatarOpen] = useState<boolean>(false);
    const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);
    const [user, setUser] = useState<Record<string, any>>({})
    const cookies = new Cookies();
    const token = cookies.get("TOKEN");
    const navigate = useNavigate();

    const handleAvatarOpen = () => {
        setIsAvatarOpen(true);
    };

    const handleAvatarClose = (action: string) => {
        switch (action) {
            case 'Add New User':
                setIsAvatarOpen(false);
                return setIsNewUserModalOpen(true);
            case 'Log Out':
                cookies.remove("TOKEN", { path: "/" });
                navigate("/")
                return setIsAvatarOpen(false);
            default:
                return setIsAvatarOpen(false);
        }
    };

    const handleNewUserModalClose = () => {
        setIsNewUserModalOpen(false)
    }

    useEffect(() => {
        userConfigs.getUser(token)
            .then((res) => {
                setUser(res.user[0]);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, [token])

    return (
        <StyledWrapper
            position='fixed'
            theme={theme}
            open={isSideNavOpen}
            sx={{
                background: "#FFFFFF",
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
                        '&:hover': {
                            background: '#213F7D'
                        },
                        ...(isSideNavOpen && { display: 'none' }),
                        [theme.breakpoints.down('miniTablet')]: {
                            top: '23.5%',
                            left: '6%',
                        },
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Stack
                    width={'-webkit-fill-available'}
                    justifyContent={'space-between'}
                    overflow={'hidden'}
                    gap={1}
                    sx={{
                        flexDirection: { mobile: 'column-reverse', laptop: 'row' },
                        alignItems: { mobile: 'flex-end', laptop: 'center' }
                    }}
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
                        justifyContent={'flex-end'}
                        overflow={'hidden'}
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
                                        {user?.personalInfo?.username || user?.personalInfo?.email}
                                    </Typography>
                                </Button>
                                <DialogBox
                                    isOpen={isAvatarOpen}
                                    onClose={handleAvatarClose}
                                    content={dialogBoxItems}
                                />
                                <Modal
                                    open={isNewUserModalOpen}
                                    onClose={handleNewUserModalClose}
                                    aria-labelledby="Add new user form"
                                >
                                    <>
                                        <AddUserForm />
                                    </>
                                </Modal>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Toolbar>
        </StyledWrapper >
    )
}