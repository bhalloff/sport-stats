import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';

import Home from './home';
import ScoreBoard from './scoreboard';

describe('<Home />', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Home />);
	});
	it('should render', () => {
		expect(component).to.have.length(1);
	});
	it('should render a logo', () => {
		expect(component.find('.logo')).to.have.length(1);
	});
	it('should render a scoreboard', () => {
		expect(component.find(ScoreBoard)).to.have.length(1);
	});
});
