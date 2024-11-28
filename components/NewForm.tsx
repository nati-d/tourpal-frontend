import React, {useState} from "react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {ACTIVITY_PREFERENCES, COMPANION_PREFRENCES} from "@/constants";
import {DayPicker} from "react-day-picker";
import {format} from "date-fns";

import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";

import {fetchCities} from "@/app/api/fetchCities";
import {LoaderPinwheel, Sparkles} from "lucide-react";
import {fetchItinerary} from "@/app/api/getAiPlan";
import PlanResultDialog from "./PlanResultDialog";

// Types for fetched cities
interface CityOption {
	label: string;
	value: string;
}

// Types for itinerary
type Itinerary = {
	title: string;
	description: string;
	activities: {
		name: string;
		time: string;
	}[];
};

type DateRange = {from: Date; to: Date};

// Form schema definition
const formSchema = z.object({
	destination: z.string().min(1, "Please select a destination city."),
	datesOfTravel: z.object({
		from: z.date().min(new Date(), "Start date must be today or later."),
		to: z.date().min(new Date(), "End date must be today or later."),
	}),
	activityPreferences: z.array(z.string()).min(1, "Please select at least one activity."),
	companion: z.optional(z.string()),
});

export type formSchemaType = z.infer<typeof formSchema>;

const NewTravelForm: React.FC = () => {
	const [date, setDate] = useState<DateRange | undefined>();
	const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);
	const [options, setOptions] = useState<CityOption[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [cityValue, setCityValue] = useState<string>("");
	const [fetching, setFetching] = useState<boolean>(false);
	const [resultModalOpen, setResultModalOpen] = useState<boolean>(false);
	const [plans, setPlans] = useState<Itinerary[] | null>(null);

	const form = useForm<formSchemaType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			activityPreferences: [],
			companion: undefined,
			destination: "",
			datesOfTravel: {
				from: new Date(),
				to: new Date(),
			},
		},
	});

	const onSubmit = async (values: formSchemaType): Promise<void> => {
		try {
			setFetching(true);
			const payload = {
				destination: values.destination,
				startDate: values.datesOfTravel.from.toISOString(),
				endDate: values.datesOfTravel.to.toISOString(),
				preferences: values.activityPreferences,
				companion: values.companion || null,
			};

			console.log("Submitting:", payload);

			const itinerary = await fetchItinerary(payload);
			setPlans(itinerary);
			setResultModalOpen(true);
			setFetching(false);
		} catch (error) {
			console.error("Failed to generate itinerary:", error);
			setFetching(false);
		}
	};

	const handleDateSelect = (range: DateRange | undefined) => {
		if (range?.from && range?.to) {
			setDate({from: range.from, to: range.to});
		} else {
			setDate(undefined);
		}
	};

	const handleInputChange = async (inputValue: string): Promise<void> => {
		setCityValue(inputValue);

		if (inputValue) {
			setLoading(true);

			try {
				const cities = await fetchCities(inputValue); // Already typed as CityOption[]
				setOptions(cities);
			} catch (error) {
				console.error("Failed to fetch cities:", error);
				setOptions([]); // Handle failure gracefully
			} finally {
				setLoading(false);
			}
		} else {
			setOptions([]);
		}
	};

	React.useEffect(() => {
		handleInputChange("");
	}, []);

	const formatDateRange = (dates: {from?: Date; to?: Date} | undefined): string => {
		if (dates?.from && dates?.to) {
			return `${format(dates.from, "MMM dd, yyyy")} - ${format(dates.to, "MMM dd, yyyy")}`;
		}
		return "";
	};

	return (
		<Form {...form}>
			<form
				className='space-y-4'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name='destination'
					render={() => {
						return (
							<FormItem>
								<FormLabel>Select destination city</FormLabel>
								<FormControl>
									<div className='relative'>
										<input
											type='text'
											placeholder='Search for a city...'
											className='w-full border p-2 rounded-md'
											value={cityValue}
											onChange={(e) => handleInputChange(e.target.value)}
										/>
										{options.length > 0 && (
											<Command>
												<CommandInput
													value={cityValue}
													onValueChange={handleInputChange}
												/>

												<CommandList>
													{loading ? (
														<CommandEmpty>Loading...</CommandEmpty>
													) : (
														options.map((option) => (
															<CommandGroup key={option.value}>
																<CommandItem
																	onSelect={() => {
																		setCityValue(option.label);
																		form.setValue("destination", option.label);
																		setOptions([]);
																	}}
																>
																	{option.label}
																</CommandItem>
															</CommandGroup>
														))
													)}
												</CommandList>
											</Command>
										)}
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name='datesOfTravel'
					render={() => (
						<FormItem>
							<FormLabel>Select Dates</FormLabel>
							<FormControl>
								<div className='relative'>
									<input
										type='text'
										readOnly
										value={formatDateRange(date)}
										onClick={() => setIsDatePickerOpen(true)}
										className='w-full p-2 border rounded'
										placeholder='Click to select dates'
									/>
									{isDatePickerOpen && (
										<div className='absolute z-10 bg-white shadow-lg p-4 mt-2'>
											<DayPicker
												mode='range'
												numberOfMonths={1}
												selected={date as any}
												onSelect={handleDateSelect}
												disabled={{before: new Date()}}
											/>
										</div>
									)}
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='activityPreferences'
					render={({field}) => (
						<FormItem>
							<FormLabel>Select the kind of activities you want to do</FormLabel>
							<FormControl>
								<div className='flex gap-2 flex-wrap'>
									{ACTIVITY_PREFERENCES.map((activity) => (
										<label
											key={activity.id}
											className='flex-grow p-1 opacity-50 hover:opacity-100 dark:opacity-40 dark:hover:opacity-100 
                      has-[:checked]:bg-blue-100 has-[:checked]:opacity-100 dark:has-[:checked]:opacity-100
                      duration-200 transition-all ease-in-out
                      rounded-md cursor-pointer select-none
                      flex justify-center items-center
                      bg-gray-100 has-[:checked]:shadow-sm dark:bg-transparent dark:border dark:border-foreground
                      '
										>
											<input
												type='checkbox'
												className='hidden'
												checked={field.value?.includes(activity.id) ?? false}
												onChange={(e) => {
													if (e.target.checked) {
														field.onChange([...field.value, activity.id]);
													} else {
														field.onChange(field.value.filter((selectedActivity) => selectedActivity !== activity.id));
													}
												}}
											/>
											{/* <activity.icon className='w-5 h-5 pr-1' /> */}
											<span>{activity.displayName}</span>
										</label>
									))}
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='companion'
					render={({field}) => (
						<FormItem>
							<FormLabel>
								Who are you travelling with
								<span className='font-medium ml-1'>(Optional)</span>
							</FormLabel>
							<FormControl>
								<div className='flex gap-2 flex-wrap'>
									{COMPANION_PREFRENCES.map((companion) => (
										<label
											key={companion.id}
											className='flex-1 p-1 opacity-50 hover:opacity-100 dark:opacity-40 dark:hover:opacity-100 
                has-[:checked]:bg-blue-100 has-[:checked]:opacity-100 dark:has-[:checked]:opacity-100
                duration-200 transition-all ease-in-out
                rounded-md cursor-pointer select-none
                flex justify-center items-center
                bg-gray-100 has-[:checked]:shadow-sm dark:bg-transparent dark:border dark:border-foreground
                '
										>
											<input
												type='radio'
												className='hidden'
												name='companion'
												checked={field.value == companion.id}
												onChange={(e) => {
													if (e.target.checked) {
														field.onChange(companion.id);
													}
												}}
											/>
											{/* <companion.icon className='w-5 h-5 pr-1' /> */}
											<span>{companion.displayName}</span>
										</label>
									))}
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>{" "}
				<button
					type='submit'
					className={`btn-primary flex font-semibold gap-2 items-center justify-center w-full py-2 rounded-md 
        ${fetching ? "bg-secondary-light cursor-not-allowed" : "bg-secondary"} `}
					disabled={fetching}
				>
					{fetching ? <LoaderPinwheel size={14} /> : <Sparkles size={14} />}
					{fetching ? "Generating..." : "Generate AI Plan"}
				</button>			<Carousel />

				<PlanResultDialog
					open={resultModalOpen}
					handleCloseModal={() => setResultModalOpen(false)}
					plans={plans as any}
				/>
			</form>
		</Form>
	);
};

export default NewTravelForm;
