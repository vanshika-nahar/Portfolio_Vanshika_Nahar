import {
    Box,
    Container,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React from "react";
import Img from "../../Assets/about_me.png";

export default function About() {
    const theme = useTheme();
    const mob = useMediaQuery(theme.breakpoints.down(600));
    const tab = useMediaQuery(theme.breakpoints.down(900));

    return (
        <Container maxWidth={"xl"} sx={{ bgcolor: "#301e68", mt: 18, pb: 3 }}>
            <Grid
                container
                spacing={2}
                sx={{
                    display: "flex",
                    flexDirection: mob ? "column" : tab ? "column" : "row",
                    justifyContent: "center",
                    alignItems: "center",
                    pt: "60px",
                    pb: "50px",
                    paddingInline: "30px",
                }}
            >
                <Grid
                    sx={{ display: mob ? "none" : tab ? "none" : "" }}
                    item
                    xs={mob ? 12 : tab ? 12 : 6}
                >
                    <img src={Img} width={"600px"} />
                </Grid>
                <Grid
                    item
                    xs={mob ? 12 : tab ? 12 : 6}
                    sx={{
                        paddingInline: mob ? "" : tab ? "" : "150px",
                    }}
                >
                    <Typography
                        variant={mob ? "h3" : tab ? "h2" : "h3"}
                        sx={{
                            textAlign: "center",
                            color: "#D9589A",
                            fontFamily: "Inconsolata",
                            fontWeight: 900,
                            mb: "30px",
                        }}
                    >
                        ABOUT ME
                    </Typography>
                    {mob ? (
                        <img src={Img} width={"300px"} />
                    ) : tab ? (
                        <img src={Img} width={"600px"} />
                    ) : (
                        ""
                    )}
                    <Typography
                        sx={{
                            textAlign: "justify",
                            color: "#f2f2f2",
                            fontFamily: "Quicksand",
                            fontWeight: 500,
                            mb: "15px",
                            fontSize: mob ? "1.1rem" : tab ? "1.2rem" : "0.9rem",
                        }}
                    >
                        As a recent graduate with a full-stack development background, I'm
                        an enthusiastic web developer driven by problem-solving and
                        innovation. I possess a strong foundation in both frontend and
                        backend development, making me a versatile and adaptable team
                        member.
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: "justify",
                            color: "#f2f2f2",
                            fontFamily: "Quicksand",
                            fontWeight: 500,
                            mb: "15px",
                            fontSize: mob ? "1.1rem" : tab ? "1.2rem" : "0.9rem",
                        }}
                    >
                        My passion for learning and staying up-to-date with industry trends
                        has led me to collaborate effectively in cross-functional teams
                        using agile methodologies. I'm proficient in frontend technologies
                        like HTML, CSS, and JavaScript, as well as backend technologies such
                        as Node.js, PHP, and databases like MySQL and MongoDB. My solid
                        grasp of computer science fundamentals, including data structures
                        and algorithms, enhances my problem-solving abilities.
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: "justify",
                            color: "#f2f2f2",
                            fontFamily: "Quicksand",
                            fontWeight: 500,
                            mb: "15px",
                            fontSize: mob ? "1.1rem" : tab ? "1.2rem" : "0.9rem",
                        }}
                    >
                        As a budding full-stack developer, I'm eager to embrace challenging
                        roles in the dynamic web development field and contribute
                        meaningfully to any organization's success. My commitment to
                        quality, keen attention to detail, and positive attitude equip me to
                        excel in diverse environments and deliver outstanding results.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
