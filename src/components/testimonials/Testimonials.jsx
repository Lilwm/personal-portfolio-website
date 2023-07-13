import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const reviews = [
  {
  avatar: AVTR1 ,
  name: 'Lynne Kimaru' ,
  review: "Lillian is a rare breed of product manager who can understand the technical side of things as well as the business side.She's a valuable asset to any team." ,
  },
  
  {
  avatar: AVTR2 ,
  name: 'Wycliffe Amolo' ,
  review: 'Lillian is a highly effective product manager with a strong technical background. She is a great communicator and collaborator, and she is always looking for new ways to improve products.' ,
  },
  
  {
  avatar: AVTR3 ,
  name: 'Mark Miller' ,
  review: "Lillian is a passionate product manager who is always looking for new ways to innovate.She's a great asset to any team that is looking to build great products." ,
  },
  
  {
  avatar: AVTR4 ,
  name: 'Fatuma Adin' ,
  review: 'Lillian is a data engineer who is able to think creatively and solve business problems with data.She is a great communicator and team player.' ,
  },
  ]

const Testimonials = () => {

  return (
    <section id='testimonials'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className=' container testimonials__container'
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>

        {
          reviews.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonials'>
                <div className='client__avatar'>
                  <img src={avatar} alt='avatar'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          }
          )
          }
      </Swiper>
    </section>
  )
}

export default Testimonials