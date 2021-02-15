import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import * as StyledComponents from './MainSection.styles';

const MainSection = () => {
    document.title = 'Shoe store';

    return (
        <StyledComponents.Section>
            <Carousel showThumbs={false}>
                <div>
                    <StyledComponents.Image src="https://image.shutterstock.com/z/stock-photo-new-beautiful-colorful-and-nice-nike-air-max-running-shoes-sneakers-trainers-shows-a-brand-logo-1392000359.jpg" alt="popust"/>
                </div>
                <div>
                    <StyledComponents.Image src="https://image.shutterstock.com/z/stock-photo-new-beautiful-colorful-and-nice-nike-air-max-running-shoes-sneakers-trainers-shows-logo-with-a-1247522425.jpg" alt="nase gilje"/>
                </div>
                <div>
                    <StyledComponents.Image src="https://image.shutterstock.com/z/stock-photo-new-beautiful-colorful-and-nice-nike-air-vapor-max-running-shoes-sneakers-trainers-shows-logo-1142141543.jpg" alt="slika nekog pederka sa novim patikama"/>
                </div>
            </Carousel>
        </StyledComponents.Section>
    );
}

export default MainSection;