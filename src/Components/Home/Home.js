import { Link } from 'react-router-dom';
import useInventory from '../../Hooks/UseInventory';
import '../../Style/Home/Home.css'
import InventoryItem from '../InventoryItem/InventoryItem';
import { motion } from 'framer-motion';


const Home = () => {
    const [inventory, setInventory] = useInventory();

    if (inventory.length) {
        inventory.length = 6;
    }


    return (
        <div>
            <section className='hero-section'>
                <div className="hero-section_banner">
                    <div className="container">
                        <div className="row row-cols-1">
                            <div className="col-lg-6">
                                <div className="hero-section_contents">
                                    <h2 className='hero-section_title'>
                                        Let Us Help You to Find Your Perfect Car!</h2>
                                    <p className="hero-section_subtitle">We can help you find the best car. Check our reviews, compare models and find cars for sale.</p>
                                    <button className="hero-section_btn">Learn More</button>
                                </div>
                            </div>
                            <div className="col-lg-6"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="inventory-items">
                <div className="container">
                    <h2 className='text-center inventory-items_title'>Our Feature Cars</h2>
                    <p className="inventory-items_subtitle">You get an additional 50 extra characters to highlight benefits. Think of this as your vehicle’s elevator sales pitch; short, punchy – sold!</p>

                    <div className="row gx-5 row-cols-md-2">
                        {
                            inventory?.map(item => <InventoryItem key={item._id} item={item}></InventoryItem>)
                        }
                        <Link to="/inventory">
                            <button className='inventory-items_btn'>All Inventory</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="our-collection">
                <div className="container">
                    <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 2.5, delay: 2.5 }} className='cars-img' src={require("../../../src/image/cars.png")} alt="" />
                </div>
            </section>

            <section className='our_service'>
                <div className="container">
                    <h2 className='our_service-title'>Our Feature Services</h2>
                    <p className="our_service-subtitle">Keeping customers informed about the progress of their repair reassures them it is being worked on and lets them know your service department values their time</p>
                    <div className="row gx-5 services">
                        <div className="col-lg-3 align-items-center">
                            <div className='service-1'>
                                <img className='service-icon' src={require("../../../src/image/turbo.png")} alt="" />
                                <h3>Turbo installation</h3>
                                <p>Our CarSure experts inspect the car on over 200 checkpoints so you get complete satisfaction and peace.</p>
                            </div>
                            <div className="service-2">
                                <img src={require("../../../src/image/steering-wheel.png")} alt="" />
                                <h3>Steering & Suspension</h3>
                                <p>We have the right caring, experience and dedicated professional for you.</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 2.5, delay: 2.5 }} exit={{ scale: 0 }} className='service-img' src={require(`../../../src/image/service-car.png`)} alt="" />
                        </div>
                        <div className="col-lg-3">
                            <div className='service-3'>
                                <img src={require("../../../src/image/suspension.png")} alt="" />
                                <h3>Vehicle Suspension</h3>
                                <p>Our CarSure experts inspect the car on over 200 checkpoints so you get complete satisfaction and peace.</p>
                            </div>
                            <div className="service-4">
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
                    <h2 className='brand-title'>Find What are you looking for</h2>
                    <p className='brand-subtitle'>At autoZone, we want to provide you with the best automotive experience possible.</p>
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


            {/* Responsive Testimonial Carousel using OwlCarousel with Next and Previous Preview */}


        </div>
    );
};

export default Home;