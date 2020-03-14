/**
 *
 * SearchBlock
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { ChevronIcon, SearchIcon, CalendarIcon, MarkerIcon } from '../Icons';
import RoundedButton from '../RoundedButton';

function SearchBlock() {
	const [popupVisible, setPopupVisible] = useState(false);
	const [dateFrom, setDateFrom] = useState('');
	const [dateTo, setDateTo] = useState('');

	const togglePopup = () => {
		setPopupVisible(!popupVisible);
	};

	const CSS = {
		SearchBlock: 'search-block',
		SearchBlockForm: 'search-block-form',
		SearchBlockBottom: 'search-block-link',
		AllEventsLink: 'all-events-link',
		SearchButton: 'search-block-button',
		PeopleInputWithDate: 'search-block-date',
		SearchBlockSecondRow: 'search-block-row',
		SearchInputContainer: 'search-input-container',
		SearchIconContainer: 'search-icon-container',
		SearchIcon: 'search-icon',
		SearchInput: 'search-input',
		SearchInputText: 'search-input-text',
		SearchInputPlaceholder: 'search-input-placeholder',
		DateInput: 'date-input',
		Placeholder: 'input-placeholder',
		Button: 'styled-input-button',
		ButtonContent: 'styled-button-content',
		ChevronIcon: 'chevron-icon',
		ChevronIconRotated: 'chevron-icon-rotated',
		AgendaIcon: 'agenda-icon',
		LabelText: 'label-text',
		IconContainer: 'icon-container',
	};
	return (
		<StyledSearchBlock className={CSS.SearchBlock}>
			<form className={CSS.SearchBlockForm} onSubmit={() => {}}>
				<div className={CSS.SearchInputContainer}>
					<div className={CSS.SearchIconContainer}>
						<SearchIcon width={21} height={21} className={CSS.SearchIcon} />
					</div>
					<input
						className={CSS.SearchInput}
						onChange={() => {}}
						placeholder={'Event name'}
					/>
				</div>
				<div className={CSS.SearchInputContainer}>
					<div className={CSS.SearchIconContainer}>
						<MarkerIcon width={21} height={21} className={CSS.SearchIcon} />
					</div>
					<input
						className={CSS.SearchInput}
						onChange={() => {}}
						placeholder={'Event location'}
					/>
				</div>
				<div className={CSS.SearchBlockSecondRow}>
					<div className={CSS.DateInput}>
						<button type="button" className={CSS.Button} onClick={togglePopup}>
							<div className={CSS.ButtonContent}>
								<div className={CSS.IconContainer}>
									<CalendarIcon
										className={CSS.AgendaIcon}
										width={21}
										height={21}
									/>
								</div>
								<span className={CSS.LabelText}>
									{dateFrom && dateTo ? `${dateFrom} - ${dateTo}` : `Date`}
								</span>
								<div className={CSS.IconContainer}>
									<ChevronIcon
										direction="bottom"
										width={15}
										height={9}
										className={classnames(CSS.ChevronIcon, {
											[CSS.ChevronIconRotated]: popupVisible,
										})}
									/>
								</div>
							</div>
						</button>
						{popupVisible && (
							<div>
								{
									'CalendardPopup initialDateFrom={dateFrom} initialDateTo={dateTo} onClose={togglePopup} />'
								}
							</div>
						)}
					</div>
				</div>
				<RoundedButton className={CSS.SearchButton} type="submit">
					Search
				</RoundedButton>
			</form>

			<div className={CSS.SearchBlockBottom}>
				<Link className={CSS.AllEventsLink} to={'/'}>
					View all events
				</Link>
			</div>
		</StyledSearchBlock>
	);
}

SearchBlock.propTypes = {};

export default SearchBlock;

const StyledSearchBlock = styled.div`
	&.search-block {
		background: white;
		width: 100%;
		padding: 2rem 0 0;
	}
	@media (min-width: 768px) {
		&.search-block {
			border-radius: 8px;
			max-width: 480px;
			padding: 1.5rem 2rem 1rem;
			box-shadow: 0 6px 150px 0 rgba(0, 0, 0, 0.55);
		}
	}
	@media (min-width: 992px) {
		&.search-block {
			max-width: none;
		}
	}
	.search-block-form {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
	@media (min-width: 992px) {
		.search-block-form {
			flex-direction: row;
		}
	}
	.search-block-link {
		padding-top: 1rem;
	}
	.all-events-link {
		color: #808080;
		font-size: 0.6875rem;
		line-height: 1rem;
	}
	.all-events-link:hover {
		text-decoration: underline;
	}
	.search-block-button {
		width: 100%;
		padding: 0;
	}
	@media (min-width: 992px) {
		.search-block-button {
			width: 200px;
			height: auto;
		}
	}
	@media (min-width: 1200px) {
		.search-block-button {
			width: 232px;
		}
	}
	.search-block-date {
		margin-left: 0.5rem;
	}
	@media (min-width: 992px) {
		.search-block-date {
			min-width: 200px;
			max-width: 235px;
			margin-left: 0;
		}
	}
	@media (max-width: 480px) {
		.search-block-date {
			margin-left: 0;
		}
	}
	.search-block-row {
		display: flex;
		flex-direction: row;
	}
	@media (max-width: 480px) {
		.search-block-row {
			flex-direction: column;
		}
	}

	.search-input-container {
		flex: 1 1 auto;
		display: flex;
		position: relative;
		width: 100%;
		min-height: 3rem;
		z-index: 1;
		margin-bottom: 1.5rem;
	}
	@media (min-width: 992px) {
		.search-input-container {
			margin-right: 1rem;
			width: auto;
			margin-bottom: 0;
			min-width: 310px;
		}
	}
	.SearchInputNoEdit-29Gx9 {
		width: 100%;
		box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.07);
	}
	.SearchInputNoEdit-29Gx9:hover {
		box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.09);
		transition: box-shadow 140ms ease;
	}
	.SearchInputEdit-1UVoC {
		box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.09);
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
		position: absolute;
		width: 100%;
		left: 0;
		top: 0;
		transition: box-shadow 0.3s ease;
	}
	.search-input {
		border: 1px solid #808080;
		border-radius: 2px;
		height: 3rem;
		line-height: 3rem;
		font-weight: 500;
		padding: 0 1rem 0 3rem;
		text-align: left;
		margin: 0 1rem 0 0;
		display: flex;
		width: 100%;
		align-items: center;
		background: white;
		font-size: 1rem;
	}
	@media (min-width: 992px) {
		.search-input {
			line-height: 4rem;
			height: 4rem;
		}
	}
	.search-icon-container {
		line-height: 3rem;
		position: absolute;
		left: 1rem;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3rem;
		pointer-events: none;
	}
	@media (min-width: 992px) {
		.search-icon-container {
			line-height: 4rem;
			height: 4rem;
		}
	}
	.search-icon {
		fill: #4a4a4a;
	}
	.search-input-text {
		color: #4a4a4a;
		display: inline-block;
	}
	.search-input-placeholder {
		font-weight: 500;
		color: #808080;
		display: inline-block;
	}
	.SearchInputEditHero-2Z_LA {
		box-shadow: none;
	}
	.date-input {
		flex: 1 1 auto;
		width: 100%;
		position: relative;
		margin-bottom: 1.5rem;
		margin-right: 0.5rem;
		min-height: 3rem;
	}
	@media (min-width: 992px) {
		.date-input {
			margin-right: 1rem;
			min-width: 200px;
			max-width: 235px;
			margin-bottom: 0;
		}
	}
	@media (min-width: 1200px) {
		.date-input {
			max-width: 235px;
			margin-right: 1rem;
		}
	}
	@media (min-width: 768px) {
		.input-placeholder {
			color: #808080;
		}
	}
	.styled-input-button {
		border: 1px solid #808080;
		border-radius: 2px;
		line-height: 3rem;
		height: 3rem;
		font-weight: 500;
		padding: 0 5px 0 1rem;
		text-align: left;
		width: 100%;
		background: white;
		margin: 0;
	}
	@media (min-width: 992px) {
		.styled-input-button {
			line-height: 4rem;
			height: 4rem;
		}
	}
	.styled-button-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.chevron-icon {
		margin-right: 0.5rem;
		transition: -webkit-transform 0.3s ease;
		transition: transform 0.3s ease;
		transition: transform 0.3s ease, -webkit-transform 0.3s ease;
		fill: #bfbfbe;
	}
	.chevron-icon-rotated {
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg);
	}
	.agenda-icon {
		fill: #4a4a4a;
		margin-right: 10px;
	}
	.label-text {
		width: 100%;
		white-space: nowrap;
	}
	.icon-container {
		line-height: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3rem;
		pointer-events: none;
	}
	@media (min-width: 992px) {
		.icon-container {
			line-height: 4rem;
			height: 4rem;
		}
	}
`;
