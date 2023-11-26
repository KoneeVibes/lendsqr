import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import { StyledWrapper, SideNavHeader } from "./styled";
import { SideNavProps } from "../../../types/app.type";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import { theme } from "../../../theme";
import { Logo } from "../../../assets";
import { sideNavItems } from "../../../configs/content";

export const SideNav: React.FC<SideNavProps> = ({ handleSideNavClose, isSideNavOpen }) => {
    return (
        <StyledWrapper
            variant="permanent"
            theme={theme}
            open={isSideNavOpen}
        >
            <SideNavHeader
                sx={{
                    boxShadow: '3px 5px 20px 0px rgba(0, 0, 0, 0.04)'
                }}
            >
                <Logo />
                <IconButton onClick={handleSideNavClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <CloseIcon sx={{ color: '#213F7D' }} />}
                </IconButton>
            </SideNavHeader>
            <List>
                {
                    sideNavItems.find(section => section.section === 'Header')?.items.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                                disablePadding
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }
            </List>
            <Divider>Customers</Divider>
            <List>
                {
                    sideNavItems.find(section => section.section === 'Customers')?.items.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                                disablePadding
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }
            </List>
            <Divider>Businesses</Divider>
            <List>
                {
                    sideNavItems.find(section => section.section === 'Businesses')?.items.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                                disablePadding
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }
            </List>
            <Divider>Settings</Divider>
            <List>
                {
                    sideNavItems.find(section => section.section === 'Settings')?.items.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                                disablePadding
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }
            </List>
        </StyledWrapper>
    )
}