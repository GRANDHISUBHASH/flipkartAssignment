import React from 'react';
import './index.css'; // Import your CSS file for styling

const ElectronicsData = [
  {
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/z/o/h/-original-imagq328zn8ntcgc.jpeg?q=70",
    title: "Noice SmartWatches",
    price: "From ₹79,092"
    },
  {
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/kingqkw0-0/speaker/mobile-tablet-speaker/r/b/4/stone-350-boat-original-imafyebgtg74sghe.jpeg?q=70",
    title: "Best Selling Mobile Speaker",
    price: "From ₹37,345"
  },
  {
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/d/w/z/-original-imagzw9thgndqgzp.jpeg?q=70",
    title: "Fastrack Watches",
    price: "From ₹1,03,449"
  },
  {
    imageUrl: "https://rukminim2.flixcart.com/image/312/312/k3q76a80/camera/m/c/4/sony-apsc-ilce-6100-b-in5-mirrorless-original-imafm6nu2zq8xstc.jpeg?q=70",
    title: "Top Cameras",
    price: "Shop Now"
  },
  {
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/projector/a/k/a/zeb-pixaplay-15-18-37-zeb-pixaplay-15-led-projector-zebronics-original-imagxy7pfps2fjyz.jpeg?q=70",
    title: "Projector",
    price: "From ₹7,49,751"
  },
  {
    imageUrl: "https://rukminim2.flixcart.com/image/312/312/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70",
    title: "Monitor",
    price: "From ₹1,22,162"
  },
];

const Electronics = () => {
  return (
    <div className="electronics-container">
      <h1>Best Of Electronics</h1>
      <div className="cards-container">
        {ElectronicsData.map((item, index) => (
          <div key={index} className="card">
            <img src={item.imageUrl} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Electronics;
