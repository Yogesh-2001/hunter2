import React from 'react'
import "../styles/footer.css"
const Footer = () => {
    return (
        <>
            <footer>
                <section className='container'>
                    <div className='col-md-3'>
                        <img src="https://vit.edu.in/images/logo_vit2.png" />
                        <p className='my-4'>
                            Vidyalankar Institute of Technology is an Engineering & Management Institute approved by AICTE, New Delhi and Government of Maharashtra.
                            <br /><br />
                            The Institute is affiliated to University of Mumbai.
                        </p>
                    </div>
                    <div className='col-md-3'>
                        <h5 className='text-center'>TPO CELL</h5>
                        <ul>
                            <li>Capt.Sachin Sawant:<br /><a href="mailto:sachin.sawant1@vit.edu.in">sachin.sawant1@vit.edu.in</a></li>
                            <li>Sameer Engineer:<br /><a href="mailto:sameer.engineer@vit.edu.in">sachin.sawant1@vit.edu.in</a></li>
                            <li><strong>Office Location</strong>: M102</li>
                            <li><strong>Office Timings</strong>: 9.00am to 6.00pm</li>
                            <li><strong>Telephone Extension</strong>: 1801</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>

                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer