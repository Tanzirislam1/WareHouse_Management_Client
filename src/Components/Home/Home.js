import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../Hooks/UseInventory';
import '../../Style/Home/Home.css'
import InventoryItem from '../InventoryItem/InventoryItem';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    const [inventory, setInventory] = useInventory();

    if (inventory.length) {
        inventory.length = 6;
    }

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
        <div>
            <section className='hero-section'>
                <div className="hero-section_banner">
                    <div className="container">
                        <div className="row row-cols-1">
                            <div className="col-lg-6">
                                <div className="hero-section_contents">
                                    <h2 className='hero-section_title' data-aos="fade-up"
                                        data-aos-offset="150"
                                        data-aos-delay="250"
                                        data-aos-duration="1500"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="false"
                                    >
                                        Let Us Help You to Find Your Perfect Car!</h2>
                                    <p className="hero-section_subtitle" data-aos="fade-up"
                                        data-aos-offset="200"
                                        data-aos-delay="500"
                                        data-aos-duration="2000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="false">We can help you find the best car. Check our reviews, compare models and find cars for sale.</p>
                                    <button className="hero-section_btn"
                                        data-aos="fade-up"
                                        data-aos-delay="750"
                                        data-aos-duration="2500"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="false"

                                    >Learn More</button>

                                </div>
                            </div>
                            <div className="col-lg-6"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="inventory-items">
                <div className="container">
                    <h2 className='text-center inventory-items_title'
                        data-aos="fade-up"
                        data-aos-delay="150"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="bottom">Our Feature Cars</h2>
                    <p className="inventory-items_subtitle"
                        data-aos="fade-up"
                        data-aos-delay="350"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="bottom"
                    >You get an additional 50 extra characters to highlight benefits. Think of this as your vehicle’s elevator sales pitch; short, punchy – sold!</p>

                    <div className="row gx-5 row-cols-md-2"
                    >
                        {
                            inventory?.map(item => <InventoryItem key={item._id} item={item}></InventoryItem>)
                        }
                        <Link
                            data-aos="fade-up"
                            data-aos-offset="150"
                            data-aos-delay="350"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            to="/inventory">
                            <button className='inventory-items_btn'>All Inventory</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="our-collection">
                <div className="container">
                    <img data-aos="zoom-in"
                        data-aos-delay="400"
                        data-aos-duration="3500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="bottom" className='cars-img' src={require("../../../src/image/cars.png")} alt="" />
                </div>
            </section>

            <section className='our_service'>
                <div className="container">
                    <h2 className='our_service-title'
                        data-aos="fade-up"
                        data-aos-delay="150"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="bottom">Our Feature Services</h2>
                    <p className="our_service-subtitle" data-aos="fade-up"
                        data-aos-delay="350"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="bottom">Keeping customers informed about the progress of their repair reassures them it is being worked on and lets them know your service department values their time</p>
                    <div className="row gx-5 services">
                        <div className="col-lg-3 align-items-center">
                            <div className='service-1' data-aos="fade-left"
                                data-aos-delay="400"
                                data-aos-duration="4000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="bottom" >
                                <img className='service-icon' src={require("../../../src/image/turbo.png")} alt="" />
                                <h3>Turbo installation</h3>
                                <p>Our CarSure experts inspect the car on over 200 checkpoints so you get complete satisfaction and peace.</p>
                            </div>
                            <div className="service-2"
                                data-aos="fade-left"
                                data-aos-delay="400"
                                data-aos-duration="4500"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="bottom" >
                                <img src={require("../../../src/image/steering-wheel.png")} alt="" />
                                <h3>Steering & Suspension</h3>
                                <p>We have the right caring, experience and dedicated professional for you.</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img data-aos="zoom-in"
                                data-aos-delay="400"
                                data-aos-duration="5500"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="bottom" className='service-img' src={require(`../../../src/image/service-car.png`)} alt="" />
                        </div>
                        <div className="col-lg-3">
                            <div className='service-3'
                                data-aos="fade-right"
                                data-aos-delay="400"
                                data-aos-duration="4000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="bottom">
                                <img src={require("../../../src/image/suspension.png")} alt="" />
                                <h3>Vehicle Suspension</h3>
                                <p>Our CarSure experts inspect the car on over 200 checkpoints so you get complete satisfaction and peace.</p>
                            </div>
                            <div className="service-4" data-aos="fade-right"
                                data-aos-delay="400"
                                data-aos-duration="4500"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="bottom">
                                <img src={require("../../../src/image/lifter.png")} alt="" />
                                <h3>Engine diagnostic</h3>
                                <p>We have the right caring, experience and dedicated professional for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="brand-logo-section">
                <div className="container">
                    <h2 className='brand-title' data-aos="fade-up"
                        data-aos-delay="150"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="bottom">Find What are you looking for</h2>
                    <p className='brand-subtitle' data-aos="fade-up"
                        data-aos-delay="350"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="bottom">At autoZone, we want to provide you with the best automotive experience possible.</p>
                    <div class="slider">
                        <div class="slide-track">
                            <div class="slide">
                                <img src={require("../../../src/image/brand-1.png")} alt="" />
                            </div>
                            <div class="slide">
                                <img src={require("../../../src/image/brand-2.png")} alt="" />
                            </div>
                            <div class="slide">
                                <img src={require("../../../src/image/brand-3.png")} alt="" />
                            </div>
                            <div class="slide">
                                <img src={require("../../../src/image/brand-4.png")} alt="" />
                            </div>
                            <div class="slide">
                                <img src={require("../../../src/image/brand-5.png")} alt="" />
                            </div>
                            <div class="slide">
                                <img src={require("../../../src/image/brand-6.png")} alt="" />
                            </div>
                            <div class="slide">
                                <img src={require("../../../src/image/brand-7.png")} alt="" />
                            </div>
                            <div class="slide">
                                <img src={require("../../../src/image/brand-8.jpg")} alt="" />
                            </div>
                            <div class="slide">
                                <img src={require("../../../src/image/brand-9.png")} alt="" />
                            </div>
                            <div class="slide">
                                <img src={require("../../../src/image/brand-10.jpg")} alt="" />
                            </div>

                            <div class="slide">
                                <img src={require("../../../src/image/brand-11.png")} alt="" />
                            </div>
                            <div class="slide">
                                <img src={require("../../../src/image/brand-12.png")} alt="" />
                            </div>
                            <div class="slide">
                                <img src={require("../../../src/image/brand-13.png")} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;