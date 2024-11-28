interface CityOption {
	label: string;
	value: string;
}

export const fetchCities = async (query: string): Promise<CityOption[]> => {
	const response = await fetch(`/api/cities?query=${query}`);
	const data = await response.json();

	// Ensure the returned data matches CityOption[]
	return data.map((city: {name: string; id: string}) => ({
		label: city.name,
		value: city.id,
	}));
};
