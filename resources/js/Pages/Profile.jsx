import React, { useState } from 'react'
import AppLayout from '../Layouts/AppLayout'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'

import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import { TextField, Tabs, Tab, Box, Button } from '@mui/material';
import { useForm, usePage } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
}
  
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}




const Profile = () => {
    const route = useRoute();
    const [value, setValue] = useState(0);
    const { props } = usePage();

    const {data, setData, put,} = useForm({
        name: props.profile.name,
        email: props.profile.email,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('profile.update'), {
            onSuccess: () => {
                console.log('Profile updated successfully!')
            },
            onErrors: (errors) => {
                console.log(errors);
            }
        });
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <AppLayout title='Profile'>
                <section>
                    <h1 className='text-5xl font-bold mb-6'>PROFILE</h1>
                    <Divider />
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Personal Information" {...a11yProps(0)} />
                                <Tab label="Security" {...a11yProps(1)} />
                            </Tabs>
                        </Box>

                        {/* Personal Information Tab */}
                        <CustomTabPanel value={value} index={0}>
                            <form onSubmit={submit}>
                                <div className='w-1/4'>
                                    <TextField sx={{ marginBottom: '16px' }} id="outlined-basic" label="Name" variant="outlined" fullWidth value={data.name} onChange={(e) => setData('name', e.target.value)} />
                                    <TextField sx={{ marginBottom: '16px' }} id="outlined-basic" label="Outlined" variant="outlined" fullWidth value={data.email} onChange={(e) => setData('email', e.target.value)} />
                                    <Button type='submit' variant='contained'> Save </Button>
                                </div>
                            </form>
                            
                        </CustomTabPanel>

                        {/* Security Tab */}
                        <CustomTabPanel value={value} index={1}>
                            <form>
                                <div className='w-1/4'>
                                    <TextField sx={{ marginBottom: '16px' }} id="outlined-basic" type='password' label="Old Password" variant="outlined" fullWidth />
                                    <TextField sx={{ marginBottom: '16px' }} id="outlined-basic" type='password' label="New Password" variant="outlined" fullWidth />
                                    <TextField sx={{ marginBottom: '16px' }} id="outlined-basic" type='password' label="Confirm New Password" variant="outlined" fullWidth />
                                    <Button type='submit' variant='contained'> Save </Button>
                                </div>
                            </form>
                        </CustomTabPanel>
                    </Box>
                </section>
            </AppLayout>
        </>
        
    )
}

Profile.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>

export default Profile
