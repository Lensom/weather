import React from "react";


const Weather = props => (
		<div className="weather_info">
	 	 { 
	 	 	props.city && props.country && <p className="weather__key">Город:
	 	 	 <span className="weather__value"> { props.city}, { props.country}</span>
	 	 	 </p>
	 	 }
		 { 
		 	props.temperature && <p className="weather__key">Температура:
		 	 <span className="weather__value"> { props.temperature}</span>
		 	 </p>
		 }
	 	 { 
	 	 	props.humidity && <p className="weather__key">Влажность:
	 	 	 <span className="weather__value"> { props.humidity}%</span>
	 	 	 </p>
	 	 }
		 { 
		 	props.description && <p className="weather__key">Описание:
		 	 <span className="weather__value"> { props.description}</span>
		 	 </p>
		 }
		 { 
		 	props.error && <p className="weather__error">Внимание!
		 	 { props.error}</p>
		 }
		 </div>
);


// class Weather extends React.Component {
// 	render() {
// 		return(
// 			<div>
// 			{ this.props.city && this.props.country && <p>Город: { this.props.city}, { this.props.country}</p>}
// 			{this.props.temperature && <p>Температура: { this.props.temperature}</p>}
// 			{this.props.humidity && <p>Влажность: { this.props.humidity}%</p>}
// 			{this.props.description && <p>Описание: { this.props.description}</p>}
// 			{this.props.error && <p>Внимание! { this.props.error}</p>}
// 			</div>
// 		);
// 	}
// }

export default Weather;