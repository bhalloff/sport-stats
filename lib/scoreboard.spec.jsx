import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';

import ScoreBoard from './scoreboard';

describe('<ScoreBoard />', () => {
	let component;
	beforeEach(() => {
		component = shallow(<ScoreBoard />);
	});
	it('should render', () => {
		expect(component).to.have.length(1);
	});
	it('should display home team name', () => {
		expect(component.find('dt').first().text()).to.equal('Home');
	});
	it('should display visitor team name', () => {
		expect(component.find('dt').last().text()).to.equal('Visitor');
	});
	it('should display home team score', () => {
		expect(component.find('dd').first().text()).to.equal('80');
	});
	it('should display visitor team name', () => {
		expect(component.find('dd').last().text()).to.equal('90');
	});
});
