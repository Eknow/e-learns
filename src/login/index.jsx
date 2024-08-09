import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Alert from "@mui/material/Alert";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import {
    Box,
    Button,
    Typography,
    useTheme,
    Grid,
    TextField,
} from "@mui/material";
import { users } from "fakeData";

const Login = () => {
    const navigate = useNavigate();

    // Estados para el formulario de inicio de sesión
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setError(true);
            setErrorMessage("Please fill all the fields");
            return;
        }

        const user = users.find(
            (user) => user.email === email && user.password === password
        );
        if (user) {
            setError(false);
            localStorage.setItem("DashBoardUserLoggedIn", true);
            localStorage.setItem("DashBoardUser", JSON.stringify(user));
            navigate("/dashboard");
        } else {
            setError(true);
            setErrorMessage("Invalid email or password");
        }
    };

    const DisplayErrorMessage = () =>
        error && (
            <Alert
                severity="error"
                sx={{
                    background: "white",
                    color: "black",
                    fontWeight: "bold",
                }}>
                {errorMessage}
            </Alert>
        );

    const DisplayCredentials = () => (
        <Alert severity="success">FOR TESTING PURPOSES USE </Alert>
    );

    const theme = useTheme();

    return (
        <Box
            m="1.5rem 2rem"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100%",
                gap: "3rem",
            }}>
            <DisplayErrorMessage />
            <Box
                pt="2rem"
                sx={{
                    backgroundColor: theme.palette.background.alt,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "0.2rem",
                }}>
                <Header title="WELCOME" subtitle="Sign In to your dashboard" />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: "theme.palette.secondary" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <Box m="1rem" component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    inputProps={{
                                        autoComplete: "new-email",
                                        form: {
                                            autoComplete: "off",
                                        },
                                    }}
                                    onChange={handleEmail}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handlePassword}
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            onClick={handleSubmit}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                p: "0.5rem 0",
                                background: theme.palette.primary[400],
                                "&:hover": {
                                    backgroundColor: theme.palette.primary[300],
                                },
                            }}>
                            Sign In
                        </Button>
                    </Box>
                    <DisplayCredentials />
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
