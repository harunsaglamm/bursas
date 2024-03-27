import React, { useEffect, useState } from 'react'



function Wifi() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("data/wifi.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            })
    }, []);

    return (
        <>
            
            
            <br />
            <div className='row row-cols-1 row-cols-md-4 g-4' data-bs-theme="dark">
                {data.map(item => (
                    <div key={item.id} className="card">
                        
                       
                           
                       
                           <div className='card-body'>
                           
                           <h6> {item.name}</h6>
                           
                           </div>
                        
                       
                    </div>
                ))}
            </div>

        </>
    )
}

export default Wifi