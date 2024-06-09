import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import './HeaderMUI.css';
import { lightBlue } from '@mui/material/colors';
import MenuHeader from '../MenuHeader/MenuHeader';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeGlobal } from '../../store/slices/globalSlice';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const dispatch = useAppDispatch();
  const global = useAppSelector((state) => state.globalData.global);
  
  return (
    <div className="HeaderBox">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: lightBlue[200] }}>
          <Toolbar>
            <Box
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, minWidth: '50px' }}
            >
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="Logo"
                className='img'
              />
            </Box>
            <Box component="div" flexGrow={2}>
              <MenuHeader />
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <select className='select' onChange={(e) => dispatch(changeGlobal(e.target.value))} value={global}>
              <option value={'en-US'}>EN</option>
              <option value={'ru-RU'}>RU</option>
            </select>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
