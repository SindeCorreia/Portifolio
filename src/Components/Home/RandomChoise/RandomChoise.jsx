import React from 'react';
import './RandomChoise.css';
import Avatar from './Sinde_profile.jpg';
function RandomChoise  () {
  const ChoiseData=[
    {
      name:"Shilfter",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"1",
  },
  {
      name:"Calory app",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"2"
  },
  {
      name:"Portifólio",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"3",
  },
  {
      name:"SuperMario",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"4",
  },
  {
      name:"Simon",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"5",
  },
  {
      name:"Cups and Balls",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"6",
  },
  {
      name:"Target Shooting",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"7",
  },
  {
      name:"Adventure Programmer",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"8",
  },
  {
      name:"Quiz",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"9",
  },
  ]
  return (
    <div>
        <div className='RandomChoise' > 
            <img src={Avatar} className='Avatar' alt="profile" />
        </div>
    </div>
  );
};
export default RandomChoise;
