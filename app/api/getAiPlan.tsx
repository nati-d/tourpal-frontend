import axios from "axios";

type Itinerary = {
	destination: string;
	startDate: string;
	endDate: string;
	preferences: string[];
	companion: string | null;
};

export const fetchItinerary = async (data: Itinerary) => {
	try {
		// Make the API request to your backend
		const response = await axios.post("http://localhost:8080/api/ai-plan", data);

		return response.data.itinerary;
		console.log("Itinerary:", response.data);
	} catch (error) {
		// Handle any errors that occur during the request
		console.error("Error fetching itinerary:", error);
		// setError("Failed to fetch itinerary");
	}
};
