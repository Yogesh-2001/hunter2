import React from "react";
import {
    Box,
    Card,
    CardMedia,
    Typography,
} from "@mui/material";

import "../styles/recruiterLogo.css";

const recruiterLogo = [
    2, 3, 5, 6, 7, 9, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29,
];

const recruiters = () => {
    return (
        <>
            <Box className="recruiterLogos">
                <Typography className="recruiter-Cards-heading">CAMPUS RECRUITERS</Typography>
                <Card className="recruiter-Cards">
                    {recruiterLogo.map((logoNo) => (
                        <CardMedia
                            className="recruiter-Card"
                            key={recruiterLogo.id}
                            component="img"
                            image={`images/recruiters_logo/recruitment_logo${logoNo}.png`}
                            alt=""
                        />
                    ))}
                </Card>
            </Box>
        </>
    );
};

export default recruiters;