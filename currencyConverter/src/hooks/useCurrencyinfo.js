import { useEffect, useState} from "react";

function useCurrencyInfo(currency){ //custom hook | data-fetching hook 
// that grabs the latest exchange rates for a given currency
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.min.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency])) //setData is asynchronous
            console.log(data);
    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo


// React doesn't update state synchronously — 
// it schedules a re-render. So by the time that 
// console.log runs, data still holds its previous value. 