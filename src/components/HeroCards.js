import React, { useEffect, useState } from "react";
import { getAllCharacter } from "../utils/api";

export default function HeroCards() {
  const [characters, setCharacters] = useState([]);

  useEffect(async () => {
    const data = await getAllCharacter();
    console.log("data===", data);
    setCharacters(data.data);
    // return () => {
    //     // cleanup
    // }
  }, []);

  return (
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div className="cards-container">
          {characters.map(char => {
            return (

                <div key={char.id} className="items">
                <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={char.img}
                      alt="Avatar"
                     
                    />
                  </div>
                  <div className="flip-card-back">
                    <h1>{char.name}</h1>
                    <p>{char.nickname}</p>
                    <p>{char.c}</p>
                    <p>{char.status}</p>
                    <p>{char.occupation}</p>

                  </div>
                </div>
              </div>
              </div>
        


             
            );
          })}

         



        </div>





      </div>
    </section>
  );
}
// <div className="cards-container">

// </div>
