import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary"



export const getPlacesData = async (sw, ne) => {
    try{
        const {data:{ data }} = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
              'X-RapidAPI-Key': '47a5dafdf0msh22f0e2db8d41f6ep16134cjsnf04aba493ac7',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });

        return data;
    } catch (error){
        console.log(error)
    }
}