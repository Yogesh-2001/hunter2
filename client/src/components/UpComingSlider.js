import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles/swiper_styles.css';
import { Button, Card, Typography } from "@material-ui/core";

const UpComingSlider = () => {
    return (
        <>
            <div className="mt-5">
                <Typography variant="h5" className='text-center' color="primary"><marquee>Upcoming placement drives</marquee></Typography>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
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
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Card className="slider-item">
                            <Typography variant="h5">Tata Consultancy Services</Typography>
                            <Typography><strong>Registration End</strong>:12 september, 2022</Typography>
                            <Typography><strong>Drive Date</strong>:20 october, 2022</Typography>
                            <Button variant="contained" color="secondary">Apply Now</Button>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <Typography variant="h5">Tata Consultancy Services</Typography>
                            <Typography><strong>Registration End</strong>:12 september, 2022</Typography>
                            <Typography><strong>Drive Date</strong>:20 october, 2022</Typography>
                            <Button variant="contained" color="secondary">Apply Now</Button>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <Typography variant="h5">Tata Consultancy Services</Typography>
                            <Typography><strong>Registration End</strong>:12 september, 2022</Typography>
                            <Typography><strong>Drive Date</strong>:20 october, 2022</Typography>
                            <Button variant="contained" color="secondary">Apply Now</Button>
                        </Card>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card>
                            <Typography variant="h5">Tata Consultancy Services</Typography>
                            <Typography><strong>Registration End</strong>:12 september, 2022</Typography>
                            <Typography><strong>Drive Date</strong>:20 october, 2022</Typography>
                            <Button variant="contained" color="secondary">Apply Now</Button>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default UpComingSlider