/**
 *
 * ImageComponent
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ImageComponent({
	src,
	alt = '',
	options,
	animate,
	style = {},
	onLoad = () => {},
	...others
}) {
	const [ready, setReady] = useState(false);

	const animateStyle = {};

	if (animate) {
		animateStyle.opacity = ready ? 1 : 0;
		animateStyle.transition = 'opacity .3s';
	}

	const imgStyle = Object.assign({}, style, animateStyle);

	useEffect(() => {
		const image = new Image();

		const onImageLoad = () => {
			console.log('ready');
			setReady(true);
			onLoad();
		};

		image.addEventListener('load', onImageLoad);

		image.src = src;

		return () => {
			image.removeEventListener('load', onImageLoad);
		};
	}, [src, onLoad]);

	return <img alt={alt} style={imgStyle} src={src} {...others} />;
}

Image.propTypes = {};

export default ImageComponent;
