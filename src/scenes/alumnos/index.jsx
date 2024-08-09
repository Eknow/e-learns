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
import { students as initialStudents } from "../../fakeData";

const StudentManager = () => {
    const [students, setStudents] = useState(initialStudents);
    const [open, setOpen] = useState(false);
    const [currentStudent, setCurrentStudent] = useState(null);
    const [studentName, setStudentName] = useState("");
    const [studentSchool, setStudentSchool] = useState("");

    const handleClickOpen = (student = null) => {
        setCurrentStudent(student);
        setStudentName(student ? student.name : "");
        setStudentSchool(student ? student.school : "");
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentStudent(null);
        setStudentName("");
        setStudentSchool("");
    };

    const handleSave = () => {
        if (currentStudent) {
            setStudents(
                students.map((student) =>
                    student.id === currentStudent.id
                        ? {
                              ...student,
                              name: studentName,
                              school: studentSchool,
                          }
                        : student
                )
            );
        } else {
            setStudents([
                ...students,
                { id: Date.now(), name: studentName, school: studentSchool },
            ]);
        }
        handleClose();
    };

    const handleDelete = (id) => {
        setStudents(students.filter((student) => student.id !== id));
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => handleClickOpen()}>
                Add Student
            </Button>
            <List>
                {students.map((student) => (
                    <ListItem key={student.id}>
                        <ListItemText
                            primary={`${student.name} (${student.school})`}
                        />
                        <IconButton onClick={() => handleClickOpen(student)}>
                            <Edit />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(student.id)}>
                            <Delete />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    {currentStudent ? "Edit Student" : "New Student"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Student Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="School"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={studentSchool}
                        onChange={(e) => setStudentSchool(e.target.value)}
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

export default StudentManager;
