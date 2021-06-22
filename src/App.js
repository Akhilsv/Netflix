import React, { lazy, Suspense } from 'react';
import Nav from './components/Nav';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import MovieDetails from './components/Reuse/MovieDetails';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { LoadHolder, Loading } from './components/Reuse/Loading';
const Search = lazy(() => import(`./Pages/Search`));
const Tv = lazy(() => import(`./Pages/Tv`));

function App() {
	const pageVarient = {
		initial: {
			opacity: 0,
			x: '100vw',
		},
		in: {
			opacity: 1,
			x: 0,
		},
		out: {
			opacity: 0,
			x: '-100vw',
		},
	};
	const pageTransition = {};

	return (
		<>
			<Nav />
			<Out>
				<AnimatePresence>
					<Suspense
						fallback={
							<LoadHolder>
								<Loading />
							</LoadHolder>
						}>
						<Switch>
							<Route exact path='/movie'>
								<Home framer={pageVarient} transition={pageTransition} />
							</Route>
							<Route exact path='/tv'>
								<Tv framer={pageVarient} transition={pageTransition} />
							</Route>
							<Route exact path='/search'>
								<Search framer={pageVarient} transition={pageTransition} />
							</Route>
							<Route exact path='/:type/:movieId'>
								<MovieDetails
									framer={pageVarient}
									transition={pageTransition}
								/>
							</Route>
							<Route exact path='*'>
								<Redirect to='/movie' />
							</Route>
						</Switch>
					</Suspense>
				</AnimatePresence>
			</Out>
		</>
	);
}
const Out = styled.div`
	overflow-y: hidden;
	overflow-x: hidden;
	width: 100%;
	height: 100%;
`;
export default App;
