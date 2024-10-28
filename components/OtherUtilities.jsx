import React from 'react';
import '../components/css/otherUtilities.css';

const OtherUtilities = () => {
  const icons = [
    
    {
      src: 'images/OtherUtilities/logoGoB.png',
      alt: 'ENERGY DEPT.',
      name: 'ENERGY DEPT.',
    },
    {
      src: 'images/OtherUtilities/logoBSPHCL.png',
      alt: 'BSPHCL',
      name: 'BSPHCL',
    },
    {
      src: 'images/OtherUtilities/logoBSPGCL.png',
      alt: 'BSPGCL',
      name: 'BSPGCL',
    },
    {
      src: 'images/OtherUtilities/logoNBPDCL.png',
      alt: 'NBPDCL',
      name: 'NBPDCL',
    },
    {
      src: 'images/OtherUtilities/logoSBPDCL.png',
      alt: 'SBPDCL',
      name: 'SBPDCL',
    },
    {
      src: 'images/OtherUtilities/logoBSPTCL.png',
      alt: 'BIHAR SLDC',
      name: 'BIHAR SLDC',
    },
   
    {
      src: 'images/OtherUtilities/logoBERC.png',
      alt: 'BERC',
      name: 'BERC',
    },
    {
      src: 'images/OtherUtilities/logoCERC.png',
      alt: 'CERC',
      name: 'CERC',
    },
    {
      src: 'images/OtherUtilities/logoCEA.png',
      alt: 'CEA',
      name: 'CEA',
    },
    {
      src: 'images/OtherUtilities/logoERPC.png',
      alt: 'ERPC',
      name: 'ERPC',
    },
    {
      src: 'images/OtherUtilities/logoPOSOCO.png',
      alt: 'NLDC',
      name: 'NLDC',
    },
   
    {
      src: 'images/OtherUtilities/logoPOSOCO.png',
      alt: 'ERLDC',
      name: 'ERLDC',
    },
  
    {
      src: 'images/OtherUtilities/logoPowergrid.png',
      alt: 'POWERGRID',
      name: 'POWERGRID',
    }   

    // Add more icons as needed
  ];

  const repetitions = 4;
  const repeatedIcons = Array.from({ length: repetitions }, () => icons).flat();

  return (
    <div className="other-utilities-container" >
      <div className="other-utilities-slider">
        <ul className="other-utilities-list">
          {repeatedIcons.map((icon, index) => (
            <li key={index} className="other-utilities-item">
              <img src={icon.src} alt={icon.alt} />
              <p>{icon.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OtherUtilities;