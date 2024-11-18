export const fetchCities = async (inputValue: string) => {
    if (!inputValue) return [];
    const response = await fetch(`http://api.geonames.org/searchJSON?name_startsWith=${inputValue}&maxRows=10&username=nathy94`);
    const data = await response.json();
    return data.geonames.map((city: any) => ({
        label: `${city.name}, ${city.countryName}`,
        value: city.geonameId,
    }));
};