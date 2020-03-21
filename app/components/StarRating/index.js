/**
 *
 * StarRating
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StarIcon, StarIconLine, StarIconPartial } from '../Icons';
import classnames from 'classnames';

const CSS = {
	Rating: 'rating-stars',
	CondensedRating: 'condensed-rating-stars',
	Icon: 'rating-stars-icon',
	IconWithPartial: 'partial-rating-stars-icon',
	ReviewCount: 'review-count',
};

const STAR_RATING_SCALE = 5;

function StartListWithPartials({ rating, className, width, height }) {
	const list = [];
	Array(5)
		.fill(0)
		.reduce((current, _, index) => {
			const value = current > 1 ? 1 : current < 0 ? 0 : current;
			list.push(
				<StarIconPartial
					key={index}
					value={value}
					className={classnames(CSS.Icon, CSS.IconWithPartial, {
						[className]: className,
					})}
					width={width}
					height={height}
				/>,
			);
			return current - 1;
		}, rating);
	return <>{list}</>;
}

function StarList({ rating, className, width, height }) {
	const list = [];
	for (let i = 1; i <= 5; i += 1) {
		if (i > rating) {
			list.push(
				<StarIconLine
					key={i}
					className={classnames(CSS.Icon, { [className]: className })}
					width={width}
					height={height}
				/>,
			);
		} else {
			list.push(
				<StarIcon
					key={i}
					className={classnames(CSS.Icon, { [className]: className })}
					width={width}
					height={height}
				/>,
			);
		}
	}
	return <>{list}</>;
}

function StarRating({
	rating,
	scale,
	className,
	iconClassname,
	width,
	height,
	isCondensed,
	usePartials = true,
	reviewCount,
}) {
	const starRating = !!scale
		? Math.ceil((rating / scale) * STAR_RATING_SCALE)
		: rating;
	return (
		<StarRatingWrapper
			className={classnames(CSS.Rating, {
				[CSS.CondensedRating]: isCondensed,
				[className]: className,
			})}
		>
			{usePartials ? (
				<StartListWithPartials
					rating={starRating}
					className={iconClassname}
					width={width}
					height={height}
				/>
			) : starRating === STAR_RATING_SCALE ? (
				<>
					<StarIcon
						className={classnames(CSS.Icon, { [iconClassname]: iconClassname })}
						width={width}
						height={height}
					/>
					<StarIcon
						className={classnames(CSS.Icon, { [iconClassname]: iconClassname })}
						width={width}
						height={height}
					/>
					<StarIcon
						className={classnames(CSS.Icon, { [iconClassname]: iconClassname })}
						width={width}
						height={height}
					/>
					<StarIcon
						className={classnames(CSS.Icon, { [iconClassname]: iconClassname })}
						width={width}
						height={height}
					/>
					<StarIcon
						className={classnames(CSS.Icon, { [iconClassname]: iconClassname })}
						width={width}
						height={height}
					/>
				</>
			) : (
				<StarList
					rating={starRating}
					className={iconClassname}
					width={width}
					height={height}
				/>
			)}
			{reviewCount && reviewCount > 0 && (
				<span className={CSS.ReviewCount}>({reviewCount}) </span>
			)}
		</StarRatingWrapper>
	);
}

StarRating.propTypes = {};

export default StarRating;

const StarRatingWrapper = styled.div`
	&.rating-stars {
		display: inline-block;
		line-height: 1rem;
	}
	.condensed-rating-stars .rating-stars-icon {
		margin-right: 1px;
	}
	.rating-stars-icon {
		fill: ${props => props.theme.colors.brand};
		margin-right: 2px;
		vertical-align: baseline;
	}
	.partial-rating-stars-icon {
		stroke: ${props => props.theme.colors.brand};
	}
	.review-count {
		transform: translateY(-4px);
		display: inline-block;
	}
`;
