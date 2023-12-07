import React,{useState, useEffect} from "react";

const Basics = () => {

    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [bronze, setBronze] = useState(0);


    useEffect(()=>{
        document.title = `Gold: ${gold}, Silver: ${silver}, Bronze: ${bronze}`
    },[silver])

       


    return(
        <div>
            <h1>Basics</h1>
            <h2>Gold: {gold}, Silver: {silver}, Bronze: {bronze}</h2>

            <button onClick={() => setGold(gold + 1)}>Gold</button>
            <button onClick={() => setSilver(silver + 1)}>Silver</button>
            <button onClick={() => setBronze(bronze + 1)}>Bronze</button>
        </div>
    )
}

export default Basics;