import React, { useEffect } from 'react';
import '../../../src/Style/Blog/Blog.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: true, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99,
            offset: 150, // offset (in px) from the original trigger point
            delay: 250,
        });
    }, []);
    return (
        <section className="blog-section">
            <div className='container'>
                <h2 className='blog-title'
                    data-aos="fade-up"
                    data-aos-offset="150"
                    data-aos-delay="250"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false">This is My Blogs</h2>
                <div className="all-question">
                    <h3 className='question-1' data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-delay="500"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false">Q-1: Difference between javascript and nodejs</h3>
                    <div className='answer-1'>
                        <div className='javascript'
                            data-aos="fade-left"
                            data-aos-offset="150"
                            data-aos-delay="250"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false">
                            <h4>JavaScript</h4>
                            <div className='javascript-text'>
                                <span>1. Javascript is a programming language that is used for writing scripts on the website. </span>
                                <span>2. Javascript can only be run in the browsers.
                                </span>
                                <span>3. It is basically used on the client-side.</span>
                                <span>
                                    4. Javascript is capable enough to add HTML and play with the DOM.
                                </span>
                                <span>
                                    5. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                                </span>
                            </div>
                        </div>
                        <div className='node'
                            data-aos="fade-right"
                            data-aos-offset="150"
                            data-aos-delay="500"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false">
                            <h4>NodeJs</h4>
                            <div className='node-text'>
                                <span>1. NodeJS is a Javascript runtime environment </span>
                                <span>2. We can run Javascript outside the browser with the help of NodeJS. </span>
                                <span>
                                    3. It is mostly used on the server-side.</span>
                                <span> 4. Nodejs does not have capability to add HTML tags. </span>
                                <span>5. V8 is the Javascript engine inside of node.js that parses and runs Javascript.</span>
                            </div>
                        </div>
                    </div>

                    <h3 className='question-2'
                        data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-delay="500"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false">Q-2 When should you use nodejs and when should you use mongodb?</h3>
                    <div className='answer-2'
                        data-aos="zoom-in"
                        data-aos-offset="150"
                        data-aos-delay="500"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false">
                        <p>MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias. NodeJS's responsibilty is especially to execute your application. Save this answer.</p>

                        <p>Node. js is widely used for the back-end of applications, like using Express. js to build the back-end of classic web applications. Also, it is used for server-side programming and non-blocking, event-driven servers like typical websites and backend API services.</p>
                    </div>
                    <div>

                    </div>


                    <h3 className='question-3'
                        data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-delay="250"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false">Differences between sql and nosql databases.</h3>
                    <div className='answer-3'>

                        <div className='sql'
                            data-aos="fade-left"
                            data-aos-offset="150"
                            data-aos-delay="500"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false">
                            <h4>SQL</h4>
                            <div className='sql-text'>
                                <span>1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) </span>
                                <span>2. These databases have fixed or static or predefined schema
                                </span>
                                <span>3. These databases are not suited for hierarchical data storage.</span>
                                <span>
                                    4. These databases are best suited for complex queries
                                </span>
                                <span>
                                    5. Vertically Scalable
                                </span>
                            </div>
                        </div>
                        <div className='no-sql'
                            data-aos="fade-right"
                            data-aos-offset="150"
                            data-aos-delay="750"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false">
                            <h4>NO SQL</h4>
                            <div className='no-sql-text'>
                                <span>1. Non-relational or distributed database system. </span>
                                <span>2. They have dynamic schema </span>
                                <span>
                                    3. These databases are best suited for hierarchical data storage.</span>
                                <span> 4. These databases are not so good for complex queries </span>
                                <span>5. Horizontally scalable</span>
                            </div>
                        </div>
                    </div>

                    <h4 className='question-4'
                        data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-delay="250"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false">What is the purpose of jwt and how does it work</h4>
                    <div className='answer-4'
                        data-aos="zoom-in"
                        data-aos-offset="150"
                        data-aos-delay="500"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false">
                        <p>
                            Secure: JWTs are digitally signed using either a secret (HMAC) or a public/private key pair (RSA or ECDSA) which safeguards them from being modified by the client or an attacker. Stored only on the client: You generate JWTs on the server and send them to the client. The client then submits the JWT with every request
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;