import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBuildingColumns } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";


export function Dashboard() {
    return (
        <>

            <section id="banner">

                <h2 className="text-dark">Find out everything you need to know</h2>
                <h2 className="text-dark"> about the college</h2>

            </section>


            <section id="about">
                <h2 className="text-center">About Us</h2>
                <p>
                    Students can use Collegedunia.com as one stop destination to search about their dream college, available courses, admission process and lots more interactive tools to simplify the process of finding alma-mater. The website has the repository of more than 20,000 colleges and 6000 courses categorized in different streams like Management, Engineering, Medical, Arts and much more. One can classify colleges on the basis of location, ranking, ratings, fees and cutoff for different competitive exams.
                </p>

            </section>

            <h2 className="text-center p-3">Our Programs</h2>
            <div className="col d-flex justify-content-center col-lg-12 ">
                <div class="dashcard1 bg-light  mb-3 col-lg-3">

                    <div class="card-header p-2"> <FontAwesomeIcon icon={faGraduationCap} />ENGINEERING</div>
                    <div class="card-body">
                        <Link to="/engcollege" style={{ textDecoration: "none", color: "black" }}><h6 className="card-title p-2">B.E/B.TECH</h6></Link>
                        <Link to="/engcollege" style={{ textDecoration: "none", color: "black" }}><h6 className="card-title p-2">M.E/M/TECH</h6></Link>
                        <p className="card-text p-2">Engineers are problem solvers, organizers, communicators, calculators and designers. They are capable of clearly defining a problem and its relevant constraints ..</p>
                    </div>
                </div>
                <div class="dashcard bg-light mb-3 col-lg-3">
                    <div class="card-header p-2"> <FontAwesomeIcon icon={faBuildingColumns} />ARTS</div>
                    <div class="card-body">
                        <Link to="/artscollege" style={{ textDecoration: "none", color: "black" }}><h6 className="card-title p-2">B.A/M.A</h6></Link>
                        <Link to="/artscollege" style={{ textDecoration: "none", color: "black" }}><h6 className="card-title p-2">B.COM/M.COM</h6></Link>

                        <p className="card-text p-2">A College of Arts and Sciences or School of Arts and Sciences is most commonly an individual institution or a unit within a university that focuses on instruction of the liberal arts ...</p>
                    </div>
                </div>
            </div>

            <section id="admissions">
                <h2 className="mt-5 text-center p-3">GuideLines</h2>
                <p>
                    <span style={{ fontWeight: "bolder" }}>Be Factual </span>- Read the instructions provided along with the questions carefully, and try to include mentioned facts to the best of your knowledge.</p>

                <p><span style={{ fontWeight: "bolder" }}>Be Decent</span> - Talking about your alma mater should always have decency, even when criticizing it. No Rash Words Should be Used in the content, it will be edited during the moderation process.</p>

                <p><span style={{ fontWeight: "bolder" }}>Be Original</span> - Don't Copy and write your own experience. Most elaborate reviews might bring extra rewards. Write your review on your own, don't let anyone else use your identity.</p>

                <p><span style={{ fontWeight: "bolder" }}>Be Patient </span>- The review has 8 steps, each step covering one aspect of your college life, so answer them with patience so they add value to the user. You can always complete the review form in phases.</p>

                <p><span style={{ fontWeight: "bolder" }}>Be Social</span> - Once you are done with your review, share the review form with as many students from your college as possible. More the review more the rewards. Reviews for the courses with lesser reviews on collegedunia have extra rewards added to them.
                </p>
            </section>




            <section id="contact">
                <h2 className="text-center p-3">Contact Us</h2>
                <form action="">
                    <label for="name" style={{ fontWeight: "bolder" }}>Name</label><br />
                    <input type="text" id="name" name="name" placeholder="Your name" required /><br />

                    <label for="email" style={{ fontWeight: "bolder" }}>Email</label><br />
                    <input type="email" id="email" name="email" placeholder="Your email" required /><br />

                    <label for="message" style={{ fontWeight: "bolder" }}>Message</label><br />
                    <textarea id="message" name="message" placeholder="Your message" required></textarea><br />

                    <input dash-submit type="submit" value="Send" />
                </form>
            </section>


            <footer>
                &copy; 2023 College Details | All rights reserved.
            </footer>

        </>
    )
}