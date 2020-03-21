/**
 *
 * RangeSlider
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'rheostat/css/rheostat.css';
import Rheostat from 'rheostat/lib/Slider';
import moment from 'moment';

const defaultProps = {
	snapPoints: [
		0,
		60,
		120,
		180,
		240,
		300,
		330,
		360,
		420,
		480,
		540,
		570,
		600,
		630,
		660,
		690,
		720,
		750,
		780,
		810,
		840,
		870,
		900,
		930,
		960,
		990,
		1020,
		1050,
		1080,
		1110,
		1140,
		1170,
		1200,
		1260,
		1320,
		1380,
		1440,
	],
	values: [360, 1140],
};

function RangeSlider(props) {
	const [sliderStateObject, setSliderState] = useState({
		values: props.values || defaultProps.values,
	});

	const updateValue = sliderState => {
		props.getValues(sliderState.values);
		setSliderState({
			values: sliderState.values,
		});
	};

	const PitComponent = ({ style, children }) => {
		return (
			<div
				className="slider-pit-point"
				style={{
					...style,
					background: '#f6f6f6',
					width: 'auto',
					height: 'auto',
					borderRadius: '10px',
					padding: '.25rem',
					top: 20,
				}}
			>
				<time>
					{moment
						.utc()
						.startOf('day')
						.add(children, 'minutes')
						.format('h A')}
				</time>
			</div>
		);
	};

	return (
		<RangeSliderWrapper>
			<Rheostat
				snapPoints={
					props.snapPoints ? props.snapPoints : defaultProps.snapPoints
				}
				values={sliderStateObject.values}
				min={0}
				max={1440}
				onValuesUpdated={updateValue}
				pitComponent={PitComponent}
				pitPoints={sliderStateObject.values}
				snap
			/>
		</RangeSliderWrapper>
	);
}

RangeSlider.propTypes = {};

export default RangeSlider;

const RangeSliderWrapper = styled.div`
	margin: 1rem 0;
	padding: 0.35em 0.75em 0.625em;
	.DefaultBackground {
		height: 0.4rem;
		background-color: ${props => props.theme.colors.grey};
		border: 1px solid ${props => props.theme.colors.grey};
	}

	.DefaultProgressBar_progressBar {
		background-color: ${props => props.theme.colors.brand};
		height: 0.4rem;
		top: -2px;
	}
	.handleContainer {
		top: -6px;
	}
	.handleContainer button {
		border-radius: 30px;
		text-align: center;
		font-size: 12px;
		line-height: 1.42857;
		background: ${props => props.theme.colors.primaryLight};
		box-shadow: inset 0 0 0px 7px ${props => props.theme.colors.brand};
		cursor: ew-resize;
	}
	.DefaultHandle_handle__horizontal:before,
	.DefaultHandle_handle__horizontal:after {
		display: none;
	}
	.slider-pit-point {
		color: ${props => props.theme.colors.grayFont};
		min-width: fit-content;
		text-transform: lowercase;
	}
`;
