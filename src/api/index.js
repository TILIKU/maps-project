import axios from "axios";





export const getPlacesData = async (type ,ne, sw) => {
    try{
        const {data:{ data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
              },
              headers: {
                'x-rapidapi-key': "4b92161cd1msh6bbab11576085fdp1286dejsn9772236c7145",
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              },
            });
            console.log(data)
        return data;
    } catch (error){
        console.log(error)
    }
}