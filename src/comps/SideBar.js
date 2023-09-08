import React, { useEffect, useState } from 'react';
import './SideBar.css'; 
import Remind from './Remind.js';
import AutoSale from './AutoSale.js';
import NewCustomer from './NewCustomer.js';
import NewProduct from './NewProduct.js';
import EditProduct from './EditProduct.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {

    const [activeButton, setActiveButton] = useState('');


    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    useEffect(() => {
        setActiveButton('تذكير');
    }, []);
    return (
        <>
            <div className="sidebar">
                <div className='btns moveLeft'>
                    <div className='userInfo'>
                        <div className='userImg'>
                            <FontAwesomeIcon icon={faUser} style={{ color: "#4a7693",  width: '100%',height:' 115%;' }}  className='ImgMozaf'/>
                        </div>
                        <div className='userName' style={{ color: "#fff", }}>
                            <h3> موظف رقم 1</h3>
                        </div>
                    </div>
                    <button
                        className={activeButton === 'تذكير' ? 'active' : ''}
                        onClick={() => handleButtonClick('تذكير')}>
                          صفحة التذكير
                    </button>
                    <button
                        className={activeButton === 'البيع التلقائي' ? 'active' : ''}
                        onClick={() => handleButtonClick('البيع التلقائي')}>
                      صفحة   البيع التلقائي 
                    </button>

                    <button
                        className={activeButton === ' تسجيل عميل جديد' ? 'active' : ''}
                        onClick={() => handleButtonClick(' تسجيل عميل جديد')}>
                     صفحة   تسجيل عميل جديد
                    </button>
                    <button
                        className={activeButton === 'رفع صنف جديد' ? 'active' : ''}
                        onClick={() => handleButtonClick('رفع صنف جديد')}>
                      صفحة  رفع دواء جديد
                    </button>
                  

                    <button className='sideBarDrag' onClick={() => {
                        document.querySelector('.btns').classList.toggle('moveRight')
                        document.querySelector('.btns').classList.toggle('moveLeft')
                        document.querySelector('.sideBarDragSvg').classList.toggle('rotateDrager')
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className='sideBarDragSvg'>
                            <path fill='#ec643b' d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM320 256c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4s-14.4-12.5-14.4-22l0-208c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6z" />
                        </svg>
                    </button>
                </div>

                <div className="content">

                    {activeButton === 'تذكير' && <Remind />}
                    {activeButton === 'البيع التلقائي' && <AutoSale />}
                    {activeButton === ' تسجيل عميل جديد' && <NewCustomer />}
                    {activeButton === 'رفع صنف جديد' && <NewProduct />}
               
                </div>

            </div>

        </>
    );
};

export default Sidebar;
