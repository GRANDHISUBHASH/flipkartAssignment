import React, { useState } from 'react'; // Import useState hook from React
import Electronics from '../Electronics'


import Carousle from '../Carousle'
import { MdKeyboardArrowRight,MdKeyboardArrowDown } from "react-icons/md";
import "./index.css"


const images = [
    '/cursole1.webp',
    '/carusole2.webp',
    '/carusole3.jpg',
    '/carusole4.jpg',
];


const categoriesData = [
    {
        id: 1,
        name: "Mobiles",
        subcategories: [
            {
                id: 11,
                name: "Smartphones",
                subcategories: [
                    { id: 111, name: "Android" },
                    { id: 112, name: "iOS" },
                    { id: 113, name: "Windows" }
                ]
            },
            {
                id: 12,
                name: "Accessories",
                subcategories: [
                    { id: 121, name: "Cases & Covers" },
                    { id: 122, name: "Screen Protectors" }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Fashion",
        subcategories: [
            {
                id: 21,
                name: "Men's Fashion",
                subcategories: [
                    { id: 211, name: "Clothing" },
                    { id: 212, name: "Shoes" },
                    { id: 213, name: "Accessories" }
                ]
            },
            {
                id: 22,
                name: "Women's Fashion",
                subcategories: [
                    { id: 221, name: "Dresses" },
                    { id: 222, name: "Handbags" },
                    { id: 223, name: "Jewelry" }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Electronics",
        subcategories: [
            {
                id: 31,
                name: "Computers",
                subcategories: [
                    { id: 311, name: "Laptops" },
                    { id: 312, name: "Desktops" },
                    { id: 313, name: "Tablets" }
                ]
            },
            {
                id: 32,
                name: "Audio & Video",
                subcategories: [
                    { id: 321, name: "Headphones" },
                    { id: 322, name: "Speakers" },
                    { id: 323, name: "Home Theater Systems" }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Home & Furniture",
        subcategories: [
            {
                id: 41,
                name: "Living Room",
                subcategories: [
                    { id: 411, name: "Sofas" },
                    { id: 412, name: "Coffee Tables" },
                    { id: 413, name: "TV Units" }
                ]
            },
            {
                id: 42,
                name: "Bedroom",
                subcategories: [
                    { id: 421, name: "Beds" },
                    { id: 422, name: "Wardrobes" },
                    { id: 423, name: "Dressers" }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Laptops",
        subcategories: [
            {
                id: 51,
                name: "Business Laptops",
                subcategories: [
                    { id: 511, name: "HP EliteBook" },
                    { id: 512, name: "Dell Latitude" },
                    { id: 513, name: "Lenovo ThinkPad" }
                ]
            },
            {
                id: 52,
                name: "Gaming Laptops",
                subcategories: [
                    { id: 521, name: "Asus ROG Strix" },
                    { id: 522, name: "MSI Gaming" },
                    { id: 523, name: "Acer Predator" }
                ]
            },
            {
                id: 53,
                name: "Ultra-thin Laptops",
                subcategories: [
                    { id: 531, name: "Apple MacBook Air" },
                    { id: 532, name: "Microsoft Surface Laptop" },
                    { id: 533, name: "HP Spectre x360" }
                ]
            }
        ]
    }
    // Add more categories with their respective nested subcategories
];

const Home=()=>{
    const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
    

    
    return(
        <div >
        <ul>
        <li>
            <img src='/Applience.webp' alt="applience"/>
            <p>Home Applience <MdKeyboardArrowDown/></p>
            <div style={{ left: '10%',top:"38%" }}   className='hoverCard' id="laptopsHoverCard">
        {/* Loop through categories to find "Laptops" */}
        {categoriesData.map((category) => {
            if (category.name === "Home & Furniture") {
                return (
                    // Render subcategories for laptops
                    <ul className='categoryList'>
                        {category.subcategories.map((subCategory) => (
                            <li 
                                key={subCategory.id}
                                onMouseOver={() => setHoveredSubcategory(subCategory)}
                                
                                className='categoryListValue'
                                
                            >
                                {subCategory.name}
                                <MdKeyboardArrowRight />
                            </li>
                        ))}
                    </ul>
                );
            } else {
                return null; // Return null for categories other than "Laptops"
            }
        })}
    </div>

   
    {hoveredSubcategory && (
        <div style={{ left:'18%',top:"40%"}}   className="subcategoryCard">
            {/* Content specific to the hovered subcategory */}
           
            {hoveredSubcategory.subcategories.map((item) => (
                <>
                <a href="https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_1af740c6-7cca-408e-b6db-2e912adaac4f_1_372UD5BXDFYS_MC.V4ZPKTOAO321&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Travel_V4ZPKTOAO321&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=V4ZPKTOAO321" ><p key={item.id}>{item.name}</p></a> 
                </>
            ))}
        </div>
    )}
        </li>
        <li>
            <img src='/BeautyToys.webp' alt="BeautyToys"/>
            <p>BeautyToys</p>
        </li>
        <li>
            <img src='/fashon.png' alt="fashon"/>
            <p>fashon <MdKeyboardArrowDown/></p>
            {/* Hover card for laptops */}
    <div style={{ left: '30%',top:"40%" }}   className='hoverCard' id="laptopsHoverCard">
        {/* Loop through categories to find "Laptops" */}
        {categoriesData.map((category) => {
            if (category.name === "Fashion") {
                return (
                    // Render subcategories for laptops
                    <ul className='categoryList'>
                        {category.subcategories.map((subCategory) => (
                            <li 
                                key={subCategory.id}
                                onMouseOver={() => setHoveredSubcategory(subCategory)}
                                
                                className='categoryListValue'
                                
                            >
                                {subCategory.name}
                                <MdKeyboardArrowRight />
                            </li>
                        ))}
                    </ul>
                );
            } else {
                return null; // Return null for categories other than "Laptops"
            }
        })}
    </div>

   
    {hoveredSubcategory && (
        <div style={{ left:'38%',top:"40%"}}   className="subcategoryCard">
            {/* Content specific to the hovered subcategory */}
           
            {hoveredSubcategory.subcategories.map((item) => (
                <>
                <a href="https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_1af740c6-7cca-408e-b6db-2e912adaac4f_1_372UD5BXDFYS_MC.V4ZPKTOAO321&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Travel_V4ZPKTOAO321&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=V4ZPKTOAO321" ><p key={item.id}>{item.name}</p></a> 
                </>
            ))}
        </div>
    )}
        </li>
        <li>
            <img src='/Home.webp' alt="Home"/>
            <p>Home</p>
        </li>
        <li>
    {/* Laptop category */}
    <img src='/laptops.png' alt="laptops"/>
    <p>Laptops <MdKeyboardArrowDown/></p>

    {/* Hover card for laptops */}
    <div style={{ left:'60%',top:"40%"}} className='hoverCard' id="laptopsHoverCard">
        {/* Loop through categories to find "Laptops" */}
        {categoriesData.map((category) => {
            if (category.name === "Laptops") {
                return (
                    // Render subcategories for laptops
                    <ul className='categoryList'>
                        {category.subcategories.map((subCategory) => (
                            <li 
                                key={subCategory.id}
                                onMouseOver={() => setHoveredSubcategory(subCategory)}
                                
                                className='categoryListValue'
                                
                            >
                                {subCategory.name}
                                <MdKeyboardArrowRight />
                            </li>
                        ))}
                    </ul>
                );
            } else {
                return null; // Return null for categories other than "Laptops"
            }
        })}
    </div>

    {/* Display hovered subcategory details */}
    {hoveredSubcategory && (
        <div style={{ left:'68%',top:"40%"}} className="subcategoryCard">
            {/* Content specific to the hovered subcategory */}
           
            {hoveredSubcategory.subcategories.map((item) => (
                <>
                <a href="https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_1af740c6-7cca-408e-b6db-2e912adaac4f_1_372UD5BXDFYS_MC.V4ZPKTOAO321&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Travel_V4ZPKTOAO321&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=V4ZPKTOAO321" ><p key={item.id}>{item.name}</p></a> 
                </>
            ))}
        </div>
    )}
</li>
 
      
        <li>
            <img src='/mobile.png' alt="mobile"/>
            <p>mobile <MdKeyboardArrowDown/></p>
            <div style={{ left: '70%',top:"40%" }}   className='hoverCard' id="laptopsHoverCard">
        {/* Loop through categories to find "Laptops" */}
        {categoriesData.map((category) => {
            if (category.name === "Mobiles") {
                return (
                    // Render subcategories for laptops
                    <ul className='categoryList'>
                        {category.subcategories.map((subCategory) => (
                            <li 
                                key={subCategory.id}
                                onMouseOver={() => setHoveredSubcategory(subCategory)}
                                
                                className='categoryListValue'
                                
                            >
                                {subCategory.name}
                                <MdKeyboardArrowRight />
                            </li>
                        ))}
                    </ul>
                );
            } else {
                return null; // Return null for categories other than "Laptops"
            }
        })}
    </div>

   
    {hoveredSubcategory && (
        <div style={{ left:'78%',top:"40%"}}   className="subcategoryCard">
            {/* Content specific to the hovered subcategory */}
           
            {hoveredSubcategory.subcategories.map((item) => (
                <>
                <a href="https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_1af740c6-7cca-408e-b6db-2e912adaac4f_1_372UD5BXDFYS_MC.V4ZPKTOAO321&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Travel_V4ZPKTOAO321&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=V4ZPKTOAO321" ><p key={item.id}>{item.name}</p></a> 
                </>
            ))}
        </div>
    )}
        </li>
        <li>
            <img src='/travel.webp' alt="travel.webp"/>
            <p>travel</p>
        </li>
        <li>
            <img src='/TwoWhwleres.webp' alt="TwoWhwleres"/>
            <p>TwoWhwleres</p>
        </li>


        </ul>
        <div className='carousleCrad'>
            <Carousle images={images} interval = "5000"/>
        </div>
        <Electronics/>
        </div>
    )
}
export default Home;