import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FooterSection from './FooterSection';

Enzyme.configure({ adapter: new Adapter() });

describe('FooterSection', () => {
    it('should contain current year', () => {
        const wrapper = shallow(<FooterSection/>);
        const currentYear = new Date().getFullYear();
        expect(wrapper.text()).toContain(currentYear);;
    });
});