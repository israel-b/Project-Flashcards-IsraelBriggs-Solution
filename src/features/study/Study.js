import React, { useEffect, useState } from "react";
import { readDeck } from "../../utils/api";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import NotEnoughCards from "./NotEnoughCards";
import NavBreadcrumb from "../../Layout/NavBreadcrumb";

function Study() {
    const [deck, setDeck] = useState({});
    const [cardSlot, setCardSlot] = useState(0)
    const [flipped, setFlipped] = useState(false)
    const { deckId } = useParams();
    const history = useHistory();

    useEffect(async () => {
        const studyDeck = await readDeck(deckId)
        setDeck(studyDeck);
    }, [deckId]);

    const nextCard = () => {
        if (cardSlot < deck.cards.length - 1) {
            setCardSlot(cardSlot + 1);
            setFlipped(false);
        } else {
            if(window.confirm("Restart cards?\n Click cancel to return to the home page.")) {
                history.go(0);
            } else {
                history.push("/");
            }
        }
    }

    if (deck.cards){
        return (
            <>
                <NavBreadcrumb currentNav={deck.name} subNav={"Study"} />
                <h1>Study: {deck.name}</h1>
                <div className="container border rounded">
                    {deck.cards.length < 3 
                    ? <NotEnoughCards count={deck.cards.length} deckId={deck.id} />
                    : <div>
                        <h4>Card {cardSlot + 1} of {deck.cards.length}</h4>
                        {!flipped 
                        ?<div>
                            <p>{deck.cards[cardSlot].front}</p>
                          </div> 
                        : <div>
                            <p>{deck.cards[cardSlot].back}</p>
                        </div>
                        }
                        <p><button className="btn btn-secondary" onClick={() => setFlipped(!flipped)}>Flip</button> {flipped && <button className="btn btn-success" onClick={nextCard}>Next</button>}</p>
                      </div>}
                    
                </div>
            </>
        )
    }
    return "Loading...";
  
}

export default Study;