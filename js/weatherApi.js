// This file contains connection to Yahoo Weather API, and search & submit btn

const getWeather = async (searchCity) => {
	const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=' + searchCity;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '26d9af217amshf1426bfab596673p133723jsn4253fcdfdb0d',
			'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
		}
	};
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		// console.log(result);

		
		// Integrating API to Frontend
		// main-card
		city.innerHTML = result['location']['city'] + ",";
		city2.innerHTML = result['location']['city'];
		country.innerHTML = result['location']['country'];
		weatherDescription.innerHTML = result['current_observation']['condition']['text']
		mainTemperature.innerHTML = result['current_observation']['condition']['temperature'] + "&deg;F"


		//wind
		chill.innerHTML = result['current_observation']['wind']['chill']
		direction.innerHTML = result['current_observation']['wind']['direction']
		speed.innerHTML = result['current_observation']['wind']['speed']+"mph"

		//atmosphere
		humidity.innerHTML = result['current_observation']['atmosphere']['humidity']+"%"
		visibility.innerHTML = result['current_observation']['atmosphere']['visibility']+"miles"
		pressure.innerHTML = result['current_observation']['atmosphere']['pressure']+"inches(in Hg)"

		//astronomy
		sunrise.innerHTML = result['current_observation']['astronomy']['sunrise']
		sunset.innerHTML = result['current_observation']['astronomy']['sunset']
		timezone.innerHTML = result['location']['timezone_id']

		// 7 day forecast table
		dailyForecastDay1.innerHTML = result['forecasts'][0]['day'];
		dailyForecastDay2.innerHTML = result['forecasts'][1]['day'];
		dailyForecastDay3.innerHTML = result['forecasts'][2]['day'];
		dailyForecastDay4.innerHTML = result['forecasts'][3]['day'];
		dailyForecastDay5.innerHTML = result['forecasts'][4]['day'];
		dailyForecastDay6.innerHTML = result['forecasts'][5]['day'];
		dailyForecastDay7.innerHTML = result['forecasts'][6]['day'];

		dailyForecastText1.innerHTML = result['forecasts'][0]['text'];
		dailyForecastText2.innerHTML = result['forecasts'][1]['text'];
		dailyForecastText3.innerHTML = result['forecasts'][2]['text'];
		dailyForecastText4.innerHTML = result['forecasts'][3]['text'];
		dailyForecastText5.innerHTML = result['forecasts'][4]['text'];
		dailyForecastText6.innerHTML = result['forecasts'][5]['text'];
		dailyForecastText7.innerHTML = result['forecasts'][6]['text'];

		dailyForecastHigh1.innerHTML = result['forecasts'][0]['high'] + "&deg;F";
		dailyForecastHigh2.innerHTML = result['forecasts'][1]['high'] + "&deg;F";
		dailyForecastHigh3.innerHTML = result['forecasts'][2]['high'] + "&deg;F";
		dailyForecastHigh4.innerHTML = result['forecasts'][3]['high'] + "&deg;F";
		dailyForecastHigh5.innerHTML = result['forecasts'][4]['high'] + "&deg;F";
		dailyForecastHigh6.innerHTML = result['forecasts'][5]['high'] + "&deg;F";
		dailyForecastHigh7.innerHTML = result['forecasts'][6]['high'] + "&deg;F";

		dailyForecastLow1.innerHTML = result['forecasts'][0]['low'] + "&deg;F";
		dailyForecastLow2.innerHTML = result['forecasts'][1]['low'] + "&deg;F";
		dailyForecastLow3.innerHTML = result['forecasts'][2]['low'] + "&deg;F";
		dailyForecastLow4.innerHTML = result['forecasts'][3]['low'] + "&deg;F";
		dailyForecastLow5.innerHTML = result['forecasts'][4]['low'] + "&deg;F";
		dailyForecastLow6.innerHTML = result['forecasts'][5]['low'] + "&deg;F";
		dailyForecastLow7.innerHTML = result['forecasts'][6]['low'] + "&deg;F";

	} catch (error) {
		console.error(error);
	}
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(searchCity.value)
})
getWeather('Mumbai')

newYork.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather('New York')
})
budapest.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather('Budapest')
})
sydney.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather('Sydney')
})
capeTown.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather('Cape Town')
})
rioDeJanerio.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather('Rio de Janerio')
})