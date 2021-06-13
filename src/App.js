import { useContext } from 'react';
import { FetchContext } from './FetchContext';
import Nav from './components/Nav';
import OneMovieContainer from './components/OneMovieContainer';
import HorizontalContainer from './components/HorizontalContainer';
function App() {
	// const { fetchData,data } = useContext(FetchContext);
	// const popularHandler = (e) => {
	// 	fetchData(e.target.value);
	// };

	return (
		<>
			<Nav />
			<OneMovieContainer />
			<HorizontalContainer type={'popular'} name={'Popular on Netflix'} />
			<HorizontalContainer type={'top_rated'} name={'Top Rated'} />
			<HorizontalContainer type={'upcoming'} name={'Upcoming'} />
			
		</>
	);
}

export default App;

// const apiKey = `94dad5a9a7951ca6bce15cab74981a6a`;
{
	/* <button onClick={popularHandler} value='upcoming'>
				Upcoming
			</button>
			<button onClick={popularHandler} value='popular'>
				popular
			</button>
			<button onClick={popularHandler} value='top_rated'>
				Top Rated
			</button> */
}
