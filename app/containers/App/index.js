/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import EventPage from 'containers/EventPage/Loadable';
import EventFormPage from 'containers/EventFormPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

import 'rheostat/css/rheostat.css';
import 'react-dates/lib/css/_datepicker.css';

import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import cssInterface from 'react-with-styles-interface-css';
import RheostatDefaultTheme from 'rheostat/lib/themes/DefaultTheme';
import ReactDatesDefaultTheme from 'react-dates/lib/theme/DefaultTheme';

ThemedStyleSheet.registerInterface(cssInterface);
ThemedStyleSheet.registerTheme({
	...RheostatDefaultTheme,
	...ReactDatesDefaultTheme,
});

export default function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/events/:slug" component={EventPage} />
				<Route exact path="/create-event" component={EventFormPage} />
				<Route component={NotFoundPage} />
			</Switch>
			<GlobalStyle />
		</div>
	);
}
