import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";

import { useState } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

export default function EventManagement() {
    const [openAddEventModal, setOpenAddEventModal] = useState(false);

    const handleClickOpenEventModal = () => {
        setOpenAddEventModal(true);
    };

    const handleCloseEventModal = () => {
        setOpenAddEventModal(false);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Event Management
                </h2>
            }
        >
            <Head title="Event Management" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-end">
                        <Button
                            variant="contained"
                            onClick={handleClickOpenEventModal}
                        >
                            Add New Event
                        </Button>
                        <Dialog
                            open={openAddEventModal}
                            onClose={handleCloseEventModal}
                            PaperProps={{
                                sx: {
                                    width: "560px", // Custom width
                                    maxWidth: "95%", // Ensure it doesn't overflow on small screens
                                    margin: "auto", // Center the dialog horizontally
                                },
                            }}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <DialogTitle>Add New Event</DialogTitle>
                            <DialogContent>
                                <InputLabel
                                    htmlFor="event"
                                    value="Event Name"
                                />
                                <TextInput
                                    id="event_name"
                                    type="text"
                                    name="event_name"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                />

                                <InputLabel
                                    htmlFor="event"
                                    value="Event Description"
                                />
                                <TextInput
                                    id="event_description"
                                    type="text"
                                    name="event_description"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseEventModal}>
                                    Cancel
                                </Button>
                                <Button type="submit" variant="contained">
                                    Add
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
