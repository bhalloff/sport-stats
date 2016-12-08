import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';

import Home from './home';

describe('<Home />', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Home />);
	});
	it('should render', () => {
		expect(component).to.have.length(1);
	});
});
