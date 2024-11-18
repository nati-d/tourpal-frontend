export const NAV_LINKS = [
	{
		name: "Trips",
		href: "/trips",
	},
	{
		name: "Support",
		href: "/support",
	},
	{
		name: "List your property",
		href: "/list-your-property",
	},
	{
		name: "Favorites",
		href: "/favorites",
	},
	{
		name: "Sign in",
		href: "/sign-in",
	},
];

export const CATEGORIES = [
	{
		name: "Hotels",
		href: "/hotels",
	},
	{
		name: "Adventures",
		href: "/adventures",
	},
	{
		name: "Restaurants",
		href: "/restaurants",
	},
	{
		name: "Places to stay",
		href: "/places-to-stay",
	},
];

export const CATEGORY_LIST = [
	{
		name: "Hotels",
		href: "/hotels",
		image: "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		name: "Sky Diving",
		href: "/skydiving",
		image: "https://images.pexels.com/photos/26184222/pexels-photo-26184222/free-photo-of-a-person-with-a-paraglider-landing-on-the-field.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		name: "Museum",
		href: "/museum",
		image: "https://images.pexels.com/photos/69903/pexels-photo-69903.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		name: "Beach",
		href: "/beach",
		image: "https://images.pexels.com/photos/1151282/pexels-photo-1151282.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		name: "Mountain",
		href: "/mountain",
		image: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		name: "Park",
		href: "/park",
		image: "https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		name: "Lake",
		href: "/lake",
		image: "https://images.pexels.com/photos/13759/pexels-photo-13759.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		name: "Restaurant",
		href: "/restaurant",
		image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
];

export const AA_DESTINATIONS = [
	{
		name: "Friendship Park",
		href: "/friendship-park",
		image: "/images/friendship.jpg",
	},
	{
		name: "Adwa Meemorial Museum",
		href: "/adwa-meemorial-museum",
		image: "/images/adwa.jpg",
	},
	{
		name: "Entoto National Park",
		href: "/entoto-national-park",
		image: "/images/entoto.jpg",
	},
	{
		name: "National Museum of Ethiopia",
		href: "/national-museum-of-ethiopia",
		image: "/images/national-museum.jpg",
	},
	{
		name: "Addis Mercato",
		href: "/addis-mercato",
		image: "/images/merkato.jpg",
	},
	{
		name: "Addis Ababa Bole International Airport",
		href: "https://images.pexels.com/photos/3223423/pexels-photo-3223423.png?auto=compress&cs=tinysrgb&w=600",
		image: "/images/airport.jpg",
	},
	{
		name: "Meskel Square",
		href: "/meskel-square",
		image: "/images/meskel.jpg",
	},
];

export const HOTELS = [
	{
		name: "Hilton Addis Ababa",
		href: "/hilton-addis-ababa",
		image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600",
		amenities: [],
		rating: 4.5
	},
	{
		name: "Sheraton Addis",
		href: "/sheraton-addis",
		image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
		amenities: ["Free WiFi", "Pool", "Spa", "Fitness Center"],
		rating: 4.8
	},
	{
		name: "Hyatt Regency Addis Ababa",
		href: "/hyatt-regency-addis-ababa",
		image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
		amenities: ["Restaurant", "Bar", "Meeting Rooms", "Airport Shuttle"],
		rating: 4.7
	},
	{
		name: "Radisson Blu Hotel",
		href: "/radisson-blu-addis-ababa",
		image: "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=600",
		amenities: ["Free Parking", "Business Center", "Pet Friendly"],
		rating: 4.6
	},
	{
		name: "Marriott Executive Apartments",
		href: "/marriott-executive-apartments",
		image: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=600",
		amenities: ["Kitchen", "Laundry Service", "Long Stay Offers"],
		rating: 4.4
	},
	{
		name: "Golden Tulip Addis Ababa",
		href: "/golden-tulip-addis-ababa",
		image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600",
		amenities: ["Room Service", "Breakfast Included", "Lounge"],
		rating: 4.3
	},
	{
		name: "Skylight Hotel",
		href: "/skylight-hotel",
		image: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600",
		amenities: ["Free Breakfast", "Pool", "Gym", "Kids Play Area"],
		rating: 4.2
	}
];


export const ACTIVITY_PREFERENCES = [
	{
		id: "sightseeing",
		displayName: "Sightseeing",
		// icon: SightseeingIcon,
	},
	{
		id: "shopping",
		displayName: "Shopping",
		// icon: ShoppingIcon,
	},
	{
		id: "beach",
		displayName: "Beach",
		// icon: BeachIcon,
	},
	{
		id: "hiking",
		displayName: "Hiking",
		// icon: HikingIcon,
	},
	{
		id: "museum",
		displayName: "Museum",
		// icon: MuseumIcon,
	},
	{
		id: "nightlife",
		displayName: "Nightlife",
		// icon: NightlifeIcon,
	},
	{
		id: "food",
		displayName: "Food",
		// icon: FoodIcon,
	},
	{
		id: "wildlife",
		displayName: "Wildlife",
		// icon: WildlifeIcon,
	},
	{
		id: "history",
		displayName: "History",
		// icon: HistoryIcon,
	},
	{
		id: "adventure",
		displayName: "Adventure",
		// icon: AdventureIcon,
	},
	{
		id: "relaxation",
		displayName: "Relaxation",
		// icon: RelaxationIcon,
	},
	{
		id: "culture",
		displayName: "Culture",
		// icon: CultureIcon,
	},
];

export const COMPANION_PREFRENCES = [
	{
		id: "solo",
		displayName: "Solo",
		// icon: SoloIcon,
	},
	{
		id: "couple",
		displayName: "Couple",
		// icon: CoupleIcon,
	},
	{
		id: "family",
		displayName: "Family",
		// icon: FamilyIcon,
	},
	{
		id: "friends",
		displayName: "Friends",
		// icon: FriendsIcon,
	},
	{
		id: "group",
		displayName: "Group",
		// icon: GroupIcon,
	},
];
