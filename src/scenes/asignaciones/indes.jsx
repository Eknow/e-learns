import React, { useState } from "react";
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    List,
    ListItem,
    ListItemText,
    IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import {
    observations as initialObservations,
    students as studentList,
} from "../../fakeData";

const ObservationManager = () => {
    const [observations, setObservations] = useState(initialObservations);
    const [students, setStudents] = useState(studentList);
    const [open, setOpen] = useState(false);
    const [currentObservation, setCurrentObservation] = useState(null);
    const [observationText, setObservationText] = useState("");
    const [selectedStudent, setSelectedStudent] = useState("");

    const handleClickOpen = (observation = null) => {
        setCurrentObservation(observation);
        setObservationText(observation ? observation.text : "");
        setSelectedStudent(observation ? observation.studentId : "");
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentObservation(null);
        setObservationText("");
        setSelectedStudent("");
    };

    const handleSave = () => {
        if (currentObservation) {
            setObservations(
                observations.map((observation) =>
                    observation.id === currentObservation.id
                        ? {
                              ...observation,
                              text: observationText,
                              studentId: selectedStudent,
                          }
                        : observation
                )
            );
        } else {
            setObservations([
                ...observations,
                {
                    id: Date.now(),
                    text: observationText,
                    studentId: selectedStudent,
                    createdDate: new Date().toISOString().split("T")[0],
                },
            ]);
        }
        handleClose();
    };

    const handleDelete = (id) => {
        setObservations(
            observations.filter((observation) => observation.id !== id)
        );
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => handleClickOpen()}>
                Add Observation
            </Button>
            <List>
                {observations.map((observation) => (
                    <ListItem key={observation.id}>
                        <ListItemText
                            primary={`Student ID: ${observation.studentId}`}
                            secondary={observation.text}
                        />
                        <IconButton
                            onClick={() => handleClickOpen(observation)}>
                            <Edit />
                        </IconButton>
                        <IconButton
                            onClick={() => handleDelete(observation.id)}>
                            <Delete />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    {currentObservation
                        ? "Edit Observation"
                        : "New Observation"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Observation Text"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={observationText}
                        onChange={(e) => setObservationText(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Student ID"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={selectedStudent}
                        onChange={(e) => setSelectedStudent(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ObservationManager;
