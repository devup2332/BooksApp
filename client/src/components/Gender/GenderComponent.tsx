import React from 'react';
import useGetGenres from "../../hooks/genre.hook";

const GenderComponent = () => {

    const { data: genders} =  useGetGenres('http://localhost:8000/api/genres');
    console.log(genders);

    return (
        <ul className="home-page-container-genders scroll"> 
          {
            genders.map(({id, name}) => (
              <li className="gender-item" key={id}>{name}</li>
            ))
          }
        </ul>
    )
}

export default GenderComponent
