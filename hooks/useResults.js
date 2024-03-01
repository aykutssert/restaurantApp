import { useEffect, useState } from "react"
import businessApi from "../api/yelp"

export default function useResult(){
    const [result,setResult] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');
    const searchApi = async(searchTerm)=>{
        try{

            const response = await businessApi.get('/search',
            {
                params:{
                    limit:50,
                    term:searchTerm,
                    location:'Istanbul'
                },
            });
            setResult(response.data.businesses);
            setErrorMessage('')
        }catch(error){
            setErrorMessage('Connection Error')
        }
    }


    useEffect(()=>{
        searchApi('Toast')
    },[])

    return [searchApi,result,errorMessage];
}
