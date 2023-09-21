import { Container, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, Box ,useTheme,useMediaQuery} from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TF from '../../Assets/Text formatter.jpg';
import DCH from '../../Assets/dch_logo.png';
import CJ from '../../Assets/CJ.png';
import DI from '../../Assets/DI-logo.png';
import F from '../../Assets/femprish.jpg';
import IBuzz from '../../Assets/ibuzz+logo.png';
import Sparsh from '../../Assets/sparsh_logo.png';
import BPO from '../../Assets/BPO_logo.png';
import ArrowBack from "../../Assets/Left_arrow.jpg";
import ArrowForward from "../../Assets/Right_arrow.jpg";

const data = [
    { name: 'Femprish', url: 'https://startling-entremet-5777e7.netlify.app/', img: F },
    { name: 'Digital Card Hub', url: 'https://digitalcardhub.in/#/home', img: DCH },
    { name: 'Text Formatter', url: 'https://vanshika-nahar.github.io/textformatter/', img: TF },
    { name: 'Chandan Jewellers', url: 'https://chandanjwellers.com/', img: CJ },
    { name: 'DeshInsights', url: 'https://deshinsights.com/', img: DI },
    { name: 'IndiaBuzz', url: 'https://indiabuzz.co.in/', img: IBuzz },
    { name: 'Sparsh Dental Clinic', url: 'https://sparshdentalgwl.com/', img: Sparsh },
    { name: 'Book Pujan Online', url: 'https://bookpujanonline.com/', img: BPO },
];

export default function Work() {

    const theme = useTheme();
    const mob = useMediaQuery(theme.breakpoints.down(600))
    const tab = useMediaQuery(theme.breakpoints.down(900))

    const arrowStyle = {
        padding: '5px 10px',
        cursor: 'pointer',
    };

    const CustomPrevArrow = (props) => (
        <Box {...props} style={arrowStyle} className="custom-prev-arrow">
            <img style={{borderRadius:100,width:mob?30:60}} src={ArrowBack} alt="Back_Arrow" />
        </Box>
    );

    const CustomNextArrow = (props) => (
        <Box {...props} style={arrowStyle} className="custom-next-arrow">
            <img style={{borderRadius:100,width:mob?30:60}} src={ArrowForward} alt="Forward_Arrow" />
        </Box>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: mob?1:tab?1:3,
        slidesToScroll: mob?1:tab?1:2,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    const Cards = () => {
        return data.map((item, index) => (
            <Card elevation={3} key={index} sx={{ marginInline: mob?0:tab?9:"20px", maxWidth: 345, borderRadius: 3, height: mob?370:422 }}>
                <CardActionArea>
                    <CardMedia
                        sx={{ height: mob?250:300 }}
                        component="img"
                        image={item.img}
                        alt="Card image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant={mob?"h6":"h5"} component="div" sx={{ textAlign: "center" }}>
                            {item.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Button fullWidth href={item.url} target='_blank' size="small" sx={{ bgcolor: "#B886EB", fontSize: "1rem", fontWeight: "bold", color: "#ffffff", borderRadius: 1.8,"&:hover":{bgcolor:"#301e68",color:"#B886EB"} }}>
                        View
                    </Button>
                    <br />
                </CardActions>
            </Card>
        ));
    };

    return (
        <Container maxWidth="xl" sx={{bgcolor:"#301e68"}}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                paddingX: mob?0:10,
                paddingBottom:15,
                paddingTop:15,
            }}>
                <Typography sx={{
                    textAlign: "center",
                    color: "#D9589A",
                    fontFamily: "Inconsolata",
                    fontWeight: 900,
                    fontSize: mob?"3rem":"3.5rem",
                    mb: "80px",
                    mt: "80px",
                }}>What I have done</Typography>
                <Slider style={{display:"flex",justifyContent:"center",alignItems:"center"}} {...settings}>{Cards()}</Slider>
            </Box>
        </Container>
    );
}
