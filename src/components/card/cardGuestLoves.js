import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';//из нод модулей

const GuestLovesData = [
	{
	  id: '71ce9eac-e9b9-44f0-a342-9ff0b565f3b7',
	  name: 'Hotel Leopold',
	  city: 'Saint Petersburg',
	  country: 'Russia',
	  imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
	},
	{
	  id: 'aa560608-a879-48a7-80b6-deff2806b250',
	  name: 'Apartment Sunshine',
	  city: 'Santa  Cruz de Tenerife',
	  country: 'Spain',
	  imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
	},
	{
	  id: '1d88fefe-edf1-4cda-844a-babbf29bb2b3',
	  name: 'Villa Kunerad',
	  city: 'Vysokie Tatry',
	  country: 'Slowakia',
	  imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
	},
	{
	  id: 'a2bf824d-edd8-41f0-8b70-244334086ab4',
	  name: 'Hostel Friendship',
	  city: 'Berlin',
	  country: 'Germany',
	  imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
	},
	{
	  id: '4024535d-a498-4274-b7cb-f01ada962971',
	  name: 'Radisson Blu Hotel',
	  city: 'Kyiv',
	  country: 'Ukraine',
	  imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
	},
	{
	  id: 'e51e71f6-6baf-4493-b3ae-25dc27cdc238',
	  name: 'Paradise Hotel',
	  city: 'Guadalupe',
	  country: 'Mexico',
	  imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
	},
	{
	  id: '87d2b966-2431-43f3-8c0d-2c8723474dfc',
	  name: 'Hotel Grindewald',
	  city: 'Interlaken',
	  country: 'Switzerland',
	  imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
	},
	{
	  id: '190221c6-b18f-4dba-97de-e35f0e14c023',
	  name: 'The Andaman Resort',
	  city: 'Port Dickson',
	  country: 'Malaysia',
	  imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
	},
];
export default function CardGuestLoves() {
	
    return  (
        <Swiper
            spaceBetween={16}
            slidesPerView={4}
            navigation
      
        >
            {GuestLovesData.map((item) =>
                        
                <SwiperSlide key = {item.id}> 
                    <figure className="guests-loves__image-wrapper guests-loves__swiper-slide">
                    <div className="guests-loves__img-wrap">
                        <img src={item.imageUrl} className="guests-loves__image-photo" alt={item.name}/>
                    </div>
                    <figcaption className="guests-loves__dsc-wrapper">
                        <span className="guests-loves__dsc">{item.name}</span>
                        <span className="guests-loves__dsc-city">{item.city}, {item.country}</span>
                    </figcaption>
                    </figure>
                </SwiperSlide>   
            )}
      </Swiper>)   
} 
