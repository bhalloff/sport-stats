import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';

import Index from './index.jsx';
import Home from './home.jsx';

describe('<Index />', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Index />);
	});
	it('should render', () => {
		expect(component).to.have.length(1);
	});
	it('should render home component with base route', () => {
		expect(component.contains(<Home />)).to.equal(true)
	});
});