import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "../features/decks/DeckList";
import data from "../data/db.json";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Study from "../features/study/Study";
import CreateDeckButton from "../features/decks/CreateDeckButton";
import DeckCreate from "../features/decks/DeckCreate";
import DeckInfo from "../features/decks/DeckInfo";
import NavBreadcrumb from "./NavBreadcrumb";
import { listDecks } from "../utils/api";
import DeckEdit from "../features/decks/DeckEdit";
import CardCreate from "../features/cards/CardCreate";

function Layout() {
  //const [decks, setDecks] = useState(data.decks);
  const [decks, setDecks] = useState([]);

  const [cards, setCards] = useState(data.cards);

  useEffect(async () => {
    const listOfDecks = await listDecks();
    setDecks(listOfDecks);
  }, [])

  const createDeck = (newDeck) => {
    setDecks((currentDecks) => [...currentDecks, newDeck,])
  }

  // Handles delete of decks
  const deleteDeck = (indexToDelete) => {
    if(window.confirm("Delete this deck?  You will not be able to recover it.")) {
      setDecks((currentDecks) => currentDecks.filter(
        (deck, index) => index !== indexToDelete)
      );
    }
  }

  const deleteCard = (indexToDelete) => {
    if(window.confirm("Delete this card? You will not be able to recover it")) {
      setCards((currentCards) => currentCards.filter(
        (card, index) => index !== indexToDelete)
      );
    }
  }

  return (
    <>
    <Header />
    <div className="container">
    <Switch>
      <Route exact path="/">
        <CreateDeckButton />
        <DeckList decks={decks} cards={cards} deleteDeck={deleteDeck} />
      </Route>
      <Route path="/decks/:deckId/study">
        <Study decks={decks} cards={cards} />
      </Route>
      <Route path="/decks/new">
        <DeckCreate createDeck={createDeck} decks={decks} />
      </Route>
      <Route exact path="/decks/:deckId">
        <DeckInfo decks={decks} cards={cards} deleteDeck={deleteDeck} deleteCard={deleteCard} />
      </Route>
      <Route path="/decks/:deckId/edit">
        <DeckEdit />
      </Route>
      <Route path="/decks/:deckId/cards/new">
        <CardCreate />
      </Route>
      <Route path="/decks/:deckId/cards/:cardId/edit">
        <p>Edit card</p>
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
    </div>
    </>
  );
}

export default Layout;
