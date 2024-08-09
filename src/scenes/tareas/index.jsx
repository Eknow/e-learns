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
import { tasks as initialTasks } from "../../fakeData";

const TaskManager = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [open, setOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const handleClickOpen = (task = null) => {
        setCurrentTask(task);
        setTaskName(task ? task.name : "");
        setTaskDescription(task ? task.description : "");
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentTask(null);
        setTaskName("");
        setTaskDescription("");
    };

    const handleSave = () => {
        if (currentTask) {
            setTasks(
                tasks.map((task) =>
                    task.id === currentTask.id
                        ? {
                              ...task,
                              name: taskName,
                              description: taskDescription,
                          }
                        : task
                )
            );
        } else {
            setTasks([
                ...tasks,
                {
                    id: Date.now(),
                    name: taskName,
                    description: taskDescription,
                    createdDate: new Date().toISOString().split("T")[0],
                },
            ]);
        }
        handleClose();
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => handleClickOpen()}>
                Add Task
            </Button>
            <List>
                {tasks.map((task) => (
                    <ListItem key={task.id}>
                        <ListItemText
                            primary={task.name}
                            secondary={task.description}
                        />
                        <IconButton onClick={() => handleClickOpen(task)}>
                            <Edit />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(task.id)}>
                            <Delete />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    {currentTask ? "Edit Task" : "New Task"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Task Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Task Description"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
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

export default TaskManager;
