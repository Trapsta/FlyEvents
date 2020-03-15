/**
 *
 * EventComment
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Badge } from 'reactstrap';
import classnames from 'classnames';

function EventComment({ reply }) {
	const CSS = {
		EventComment: 'event-comment',
		EventCommentReply: 'event-comment-reply',
		EventCommentContent: 'event-comment-content',
		EventCommentHeader: 'event-comment-header',
		EventCommentDetails: 'event-comment-details',
		EventCommentDate: 'event-comment-date',
		EventCommentAction: 'event-comment-action',
		EventCommentName: 'event-comment-name',
	};
	return (
		<CommentWrapper
			className={classnames(CSS.EventComment, {
				[CSS.EventCommentReply]: reply,
			})}
		>
			<div className={CSS.EventCommentHeader}>
				<div className={CSS.EventCommentDetails}>
					<div className={CSS.EventCommentName}>
						@Karine_29 <Badge>Ticket Holder</Badge>{' '}
					</div>
					<div className={CSS.EventCommentDate}>12 hours ago</div>
				</div>
			</div>
			<div className={CSS.EventCommentContent}>
				Yaaaay! See you guys at the event. #SuperHyped
				<span className={CSS.EventCommentAction}>Reply</span>
			</div>
		</CommentWrapper>
	);
}

EventComment.propTypes = {};

export default EventComment;

const CommentWrapper = styled.div`
	&.event-comment {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		padding: 1rem 0;
	}
	&.event-comment-reply .event-comment-content,
	&.event-comment-reply .event-comment-header {
		padding-left: 2rem;
	}
	.event-comment-content {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-flex: 1;
		-ms-flex: 1 1 auto;
		flex: 1 1 auto;
		padding: 1rem 0 0.5rem;
		line-height: 1.5rem;
		border-bottom: 1px solid #eaeaea;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
	}
	.event-comment-header {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-flex: 1;
		-ms-flex: 1 1 auto;
		flex: 1 1 auto;
		font-weight: 600;
	}
	.event-comment-name {
		cursor: pointer;
	}
	.event-comment-details {
		display: flex;
		flex-direction: row;
		padding: 0 1rem;
		padding-left: 0;
		line-height: 1.25rem;
		width: 100%;
		div {
			flex: 1 1 0;
		}
	}
	.event-comment-date {
		text-align: right;
		font-size: 0.6875rem;
		color: #525252;
	}
	.event-comment-action {
		font-size: 0.6875rem;
		color: #525252;
		line-height: 1rem;
		padding-top: 1rem;
		cursor: pointer;
	}
	.badge {
		background-color: ${props => props.theme.colors.brand};
	}
`;
