import {
    Avatar,
    Box,
    Container,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React from "react";
import Img1 from "../../Assets/S1.png";
import Img2 from "../../Assets/S2.png";
import Img3 from "../../Assets/s3.png";
import Img4 from "../../Assets/s4.png";
import Img5 from "../../Assets/s5.png";
import Img6 from "../../Assets/s6.png";
import Img7 from "../../Assets/s7.png";
import Img8 from "../../Assets/s8.png";
import Img9 from "../../Assets/s9.png";
import Img10 from "../../Assets/s10.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];

export default function Skills() {
    const theme = useTheme();
    const mob = useMediaQuery(theme.breakpoints.down(600));
    const tab = useMediaQuery(theme.breakpoints.down(900));

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const cards = () => {
        return data.map((imgSrc, index) => (
            <Box
                key={index}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginInline: "10%",
                }}
            >
                <img src={imgSrc} width={300} alt={`Image ${index}`} />
            </Box>
        ));
    };

    return (
        <>
            {mob ? (
                <Container
                    maxWidth="xl"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        // alignItems: "center",
                        flexDirection: "column",
                        pt: "50px",
                        pb: 30,
                    }}
                >
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "#D9589A",
                            fontFamily: "Inconsolata",
                            fontWeight: 900,
                            fontSize: mob?"2.4rem":"3.5rem",
                            mb: "80px",
                            mt: "80px",
                        }}
                    >
                        WHAT SKILLS I HAVE?
                    </Typography>
                    <Slider
                        {...settings}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {cards()}
                    </Slider>
                </Container>
            ) : (
                <Container
                    maxWidth="xl"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        pt: 18,
                        pb: 20,
                    }}
                >
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "#D9589A",
                            fontFamily: "Inconsolata",
                            fontWeight: 900,
                            fontSize: "3.5rem",
                            mb: "80px",
                            mt: "80px",
                        }}
                    >
                        WHAT SKILLS I HAVE?
                    </Typography>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            mb: "70px",
                            paddingInline: "50px",
                        }}
                    >
                        <Grid
                            item
                            xs={4}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                src={Img1}
                                sx={{
                                    width: tab ? "200px" : "300px",
                                    height: "auto",
                                    "&:hover": {
                                        width: tab ? "300px" : "380px",
                                        marginInline: -10,
                                        marginBlock: -5,
                                    },
                                    borderRadius: 0,
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={4}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                src={Img2}
                                sx={{
                                    width: tab ? "200px" : "300px",
                                    height: "auto",
                                    "&:hover": {
                                        width: tab ? "300px" : "380px",
                                        marginInline: -10,
                                        marginBlock: -5,
                                    },
                                    borderRadius: 0,
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={4}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                src={Img3}
                                sx={{
                                    width: tab ? "180px" : "300px",
                                    height: "auto",
                                    "&:hover": {
                                        width: tab ? "300px" : "380px",
                                        marginInline: -10,
                                        marginBlock: -5,
                                    },
                                    borderRadius: 0,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            mb: "70px",
                            paddingInline: "50px",
                        }}
                    >
                        <Grid
                            item
                            xs={4}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                src={Img4}
                                sx={{
                                    width: tab ? "200px" : "300px",
                                    height: "auto",
                                    "&:hover": {
                                        width: tab ? "300px" : "380px",
                                        marginInline: -10,
                                        marginBlock: -5,
                                    },
                                    borderRadius: 0,
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={4}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                src={Img5}
                                sx={{
                                    width: tab ? "200px" : "300px",
                                    height: "auto",
                                    "&:hover": {
                                        width: tab ? "300px" : "380px",
                                        marginInline: -10,
                                        marginBlock: -5,
                                    },
                                    borderRadius: 0,
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={4}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                src={Img6}
                                sx={{
                                    width: tab ? "200px" : "300px",
                                    height: "auto",
                                    "&:hover": {
                                        width: tab ? "300px" : "380px",
                                        marginInline: -10,
                                        marginBlock: -5,
                                    },
                                    borderRadius: 0,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            mb: "70px",
                            paddingInline: "50px",
                        }}
                    >
                        <Grid
                            item
                            xs={4}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                src={Img7}
                                sx={{
                                    width: tab ? "200px" : "300px",
                                    height: "auto",
                                    "&:hover": {
                                        width: tab ? "300px" : "380px",
                                        marginInline: -10,
                                        marginBlock: -5,
                                    },
                                    borderRadius: 0,
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={4}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                src={Img8}
                                sx={{
                                    width: tab ? "200px" : "300px",
                                    height: "auto",
                                    "&:hover": {
                                        width: tab ? "300px" : "380px",
                                        marginInline: -10,
                                        marginBlock: -5,
                                    },
                                    borderRadius: 0,
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={4}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                src={Img9}
                                sx={{
                                    width: tab ? "200px" : "380px",
                                    height: "auto",
                                    "&:hover": {
                                        width: tab ? "300px" : "380px",
                                        marginInline: -10,
                                        marginBlock: -5,
                                    },
                                    borderRadius: 0,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            mb: "70px",
                            paddingInline: "50px",
                        }}
                    >
                        <Grid
                            item
                            xs={4}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                src={Img10}
                                sx={{
                                    width: tab ? "200px" : "300px",
                                    height: "auto",
                                    "&:hover": {
                                        width: tab ? "300px" : "380px",
                                        marginInline: -10,
                                        marginBlock: -5,
                                    },
                                    borderRadius: 0,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            )}
        </>
    );
}
