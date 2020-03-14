/**
 *
 * EventCard
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Badge,
} from 'reactstrap';
import img from '../../images/icon-512x512.png';
import StarRating from '../StarRating';
import { ClockIcon, HeartOpen, HeartFilled } from '../Icons';

function EventCard() {
	const [inWishlist, setInWishlist] = useState(false);

	const toggleWishlist = () => {
		setInWishlist(!inWishlist);
	};

	const CSS = {
		CardLink: 'card-link',
		EventDetails: 'event-details',
		EventStart: 'event-start-time',
		EventPrice: 'event-price',
		EventWishlist: 'event-wishlist',
		EventActive: 'active',
		EventDate: 'event-date',
	};
	const Divider = () => <span className="divider">&bull;</span>;

	return (
		<StyledEventCard>
			<Card>
				<div className={CSS.EventPrice}>
					<Badge className="free-event">Kes. 2000</Badge>
				</div>
				<div
					className={classnames(CSS.EventWishlist, {
						[CSS.EventActive]: inWishlist,
					})}
					onClick={toggleWishlist}
				>
					{inWishlist ? (
						<HeartFilled height={30} width={30} />
					) : (
						<HeartOpen height={30} width={30} />
					)}
				</div>
				<CardImg top width="100%" src={img} alt="Card image cap" />

				<CardBody>
					<div className={CSS.EventDate}>
						<div>
							21
							<span>Mar</span>
						</div>
					</div>
					<CardTitle>Nairobi Whiskey Festival</CardTitle>
					<CardSubtitle>
						Blue Door, Westlands <Divider /> 3 hours <Divider /> Social
					</CardSubtitle>
					<div className={CSS.EventDetails}>
						<CardSubtitle>
							<StarRating
								rating={4.5}
								height={21}
								width={21}
								reviewCount={61}
							/>

							<span className={CSS.EventStart}>
								<Divider />
								<ClockIcon /> 6:00 PM
							</span>
						</CardSubtitle>
					</div>
					{false && (
						<Link
							className={CSS.CardLink}
							to="/event/nairobi-whiskey-festival"
						/>
					)}
				</CardBody>
			</Card>
		</StyledEventCard>
	);
}

EventCard.propTypes = {};

export default EventCard;

const StyledEventCard = styled.div`
	position: relative;
	margin: 0.5rem 0;
	cursor: pointer;
	.card {
		border-radius: 10px;
		-webkit-box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.15);
		box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.15);
		transition: box-shadow 130ms ease-in, -webkit-box-shadow 130ms ease-in;
		border: none;
	}
	.card:hover,
	.card:focus {
		-webkit-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.25);
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.25);
	}
	.card:hover .card-title,
	.card:focus > .card-title {
		color: ${props => props.theme.colors.brand};
	}
	.card-body {
		position: relative;
	}
	.event-date {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background-color: ${props => props.theme.colors.brand};
		color: ${props => props.theme.colors.primaryLight};
		font-weight: 700;
		font-size: 1.5rem;
		text-align: center;
		line-height: 1;
		display: flex;
		align-items: center;
		position: absolute;
		top: -1.6rem;
		div {
			text-align: center;
			flex: 1 1 0;
		}
		span {
			display: block;
			font-weight: 300;
			font-size: 0.875rem;
		}
	}
	.event-price {
		display: inline-block;
		position: absolute;
		top: 1rem;
		left: 1rem;
		.badge {
			font-size: ${props => props.theme.fontSize.small};
			background-color: ${props => props.theme.colors.primaryLight};
			color: ${props => props.theme.colors.textColor};
		}
		.free-event {
			background-color: ${props => props.theme.colors.success};
			color: ${props => props.theme.colors.primaryLight};
		}
	}
	.event-wishlist {
		display: inline-block;
		position: absolute;
		top: 1rem;
		right: 1rem;
		cursor: pointer;
		svg {
			fill: ${props => props.theme.colors.primaryLight};
		}
		&.active svg {
			fill: ${props => props.theme.colors.brand};
		}
	}
	.card-link {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1;
	}
	.card-title {
		font-size: ${props => props.theme.fontSize.semibold};
		font-weight: 500;
	}
	.divider {
		margin: 0 0.5rem;
	}
	.event-details {
		margin: 0.5rem 0;
	}
	.event-start-time {
		display: inline-block;
		transform: translateY(-4px);
	}
`;
