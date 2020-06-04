import React from "react";
import './ImgList.css';
import ImgCard from './ImgCard';


const ImgList = (props) => {
  //const imgs = props.images.map((img) => {
    const imgs = props.images.map((img) => {
        return <ImgCard key={img.id} image={img} />
    });
  return <div className="img-list">{imgs}</div>;
};

export default ImgList;
