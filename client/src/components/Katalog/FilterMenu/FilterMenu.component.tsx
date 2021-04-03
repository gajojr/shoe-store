import React, { useState, useEffect } from 'react';
import * as StyledComponents from './FilterMenu.styles'

const FilterMenu: React.FC = () => {
    const [brojPatika, setBrojPatika] = useState(0);

    useEffect(() => {
        console.log(brojPatika);
    }, [brojPatika]);

    return (
        <StyledComponents.Section>
            <StyledComponents.OptionDiv>
                Brend:
                <select>
                    <option value="nike">Nike</option>
                    <option value="adidas">Adidas</option>
                    <option value="puma">Puma</option>
                </select>
            </StyledComponents.OptionDiv>

            <StyledComponents.OptionDiv>
                cena:
                <br />
                od: <input type="number" placeholder="0" />
                <br />
                do: <input type="number" placeholder="30 000" />
            </StyledComponents.OptionDiv>

            <StyledComponents.OptionDiv>
                velicina: {!brojPatika ? 'sve velicine' : brojPatika}
                <StyledComponents.BrojeviPatika>
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
                Sortiraj po:
                <select defaultValue={'najnovije'}>
                    <option value="najjeftinije">najjeftinije prvo</option>
                    <option value="najskuplje">najskuplje prvo</option>
                    <option value="najnovije">najnovije prvo</option>
                </select>
            </StyledComponents.OptionDiv>

        </StyledComponents.Section>
    )
}

export default FilterMenu;