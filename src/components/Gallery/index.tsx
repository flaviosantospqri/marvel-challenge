import { FC } from 'react';
import Card from '../Card';
import { Container, ContanteSwipper } from './style';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface GalleryProps {
    listItens: any[];
}

const Gallery: FC<GalleryProps> = ({ listItens }) => {
    return (
        <ContanteSwipper>
            <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                navigation
                pagination={{ type: "bullets" }}
                effect="cube"
                slidesPerView={3}

            >
                {listItens.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Container>
                            <Card item={item} />
                        </Container>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ContanteSwipper >
    )
}

export default Gallery;
