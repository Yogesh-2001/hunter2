import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Accordation = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const accords = [
        {
            id: 1,
            title: "WHAT IS CAMPUS PLACEMENT ?",
            summary: " Companies which would like to recruit freshers visit the institutes, conduct the process of recruitment and recruit the students when they are in final year of engineering. It will be a day-long process."
        },
        {
            id: 2,
            title: "WHEN DO CAMPUS PLACEMENTS HAPPEN IN THE INSTITUTE?",
            summary: "  Normally, the campus placement procedure takes place in the middle of the seventh semester. It starts in the month of September and goes on till the end of the academic year and sometimes even beyond that."
        },
        {
            id: 3,
            title: "WHAT ARE THE ELIGIBILITY CRITERIA TO PARTICIPATE IN THE CAMPUS PLACEMENTS?",
            summary: ` Various companies have different eligibility criteria. However, there are companies which do not have any eligibility criteria. All the students studying in the final year will become eligible in that case. Some of the eligibility criteria to participate in the campus placements are given below:
                            <br /><br />
                            <ul>
                                <li>SSC – 60%</li>
                                <li>HSC /Diploma – 60%</li>
                                <li>Engineering aggregate marks – 60%</li>
                                <li>Can/cannot have live KTs</li>
                                <li>Can/cannot have Dead KTs</li>
                                <li>Can/cannot have Gap during Engineering/Gap during education</li>
                            </ul>
                            Companies will have all the above or some as the eligibility criteria.`
        },
        {
            id: 4,
            title: "WHAT ARE THE STAGES OF THE RECRUITMENT PROCESS?",
            summary: `The following are the stages of recruitment:
                            <ul>
                                <li> Pre-placement Talk</li>
                                <li> Aptitude Test/Technical Test (Online/Pen and Paper)</li>
                                <li>  Group Discussion (depends on company)</li>
                                <li>   Technical/HR Interview.</li>
                                <li>    MR (Management Round) Interview.</li>
                            </ul>`
        },
        {
            id: 5,
            title: "WHAT IS APTITUDE TEST",
            summary: `<ul>
            <li>Consists of verbal reasoning, logical reasoning and mathematics.</li>
            <li>Duration of the test varies, depending on the company.</li>
            <li>Every company has minimum marks section-wise or overall.</li>
            <li>Those who clear the aptitude test will go to the next round of the selection process.</li>
            </ul>`
        }, {
            id: 6,
            title: "WHAT IS PERSONAL INTERVIEW (HR) ?",
            summary: `HR interviews are conducted to evaluate soft skills and confidence.
<br />
It ensures that the company is not only hiring a person who is good technically but also someone who fits in to the company and its culture.
<br/>
The attitude of the students is tested in this round of interview.
<br />
When a student is giving personal interview, how he/she enters and walks in to the room, how he/she sits, how and what he/she answers are all important.`
        },
        {
            id: 7,
            title: "WHYAT IS TECHNICAL INTERVIEW ?",
            summary: `Conducted to test the technical knowledge of the students.
<BR />
Questions will be asked on the basics of engineering subjects studied.
<BR />
In case a student has done any certification course, his knowledge in that area is also tested.`
        },
        {
            id: 8,
            title: "CAN ONE STUDENT GET MORE THAN ONE OFFER ?",
            summary: `No. Once a student is selected by any company, he will be out of the campus placement activities.<br /> However, if a company, which pays a salary difference of about 2 lakhs and above per annum, vists VIT all the students already selected will also be allowed.`
        },
        {
            id: 9,
            title: "DURING PRE-PLACEMENT TALK ",
            summary: `Switch off your mobile phones.
<br />
Sign on the attendance sheet that will be circulated on the day of campus placements at our Institute and also at other institutes during pool campus.
<br />
Be serious and attentive during the pre-placement talk.
<br />
Maintain silence during the pre-placement talk and do not engage in side-talk with fellow candidates.
<br />
Make a note of important points mentioned. There will be questions during the HR interviews on what has been told during the pre-placement talk.
<br />
If the company speakers encourage you to ask questions at the end of the talk, communicate in a responsible and intelligent manner.
<br />
Clarify doubts (if any) only at the end of pre-placement talk and do not interrupt the speakers during the pre-placement talk.
<br />
Do not approach the company HR personnel directly. Always approach the college placement officer for any reason before and after the campus placements.`
        }
    ]

    return (
        <>
            <section className='col-lg-8 col-md-10 col-11 mx-auto my-5'>
                <Typography variant='h5' className='text-center my-3'>Frequently Asked Question ?</Typography>
                {
                    accords.map((accord) => (
                        <>
                            <Accordion expanded={expanded === `panel${accord.id}`} onChange={handleChange(`panel${accord.id}`)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${accord.id}bh-content`}
                                    id={`panel${accord.id}bh-header`}
                                >
                                    <p >{accord.title}</p>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <div dangerouslySetInnerHTML={{ __html: accord.summary }} />
                                </AccordionDetails>
                            </Accordion>

                        </>
                    ))
                }

            </section>
        </>
    )
}

export default Accordation