import React from 'react';
import useInventory from '../../Hooks/UseInventory';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';
import '../../../src/Style/ManageInventory/ManageInventory.scss';
import { Link } from 'react-router-dom';

const ManageInventory = () => {
    const [inventory, setInventory] = useInventory();
    return (
        <main>
            <section className='manage-inventory-hero'>
                <div className="container">
                    <div className="row">
                        <h2 className='manage-inventory-title'>Inventory Control Manager</h2>
                        <p className='manage-inventory-subtitle'>Manages inventory systems and warehousing. Works with supply chain managers to plan and maintain inventory at optimal levels and resolves issues and discrepancies related to inventory.</p>
                        <div>
                            <button className="manage-inventory_hero_btn">Get in Touch</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='manage_inventories_section'>
                <div className='container'>
                    <div className="row">
                        <h2 className='manage_inventories_title'>inventory management</h2>
                        <p className='manage_inventories_subtitle'>Organizations from small to large businesses can make use of inventory management to track their flow of goods, Properly managing inventory is an important aspect of any retail or wholesale business.</p>
                    </div>

                    <div className='row gx-5 manage_inventories row-cols-1 row-cols-sm-1 row-cols-md-2'>
                        {
                            inventory.map(manageItem => <ManageInventoryItem key={manageItem._id} manageItem={manageItem}></ManageInventoryItem>)
                        }

                        <div className='add_new_item'>
                            <Link className='add_item_btn' to="/addInventory">Add New Item</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ManageInventory;