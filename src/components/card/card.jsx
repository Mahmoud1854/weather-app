// ICONS
import { IoMdSunny } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { LuGauge } from "react-icons/lu";
import { FaWind } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";

// ICONS
// EXTERNAL LIBRARIES
import axios from "axios";
// EXTERNAL LIBRARIES
// HOOKS
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// HOOKS


let cancelAxios = null;
export default function Card() {


    const { t, i18n } = useTranslation();
    const [weather , setWeather] = useState({
      temp: null,
      windSpeed:null,
      humidity: null,
      pressure: null
     })
     const [units , setUnits] = useState({
      temp: "",
      
     })
    // section of the useEffect (API req)
    useEffect(() =>{
     i18n.changeLanguage("ar");
      
  axios.get("https://api.open-meteo.com/v1/forecast", {
    cancelToken: new axios.CancelToken((c) =>{
      cancelAxios = c;
    }),
    params: {
      
      latitude: 30.0625,
      longitude: 31.25,
       current: "temperature_2m,relative_humidity_2m,apparent_temperature,pressure_msl,wind_speed_10m,weather_code",
      timezone: "Africa/Cairo",
       
    },
    
     
    
  })
  .then((response) => {
   
      setWeather({
      temp: response.data.current.temperature_2m,
      humidity: response.data.current.relative_humidity_2m,
      pressure: response.data.current.pressure_msl,
      windSpeed: response.data.current.wind_speed_10m,
   });
    
   setUnits({
      temp: response.data.current_units.temperature_2m,
  
   });
  })
  .catch((error) => {
    console.error(error);
  })

    return () =>{
      cancelAxios()
    }
    },[] )
   
  return (
    // card section
    <section id="cardSection" className="flex justify-center items-center mt-12">
      {/* card dev */}
      <div className="lg:w-full lg:max-w-4xl w-[95%]  min-h-120 md:w-[90%] bg-[#102034] rounded-2xl" id="card">
      {/* the div the header of the card */}
      <div className=" flex  items-start justify-between " id="headerDiv">
      {/* dev of the title */}
            <div id="devOfTheTitle" className="flex flex-col gap-2 mt-10 px-7">
              {/* first section of this div */}
              <div className="flex gap-2">
                <IoLocationOutline className="text-[#89CEFF] text-4xl font-bold "/>
                  <h1 className="text-4xl text-[#ffffff] font-ibm font-bold">{t("cairo")}</h1>
              </div>
              <hr className="bg-white h-1"/>
              {/* date section of this div */}
              <div className="flex">
                <h2 className="text-white font-ibm font-bold lg:text-xl text-lg">{t("date")}</h2>
              </div>
              {/* hr */}
              
                  {/* second section of this div */}
                  <div className="flex gap-2 mt-5">
                    {/* temp div */}
                    <div>
                    <h1 className="text-white font-ibm font-bold lg:text-7xl md:text-6xl text-5xl">{weather.temp} {units.temp}</h1>
                   </div>
                 
                  </div>
            </div>
            {/* the div the of the icon of the sun */}
            <div id="sunIcon" className="bg-[#3e495df1] mt-8 mx-8 w-28 h-28 sm:w-35 sm:h-35 rounded-2xl flex items-center justify-center">
              <IoMdSunny className="text-7xl text-[#89CEFF] font-bold"/>
            </div>
            </div>
            {/* closing the div of the header card ================= */}
           
            {/* the div of the additional card like ["humidity" , "wind speed" , "pressure"] */}
            <div className="flex flex-col gap-4 mb-5 sm:gap-2 sm:flex-row justify-between items-center px-8 mt-10">
              {/* pressure div */}
              <div className="w-full sm:w-52 h-20 rounded-xl bg-[#031427] flex justify-center items-center gap-5">
                {/* icon div */}
                  <div className="bg-[#102034] w-10 h-10 flex flex-col justify-center items-center">
                    <LuGauge  className="cursor-pointer text-3xl text-[#89CEFF]"/>
                  </div>
                  {/* pressure text */}
                  <div>
                   <h2 className=" font-ibm text-xl text-white">{t("pressure")}</h2>
                    <h1 className="font-bold text-white font-ibm text-2xl">{weather.pressure} hPa</h1>
                  </div>
              </div>

              {/* humidity div */}
              <div className="w-full sm:w-52 h-20 rounded-xl bg-[#031427] flex justify-center items-center gap-8">
                {/* icon div */}
                  <div className="bg-[#102034] w-10 h-10 flex flex-col justify-center items-center">
                    <IoWaterOutline  className="cursor-pointer text-3xl text-[#89CEFF]"/>
                  </div>
                  {/* humidity text */}
                  <div>
                   <h2 className=" font-ibm text-xl text-white">{t("humidity")}</h2>
                    <h1 className="font-bold text-white font-ibm text-2xl">{weather.humidity} %</h1>
                  </div>
              </div>
              {/* wind speed div */}
              <div className="w-full sm:w-52 h-20 rounded-xl bg-[#031427] flex justify-center items-center gap-5">
                {/* icon div */}
                  <div className="bg-[#102034] w-15 h-12 flex flex-col justify-center items-center">
                    <FaWind  className="cursor-pointer text-4xl text-[#89CEFF]"/>
                  </div>
                  {/* wind text */}
                  <div>
                    <h2 className=" font-ibm text-xl text-white">{t("windSpeed")}</h2>
                    <h1 className="font-bold text-white font-ibm text-2xl">{weather.windSpeed} {t("windSpeedUnit")}</h1>
                  </div>
              </div>
            </div>
      </div>
    </section>
  )
}
