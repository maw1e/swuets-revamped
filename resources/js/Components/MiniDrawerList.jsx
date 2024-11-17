import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import ReportIcon from '@mui/icons-material/Assessment';
import HistoryIcon from '@mui/icons-material/History';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';


const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon color='primary' />, route: 'dashboard' },
    { text: 'Users Management', icon: <PeopleIcon color='primary' />, route: 'user_management' },
    { text: 'Event Management', icon: <EventIcon color='primary' />, route: 'event_management' },
    { text: 'Reports', icon: <ReportIcon color='primary' />, route: 'reports' },
    { text: 'Event History', icon: <HistoryIcon color='primary' />, route: 'event_history' },
  ];

const MiniDrawerList = () => {

    const route = useRoute();

    return (
        <>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                        <Link href={route(item.route)}>
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
                        </Link>
                    </ListItem>
                ))}
          </List>
        </>
    )
}

export default MiniDrawerList
