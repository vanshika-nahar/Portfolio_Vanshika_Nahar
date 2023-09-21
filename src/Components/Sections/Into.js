import { Box, Button, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Img from "../../Assets/BG_IMG.png";

export default function Into() {

    const theme = useTheme();
    const mob = useMediaQuery(theme.breakpoints.down(600));
    const tab = useMediaQuery(theme.breakpoints.down(900));


    return (
        <Container maxWidth={mob?"sm":"xl"} sx={{bgcolor:"#fff"}}>
            <Grid
                container
                spacing={2}
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "row",
                }}
            >
                {mob ?
                    <Grid item xs={12}>
                        <img src={Img} width={"400px"} style={{ marginLeft: 6, zIndex: 1,opacity:0.8 }} />
                    </Grid>
                    : tab ?
                        <Grid item xs={12}>
                            <img src={Img} width={"700px"} style={{ marginLeft: 90, zIndex: 1 }} />
                        </Grid>
                        : <></>}
                <Grid
                    item
                    xs={mob ? 12 :tab?12: 7}
                    sx={{
                        display: "block",
                        m: mob ? "" : "auto",
                        mt: mob ? "" : tab ? "" : 22
                    }}
                >
                    <Typography
                        sx={{
                            mt: "70px",
                            ml: mob ? 2 :tab?4: "50px",
                            textAlign: "left",
                            fontFamily: "Inconsolata",
                            fontWeight: 800,
                        }}
                        variant={mob?"h3":"h2"}
                    >
                        Hi, I AM
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: "left",
                            ml: mob ? 2 :tab?4: "50px",
                            mt: "10px",
                            fontWeight: 700,
                            color: "#9900CC",
                            fontFamily: "Inconsolata",
                        }}
                        variant={mob?"h4":"h3"}
                    >
                        VANSHIKA NAHAR
                    </Typography>
                    <Typography
                        sx={{
                            mt: "20px",
                            ml: mob ? 2 :tab?4: "50px",
                            textAlign: "left",
                            width: mob?"auto":"700px",
                            color: "#808080",
                            fontFamily: "Quicksand",
                            fontWeight: 500,
                        }}
                    >
                        As a BCA graduate with expertise in the MERN Stack, I'm passionate about web development. I excel in both frontend and backend technologies and aim to contribute my UI/UX skills and backend proficiency to create user-friendly, responsive, and visually appealing websites. Let's collaborate and build something remarkable together!
                    </Typography>
                    <Box
                        sx={{
                            isplay: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                            ml: mob ? 2 :tab?4: "50px",
                            mt: "30px",
                        }}
                    >
                        <Button
                            sx={{
                                bgcolor: "#AA8ED6",
                                color: "#ffffff",
                                mr: "10px",
                                p: "10px 20px",
                                borderRadius: 100,
                                fontFamily: "Quicksand",
                                fontWeight: 700,
                                "&:hover": {
                                    bgcolor: "#c7b5e3",
                                    color: "#000000",
                                },
                            }}
                            target="_blank"
                            href="https://drive.google.com/uc?export=download&id=19-WJ52Ph1tpKU6XgqnGOK0C2QixjNhfq"
                            download="Vanshika_Nahar.pdf"
                        >
                            Download CV
                        </Button>
                        <Button
                            sx={{
                                bgcolor: "#000000",
                                color: "#AA8ED6",
                                p: "10px 20px",
                                borderRadius: 100,
                                fontFamily: "Quicksand",
                                fontWeight: 700,
                                "&:hover": {
                                    color: "#ffffff",
                                    bgcolor: "#262626",
                                },
                            }}
                        >
                            Contact Me
                        </Button>
                    </Box>
                </Grid>
                {mob ? <></> :tab?<></>: <Grid item xs={5}>
                    <img src={Img} width={"600px"} style={{ zIndex: 1 }} />
                </Grid>}
            </Grid>
        </Container>
    );
}
