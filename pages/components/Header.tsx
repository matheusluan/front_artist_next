import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Icon } from '@mui/material';

const pages = ['Artistas', 'Eventos'];
const settings = ['Perfil', 'Meus eventos', 'Notificações', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ my: 2, background: '#B23AFF', margin: '0' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>    
               
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'nunito',
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <svg width="120" height="50" viewBox="0 0 189 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M119.517 26.4975C119.518 22.639 122.272 19.3304 126.066 18.6305L127.487 18.3685C128.732 18.1233 129.729 16.8987 129.479 15.4289C129.23 14.2043 127.985 13.2241 126.491 13.4694L116.528 15.4289C115.283 15.6741 114.536 16.6534 114.536 17.8789V29.2911C114.536 30.5487 113.303 31.3525 112.045 31.3525C107.812 31.3525 104.574 34.5374 104.574 38.7017C104.574 42.8659 107.812 46.0508 112.045 46.0508C116.279 46.0508 119.517 42.8659 119.517 38.7017V38.4564L119.517 26.4975ZM112.046 41.1508C110.552 41.1508 109.555 40.1707 109.555 38.7008C109.555 37.231 110.552 36.2508 112.046 36.2508C113.54 36.2508 114.537 37.231 114.537 38.7008C114.537 40.1715 113.54 41.1508 112.046 41.1508Z" fill="#50E3C2"/>
                <path d="M24.0594 58H15.6219L30.9841 14.3636H40.7426L56.1261 58H47.6886L36.0338 23.3125H35.6929L24.0594 58ZM24.3364 40.8906H47.3477V47.2401H24.3364V40.8906ZM61.1994 58V25.2727H68.6781V30.7273H69.019C69.6156 28.8381 70.6383 27.3821 72.0872 26.3594C73.5503 25.3224 75.2193 24.804 77.0943 24.804C77.5204 24.804 77.9963 24.8253 78.5218 24.8679C79.0616 24.8963 79.5091 24.946 79.8642 25.017V32.1122C79.5375 31.9986 79.019 31.8991 78.3088 31.8139C77.6128 31.7145 76.938 31.6648 76.2846 31.6648C74.8784 31.6648 73.6142 31.9702 72.492 32.581C71.3841 33.1776 70.5105 34.0085 69.8713 35.0739C69.2321 36.1392 68.9125 37.3679 68.9125 38.7599V58H61.1994ZM102.755 25.2727V31.2386H83.9414V25.2727H102.755ZM88.5862 17.4318H96.2993V48.1562C96.2993 49.1932 96.4556 49.9886 96.7681 50.5426C97.0948 51.0824 97.5209 51.4517 98.0465 51.6506C98.572 51.8494 99.1544 51.9489 99.7936 51.9489C100.277 51.9489 100.717 51.9134 101.115 51.8423C101.527 51.7713 101.839 51.7074 102.052 51.6506L103.352 57.6804C102.94 57.8224 102.35 57.9787 101.583 58.1491C100.831 58.3196 99.9073 58.419 98.8135 58.4474C96.8817 58.5043 95.1416 58.2131 93.5933 57.5739C92.045 56.9205 90.8164 55.9119 89.9073 54.5483C89.0124 53.1847 88.572 51.4801 88.5862 49.4347V17.4318ZM149.289 33.9233L142.257 34.6903C142.058 33.9801 141.71 33.3125 141.213 32.6875C140.73 32.0625 140.077 31.5582 139.253 31.1747C138.429 30.7912 137.421 30.5994 136.227 30.5994C134.622 30.5994 133.273 30.9474 132.179 31.6435C131.1 32.3395 130.567 33.2415 130.581 34.3494C130.567 35.3011 130.915 36.0753 131.625 36.6719C132.35 37.2685 133.543 37.7585 135.205 38.142L140.787 39.3352C143.884 40.0028 146.185 41.0611 147.691 42.5099C149.21 43.9588 149.977 45.8551 149.992 48.1989C149.977 50.2585 149.374 52.0767 148.181 53.6534C147.002 55.2159 145.361 56.4375 143.259 57.3182C141.156 58.1989 138.742 58.6392 136.014 58.6392C132.009 58.6392 128.784 57.8011 126.341 56.125C123.898 54.4347 122.442 52.0838 121.973 49.0724L129.494 48.348C129.835 49.8253 130.56 50.9403 131.668 51.6932C132.776 52.446 134.218 52.8224 135.993 52.8224C137.825 52.8224 139.296 52.446 140.404 51.6932C141.526 50.9403 142.087 50.0099 142.087 48.902C142.087 47.9645 141.725 47.1903 141 46.5795C140.29 45.9687 139.182 45.5 137.676 45.1733L132.094 44.0014C128.955 43.348 126.632 42.2472 125.127 40.6989C123.621 39.1364 122.875 37.1619 122.889 34.7756C122.875 32.7585 123.422 31.0114 124.53 29.5341C125.652 28.0426 127.208 26.892 129.196 26.0824C131.199 25.2585 133.507 24.8466 136.121 24.8466C139.956 24.8466 142.975 25.6634 145.176 27.2969C147.392 28.9304 148.763 31.1392 149.289 33.9233ZM172.361 25.2727V31.2386H153.547V25.2727H172.361ZM158.192 17.4318H165.905V48.1562C165.905 49.1932 166.061 49.9886 166.374 50.5426C166.7 51.0824 167.126 51.4517 167.652 51.6506C168.177 51.8494 168.76 51.9489 169.399 51.9489C169.882 51.9489 170.322 51.9134 170.72 51.8423C171.132 51.7713 171.445 51.7074 171.658 51.6506L172.957 57.6804C172.545 57.8224 171.956 57.9787 171.189 58.1491C170.436 58.3196 169.513 58.419 168.419 58.4474C166.487 58.5043 164.747 58.2131 163.199 57.5739C161.65 56.9205 160.422 55.9119 159.513 54.5483C158.618 53.1847 158.177 51.4801 158.192 49.4347V17.4318Z" fill="white"/>
            </svg>  
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'nunito',
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Art'st
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir configurações">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;