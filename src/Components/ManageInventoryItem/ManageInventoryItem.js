import React from 'react';
import '../../../src/Style/ManageInventoryItem/ManageInventoryItem.scss';

const ManageInventoryItem = ({ manageItem }) => {
    const { _id, name, image, description, price, quantity, suplierName } = manageItem || {};


    const handleDeleteItem = (id) => {
        // console.log('hello');
        const isConfirmed = window.confirm("are you sure want to Delete");
        if (isConfirmed === true) {
            const url = `https://warehouse-server-nu.vercel.app/deleteItem/${id}`;
            fetch(url, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    id: id,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("success", data);
                    // Adding reload button to show updated items on UI
                    window.location.reload(false);
                });
        }

    }

    return (
        <div className='col-lg-4'>
            <div className="card">
                <img src={image} className="card-img-top card_img" alt="car-img" />
                <div className="card_body">
                    <h2 className="card_title">Name: {name}</h2>
                    <h3 className="card_text"><b>Description</b>: {description}</h3>
                    <h3 className='card_price'>Price: ${price}</h3>
                    <h3 className='card_suplierName'>Suplier: {suplierName}</h3>
                    <h3 className='card_quantity'>Quantity: {quantity}</h3>

                    <button className='delete_btn' onClick={() => handleDeleteItem(_id)}>Delete Item</button>
                </div>
            </div>
        </div>
    );
};

export default ManageInventoryItem;