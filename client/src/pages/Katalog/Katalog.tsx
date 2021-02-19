import React from 'react';
import * as StyledComponents from './Katalog.styles';

import FilterMenu from '../../components/Katalog/FilterMenu/FilterMenu.component';
import Patike from '../../components/Katalog/Patike/Patike.component';
import Footer from '../../components/Katalog/Footer/Footer.component';

const KatalogPage = () => {
    document.title = 'Muskarci';
    return (
        <React.Fragment>
            <FilterMenu/>
            <Patike/>
            <Footer/>
        </React.Fragment>
    );
}

export default KatalogPage;