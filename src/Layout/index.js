import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "../features/decks/DeckList";
import { Route, Switch, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Study from "../features/study/Study";
import CreateDeckButton from "../features/decks/CreateDeckButton";
import DeckCreate from "../features/decks/DeckCreate";
import DeckInfo from "../features/decks/DeckInfo";
import { createDeck, deleteCard, deleteDeck, listDecks, updateDeck } from "../utils/api";
import DeckEdit from "../features/decks/DeckEdit";
import CardCreate from "../features/cards/CardCreate";
import CardEdit from "../features/cards/CardEdit";

function Layout() {
  const [decks, setDecks] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function loadDecks() {
      const listOfDecks = await listDecks();
      setDecks(listOfDecks);
    }
    loadDecks();       
  }, [decks])

  // Handles deck creation
  const handleDeckCreate = (newDeck) => {
    createDeck(newDeck).then(() => setDecks((currentDecks) => [...currentDecks, newDeck]));
    history.push("/");
  }

  // Handles deck deletion
  const handleDeckDelete = (deckId) => {
    if(window.confirm("Delete this deck?  You will not be able to recover it.")) {
      deleteDeck(deckId).then(() => {
        setDecks((currentDecks) => currentDecks.filter(
          (deck) => deck.id !== deckId));
          history.push("/");
      })
    }
  }

  const handleDeckEdit = (updatedDeck) => {
    updateDeck(updatedDeck);
  }

  const handleCardDelete = (cardId) => {
    if(window.confirm("Delete this card? You will not be able to recover it")) {
      deleteCard(cardId).then(() => {
        window.location.reload();
      })
    }
  }

  return (
    <>
    <Header />
    <div className="container">
    <Switch>
      <Route exact path="/">
        <CreateDeckButton />
        <DeckList decks={decks} handleDeckDelete={handleDeckDelete} />
      </Route>
      <Route path="/decks/:deckId/study">
        <Study />
      </Route>
      <Route path="/decks/new">
        <DeckCreate handleDeckCreate={handleDeckCreate} decks={decks} />
      </Route>
      <Route exact path="/decks/:deckId">
        <DeckInfo decks={decks} handleDeckDelete={handleDeckDelete} handleCardDelete={handleCardDelete} />
      </Route>
      <Route path="/decks/:deckId/edit">
        <DeckEdit handleDeckEdit={handleDeckEdit}/>
      </Route>
      <Route path="/decks/:deckId/cards/new">
        <CardCreate />
      </Route>
      <Route path="/decks/:deckId/cards/:cardId/edit">
        <CardEdit />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
    </div>
    </>
  )
}

export default Layout;
