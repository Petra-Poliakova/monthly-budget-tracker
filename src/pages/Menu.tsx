import {NavLink} from 'react-router'
import {Stack} from '@mui/material'
import './Menu.scss'

export const Menu = () => {
  return (
    <Stack component="nav" direction="row" spacing={2} sx={{justifyContent: 'flex-end', alignItems: 'center', padding: '25px', }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/reports">Reports</NavLink>
    </Stack>
  )
}
