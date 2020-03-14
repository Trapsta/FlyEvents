/**
 *
 * RoundedButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import LoadingDots from '../LoadingDots';

function RoundedButton({
	disabled,
	isLoading,
	size = 'M',
	fullWidth,
	children,
	className,
	inverted,
	invertedBorder,
	type,
	...rest
}) {
	const CSS = {
		Button: 'styled-button',
		Link: 'button-link',
		LinkChildren: 'button-link-children',
		Large: 'large-button',
		Small: 'small-button',
		Inverted: 'inverted-button',
		InvertedBorder: 'inverted-border-button',
		Loading: 'loading-button',
		FullWidth: 'full-width-button',
	};
	const classes = classnames(CSS.Button, {
		[className]: className,
		[CSS.Inverted]: inverted,
		[CSS.InvertedBorder]: invertedBorder,
		[CSS.FullWidth]: fullWidth,
		[CSS.Large]: size === 'L',
		[CSS.Small]: size === 'S',
	});

	return (
		<StyledButton
			type={type}
			className={classes}
			disabled={disabled || isLoading}
			{...rest}
		>
			{!isLoading && children}
			{isLoading && (
				<LoadingDots
					isWhite={!(inverted || invertedBorder)}
					className={CSS.Loading}
				/>
			)}
		</StyledButton>
	);
}

RoundedButton.propTypes = {};

export default RoundedButton;

const StyledButton = styled.button`
	&.styled-button {
		font-size: 1rem;
		line-height: 1rem;
		margin: 0 auto;
		padding: 0 2rem;
		border-radius: 2.5rem;
		border: 1px solid transparent;
		background-color: #7848f4;
		color: white;
		font-weight: 600;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		transition: background-color 140ms ease;
		height: 3rem;
		min-height: 3rem;
		overflow: hidden;
	}
	&.styled-button:hover {
		background-color: #9168fd;
	}
	&.button-link {
		display: flex;
	}
	&.button-link-children {
		margin: auto;
	}
	&.large-button {
		max-height: 3.5rem;
		min-height: 3.5rem;
	}
	&.small-button {
		max-height: 2.5rem;
		min-height: 2.5rem;
	}
	&.inverted-button {
		background-color: white;
		color: #7848f4;
	}
	&.inverted-button:hover {
		background-color: white;
	}
	&.inverted-border-button {
		background-color: white;
		color: #7848f4;
		border: 1px solid #7848f4;
	}
	&.inverted-border-button:hover {
		background-color: white;
	}
	.loading-button {
		width: 100%;
		font-size: 2.5rem;
	}
	&.full-width-button {
		width: 100%;
	}
`;
