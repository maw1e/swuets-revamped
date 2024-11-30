import React from 'react'

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import ReportIcon from '@mui/icons-material/Assessment';
import HistoryIcon from '@mui/icons-material/History';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import { Link, usePage } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';


const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon color='primary' />, route: 'dashboard' },
    { text: 'User Management', icon: <PeopleIcon color='primary' />, route: 'user_management', admin: true },
    { text: 'Event Management', icon: <EventIcon color='primary' />, route: 'event_management' },
    { text: 'Reports', icon: <ReportIcon color='primary' />, route: 'reports' },
    { text: 'Event History', icon: <HistoryIcon color='primary' />, route: 'event_history' },
    { text: 'Profile', icon: <AccountBoxIcon color='primary' />, route: 'profile' },
  ];

const MiniDrawerList = () => {

    const {props} = usePage();
   
    const route = useRoute();

    const userRole = props.user.roles || [];
    const isAdmin = userRole.includes('Admin');
    console.log(props);


    return (
        <>
            <List>
            {menuItems.map((item) => {
                // Conditionally render "User Management" for admins only
                if (item.admin && !isAdmin) {
                    return null; // Don't render "User Management" if not an admin
                }
                    return (
                    <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                        <Link href={route(item.route)}>
                            <Tooltip title={item.text} arrow>
                                <ListItemButton
                                    sx={[
                                        {
                                        minHeight: 48,
                                        px: 2.5,
                                        },
                                        open
                                        ? {
                                            justifyContent: 'initial',
                                            }
                                        : {
                                            justifyContent: 'center',
                                            },
                                    ]}
                                >
                                <ListItemIcon
                                    sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                    },
                                    open
                                        ? {
                                            mr: 3,
                                        }
                                        : {
                                            mr: 'auto',
                                        },
                                    ]}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    sx={[
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            opacity: 0,
                                        },
                                    ]}
                                />
                                </ListItemButton>
                            </Tooltip>
                        </Link>
                    </ListItem>
                )
            })}
          </List>
        </>
    )
}

export default MiniDrawerList
