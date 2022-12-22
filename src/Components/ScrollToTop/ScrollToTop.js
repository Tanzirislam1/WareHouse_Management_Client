import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.screenY > 300) {
                setShowScrollTopButton(true);
            }
            else {
                setShowScrollTopButton(false);
            }
        });
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div>
            {showScrollTopButton && <h2 className='scroll-top' onClick={scrollTop}>Top</h2>}
        </div>
    );
};

export default ScrollToTop;