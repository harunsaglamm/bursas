import React, { useEffect, useState } from 'react'


function Gallery() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("data/picture.json")
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
            <div className=' row  row-cols-1 row-cols-lg-3 g-2' data-bs-theme="dark">
                {data.map(item => (
                    <div key={item.id} className= 'card'> 
                        
                       
                    
                       
                           <div  className="card body" >
                           <img src={item.thumb}  />
                           
                           
                           </div>
                        
                       
                    </div>
                ))}
            </div>

        </>
    )
}

export default Gallery