import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as StyledComponents from './FilterMenu.styles';
import { AiFillCaretDown } from 'react-icons/ai';
import FilterMenu from './FilterMenu.component';

Enzyme.configure({ adapter: new Adapter() });

describe('FilterMenu', () => {
  it('Price div should fade in/out on click of down arrow', () => {
    const component = mount(<FilterMenu />);
    component.mount();
    component.find(AiFillCaretDown).at(0).simulate('click');
    component.unmount();
    expect(component.find(StyledComponents.CenaOpcije)).toHaveLength(1)
  });
});