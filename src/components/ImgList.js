import React from "react";

const ImgList = (props) => {
  //const imgs = props.images.map((img) => {
    const imgs = props.images.map(({description, id, urls}) => {
    return  <img key={id} src={urls.regular} alt={description} />
  });
  return <div>{imgs}</div>;
};

export default ImgList;
