import React, { createContext, useState } from 'react';

export const FetchContext = createContext();


const FetchProvider = (props) => {
    const [movie, setMovie] = useState();
    const [loading,setLoading] = useState(true)
	const apiKey = `94dad5a9a7951ca6bce15cab74981a6a`;
	// const popular = 'popular';
	// const topRated = 'top_rated';
	// const upcoming = 'upcoming';
	// const latest = 'latest';

	const fetchData = async (type,device) => {
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/${device}/${type}?api_key=${apiKey}&language=en-US&page=1`,
			);
			const data = await response.json();
			if (!response.ok)
                throw new Error(`${data.status_message} ${response.status}`);
                setMovie(data);
                setLoading(false)
		} catch (e) {
			console.log(e);
		}
	};
	const cxtvalue = {
		fetchData,
        data: movie,
        loading,
	};

	return (
		<FetchContext.Provider value={cxtvalue}>
			{props.children}
		</FetchContext.Provider>
	);
};

export default FetchProvider;