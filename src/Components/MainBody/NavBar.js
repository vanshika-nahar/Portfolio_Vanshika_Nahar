import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, useMediaQuery, useTheme, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Assets/logo_img.jpg';
import Call from '../../Assets/CONTACT_ICON.png';

const pages = [
    { name: 'Home', url: 'home' },
    { name: 'About Me', url: 'aboutme' },
    { name: 'Education', url: 'education' },
    { name: 'Skills', url: 'skills' },
    { name: 'Work', url: 'work' },
    { name: 'Experience', url: 'experience' },
    { name: 'Contact', url: 'contact' },
];

export default function NavBar({ scrollToSection }) {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const navigate = useNavigate();

    const theme = useTheme();
    const mob = useMediaQuery(theme.breakpoints.down(600));
    const tab = useMediaQuery(theme.breakpoints.down(900));
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (url) => {
        scrollToSection(url);
        handleCloseMenu();
    };

    const Pages = () => {
        return pages.map((item) => {
            return (
                <Button key={item.url} onClick={() => handleMenuItemClick(item.url)}>
                    <Typography
                        sx={{
                            color: isScrolled ? '#ffffff' : '#000000',
                            fontWeight: 700,
                            fontFamily: 'Quicksand',
                            '&:hover': {
                                borderBottom: '3px solid #B886EB',
                            },
                        }}
                    >
                        {item.name}
                    </Typography>
                </Button>
            );
        });
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container maxWidth="xl">
                <AppBar
                    color={isScrolled ? 'secondary' : 'transparent'}
                    elevation={isScrolled ? 4 : 0}
                    position="fixed"
                    sx={{
                        paddingInline: '20px',
                        bgcolor: isScrolled ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
                        boxShadow: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}
                >
                    <img onClick={() => navigate("/")} src={Logo} width={'100px'} alt="Logo" />
                    <Toolbar sx={{ display: mob ? 'none' : tab ? 'none' : '' }}>
                        <Pages />
                    </Toolbar>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleCloseMenu}
                        sx={{
                            display: { xs: 'none', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.url} onClick={() => handleMenuItemClick(page.url)}>
                                <Typography textAlign="center" sx={{ color: 'black' }}>{page.name}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                    <Button href={"tel:+919907451861"}><img src={Call} width={'40px'} alt="Call" /></Button>
                </AppBar>
            </Container>
        </Box>
    );
}
