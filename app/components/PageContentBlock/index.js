/**
 *
 * PageContentBlock
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

function PageContentBlock({
	children,
	className,
	bottomSpacing,
	topSpacing,
	...rest
}) {
	const CSS = {
		Block: 'page-content-block',
		BottomSpacing: 'bottom-spacing',
		TopSpacing: 'top-spacing',
	};
	const classes = classnames(CSS.Block, {
		[CSS.BottomSpacing]: bottomSpacing,
		[CSS.TopSpacing]: topSpacing,
		[className]: className,
	});

	return (
		<PageContentBlockWrapper className={classes} {...rest}>
			{children}
		</PageContentBlockWrapper>
	);
}

PageContentBlock.propTypes = {};

export default PageContentBlock;

const PageContentBlockWrapper = styled.section`
	&.page-content-block {
		max-width: 1300px;
		margin: 0 auto;
		padding: 0 1rem;
		width: 100%;
	}
	@media (min-width: 768px) {
		&.page-content-block {
			padding: 0 3rem;
		}
	}
	&.bottom-spacing {
		margin-bottom: 2rem;
	}
	&.top-spacing {
		margin-top: 2rem;
	}
`;
