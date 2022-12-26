import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../../../src/Style/StockUpdate/StockUpdate.scss';

const StockUpdate = () => {
    const { id } = useParams();
    console.log(id);
    const [stockItem, setStockItem] = useState({});
    const [reStockQuantity, setReStockQuantity] = useState();
    // console.log(stockItem);
    const [stockQuantity, setStockQuantity] = useState();
    console.log(stockQuantity);

    const { name, image, description, price, quantity, suplierName } = stockItem || {};
    // console.log(stockItem.quantity);



    useEffect(() => {
        fetch(`https://warehouse-server-nu.vercel.app/inventoryItems/${id}`)
            .then(res => res.json())
            .then(data => setStockItem(data))
    }, [id]);

    const handleDelivery = (itemQuantity) => {
        console.log(itemQuantity);
        const update = { quantity: itemQuantity - 1 };
        const url = `https://warehouse-server-nu.vercel.app/stockItem/${id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast("Delivery successfully!!!");
                }
                // Adding reload button to show updated items on UI
                window.location.reload(false);
                setStockQuantity(parseInt(data.count))
            })
    };

    const handleRestockItems = (event) => {
        event.preventDefault();
        const newQuantity = parseInt(event.target.quantity.value);

        setReStockQuantity(newQuantity);

        const RestockItem = { quantity: quantity + newQuantity };

        // send data to the server
        const url = `https://warehouse-server-nu.vercel.app/stockItems/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(RestockItem),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("success", data);
                toast("Restock Items successfully!!!");
                event.target.reset();
                // Adding reload button to show updated items on UI
                window.location.reload(false);
            });
    };

    return (
        <section className="stock_update_section">
            <div className='container'>
                <div className="stock_update_texts">
                    <h2 className='stock_update_title'> Stock management system</h2>
                    <p className='stock_update_subtitle'>It may seem fairly simple, but getting inventory restocked is more than just placing an order with your supplier.</p>
                </div>
                <div className="row d-flex align-items-center row-cols-1 row-cols-sm-1 row-cols-md-1">
                    <div className='col-lg-6'>
                        <div className="stockCard">
                            <img src={image} className="stockCard-img-top stockCard_img" alt="car-img" />
                            <div className="stockCard_body">
                                <h2 className="stockCard_title">Name: {name}</h2>
                                <h3 className="stockCard_text"><b>Description</b>: {description}</h3>
                                <h3 className='stockCard_price'>Price: ${price}</h3>
                                <h3 className='stockCard_suplierName'>Suplier: {suplierName}</h3>
                                <h3 className='stockCard_quantity'>Quantity: {quantity}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className='stock_update_right'>
                            <h2 className='stock_update_right_title'>Automate your inventory restocking</h2>
                            <p className='stock_update_right_subtitle'>restocking is the process of replenishing stock to make sure you have enough of a given product on hand to meet consumer demand. Depending on how many SKUs you sell, you might need to take the inventory restocking process a step further. Having an understanding of what items are selling faster than others can help you optimize and restock inventory based on demand.
                            </p>
                            <div className='stock_update_right_quantity'>
                                <h2 className='total_stock_quantity'>Total Stock Quantity: {quantity} </h2>

                                <button className='deliverd_btn' onClick={() => handleDelivery(quantity)}>Delivered</button>
                            </div>

                            <div className='stock_update_right_restock'>
                                <h2 className='restock-items'>Restock the items</h2>

                                <form className='restock_form' onSubmit={handleRestockItems}>
                                    <input className='restock_form_input'
                                        type="number"
                                        placeholder="Enter quantity"
                                        name='quantity'
                                        required
                                    />

                                    <input className="restock_form_btn" type="submit" value="Restock" />
                                </form>
                            </div>
                        </div>
                    </div>

                    <Link style={{ textAlign: 'center' }} to="/manageInventory">
                        <button className='manageInventory_btn'>Manage Inventories</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default StockUpdate;