import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import AppLayout from '../Layouts/AppLayout';

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
    DialogContentText,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { styled } from '@mui/material/styles';
import { useRoute } from 'ziggy-js';
import { useForm } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';


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
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const [snackBarMessage, setSnackBarMessage] = useState('');
    const [editingUser, setEditingUser] = useState(null);
    const [role, setRole] = useState(null);

    const roles = {
        admin: "Admin",
        organizer: "Organizer"
    };

    const handleRole = (event) => {
        setRole(event.target.value);
    }

    const openDeleteDialog = () => {
        setDeleteOpen(true);
    }

    const closeDeleteDialog = () => {
        setDeleteOpen(false);
    }

    const handleClickOpen = (user = null) => {
        setOpen(true);
        setEditingUser(user);
        if (user) {
            setData({
                name: user.name,
                email: user.email,
                role: user.role,
            });
        } else {
            setData({
                name: '',
                email: '',
                role: '',
                password: '',
                password_confirmation: '',
            });
        }
    }; 
    const handleClose = () => {
        setOpen(false);
        setEditingUser(null);
    };

    const message = props.flash.success;

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
    
    const {data, setData, post, reset, delete: destroy, put, errors} = useForm({
        name: '',
        email: '',
        role: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        if(editingUser) {
            put(route('user.update', editingUser.id), {
                method: 'put',
                data,
                onSuccess: () => {
                    reset();
                    setEditingUser(null);
                    setSnackBarMessage(message);
                    setAlertOpen(true);
                    setOpen(false);
                },
                onError: (errors) => {
                    console.log('Error: ', errors);
                },
            });
        } else {
            post(route('user.create'), {
                onSuccess: () => {
                    reset(); 
                    setAlertOpen(true);
                    setOpen(false);
                    setSnackBarMessage(message);
                },
                onError: (errors) => {
                    reset('password', 'password_confirmation');
                    console.log('Error: ', errors)
                }
            });
        }
        
    };

    const deleteUser = (id) => {
        destroy(route('user.delete', id), {
            method: 'delete',
            onSuccess: () => {
                setSnackBarMessage(message);
                setDeleteOpen(false);
            },
            onError: (errors) => {
                console.log(errors);
            }

        });
    };


    return (
        <>
            <AppLayout title='User Management'>
                
                <div className="flex justify-between items-center mb-4">
                    <h1 className='text-5xl font-bold mb-4'>USER MANAGEMENT</h1>
                    <Button variant='contained' onClick={() => handleClickOpen()}>Add User</Button>
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
                        key={open}
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                        {editingUser ? 'Edit User' : 'Add New User'}
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
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={data.role}
                                        label="Role"
                                        onChange={e => setData('role', e.target.value)}
                                        >
                                        <MenuItem value={roles.admin}>Admin</MenuItem>
                                        <MenuItem value={roles.organizer}>Organizer</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {!editingUser && (
                                        <>
                                            <TextField id="outlined-basic" label="Password" variant="outlined" type='password' value={data.password} onChange={e => setData('password', e.target.value)} />
                                            {errors.password && <span><p className='text-red-500'>{errors.password}</p></span>}
                                            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type='password' value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} />
                                            
                                        </>
                                    )}
                                </Stack>
                                <DialogActions className='mt-4'>
                                    <Button variant='outlined' onClick={handleClose}>Cancel</Button>
                                    <Button variant='contained' type='submit'>{editingUser ? 'Save' : 'Add'}</Button>
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
                                        <IconButton aria-label="edit" size="large" onClick={() => handleClickOpen(item)}>
                                            <EditIcon color='primary' fontSize="inherit" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Delete' arrow>
                                        <IconButton aria-label="delete" size="large" onClick={openDeleteDialog}>
                                            <DeleteIcon color='primary' fontSize="inherit" />
                                        </IconButton>
                                    </Tooltip>
                                    <Dialog
                                        open={deleteOpen}
                                        onClose={closeDeleteDialog}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                            Confirm Deletion
                                        </DialogTitle>
                                        <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Are you sure you want to delete this user? This action cannot be undone.
                                        </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button variant='outlined' onClick={closeDeleteDialog}>Cancel</Button>
                                        <Button variant='contained' onClick={() => deleteUser(item.id)} autoFocus>
                                            Delete
                                        </Button>
                                        </DialogActions>
                                    </Dialog>
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
