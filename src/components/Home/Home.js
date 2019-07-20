import React, { Component } from 'react';
import './css/Home.css';
import ColorPicker from './subcomponents/colorpicker';
import chroma from 'chroma-js';

class Home extends Component {
	state = {
		color1: 'blue',
    color2: '#eb12c5',
		orientation: 'to top right',
		viewColor1: 'none',
		viewColor2: 'none',
		count1: 0,
		count2: 0,
		active: 1
	};

	handleChangeComplete1 = color => {
		this.setState({
			...this.state,
			color1: color.hex,
			viewColor1: 'none',
			count1: this.state.count1 + 1
		});
		console.log(this.state.color1);
	};
	handleChangeComplete2 = color => {
		this.setState({
			...this.state,
			color2: color.hex,
			viewColor2: 'none',
			count2: this.state.count2 + 1
		});
		console.log(this.state.color2);
	};
	viewColorPicker = string => {
		if (string === 'color1') {
			if (this.state.count1 % 2 === 0)
				this.setState({
					...this.state,
					viewColor1: '',
					count1: this.state.count1 + 1
				});
			else
				this.setState({
					...this.state,
					viewColor1: 'none',
					count1: this.state.count1 + 1
				});
		} else if (string === 'color2') {
			if (this.state.count2 % 2 === 0)
				this.setState({
					...this.state,
					viewColor2: '',
					count2: this.state.count2 + 1
				});
			else
				this.setState({
					...this.state,
					viewColor2: 'none',
					count2: this.state.count2 + 1
				});
		}
	};
	orientationHandler = string => {
		this.setState({
			...this.state,
			orientation: string
		});
	};
	orientationOnClick(position) {
		if (this.state.active === position) {
			this.setState({ active: null });
		} else {
			this.setState({ active: position });
		}
	}

	orientationBackgroundHandler(position) {
		if (this.state.active === position) {
			return 'white';
		} else return '';
	}
	orientationColorHandler(position) {
		if (this.state.active === position) {
			return 'black';
		} else return '';
	}
	render() {
		return (
			<div
				style={{
					backgroundImage: `${
						this.state.orientation === 'circle'
							? 'radial-gradient'
							: 'linear-gradient'
					}(${this.state.orientation}, ${chroma
						.scale([this.state.color1, this.state.color2])
						.colors(4)}
            )`,
					paddingTop: '100px'
				}}>
				<p className='home-heading'>Generate a Cool CSS Color Gradient</p>
				<p className='home-subheading'>Choose Two Colors</p>
				<div className='color-picker-outer-container'>
					<div className='color-picker-container'>
						<span
							className='color-picker-selector'
							style={{
								backgroundColor: this.state.color1
							}}
							onClick={() => this.viewColorPicker('color1')}
						/>
						<div
							className='color-picker-popup'
							style={{ display: this.state.viewColor1 }}>
							<ColorPicker
								color={this.state.color1}
								handleChange={this.handleChangeComplete1}
							/>
						</div>
					</div>
					<div className='color-picker-container'>
						<span
							className='color-picker-selector'
							style={{
								backgroundColor: this.state.color2
							}}
							onClick={() => this.viewColorPicker('color2')}
						/>
						<div
							className='color-picker-popup'
							style={{ display: this.state.viewColor2 }}>
							<ColorPicker
								color={this.state.color2}
								handleChange={this.handleChangeComplete2}
							/>
						</div>
					</div>
				</div>
				<p className='home-subheading'>Choose Orientation</p>
				<div className='orientation-container'>
					<i
						className='fas fa-arrow-up'
						onClick={() => {
							this.orientationHandler('to top');
							this.orientationOnClick(0);
						}}
						style={{
							background: this.orientationBackgroundHandler(0),
							color: this.orientationColorHandler(0)
						}}
					/>
					<i
						className='fas fa-arrow-up'
						onClick={() => {
							this.orientationHandler('to top right');
							this.orientationOnClick(1);
						}}
						style={{
							transform: 'rotate(45deg)',
							background: this.orientationBackgroundHandler(1),
							color: this.orientationColorHandler(1)
						}}
					/>
					<i
						className='fas fa-arrow-right'
						onClick={() => {
							this.orientationHandler('to right');
							this.orientationOnClick(2);
						}}
						style={{
							background: this.orientationBackgroundHandler(2),
							color: this.orientationColorHandler(2)
						}}
					/>
					<i
						className='fas fa-arrow-up'
						onClick={() => {
							this.orientationHandler('to right bottom');
							this.orientationOnClick(3);
						}}
						style={{
							transform: 'rotate(135deg)',
							background: this.orientationBackgroundHandler(3),
							color: this.orientationColorHandler(3)
						}}
					/>
					<i
						className='fas fa-arrow-down'
						onClick={() => {
							this.orientationHandler('to bottom');
							this.orientationOnClick(4);
						}}
						style={{
							background: this.orientationBackgroundHandler(4),
							color: this.orientationColorHandler(4)
						}}
					/>
					<i
						className='fas fa-arrow-down'
						onClick={() => {
							this.orientationHandler('to left bottom');
							this.orientationOnClick(5);
						}}
						style={{
							transform: 'rotate(45deg)',
							background: this.orientationBackgroundHandler(5),
							color: this.orientationColorHandler(5)
						}}
					/>
					<i
						className='fas fa-arrow-left'
						onClick={() => {
							this.orientationHandler('to left');
							this.orientationOnClick(6);
						}}
						style={{
							background: this.orientationBackgroundHandler(6),
							color: this.orientationColorHandler(6)
						}}
					/>
					<i
						className='fas fa-undo'
						onClick={() => {
							this.orientationHandler('circle');
							this.orientationOnClick(7);
						}}
						style={{
							background: this.orientationBackgroundHandler(7),
							color: this.orientationColorHandler(7)
						}}
					/>
				</div>
				<p className='home-subheading'>CSS Code</p>
				<div className='home-code-snippet-container'>
					<p className='home-code-snippet'>
						background-image:{' '}
						{this.state.orientation === 'circle'
							? 'radial-gradient'
							: 'linear-gradient'}
						({this.state.orientation},<br />{' '}
						{chroma
							.scale([this.state.color1, this.state.color2])
							.colors(4)
							.map(u => u + ' ')}
						)
					</p>
				</div>
        <br /><br /><br />
        <div className="home-footer-container">
          <p className="home-footer">Made With <i class="fas fa-heart"></i> By Saurabh Chauhan</p>
        </div>
			</div>
		);
	}
}

export default Home;
