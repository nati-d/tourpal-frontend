"use client";
import {Input} from "@/components/ui/input";
import {Skeleton} from "@/components/ui/skeleton";
import {Cloud, Compass, Droplets, Eye, EyeOff, Thermometer, ThermometerSnowflake, ThermometerSun, Waves, Wind} from "lucide-react";
import Image from "next/image";
import {ReactNode, useEffect, useState} from "react";
import axios from "axios";
import SectionWrapper from "./SectionWrapper";

const Weather = ({placeName}: {placeName: string | undefined}) => {
	const [weatherData, setWeatherData] = useState<any | undefined>(undefined);

	useEffect(() => {
		if (!placeName) return;

		const fetchWeather = async () => {
			try {
				const options = {
					method: "GET",
					url: `https://open-weather13.p.rapidapi.com/city/${placeName}/EN`,
					headers: {
						"x-rapidapi-key": "d796747e60msh27e092544fa67f8p14d736jsnb4453b6f24af",
						"x-rapidapi-host": "open-weather13.p.rapidapi.com",
					},
				};

				const response = await axios.request(options);
				setWeatherData(response.data);
			} catch (error) {
				console.error(error);
				setWeatherData(undefined);
			}
		};

		fetchWeather();
	}, [placeName]);

	return (
		<SectionWrapper id='weather'>
			<h2 className='mb-2 text-lg font-semibold tracking-wide flex items-center'>
				<Cloud className='mr-2' /> Weather
			</h2>
			{!weatherData ? (
				<WeatherLoadingSkeleton />
			) : weatherData.cod !== 404 ? (
				<div className='grid md:grid-cols-2 auto-rows-auto grid-cols-1 grid-flow-row justify-center items-center min-h-[100px] gap-5'>
					<WeatherTile>
						<Temperature
							placeName={weatherData?.name}
							iconName={weatherData.weather[0].icon}
							weatherDesc={weatherData.weather[0].description}
							temp={weatherData.main.temp}
						/>
					</WeatherTile>
					<WeatherTile>
						<WindDeatils
							speed={weatherData.wind.speed}
							deg={weatherData.wind.deg}
						/>
					</WeatherTile>
					<WeatherTile>
						<TempHumdityDetails weatherData={weatherData} />
					</WeatherTile>
					<WeatherTile>
						<VisibilityDetails visibility={weatherData.visibility} />
					</WeatherTile>
				</div>
			) : (
				<p className='ml-8'>Error loading weather information for {placeName}</p>
			)}
		</SectionWrapper>
	);
};

const WeatherTile = ({children}: {children: ReactNode}) => {
	return (
		<div
			className='min-h-[184px] rounded-xl flex-grow 
                    w-full h-full flex flex-col justify-center items-center
                    p-5 shadow-md dark:border dark:border-border'
		>
			{children}
		</div>
	);
};

const Temperature = ({placeName, iconName, weatherDesc, temp}: {placeName: string; iconName: string; weatherDesc: string; temp: number}) => {
	return (
		<>
			<div className='flex justify-center items-center'>
				<span>{placeName}</span>
			</div>
			<div className='flex justify-center items-center gap-1'>
				<Image
					alt='weather icon'
					width={100}
					height={100}
					className=''
					src={`https://openweathermap.org/img/wn/${iconName}@2x.png`}
				/>
				<span className='text-4xl font-semibold'>{Math.round(temp)}°</span>
			</div>
			<span className='capitalize text-muted-foreground text-sm'>{weatherDesc}</span>
		</>
	);
};

const VisibilityDetails = ({visibility}: {visibility: number}) => {
	return (
		<>
			<div className='flex justify-center items-center'>
				<span>Visibility</span>
			</div>
			<Input
				type='range'
				max={10000}
				value={visibility}
				onChange={(e) => {}}
				className='p-0 text-background bg-background accent-foreground'
				readOnly
			/>
			<div className='flex justify-between items-center w-full'>
				<EyeOff />
				{visibility / 1000}km
				<Eye />
			</div>
		</>
	);
};

