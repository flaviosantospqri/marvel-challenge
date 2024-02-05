import { FC } from 'react';
import Card from '../Card';
import { Container, ContanteSwipper } from './style';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./swiper-custom.css"

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface GalleryProps {
    listItens: any[];
}

const Gallery: FC<GalleryProps> = ({ listItens }) => {
    return (
        <ContanteSwipper>
            <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                pagination={{ type: "bullets" }}
                effect="cube"
                slidesPerView={3}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}

            >
                {listItens.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Container>
                            <Card item={item} />
                        </Container>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-prev">
                    <FaArrowLeft style={{ fontSize: '24px' }} />
                </div>
                <div className="swiper-button-next">
                    <FaArrowRight style={{ fontSize: '24px' }} />
                </div>
            </Swiper>
        </ContanteSwipper >
    )
}

export default Gallery;
