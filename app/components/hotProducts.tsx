import React from "react";
import "./ChairGallery.css"; // Import your CSS file
import Image from "next/image";


const ChairGallery: React.FC = () => {
  return (
    <div className="gallery-container">
      <div className="left-panel">
        <p className="text-vertical">EXPLORE NEW AND POPULAR STYLES</p>
      </div>
      <div className="center-panel">
      <img src="/03.jpg" alt="Orange Chair" className="main-image"/>
      </div>
      <div className="right-panel">
        <img src="/04.jpg" alt="White tufted chair" className="chair-01" />
        <img src="/01.jpg" alt="Gray upholstered chair" className="chair-02" />
        <img src="/06.jpg" alt="Vintage white chair" className="chair-03" />
        <img src="/01.jpg" alt="Vintage white chair duplicate" className="chair-04" />
      </div>
    </div>
  );
};

export default ChairGallery;