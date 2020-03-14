/**
 *
 * SectionTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

function SectionTitle({
	children,
	className = 'section-title',
	bottomSpacing = false,
	topSpacing = false,
}) {
	const CSS = {
		SectionSubtitle: 'section-subtitle',
		BottomSpacing: 'bottom-spacing',
		TopSpacing: 'top-spacing',
	};
	const classes = classnames(CSS.SectionSubtitle, {
		[CSS.BottomSpacing]: bottomSpacing,
		[CSS.TopSpacing]: topSpacing,
		[className]: className,
	});

	return <StyledHeading className={classes}>{children}</StyledHeading>;
}

SectionTitle.propTypes = {};

export default SectionTitle;

const StyledHeading = styled.h2`
	&.section-subtitle {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 500;
		margin-top: 0.5rem;
		margin-bottom: 0;
	}
	@media (min-width: 768px) {
		&.section-subtitle {
			font-size: 2.25rem;
			margin-top: 0;
			margin-bottom: 0;
		}
	}
	&.bottom-spacing {
		margin-bottom: 1.5rem;
	}
	&.top-spacing {
		margin-top: 1.5rem;
	}
`;
