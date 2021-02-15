import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainSection from './MainSection';
import { Image } from './MainSection.styles';

Enzyme.configure({ adapter: new Adapter() });

describe('MainSection', () => {
    it('should show the images', () => {
        const wrapper = shallow(<MainSection/>);
        expect(wrapper.find(Image).length).toBe(3);
    });
});