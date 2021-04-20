import React, {useEffect, useState } from 'react'
import './Widgets.scss'

export const Widgets = (props) => {
    const { city, lang } = props
    const [weather, setWeather] = useState({})
    const [timezone, setTimezone] = useState(0)
    const [currentTime, setCurrentTime] = useState({})
    const [intervalId, setIntervalId] = useState(NaN)

    const API_key = '22e1a28195a55f31b975106ea93e2482'

    const getTime = (timezone) => {
        let currentTimeZoneOffsetInHours = new Date().getTimezoneOffset() * 60000
        let currDate = new Date(Date.now() + currentTimeZoneOffsetInHours + (timezone * 1000))
        const year = currDate.getFullYear()
        const month = `0${currDate.getMonth() + 1}`
        const day = `0${currDate.getDate()}`
        const hour = `0${currDate.getHours()}`
        const minute = `0${currDate.getMinutes()}`
        const date = `${day.substr(-2)}.${month.substr(-2)}.${year}`
        const time = `${hour.substr(-2)}:${minute.substr(-2)}`
        setCurrentTime({
            time,
            date
        })
    }

    useEffect( () => {
        async function getWeather() {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&units=metric&appid=${API_key}`)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    const temp = Math.round(data.main.temp)
                    setWeather({
                        city: data.name,
                        temp: `${temp > 0 ? '+' + temp : temp} °C`,
                        description: data.weather[0].description,
                        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                    })
                    setTimezone(data.timezone)
                    const intervalId = setInterval(() => {
                        getTime(data.timezone)
                    }, 5000)
                    setIntervalId(intervalId)
                })
                .catch((error) => {
                    console.log("Error getting weather data: ", error);
                });
            return clearInterval(intervalId)
        }
        getWeather().then()
    }, [city, intervalId, lang])

    useEffect(() => {
        getTime(timezone)
    }, [timezone])

    return (
        <>
            <div className="widget-container weather">
                <span className="weather-city">{weather.city}</span>
                <div className="temperature">
                    <span>{weather.temp}</span>
                    <img className="weather-image" src={weather.icon} alt="Widgets icon" />
                </div>
                <span>{weather.description}</span>
            </div>
            <div className="widget-container">
                <div>{currentTime.time}</div>
                <div>{currentTime.date}</div>
            </div>
        </>
    )
}
