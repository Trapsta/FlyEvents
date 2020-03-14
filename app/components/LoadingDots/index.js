/**
 *
 * LoadingDots
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

function LoadingDots({ isWhite, className, size = 'm' }) {
	const CSS = {
		LoadingDots: 'loading-dots',
		Small: 'Small-dots',
		LoadingDotsWhite: 'loading-dots-white',
		LoadingDot: 'loading-dot',
		loadingBlinks: 'loading-animation',
		LoadingDot2: 'second-loading-dot',
		LoadingDot3: 'third-loading-dot',
	};
	return (
		<styledLoadingDots
			className={classnames(CSS.LoadingDots, {
				[CSS.LoadingDotsWhite]: isWhite,
				[className]: className,
				[CSS.Small]: size === 's',
			})}
		>
			<span className={CSS.LoadingDot}>·</span>
			<span className={`${CSS.LoadingDot} ${CSS.LoadingDot2}`}>·</span>
			<span className={`${CSS.LoadingDot} ${CSS.LoadingDot3}`}>·</span>
		</styledLoadingDots>
	);
}

LoadingDots.propTypes = {};

export default LoadingDots;

const styledLoadingDots = styled.div`
	&.loading-dots {
		text-align: center;
		font-size: 50px;
		color: #7848f4;
	}
	&.Small-dots {
		font-size: 30px;
	}
	&.loading-dots-white {
		color: white;
	}
	.loading-dot {
		-webkit-animation-name: loading-animation;
		animation-name: loading-animation;
		-webkit-animation-duration: 1.4s;
		animation-duration: 1.4s;
		-webkit-animation-iteration-count: infinite;
		animation-iteration-count: infinite;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
	}
	.second-loading-dot {
		-webkit-animation-delay: 0.2s;
		animation-delay: 0.2s;
	}
	.third-loading-dot {
		-webkit-animation-delay: 0.4s;
		animation-delay: 0.4s;
	}
	@-webkit-keyframes loading-animation {
		0% {
			opacity: 0.2;
		}
		20% {
			opacity: 1;
		}
		100% {
			opacity: 0.2;
		}
	}
	@keyframes loading-animation {
		0% {
			opacity: 0.2;
		}
		20% {
			opacity: 1;
		}
		100% {
			opacity: 0.2;
		}
	}
`;
