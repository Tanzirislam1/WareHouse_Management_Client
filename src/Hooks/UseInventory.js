const { useState, useEffect } = require("react")

const useInventory = () => {
    const [inventory, setInventory] = useState([]);
    // console.log(inventoryItems, 'inventory');

    useEffect(() => {
        fetch('https://warehouse-server-nu.vercel.app/inventoryItems')
        .then(res => res.json())
        .then(data => setInventory(data))
    }, []);

    return [inventory, setInventory];
}

export default useInventory;