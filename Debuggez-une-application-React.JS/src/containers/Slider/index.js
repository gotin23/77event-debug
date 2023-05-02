import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  console.log(data);
  const [index, setIndex] = useState(0);
  // modification de la fonction de trie
  const byDateDesc = data?.focus.sort((evtA, evtB) => (new Date(evtA.date) < new Date(evtB.date) ? 1 : -1));
  // Modification de la fonction next card avec ajout du -1 pour prendre en compte l index qui commence a 0
  const nextCard = () => {
    setTimeout(() => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0), 5000);
  };

  console.log(byDateDesc);
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <>
          <div key={event.title} className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}>
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input key={`${event.id}`} type="radio" name="radio-button" checked={idx === radioIdx} />
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Slider;