import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import './Card.css';

SwiperCore.use([Navigation]);

export default function Card({dataSearch}) {
	return ( 
	<Swiper spaceBetween={16} slidesPerView={4} navigation>
            {dataSearch.map(( element ) =>
	<SwiperSlide key = {element.id}> 
                    <figure className="guests-loves__image-wrapper guests-loves__swiper-slide">
                    <div className="guests-loves__img-wrap">
                        <img src={element.imageUrl} className="guests-loves__image-photo" alt={element.name}/>
                    </div>
                    <figcaption className="guests-loves__dsc-wrapper">
                        <span className="guests-loves__dsc">{element.name}</span>
                        <span className="guests-loves__dsc-city">{element.city}, {element.country}</span>
                    </figcaption>
                    </figure>
                </SwiperSlide>
            )}
      </Swiper>);
}
