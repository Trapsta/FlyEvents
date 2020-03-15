/**
 *
 * EventBreadCrumbs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function EventBreadCrumbs({ title, page, location }) {
	const CSS = {
		BreadCrumbs: 'event-bread-crumbs',
		ListItem: 'event-bread-crumb-item',
		Link: 'event-bread-crumb-link',
		ExperienceTitle: 'event-bread-crumb-title',
	};

	return (
		<StyledList
			className={CSS.BreadCrumbs}
			itemScope={true}
			itemType="http://schema.org/BreadcrumbList"
		>
			<li
				className={CSS.ListItem}
				itemProp="itemListElement"
				itemScope={true}
				itemType="http://schema.org/ListItem"
			>
				<Link
					className={CSS.Link}
					to={`/`}
					itemType="http://schema.org/Thing"
					itemProp="item"
				>
					<span itemProp="name">Home</span>
				</Link>
				›
				<meta itemProp="position" content="1" />
			</li>
			{page && (
				<li
					className={CSS.ListItem}
					itemProp="itemListElement"
					itemScope={true}
					itemType="http://schema.org/ListItem"
				>
					<Link
						className={CSS.Link}
						to={`/${page}/`}
						itemType="http://schema.org/Thing"
						itemProp="item"
					>
						<span itemProp="name">{page}</span>
					</Link>
					›
					<meta itemProp="position" content="2" />
				</li>
			)}
			{location && (
				<li
					className={CSS.ListItem}
					itemProp="itemListElement"
					itemScope={true}
					itemType="http://schema.org/ListItem"
				>
					<Link
						className={CSS.Link}
						to={`/events/${location}`}
						itemType="http://schema.org/Thing"
						itemProp="item"
					>
						<span itemProp="name">{location}</span>
					</Link>
					›
					<meta itemProp="position" content="3" />
				</li>
			)}
			{title && (
				<li className={CSS.ListItem}>
					<span className={CSS.ExperienceTitle} itemProp="name">
						{title}
					</span>
					<meta itemProp="position" content="4" />
				</li>
			)}
		</StyledList>
	);
}

EventBreadCrumbs.propTypes = {};

export default EventBreadCrumbs;

const StyledList = styled.ol`
	&.event-bread-crumbs {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1rem;
		color: #4a4a4a;
		padding: 2rem 0 1rem 0;
		position: relative;
	}
	.event-bread-crumb-item {
		padding-right: 0.5rem;
		display: inline-block;
		white-space: nowrap;
	}
	.event-bread-crumb-item:last-child {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.event-bread-crumb-link {
		padding-right: 0.5rem;
	}
	.event-bread-crumb-link:hover {
		color: ${props => props.theme.colors.brand};
		text-decoration: underline;
	}
	.event-bread-crumb-title {
		cursor: default;
	}
`;
