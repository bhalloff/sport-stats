import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';

import ItemInput from './item-input';

describe('<ItemInput />', () => {
	let component;
	beforeEach(() => {
		component = shallow(<ItemInput />);
	});
	it('should have a text input', () => {
		expect(component.find('input')).to.have.length(1);
	});
	it('should have placeholder text', () => {
		expect(component.find('input').prop('placeholder')).to.equal('What needs to be done?');
	})
});