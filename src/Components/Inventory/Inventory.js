import React, { useEffect } from 'react';
import useInventory from '../../Hooks/UseInventory';
import InventoryItem from '../InventoryItem/InventoryItem';
import '../../../src/Style/Inventory/Inventory.scss';
import '../../../src/Style/Home/Home.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Inventory = () => {
    const [inventory, setInventory] = useInventory();
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
        <div className='inventory'>
            <section className="inventory_hero">
                <div className="inventory_hero_banner">
                    <div className="container">
                        <div className="inventory_hero_texts">
                            <h2 className="inventory_hero_title"
                                data-aos="fade-up"
                                data-aos-offset="150"
                                data-aos-delay="250"
                                data-aos-duration="1500"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false">
                                Discover autoZone premium cars

                            </h2>
                            <p className="inventory_hero_subtitle"
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="500"
                                data-aos-duration="2000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false">From researching the vehicle you want to test driving your options, we’re here to help with our knowledgeable sales staff and an impressive selection of cars, trucks, and SUVs.!</p>
                            <button className="inventory_hero_btn" data-aos="fade-up"
                                data-aos-delay="750"
                                data-aos-duration="2500"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false">Expore us</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="inventory_contents">
                <div className="container">
                    <h2 className='inventory_title' data-aos="fade-up"
                        data-aos-delay="150"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="bottom">Our Inventory</h2>
                    <p className="inventory_subtitle" data-aos="fade-up"
                        data-aos-delay="350"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="bottom">We provides always our best services for our clients and always try to achieve our client's trust and satisfaction.</p>
                    <div className="row gx-5 row-cols-1 row-cols-sm-1 row-cols-md-2">
                        {
                            inventory.map(item => <InventoryItem key={item.id} item={item}></InventoryItem>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Inventory;