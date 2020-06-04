import React from "react";

const ImgList = (props) => {
  const imgs = props.images.map((img) => {
    return <img src={img.urls.regular} />;
  });
  return <div>{imgs}</div>;
};

export default ImgList;
