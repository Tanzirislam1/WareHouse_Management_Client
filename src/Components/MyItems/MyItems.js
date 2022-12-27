import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import MyItem from '../MyItem/MyItem';
import '../../../src/Style/ManageItems/ManageItems.scss';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../api/axiosPrivate';
import '../../../src/Style/MyItems/MyItems.scss';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    console.log(myItems);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const getMyItem = async () => {
            const email = user?.email;
            console.log(email);
            const url = `https://warehouse-server-nu.vercel.app/myItems?email=${email}`;
            /* send token in Server */
            try {
                const { data } = await axiosPrivate.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyItems(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getMyItem();
    }, [user]);

    return (
        <section className="my-items-section">
            <div className='container'>
                <div className="row">
                    <h2 className='my-items-title'>My Items: {myItems.length}</h2>

                    {
                        myItems.map(myItem => <MyItem key={myItem._id} myItem={myItem}></MyItem>)
                    }
                </div>
            </div>
        </section>
    );
};

export default MyItems;