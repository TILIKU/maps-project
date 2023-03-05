import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary"



export const getPlacesData = async (ne, sw) => {
    try{
        const {data:{ data }} = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
              },
              headers: {
                'x-rapidapi-key': "78d2ec1054mshf6918d64acd6b26p19ed54jsnf4da8468ddf7",
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              },
            });
        return data;
    } catch (error){
        console.log(error)
    }
}