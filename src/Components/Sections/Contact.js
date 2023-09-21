import {
    Box,
    Avatar,
    Button,
    Container,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import React from "react";
import SideImg from "../../Assets/Contact_img.png";
import Git from "../../Assets/git_icon.png";
import Lin from "../../Assets/Lin_logo.png";
import CV from "../../Assets/cv_icon.png";
import IG from "../../Assets/insta_icon.png";

export default function Contact() {
    const theme = useTheme();
    const mob = useMediaQuery(theme.breakpoints.down(600));
    const tab = useMediaQuery(theme.breakpoints.down(900));

    return (
        <Container
            maxWidt="xl"
            sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: mob ? "column" : tab ? "row" : "row",
            }}
        >
            {mob?<></>:<Box>
                <Avatar
                    sx={{
                        width: mob ? 400 : tab ? 400 : 650,
                        height: 'auto',
                        marginLeft: mob ? '' : tab ? '0px' : '-80px',
                        borderRadius: 0,
                    }}
                    src={SideImg}
                    alt="side image"
                />
            </Box>}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                }}
            >
                <Typography
                    sx={{
                        textAlign: "center",
                        color: "#D9589A",
                        fontFamily: "Inconsolata",
                        fontWeight: 900,
                        fontSize: "3.5rem",
                        mb: mob?"":"80px",
                        mt: "80px",
                    }}
                >
                    CONTACT ME
                </Typography>
                {mob?
                    <Box>
                    <Avatar
                        sx={{
                            width: mob ? 400 : tab ? 400 : 650,
                            height: 'auto',
                            marginLeft: mob ? '' : tab ? '0px' : '-80px',
                            borderRadius: 0,
                            mb:8
                        }}
                        src={SideImg}
                        alt="side image"
                    />
                </Box>
                :<></>}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        // alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row",
                            width: "70%",
                        }}
                    >
                        <Typography fontSize={18} fontWeight={600}>
                            Mob no. :{" "}
                        </Typography>
                        <Typography
                            href="tel:+919907451861"
                            fontSize={18}
                            fontWeight={500}
                            sx={{
                                "&:hover": {
                                    color: "crimson",
                                    textDecoration: "underline",
                                    fontStyle: "italic",
                                },
                            }}
                        >
                            +91-9907451861
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row",
                            width: "100%",
                        }}
                    >
                        <Typography fontSize={18} fontWeight={600}>
                            Email Address :{" "}
                        </Typography>
                        <Typography fontSize={18} fontWeight={500}>
                            &nbsp;&nbsp;vanshunahar@gmail.com
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        mt: 5,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row",
                            // mr:10
                        }}
                    >
                        <Button target="_blank" href="https://github.com/vanshika-nahar">
                            <Avatar
                                sx={{
                                    width: 50,
                                    height: 50,
                                    "&:hover": {
                                        width: 55,
                                        height: 55,
                                        margin: -1,
                                    },
                                }}
                                alt="Vanshika's Github Account"
                                src={Git}
                            />
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row",
                            // mr:10
                        }}
                    >
                        <Button
                            target="_blank"
                            href="https://www.linkedin.com/in/vanshika-gupta-95a2b91b3/"
                        >
                            <Avatar
                                sx={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 0,
                                    "&:hover": { width: 55, height: 55, margin: -1 },
                                }}
                                alt="Vanshika's Linked In Account"
                                src={Lin}
                            />
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row",
                            // mr:10
                        }}
                    >
                        <Button
                            target="_blank"
                            href="https://drive.google.com/uc?export=download&id=19-WJ52Ph1tpKU6XgqnGOK0C2QixjNhfq"
                            download="Vanshika_Nahar.pdf"
                        >
                            <Avatar
                                sx={{
                                    width: 50,
                                    height: 50,
                                    "&:hover": { width: 55, height: 55, margin: -3 },
                                }}
                                alt="Vanshika's Resume/CV"
                                src={CV}
                            />
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row",
                            // mr:10
                        }}
                    >
                        <Button
                            target="_blank"
                            href="https://www.instagram.com/va_nshi_20_/?igshid=MzMyNGUyNmU2YQ%3D%3D"
                        >
                            <Avatar
                                sx={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 0,
                                    "&:hover": { width: 55, height: 55, margin: -3 },
                                }}
                                alt="Vanshika's Instagram Account"
                                src={IG}
                            />
                        </Button>
                    </Box>
                </Box>
            </Box>
            <br />
            <br />
        </Container>
    );
}
