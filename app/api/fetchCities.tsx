type City = {
	name: string;
	countryName: string;
	geonameId: number;
};

type FetchCitiesResponse = {
	geonames: City[];
};

export const fetchCities = async (inputValue: string): Promise<{label: string; value: number}[]> => {
	if (!inputValue) return [];

	const response = await fetch(`http://api.geonames.org/searchJSON?name_startsWith=${inputValue}&maxRows=10&username=nathy94`);
	const data: FetchCitiesResponse = await response.json();

	return data.geonames.map((city: City) => ({
		label: `${city.name}, ${city.countryName}`,
		value: city.geonameId,
	}));
};
