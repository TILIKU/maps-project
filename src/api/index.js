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
              'X-RapidAPI-Key': 'e5285210ccmshd289d44747240c9p1ba7c9jsn6997dbfa4509',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;
    } catch (error){
        console.log(error)
    }
}