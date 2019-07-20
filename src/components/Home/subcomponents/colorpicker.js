import React, { Component } from 'react';
import { BlockPicker } from 'react-color';

class ColorPicker extends Component {
	render() {
		return (
			<div>
				<BlockPicker
					color={this.props.color}
					onChangeComplete={this.props.handleChange}
					colors={[
						'#0000ff',
						'#1254EB',
						'#EB12C5',
						'#F47373',
						'#1254EB',
						'#37D67A',
						'#E36F04',
						'#E30421',
						'#2CCCE4',
						'#F0D20A',
						'#dce775',
						'#ff8a65',
						'#ba68c8',
						'#181517',
						'#DAD9D9'
					]}
				/>
			</div>
		);
	}
}

export default ColorPicker;
