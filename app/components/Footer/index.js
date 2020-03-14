/**
 *
 * Footer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageContentBlock from '../PageContentBlock';

function Footer() {
	const CSS = {
		FullWidthFooter: 'full-width-footer',
		FooterTop: 'top-footer',
		FooterBottom: 'bottom-footer',
		FooterCopy: 'footer-copy',
		FooterLogo: 'footer-logo',
	};

	return (
		<StyledFooter className={CSS.FullWidthContainer}>
			<PageContentBlock className={CSS.FooterTop}>
				<div className={CSS.FooterLogo}>
					<span>Fly</span>Events
				</div>
			</PageContentBlock>
			<PageContentBlock className={CSS.FooterBottom}>
				<div className={CSS.FooterCopy}>
					Fly events (K) Ltd. © 2020. All rights reserved{' '}
				</div>
			</PageContentBlock>
		</StyledFooter>
	);
}

Footer.propTypes = {};

export default Footer;

const StyledFooter = styled.footer`
	padding: 1.5rem 0;
	&.full-width-footer {
		width: 100%;
		position: relative;
		z-index: 700;
		background: ${props => props.theme.colors.primaryLight};
	}
	.top-footer {
		padding: 1.5rem 1rem;
		display: flex;
		align-items: center;
		background-color: ${props => props.theme.colors.primaryDark};
		color: ${props => props.theme.colors.primaryLight};
		height: 130px;
		max-width: 100%;
	}
	.footer-logo {
		flex: 1 1 0;
		font-size: 30px;
		text-align: center;
		font-weight: 700;
		span {
			color: ${props => props.theme.colors.brand};
		}
	}
	.bottom-footer {
		padding: 1rem 0 0;
		border-top: 1px solid ${props => props.theme.colors.borders};
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media (min-width: 768px) {
		.bottom-footer {
			justify-content: space-between;
			flex-direction: row;
		}
	}
	.footer-copy {
		font-size: 1rem;
		text-align: center;
		margin: 0 auto;
	}
`;
