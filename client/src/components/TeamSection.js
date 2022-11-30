import {
    Box,
    Card,
    CardContent,
    Typography,
    CardMedia,
    CardActionArea
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import '../styles/team.css'
import TeamList from './TeamList'

const TeamSection = () => {

    return (
        <>



            <Typography variant="h4" className="text-center">Our Team</Typography>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {
                    TeamList.map((item) => (
                        <>
                            <SwiperSlide >
                                <Card style={{ height: '400px' }}>
                                    <CardActionArea>
                                        <CardMedia

                                            image={item.image}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {
                                                    item.description
                                                }
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            </SwiperSlide>
                        </>
                    ))
                }
            </Swiper>
        </>
    );
};

export default TeamSection;


