import {useState, UseEffect, useEffect} from 'react'


//custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    //loading 
    const [loading, setLoading]= useState(false);

    //tratando erros
    const[error, setError] = useState(null);


    //desafio 6: delete 
    const[id, setId] = useState(null);


    const httpConfig = (data, method) =>{
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method);
        }else if (method === "DELETE"){
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
            })
            setMethod(method);
            setId(data);
        }
    }

    useEffect(() =>{
        const fetchData = async () => {
            
            //loading
            setLoading(true);

            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);    
            } catch (error) {
                console.log(error.message);
                setError("Houve algum erro!")
            }

            setLoading(false);
        }

        fetchData();

    }, [url, callFetch])

    //refatorando post

    useEffect(() =>{
        const hhtpRequest = async () =>{
            if(method === "POST"){
                let fetchOptions = [url, config];
    
                const res = await fetch(...fetchOptions);
                const json = await res.json();

            }else if (method === "DELETE"){
                const deleteUrl = `${url}/${id}`;
    
                const res = await fetch(deleteUrl, config);
                var json = await res.json();
    
            }
            setCallFetch(json);
        }
        hhtpRequest();
    },[config, method, url])
    return{data, httpConfig, loading, error};
}