import React, { useEffect, useState } from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import AppLayout from '../Layouts/AppLayout'

import { 
    Button, 
    Divider, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    IconButton, 
    TextField, 
    Stack,
    Alert,
    Snackbar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Tooltip,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { styled } from '@mui/material/styles';
import { useRoute } from 'ziggy-js';
import { useForm } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
    '& .MuiDialog-paper': {
        width: '500px', 
        maxWidth: 'unset',
        },
  }));

const UserManagement = () => {
    const route = useRoute();
    const { props } = usePage();
    const [open, setOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const [snackBarMessage, setSnackBarMessage] = useState('');

    const handleClickOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false);

    console.log(props)

    useEffect(() => {
        if (props.flash.success) {
            setSnackBarMessage(props.flash.success);
            setAlertOpen(true);
            console.log(props.flash);
        }
    }, [props.flash.success]);

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
          }
      
          setAlertOpen(false);
    };
    
    const {data, setData, post, reset, errors} = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('user.create'), {
            onSuccess: () => {
                const message = props.flash.success;
                reset(); 
                setAlertOpen(true);
                setOpen(false);
                setSnackBarMessage(message);
            },
            onError: (errors) => {
                reset('password', 'password_confirmation');
                console.log('Error: ', errors)
            }
        })
    }


    return (
        <>
            <AppLayout title='User Management'>
                
                <div className="flex justify-between items-center mb-4">
                    <h1 className='text-5xl font-bold mb-4'>USER MANAGEMENT</h1>
                    <Button variant='contained' onClick={handleClickOpen}>Add User</Button>
                    <Snackbar 
                        open={alertOpen} 
                        autoHideDuration={3000} 
                        onClose={handleAlertClose}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        <Alert 
                            onClose={handleAlertClose} 
                            severity="success" 
                            variant="filled"
                            sx={{ width: '100%', color: 'white' }}
                        >
                            {snackBarMessage}
                        </Alert>
                    </Snackbar>
                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                        Add New User
                        </DialogTitle>
                        <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={(theme) => ({
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: theme.palette.grey[500],
                        })}
                        >
                        <CloseIcon />
                        </IconButton>
                        <DialogContent dividers>
                            <form onSubmit={submit}>
                                <Stack spacing={2}>
                                    <TextField id="outlined-basic" label="Name" variant="outlined" type='text' value={data.name} onChange={e => setData('name', e.target.value)} />
                                    {errors.name && <span><p className='text-red-500'>{errors.name}</p></span>}
                                    <TextField id="outlined-basic" label="Email" variant="outlined" type='email' value={data.email} onChange={e => setData('email', e.target.value)} />
                                    {errors.email && <span><p className='text-red-500'>{errors.email}</p></span>}
                                    <TextField id="outlined-basic" label="Password" variant="outlined" type='password' value={data.password} onChange={e => setData('password', e.target.value)} />
                                    {errors.password && <span><p className='text-red-500'>{errors.password}</p></span>}
                                    <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type='password' value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} />
                                </Stack>
                                <DialogActions className='mt-4'>
                                    <Button variant='outlined' onClick={handleClose}>Cancel</Button>
                                    <Button variant='contained' type='submit'>Add</Button>
                                </DialogActions>
                            </form>
                        </DialogContent>
                    </BootstrapDialog>
                    
                </div>
                <Divider />

                {/* Display users */}
                <TableContainer className='mt-8' component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell><h2 className='font-bold text-lg'>Name</h2></TableCell>
                            <TableCell><h2 className='font-bold text-lg'>Email</h2></TableCell>
                            <TableCell><h2 className='font-bold text-lg'>Role</h2></TableCell>
                            <TableCell><h2 className='font-bold text-lg'>Action</h2></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {props.user.map((item) => (
                                <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {item.name}
                                </TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.role}</TableCell>
                                <TableCell>
                                    <Tooltip title='Edit' arrow>
                                        <IconButton aria-label="edit" size="large">
                                            <EditIcon color='primary' fontSize="inherit" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Delete' arrow>
                                        <IconButton aria-label="delete" size="large">
                                            <DeleteIcon color='primary' fontSize="inherit" />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                                </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </AppLayout>
        </>
    )
}

UserManagement.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>

export default UserManagement
