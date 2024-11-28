interface CityOption {
	label: string;
	value: string;
}

export const fetchCities = async (query: string): Promise<CityOption[]> => {
	if (!query) return [];
	const response = await fetch(`http://api.geonames.org/searchJSON?name_startsWith=${query}&maxRows=10&username=nathy94`);
	const data = await response.json();
	return data.geonames.map((city: any) => ({
		label: `${city.name}, ${city.countryName}`,
		value: city.geonameId,
	}));
};
