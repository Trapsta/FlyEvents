/*
 * HomePage
 *
 */

import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import Header from '../../components/Header';
import SectionTitle from '../../components/SectionTitle';
import PageContentBlock from '../../components/PageContentBlock';
import Footer from '../../components/Footer';
import EventCard from '../../components/EventCard';
import { Col, Row } from 'reactstrap';
import RoundedButton from '../../components/RoundedButton';
import styled from 'styled-components';

export default function HomePage() {
	const CSS = {
		UpcomingEvents: 'upcoming-events',
		AllEventsBtn: 'all-events-btn',
	};
	return (
		<HomePageWrapper>
			<NavigationBar home />
			<Header />

			<section className={CSS.UpcomingEvents}>
				<PageContentBlock>
					<SectionTitle topSpacing bottomSpacing>
						Upcoming Events
					</SectionTitle>

					<Row>
						<Col xs="12" sm="4">
							<EventCard />
						</Col>
						<Col xs="12" sm="4">
							<EventCard />
						</Col>
						<Col xs="12" sm="4">
							<EventCard />
						</Col>
						<Col xs="12" sm="4">
							<EventCard />
						</Col>
						<Col xs="12" sm="4">
							<EventCard />
						</Col>
						<Col xs="12" sm="4">
							<EventCard />
						</Col>
						<Col xs="12" sm="4">
							<EventCard />
						</Col>
						<Col xs="12" sm="4">
							<EventCard />
						</Col>
						<Col xs="12" sm="4">
							<EventCard />
						</Col>
					</Row>

					<div className={CSS.AllEventsBtn}>
						<RoundedButton type="submit">View all events</RoundedButton>
					</div>
				</PageContentBlock>
			</section>
			<Footer />
		</HomePageWrapper>
	);
}

const HomePageWrapper = styled.div`
	.all-events-btn {
		display: flex;
		align-items: center;
		padding: 1rem 0;
	}
`;
