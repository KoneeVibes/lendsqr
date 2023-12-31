import { Box, CssBaseline } from '@mui/material';
import { useContext } from 'react';
import { SideNav } from '../../components/navbars/sidenav/sidenav';
import { TopNav } from '../../components/navbars/topnav/topnav';
import { Context } from '../../context';
import { MainArea } from '../../containers/mainarea';

export const Dashboard: React.FC<{}> = () => {
    const { isSideNavOpen, setIsSideNavOpen } = useContext(Context);

    const handleSideNavOpen = () => {
        setIsSideNavOpen(true);
    };

    const handleSideNavClose = () => {
        setIsSideNavOpen(false);
    };

    return (
        <Box
            sx={{
                display: "flex",
            }}
        >
            <CssBaseline />
            <TopNav
                isSideNavOpen={isSideNavOpen}
                handleSideNavOpen={handleSideNavOpen}
            />
            <SideNav
                isSideNavOpen={isSideNavOpen}
                handleSideNavClose={handleSideNavClose}
            />
            <MainArea />
        </Box>
    )
}