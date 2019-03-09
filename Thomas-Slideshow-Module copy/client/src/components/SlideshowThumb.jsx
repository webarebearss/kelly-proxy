import React from 'react';

const SlideshowThumb = ({image, setLength, setCaption}) => (
  <li data-target="#carousel-custom" data-slide-to={image.imgOrder} className="thumbnail">
    <img src={image.imgUrl} alt="image.description" className="img-responsive" onClick={() => {event.path[0].scrollIntoView({behavior: "smooth", inline: "center"}); setCaption()}}/>
    <p className="invisible-caption">{image.imgOrder + 1}/{setLength}: {image.description}</p>
  </li>
)

export default SlideshowThumb;