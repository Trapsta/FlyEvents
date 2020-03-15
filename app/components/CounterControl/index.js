/**
 *
 * CounterControl
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

function CounterControl({
	children,
	onIncrease,
	onDecrease,
	value = 0,
	minValue = 0,
	maxValue = 10,
	className,
}) {
	const CSS = {
		CounterControl: 'counter-control',
		Label: 'counter-control-label',
		Value: 'counter-control-value',
		RoundButtonPlus: 'counter-control-round-plus',
		RoundButton: 'counter-control-round-btn',
		'RoundButton--disabled': 'counter-control-round-btn--disabled',
		RoundButtonMinus: 'counter-control-round-minus',
		ButtonsContainer: 'round-btn-container',
	};

	const classes = classnames(CSS.CounterControl, {
		[className]: className,
	});

	const minusButtonClassnames = classnames(CSS.RoundButton, {
		[`${CSS['RoundButton--disabled']}`]: value <= minValue,
	});

	const plusButtonClassnames = classnames(CSS.RoundButton, {
		[`${CSS['RoundButton--disabled']}`]: value >= maxValue,
	});
	return (
		<CounterControlWrapper>
			<div className={classes}>
				<div className={CSS.Label}>{children}</div>
				<div className={CSS.ButtonsContainer}>
					<span className={CSS.RoundButtonMinus}>
						<button
							data-test-id="decreaseCounterButton"
							type="button"
							className={minusButtonClassnames}
							onClick={onDecrease}
						>
							<svg width={8} height={2} viewBox="0 0 8 2">
								<line
									x1="0"
									y1="1"
									x2="8"
									y2="1"
									stroke="black"
									strokeWidth="2"
								/>
							</svg>
						</button>
					</span>
					<span data-test-id="counterValue" className={CSS.Value}>
						{value}
					</span>
					<span className={CSS.RoundButtonPlus}>
						<button
							data-test-id="increaseCounterButton"
							type="button"
							className={plusButtonClassnames}
							onClick={onIncrease}
						>
							<svg width={8} height={8} viewBox="0 0 8 8">
								<line
									x1="4"
									y1="0"
									x2="4"
									y2="8"
									stroke="black"
									strokeWidth="2"
								/>
								<line
									x1="0"
									y1="4"
									x2="8"
									y2="4"
									stroke="black"
									strokeWidth="2"
								/>
							</svg>
						</button>
					</span>
				</div>
			</div>
		</CounterControlWrapper>
	);
}

CounterControl.propTypes = {};

export default CounterControl;

const CounterControlWrapper = styled.div`
	.counter-control {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}
	.counter-control-label {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		font-weight: 400;
		font-size: 1rem;
		line-height: 2rem;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
	}
	.counter-control-value {
		line-height: 2rem;
		font-weight: 400;
		font-size: 1rem;
		text-align: center;
		min-width: 32px;
	}
	.counter-control-round-plus {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	.counter-control-round-btn {
		display: inline-block;
		border-radius: 50%;
		border: 1px solid #4a4a4a;
		width: 2rem;
		height: 2rem;
		text-align: center;
		vertical-align: top;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		background: transparent;
		padding: 0;
		line-height: 1rem;
	}
	.counter-control-round-btn svg {
		vertical-align: middle;
		margin-top: -3px;
	}
	.counter-control-round-btn svg line {
		stroke: #4a4a4a;
	}
	.counter-control-round-btn--disabled {
		border-color: #eaeaea;
		cursor: not-allowed;
	}
	.counter-control-round-btn--disabled svg line {
		stroke: #eaeaea;
	}
	.counter-control-round-minus {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	.round-btn-container {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
`;
