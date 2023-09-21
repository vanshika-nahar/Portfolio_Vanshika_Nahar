import { Box, Container, List, ListItem, ListItemText, Typography, useTheme, useMediaQuery } from '@mui/material'
import React from 'react';
import IbuzzLogo from "../../Assets/ibuzz+logo.png";
import PSLogo from "../../Assets/exp_1_img.jpg";

const expData = [
    {
        logo: <img style={{ width: 300 }} src={IbuzzLogo} alt="logo" />,
        name: "Frontend Developer INTERN | IBUZZ Tech Solutions Pvt. Ltd.",
        time: "Apr 2023 - July 2023",
        point: [
            "Responsible for frontend Development of fully responsive websites.",
            "Responsible for designing UI on Figma for website.",
            "Finding the content and images for websites.",
            "Responsible for UI/UX for a website and web app.",
            "Worked on backend and created API’s to add, remove, update and fetch data from database using Node JS as backend"
        ]
    },
    {
        logo: <img src={PSLogo} alt="logo" />,
        name: "MERN Stack INTERN | Numeric Infosystem Pvt. Ltd. ",
        time: "Nov 2022 - jan 2023",
        point: [
            "Client Requirements · User Interface Design · React Hooks · Front-End Development · MERN Stack Development · Web Applications · REST APIs · React.js · Web Development · Express.js · MySQL · Node.js",
            "Worked on creating a Car Rental web app PAYNRENT",
            "Worked on backend and created API’s to add, remove, update and fetch data from database using Node JS as backend"
        ]
    }
]

export default function Experience() {

    const theme = useTheme();
    const mob = useMediaQuery(theme.breakpoints.down(600))
    const tab = useMediaQuery(theme.breakpoints.down(900))

    const RenderCard = () => {
        return expData.map((item, index) => {
            return (
                <Box key={index} sx={{
                    display: "flex",
                    flexDirection: mob ? "column" : tab ? "column" : "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: mob?"100%":"80%",
                    mb: 5
                }}>
                    {index % 2 == 0 ? <Box >
                        {item.logo}
                    </Box> : <></>}
                    {mob || tab ? (index % 2 == 1 ? <Box sx={{ mb: 8, mt: 4 }}>
                        {item.logo}
                    </Box> : <></>) : ""}
                    <Box>
                        <Typography fontSize={mob?26:29} fontWeight={700} textAlign={mob?"center":"left"}>{item.name}</Typography>
                        <Typography fontSize={16} fontWeight={600} textAlign={mob?"center":"left"}>{item.time}</Typography>
                        <br />
                        <List>
                            {item.point.map((p, index) => (
                                <ListItem
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        mt: -3.3,
                                        width: '90%',
                                    }}
                                    key={index}
                                >
                                    <ListItemText fontSize={16} fontWeight={500} primary={<Typography><b style={{fontSize:29,display:"inline-block",verticalAlign: 'middle'}}>&#x2022;</b> {p}</Typography>} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    {mob || tab ? "" : (index % 2 == 1 ? <Box>
                        {item.logo}
                    </Box> : <></>)}
                </Box>
            )
        })
    }

    return (
        <Container maxWidth="xl" sx={{ bgcolor: "#f2f2f2" }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                pt: 20,
                pb: 10
            }}>
                <Typography sx={{
                    textAlign: "center",
                    color: "#D9589A",
                    fontFamily: "Inconsolata",
                    fontWeight: 900,
                    fontSize: mob?"3.2rem":"3.5rem",
                    mb: "50px",
                    mt: "10px",
                }}>EXPERIENCE</Typography>
                <RenderCard />
            </Box>
        </Container>
    )

}