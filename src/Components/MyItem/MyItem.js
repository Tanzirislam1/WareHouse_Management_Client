import React from 'react';

const MyItem = ({ myItem }) => {
    const { _id, name, image, description, price, quantity, suplierName } = myItem || {};


    const handleDeleteItem = (id) => {
        // console.log('hello');
        const isConfirmed = window.confirm("are you sure want to Delete");
        if (isConfirmed === true) {
            const url = `http://localhost:5000/deleteItem/${id}`;
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
                    if (data) {
                        return <div className='spiner_container'>
                            <img style={{width: '200px' , height: 'auto'}} className='spiner_gif' src="https://i.ibb.co/HV59wsq/giphy.gif" alt="spiner" />
                        </div>;
                    }
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

export default MyItem;