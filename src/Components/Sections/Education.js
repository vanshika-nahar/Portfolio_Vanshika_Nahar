import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import One from "../../Assets/1.png";
import Two from "../../Assets/2.png";
import Three from "../../Assets/3.png";
import Clg from "../../Assets/img_one.png";
import HSc from "../../Assets/img_two.png";
import Schl from "../../Assets/img_three.png";

export default function Education() {

    const theme = useTheme();
    const mob = useMediaQuery(theme.breakpoints.down(600))
    const tab = useMediaQuery(theme.breakpoints.down(900))
    return (
        <Container maxWidth={"xl"} sx={{ bgcolor: "#e0d9f7", paddingTop: 18 }}>
            <Grid
                container
                spacing={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingInline: mob ? 2 : tab ? "" : ""
                }}
            >
                <Grid item xs={12} sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Typography sx={{
                        textAlign: "center",
                        color: "#D9589A",
                        fontFamily: "Inconsolata",
                        fontWeight: 900,
                        fontSize: mob?"2.9rem":"3.5rem",
                        mb: "10px",
                        mt: mob?10:"80px",
                    }}>EDUCATION</Typography>
                </Grid>
                <Grid
                    item
                    xs={mob ? 12 : tab ? 8 : 6}
                    sx={{
                        display: "flex",
                        flexDirection: mob?"column":"row",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: "5vh"
                    }}
                >
                    <img src={One} width={mob?"200px":"120px"} />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Inconsolata",
                                fontSize: "1.8rem",
                                fontWeight: 600,
                                textDecoration: "underline",
                                textAlign:mob?"center":"left"
                            }}
                        >
                            JIWAJI UNIVERSITY
                        </Typography>
                        {mob?<></>:<br />}
                        <Typography
                            sx={{
                                fontFamily: "Quicksand",
                                fontSize: mob?"1.2rem":"1rem",
                                fontWeight: mob?700:600,
                                textAlign:mob?"center":"left"
                            }}
                        >
                            BACHELOR’S OF COMPUTER APPLICATIONS
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Quicksand",
                                fontSize: "1rem",
                                fontWeight: 600,
                                textAlign:mob?"center":"left"
                            }}
                        >
                            2020 - Present
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={tab ? 4 : 6}
                    sx={{
                        display: mob ? "none" : tab ? "flex" : "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: "5vh"
                    }}
                >
                    <img src={Clg} width={"350px"} />
                </Grid>
                <Grid
                    item
                    xs={tab ? 4 : 6}
                    sx={{
                        display: mob ? "none" : tab ? "flex" : "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: "5vh"
                    }}
                >
                    <img src={HSc} width={"350px"} />
                </Grid>
                <Grid
                    item
                    xs={mob ? 12 : tab ? 8 : 6}
                    sx={{
                        display: "flex",
                        flexDirection: mob?"column":"row",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: "5vh"
                    }}
                >
                    <img src={Two} width={mob?"200px":"120px"} />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Inconsolata",
                                fontSize: "1.8rem",
                                fontWeight: 600,
                                textDecoration: "underline",
                                lineHeight: "1.8rem",
                                mb: "5px",
                                textAlign:mob?"center":"left"
                            }}
                        >
                            SANT KANWAR RAM HIGHER SECONDARY <br /> SCHOOL
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Quicksand",
                                fontSize: "1rem",
                                fontSize: mob?"1.2rem":"1rem",
                                fontWeight: mob?700:600,
                                textAlign:mob?"center":"left"
                            }}
                            >
                            XII th (Science){" "}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Quicksand",
                                fontSize: "1rem",
                                fontWeight: 600,
                                textAlign:mob?"center":"left"
                            }}
                        >
                            2019 - 2020
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={mob ? 12 : tab ? 8 : 6}
                    sx={{
                        display: "flex",
                        flexDirection: mob?"column":"row",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: "7vh",
                    }}
                >
                    <img src={Three} width={mob?"200px":"120px"} style={{ marginLeft: "30px" }} />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Inconsolata",
                                fontSize: "1.8rem",
                                fontWeight: 600,
                                textDecoration: "underline",
                                lineHeight: "1.8rem",
                                mb: "5px",
                                textAlign:mob?"center":"left"
                            }}
                        >
                            GLOBAL INTERNATIONAL PUBLIC {mob ? "" : tab ? <br /> : <br />} SCHOOL
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Quicksand",
                                fontSize: mob?"1.2rem":"1rem",
                                fontWeight: mob?700:600,
                                textAlign:mob?"center":"left"
                            }}
                            >
                            X th
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Quicksand",
                                fontSize: "1rem",
                                fontWeight: 600,
                                textAlign:mob?"center":"left"
                            }}
                        >
                            2017 - 2018
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={tab ? 4 : 6}
                    sx={{
                        display: mob ? "none" : tab ? "flex" : "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 8
                    }}
                >
                    <img src={Schl} width={"350px"} />
                </Grid>
            </Grid>
        </Container>
    );
}
