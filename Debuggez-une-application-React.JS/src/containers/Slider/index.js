import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();

  const [index, setIndex] = useState(0);
  // modification de la fonction de tri
  const byDateDesc = data?.focus.sort((evtA, evtB) => (new Date(evtA.date) < new Date(evtB.date) ? -1 : 1));
  // Modification de la fonction next card avec ajout du -1 pour prendre en compte l index qui commence a 0
  // Ajout d'une verification a la function nextcard
  const nextCard = () => {
    if (byDateDesc) {
      setTimeout(() => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0), 5000);
    }
  };
  // const changePicByDots = (idx) => {
  //   console.log(idx);
  //   setIndex(idx);
  // };
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        // ajout d'une div pour une key
        <div key={event.title}>
          <div className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}>
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                {/* modification de la structure de de la variable month dans getMonth() */}
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {/* correction du bug du bullet point avec la key et ajout de readonly pour eviter une erreur */}
              {byDateDesc.map((_, radioIdx) => (
                <input key={`${radioIdx * 3}`} type="radio" name="radio-button" checked={radioIdx === index} readOnly />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
