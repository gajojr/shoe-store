import React, { useState, useEffect } from 'react';
import * as StyledComponents from './FilterMenu.styles';
import { AiFillCaretDown } from 'react-icons/ai';

const FilterMenu: React.FC = () => {
    const [brojPatika, setBrojPatika] = useState<null | number>(null);

    useEffect(() => {
        console.log(brojPatika);
    }, [brojPatika]);

    const toogleCenaDiv = (): void => {
        const div: HTMLDivElement = document.getElementById('cena_patika') as HTMLDivElement;
        if (window.getComputedStyle(div).getPropertyValue('opacity') === '1') {
            const fadeOut = () => {
                div.style.opacity = `${parseFloat(window.getComputedStyle(div).getPropertyValue('opacity')) - 0.25}`;
                if (div.style.opacity === '0') {
                    clearInterval(fadeOutInterval);
                }
            }
            const fadeOutInterval = setInterval(fadeOut, 100);
        } else {
            const fadeIn = () => {
                div.style.opacity = `${parseFloat(window.getComputedStyle(div).getPropertyValue('opacity')) + 0.25}`;
                if (div.style.opacity === '1') {
                    clearInterval(fadeInInterval);
                }
            }
            const fadeInInterval = setInterval(fadeIn, 100);
        }
    }

    const toogleBrojeviPatikaDiv = (): void => {
        const div: HTMLDivElement = document.getElementById('brojevi_patika') as HTMLDivElement;
        div.style.display = div.style.display === 'none' ? 'grid' : 'none';
    }

    return (
        <StyledComponents.Section>
            <StyledComponents.OptionDiv>
                Brend: &nbsp;
                <select>
                    <option value='nike'>Nike</option>
                    <option value='adidas'>Adidas</option>
                    <option value='puma'>Puma</option>
                </select>
            </StyledComponents.OptionDiv>

            <StyledComponents.OptionDiv>
                <StyledComponents.CenaDiv>
                    <span>cena:</span>
                    <AiFillCaretDown onClick={toogleCenaDiv} />
                </StyledComponents.CenaDiv>
                <StyledComponents.CenaOpcije id='cena_patika'>
                    od: <input type='number' placeholder='0' />
                    <br />
                    do: <input type='number' placeholder='30 000' />
                </StyledComponents.CenaOpcije>
            </StyledComponents.OptionDiv>

            <StyledComponents.OptionDiv>
                <StyledComponents.CenaDiv>
                    <span>velicina: {!brojPatika ? 'sve velicine' : brojPatika}</span>
                    <AiFillCaretDown onClick={toogleBrojeviPatikaDiv} />
                </StyledComponents.CenaDiv>
                <StyledComponents.BrojeviPatika id='brojevi_patika' style={{ display: 'none' }}>
                    <StyledComponents.BrojPatika onClick={() => setBrojPatika(38)}>38</StyledComponents.BrojPatika>
                    <StyledComponents.BrojPatika onClick={() => setBrojPatika(39)}>39</StyledComponents.BrojPatika>
                    <StyledComponents.BrojPatika onClick={() => setBrojPatika(40)}>40</StyledComponents.BrojPatika>
                    <StyledComponents.BrojPatika onClick={() => setBrojPatika(41)}>41</StyledComponents.BrojPatika>
                    <StyledComponents.BrojPatika onClick={() => setBrojPatika(42)}>42</StyledComponents.BrojPatika>
                    <StyledComponents.BrojPatika onClick={() => setBrojPatika(43)}>43</StyledComponents.BrojPatika>
                    <StyledComponents.BrojPatika onClick={() => setBrojPatika(44)}>44</StyledComponents.BrojPatika>
                    <StyledComponents.BrojPatika onClick={() => setBrojPatika(45)}>45</StyledComponents.BrojPatika>
                    <StyledComponents.BrojPatika onClick={() => setBrojPatika(46)}>46</StyledComponents.BrojPatika>
                    <StyledComponents.BrojPatika onClick={() => setBrojPatika(47)}>47</StyledComponents.BrojPatika>
                    <StyledComponents.BrojPatika onClick={() => setBrojPatika(48)}>48</StyledComponents.BrojPatika>
                    <StyledComponents.BrojPatika onClick={() => setBrojPatika(48.5)}>48.5</StyledComponents.BrojPatika>
                </StyledComponents.BrojeviPatika>
            </StyledComponents.OptionDiv>

            <StyledComponents.OptionDiv>
                Sortiraj po: &nbsp;
                <select defaultValue={'najnovije'}>
                    <option value='najjeftinije'>najjeftinije prvo</option>
                    <option value='najskuplje'>najskuplje prvo</option>
                    <option value='najnovije'>najnovije prvo</option>
                </select>
            </StyledComponents.OptionDiv>

            <StyledComponents.ApplyFiltersButton>
                Primeni filtere
            </StyledComponents.ApplyFiltersButton>

        </StyledComponents.Section>
    )
}

export default FilterMenu;