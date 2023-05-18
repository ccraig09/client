export const FETCH_HOUSES = "FETCH_HOUSES";
export const CREATE_HOUSES = "CREATE_HOUSES";

export const fetchHouses = () => {
	return async (dispatch) => {
		// logic to fetch houses from the API
		const result = await fetch("http://localhost:3000/api/houses/");

		const resultData = await result.json();

		dispatch({
			type: FETCH_HOUSES,
			payload: resultData,
		});
	};
};