const TempHumdityDetails = ({weatherData}: {weatherData: any}) => {
	return (
		<>
			<div className='flex gap-2 justify-between w-full'>
				<div className='flex items-center gap-1'>
					<Droplets className='h-4 w-4' />
					<span>Humidity</span>
				</div>
				<span>{Math.round(weatherData.main.humidity)}%</span>
			</div>
			<div className='flex gap-2 justify-between w-full'>
				<div className='flex items-center gap-1'>
					<ThermometerSun className='h-4 w-4' />
					<span>Max Temperature</span>
				</div>
				<span>{Math.round(weatherData.main.temp_max)}°</span>
			</div>
			<div className='flex gap-2 justify-between w-full'>
				<div className='flex items-center gap-1'>
					<ThermometerSnowflake className='h-4 w-4' />
					<span>Min Temperature</span>
				</div>
				<span>{Math.round(weatherData.main.temp_min)}°</span>
			</div>
			<div className='flex gap-2 justify-between w-full'>
				<div className='flex items-center gap-1'>
					<Thermometer className='h-4 w-4' />
					<span>Feels like</span>
				</div>
				<span>{Math.round(weatherData.main.feels_like)}°</span>
			</div>
			{weatherData?.main?.sea_level && (
				<div className='flex gap-2 justify-between w-full'>
					<div className='flex items-center gap-1'>
						<Waves className='h-4 w-4' />
						<span>Sea Level</span>
					</div>
					<span>{Math.round(weatherData.main.sea_level)} hPa</span>
				</div>
			)}
		</>
	);
};

const WindDeatils = ({speed, deg}: {speed: number; deg: number}) => {
	return (
		<div className='flex gap-5 justify-center items-center'>
			<svg
				className=''
				height='100px'
				width='100px'
				version='1.1'
				viewBox='0 0 512 512'
			>
				<path
					fill='#38A287'
					d='M256.001,451.314c-88.826,0-172.898,20.338-247.828,56.597h495.655
	C428.899,471.652,344.827,451.314,256.001,451.314z'
					opacity='1'
				></path>
				<circle
					fill='#9CA9A4'
					cx='255.999'
					cy='130.308'
					r='16.34'
					opacity='1'
				></circle>
				<path
					className='fill-current text-black dark:text-white'
					d='M352.671,311.112c-3.908,2.256-5.246,7.253-2.99,11.16c1.513,2.621,4.259,4.086,7.083,4.086
	c1.387,0,2.792-0.353,4.077-1.096l53.116-30.666l53.116,30.666c1.288,0.743,2.692,1.096,4.077,1.096c2.824,0,5.57-1.465,7.083-4.086
	c2.256-3.908,0.917-8.904-2.99-11.16l-53.116-30.666v-61.333c0-4.512-3.657-8.17-8.17-8.17c-4.513,0-8.17,3.658-8.17,8.17v61.333
	L352.671,311.112z'
					opacity='1'
				>
					<animateTransform
						attributeName='transform'
						attributeType='XML'
						type='rotate'
						from='0 415 285'
						to='360 415 285'
						dur='1.4836795252225519s'
						repeatCount='indefinite'
					></animateTransform>
				</path>
				<path
					className='fill-current text-black dark:text-white'
					d='M40.852,326.359c1.386,0,2.792-0.353,4.077-1.096l53.116-30.666l53.116,30.666c1.288,0.743,2.692,1.096,4.077,1.096
	c2.824,0,5.57-1.465,7.083-4.086c2.256-3.908,0.917-8.904-2.99-11.16l-53.116-30.666v-61.333c0-4.512-3.657-8.17-8.17-8.17
	c-4.513,0-8.17,3.658-8.17,8.17v61.333l-53.116,30.666c-3.908,2.256-5.246,7.253-2.99,11.16
	C35.282,324.894,38.028,326.359,40.852,326.359z'
					opacity='1'
				>
					<animateTransform
						attributeName='transform'
						attributeType='XML'
						type='rotate'
						from='0 98 289'
						to='360 98 289'
						dur='1.4836795252225519s'
						repeatCount='indefinite'
					></animateTransform>
				</path>
				<circle
					fill='#38A287'
					cx='255.999'
					cy='130.308'
					r='32.681'
				>
					<animateTransform
						attributeName='transform'
						attributeType='XML'
						type='rotate'
						from='0 256 130'
						to='360 256 130'
						dur='2s'
						repeatCount='indefinite'
					></animateTransform>
				</circle>
			</svg>
			<div className='flex flex-col items-center'>
				<span>Wind Speed</span>
				<span>{Math.round(speed * 3.6)} km/h</span>
			</div>
			<div className='flex flex-col items-center'>
				<span>Direction</span>
				<Compass className='w-5 h-5' />
				<span>{deg}°</span>
			</div>
		</div>
	);
};

const WeatherLoadingSkeleton = () => {
	return (
		<div className='grid md:grid-cols-2 auto-rows-auto grid-cols-1 grid-flow-row justify-center items-center min-h-[100px] gap-5'>
			{Array(4)
				.fill(null)
				.map((_, idx) => (
					<WeatherTile key={idx}>
						<Skeleton className='w-full h-[184px]' />
					</WeatherTile>
				))}
		</div>
	);
};

export default Weather;
