// Profile.js
import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Container, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import CurriAngel from "../../assets/CV_ANGEL_MEZA.pdf";
import { Avatar, Link } from "@mui/material";

const Profile = () => {
    const { userId } = useParams();
    const users = JSON.parse(localStorage.getItem("DashBoardUser")) || [];

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
                p={2}
                borderRadius="8px"
                boxShadow={3}>
                <Box
                    component="img"
                    alt="profile"
                    src={users.imageUrl}
                    height="100px"
                    width="100px"
                    borderRadius="50%"
                    sx={{ objectFit: "cover", mb: 2 }}
                />
                <Typography variant="h5" fontWeight="bold">
                    {users.name}
                </Typography>
                <Typography variant="body1" color="textSecondary" mb={2}>
                    {users.email}
                </Typography>
                <Box mt={2} width="100%">
                    <Typography variant="h6" fontWeight="bold" mb={1}>
                        Currículum
                    </Typography>

                    <Link href={users.curriculumUrl} download>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<DownloadIcon />}
                            sx={{ mt: 2 }}>
                            Descargar Currículum
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Container>
    );
};

export default Profile;
