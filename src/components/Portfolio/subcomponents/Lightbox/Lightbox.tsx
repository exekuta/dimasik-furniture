import React, { FC } from 'react';
import { Modal, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { fullImagesData } from '../../../../assets/images';
import './Lightbox.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ILightBoxProps {
  showModal: boolean;
  closeModal: () => void;
}

const Lightbox: FC<ILightBoxProps> = ({ showModal, closeModal }) => {
  return (
    <Modal open={showModal} onClose={closeModal} className="lightbox-flex">
      <Box component="div" className="lightbox-container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {fullImagesData.map((item) => (
            <SwiperSlide key={item.img}>
              <img
                src={item.img}
                srcSet={item.img}
                alt={item.title}
                loading="lazy"
                className="lightbox-image-item"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Modal>
  );
};

export default Lightbox;
