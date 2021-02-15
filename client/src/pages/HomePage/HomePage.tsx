import React from 'react';
import * as StyledComponents from './HomePage.styles';

import MainSection from '../../components/HomePage/MainSection/MainSection';
import CommentsSection from '../../components/HomePage/Comments/CommentsSection';
import FooterSection from '../../components/HomePage/Footer/FooterSection';

const HomePage = () => {
    return (
        <React.Fragment>
            <StyledComponents.Main>
                <MainSection/>
            </StyledComponents.Main>
            <CommentsSection/>
            <FooterSection/>
        </React.Fragment>
    );
}

export default HomePage;