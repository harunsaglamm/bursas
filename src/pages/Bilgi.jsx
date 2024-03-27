import React, { useEffect, useState } from 'react';



const Bilgi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data/camii.json')
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
      });
  }, []);

  return (
    <div className='row row-cols-1  g-2'>
      {data.map(item => (
        
        <div key={item.id} className="card">
          <img src={item.thumb} width='65%' />
          <h2>{item.baslik}</h2>
          <p>{item.about}</p> <br />
          <h5>Ziyaret Saatleri: {item.time}</h5>
          <h4  ><button type="button" onClick={item.adres} className='btn btn-md btn-outline-danger' ><link rel="stylesheet" href="" />{item.adres}</button> </h4>
        </div>
        
      ))}

    </div>
  );
};

export default Bilgi;
