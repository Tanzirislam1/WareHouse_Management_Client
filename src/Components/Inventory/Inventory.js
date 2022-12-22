import React from 'react';
import useInventory from '../../Hooks/UseInventory';
import InventoryItem from '../InventoryItem/InventoryItem';
import '../../../src/Style/Inventory/Inventory.scss';
import '../../../src/Style/Home/Home.scss';

const Inventory = () => {
    const [inventory, setInventory] = useInventory();
    return (
        <div className='inventory'>
            <section className="inventory_hero">
                <div className="inventory_hero_banner">
                    <div className="container">
                        <div className="inventory_hero_texts">
                            <h2 className="inventory_hero_title">
                                Discover autoRoyal premium cars

                            </h2>
                            <p className="inventory_hero_subtitle">From researching the vehicle you want to test driving your options, we’re here to help with our knowledgeable sales staff and an impressive selection of cars, trucks, and SUVs.!</p>
                            <button className="inventory_hero_btn">Expore us</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="inventory_contents">
                <div className="container">
                    <h2 className='inventory_title'>Our Inventory</h2>
                    <p className="inventory_subtitle">We provides always our best services for our clients and always try to achieve our client's trust and satisfaction.</p>
                    <div className="row gx-5">
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