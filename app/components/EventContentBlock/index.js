/**
 *
 * EventContentBlock
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

const BASE_LIMIT = 300;
const IS_PRERENDER = window.isPreRender;

function EventContentBlock(props) {
	const [collapsedState, setCollapsedState] = useState(IS_PRERENDER);

	const collapseText = () => {
		if (collapsedState && props.onReadMoreButton) {
			props.onReadMoreButton();
		}
		setCollapsedState(true);
	};

	const getLimit = () => {
		const { text, maxLimit } = props;
		let limit = maxLimit || BASE_LIMIT;

		if (limit >= text.length) {
			return text.length;
		}

		while (text.charAt(limit) !== ' ' && limit < text.length) {
			limit += 1;
		}
		return limit;
	};

	const CSS = {
		readMoreText: 'event-read-more',
		readMoreButton: 'event-read-more-btn',
		readMoreTextParagraph: 'event-read-more-text',
	};

	const renderText = () => {
		return props.text.split('\n').map((item, index) => {
			if (item) {
				return (
					<p className={CSS.readMoreTextParagraph} key={index}>
						{item}
					</p>
				);
			}
			return null;
		});
	};

	const textLimit = getLimit();

	if (textLimit === props.text.length) {
		return renderText();
	}

	const renderPartialText = () => {
		const textLimit = getLimit();

		if (textLimit === props.text.length) {
			return renderText();
		}

		return (
			<>
				{props.text
					.substring(0, textLimit)
					.split('\n')
					.map((item, index, array) => (
						<p className={CSS.readMoreTextParagraph} key={index}>
							{item}
							{index === array.length - 1 && (
								<>
									...
									<button className={CSS.readMoreButton} onClick={collapseText}>
										+ Read More
									</button>
								</>
							)}
						</p>
					))}
			</>
		);
	};

	return (
		<StyledContent
			className={classnames(CSS.readMoreText, {
				[CSS.readMoreTextCollapsed]: collapsedState,
				[props.className]: props.className,
			})}
		>
			{!collapsedState && renderPartialText()}
			{collapsedState && renderText()}
		</StyledContent>
	);
}

EventContentBlock.propTypes = {};

export default EventContentBlock;

const StyledContent = styled.div`
	.event-read-more {
		padding-bottom: 0.5rem;
	}
	.event-read-more-btn {
		color: ${props => props.theme.colors.brand};
		border: none;
		background: transparent;
	}
	.event-read-more-text {
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5rem;
		margin-bottom: 1rem;
	}
`;
