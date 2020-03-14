/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageContentBlock from '../../components/PageContentBlock';
import ImageComponent from '../../components/ImageComponent';
import SearchBlock from '../../components/SearchBlock';

function Header() {
	const CSS = {
		HeroBackground: 'header-background',
		HeroBackgroundFigure: 'header-background-figure',
		BackgroundImage: 'background-image',
		zoomIn: 'zoom-in',
		Text: 'styled-text',
		Hero: 'header-hero',
		HeroContent: 'header-hero-content',
		Header: 'styled-header',
		TopBlock: 'header-top-block',
		Title: 'header-title',
		TitleContent: 'header-title-content',
	};
	return (
		<HeaderWrapper className={CSS.Hero}>
			<div className={CSS.HeroBackground}>
				<figure
					className={CSS.HeroBackgroundFigure}
					style={{ background: '#7848F4' }}
				>
					<ImageComponent
						animate
						alt={'FlyEvents'}
						className={CSS.BackgroundImage}
						src={
							'https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
						}
					/>
				</figure>
			</div>
			<PageContentBlock className={CSS.TopBlock}>
				<header className={CSS.Header}>
					<h1 className={CSS.Title}>
						<span className={CSS.TitleContent}>
							{'Unique & Exciting Events on Demand'}
						</span>
					</h1>
				</header>
				<SearchBlock />
			</PageContentBlock>
		</HeaderWrapper>
	);
}

Header.propTypes = {};

const HeaderWrapper = styled.div`
	overflow: hidden;
	&.header-hero {
		width: 100%;
		position: relative;
		padding: 0;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	@media (min-width: 768px) {
		&.header-hero {
			height: 72vh;
			min-height: 640px;
		}
	}
	@media (min-width: 992px) {
		&.header-hero {
			min-height: 540px;
		}
	}
	.header-hero-content {
		margin: auto;
		z-index: 2;
	}
	.styled-header {
		display: contents;
	}
	@media (min-width: 768px) {
		.header-top-block {
			z-index: 1;
			margin-top: 10rem;
		}
	}
	@media (min-width: 1550px) {
		.header-top-block {
			margin-top: 13rem;
		}
	}
	.header-title {
		font-size: 1.6875rem;
		line-height: 2rem;
		font-weight: 700;
		color: white;
		display: flex;
		height: 200px;
		padding-bottom: 1rem;
		text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
	}
	@media (min-width: 768px) {
		.header-title {
			max-width: 500px;
			height: auto;
			height: initial;
		}
	}
	@media (min-width: 992px) {
		.header-title {
			font-size: 3rem;
			line-height: 3rem;
			padding-bottom: 2rem;
			max-width: 820px;
		}
	}
	.header-title-content {
		margin-top: auto;
	}
	@media (min-width: 768px) {
		.header-title-content {
			margin-top: 0;
			margin-top: initial;
		}
	}
	.header-background {
		position: absolute;
		width: 100%;
		z-index: 1;
		left: 0;
		right: 0;
		top: 0;
		display: flex;
		overflow: hidden;
	}
	@media (min-width: 768px) {
		.header-background {
			height: 100%;
		}
	}
	.header-background-figure {
		background: #eaeaea;
		width: 100%;
		height: 200px;
	}
	.header-background-figure:before {
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 50%;
		display: block;
		position: absolute;
		z-index: 2;
		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0.4) 100%
		);
	}
	.header-background-figure:after {
		content: '';
		bottom: 0;
		left: 0;
		width: 100%;
		height: 20%;
		display: block;
		position: absolute;
		z-index: 2;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0.4) 100%
		);
	}
	@media (min-width: 768px) {
		.header-background-figure {
			height: 100%;
		}
	}
	@-webkit-keyframes zoom-in {
		100% {
			-webkit-transform: scale(1.04);
			transform: scale(1.04);
		}
	}
	@keyframes zoom-in {
		100% {
			-webkit-transform: scale(1.04);
			transform: scale(1.04);
		}
	}
	.background-image {
		width: 100%;
		height: 100%;
		min-height: 100%;
		max-height: 100%;
		-o-object-fit: cover;
		object-fit: cover;
	}
	@media (min-width: 768px) {
		.background-image {
			-webkit-animation: zoom-in 10s linear 0.3s forwards;
			animation: zoom-in 10s linear 0.3s forwards;
		}
	}
	.styled-text {
		color: rgba(255, 255, 255, 0.8);
		font-size: 0.875rem;
		font-weight: 600;
		line-height: 1rem;
		display: none;
		position: absolute;
		margin-top: -2.5rem;
		z-index: 2;
	}
	@media (min-width: 768px) {
		.styled-text {
			display: block;
		}
	}
`;

export default Header;
