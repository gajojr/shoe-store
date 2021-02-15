import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CommentsSection from './CommentsSection';
import { Comment } from './CommentsSection.styles';

Enzyme.configure({ adapter: new Adapter() });

describe('FooterSection', () => {
    it('should contain current year', () => {
        const wrapper = shallow(<CommentsSection/>);
        expect(wrapper.find(Comment).length).toBe(4);
    });
});