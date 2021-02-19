import React, { useEffect, useState } from 'react';
import * as StyledComponents from './Header.styles';
import './ActiveLink.css';

import { BiMenu } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaShoppingBasket } from "react-icons/fa";

const Header = () => {
    const [activeBar, setActiveBar] = useState(false);
    const [title, setTitle] = useState(document.title);
    const [change, setChange] = useState(true);
    useEffect(() => {
        setTitle(document.title);
    }, [change]);

    return (
        <StyledComponents.Wrapper>
            <StyledComponents.Header>
                {activeBar || document.body.clientWidth > 1024 ? 
                    <StyledComponents.Navigation>
                        <StyledComponents.StyledLink to="/" className={`${title === 'Shoe store' ? 'active-link' : ''}`} onClick={() => setChange(!change)}>POCETNA</StyledComponents.StyledLink>
                        <StyledComponents.StyledLink to="/katalog" className={`${title === 'Muskarci' ? 'active-link' : ''}`} onClick={() => setChange(!change)}>MUSKARCI</StyledComponents.StyledLink>
                        <StyledComponents.StyledLink to="/zene" className={`${title === 'Zene' ? 'active-link' : ''}`} onClick={() => setChange(!change)}>ZENE</StyledComponents.StyledLink>
                        <StyledComponents.StyledLink to='/deca' className={`${title === 'Deca' ? 'active-link' : ''}`} onClick={() => setChange(!change)}>DECA</StyledComponents.StyledLink>
                        <StyledComponents.StyledLink to="/prodavnice" className={`${title === 'prodavnice' ? 'active-link' : ''}`} onClick={() => setChange(!change)}>PRODAVNICE</StyledComponents.StyledLink>
                        <StyledComponents.StyledLink to="/brendovi" className={`${title === 'Brendovi' ? 'active-link' : ''}`} onClick={() => setChange(!change)}>BRENDOVI</StyledComponents.StyledLink>
                        <StyledComponents.StyledLink to="/korpa" className={`${title === 'Shoping korpa' ? 'active-link' : ''}`} onClick={() => setChange(!change)}>
                            <FaShoppingBasket size={25}/>
                        </StyledComponents.StyledLink>
                        {document.body.clientWidth < 1025 ? 
                            <StyledComponents.Icon onClick={() => setActiveBar(!activeBar)} style={{alignSelf: 'flex-end', color: 'white'}}><AiFillCloseCircle size={30}/></StyledComponents.Icon> : null}
                    </StyledComponents.Navigation> :
                    <StyledComponents.Navigation>
                        {document.body.clientWidth < 1025 ? 
                            <StyledComponents.Icon onClick={() => setActiveBar(!activeBar)} style={{alignSelf: 'flex-end', color: 'white'}}><BiMenu size={30}/></StyledComponents.Icon> : null}
                    </StyledComponents.Navigation>
                }
            </StyledComponents.Header>
        </StyledComponents.Wrapper>
    );
}

export default Header;