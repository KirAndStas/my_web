import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import './Background.less';

export default class Background extends Component {
	state = {
		icons: []
	}

	componentWillMount() {
		const iconWidth = 40;
		const w = window.innerWidth;
		const h = window.innerHeight;
		const iconsNumber = ~~((h * 1.5 * w) / (iconWidth * iconWidth));

		this.generateBgImage(iconsNumber, iconWidth);
	}

	generateBgImage(iconsNumber, iconWidth) {
		let images = [];

		for (let i = 0; i < iconsNumber; i++) {
			const style = {
				width: `${iconWidth}px`
			}

			images.push(style);
		}

		this.setState({
			icons: images
		})

	}
    render() {
    	const { icons } = this.state;

        return (
            <div className='Background'>
            	<div className='icons'>
            		{
            			icons.map((icon, i) => {
	            			return (
	            				<img key={i} style={icon} src='/static/images/32.svg' />
		            		)
            			})
            		}
            	</div>
                <div className='cover' />
            </div>
        );
    }
}


