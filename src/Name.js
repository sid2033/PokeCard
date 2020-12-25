import React, {useEffect, useState} from "react";
import Card from "./Card";
import "./MainStyle.css";
import { useHistory, withRouter, Redirect } from "react-router-dom";

const Name = () => {

    let history = useHistory();

    const [cards, setCards] = useState({cards: [], error: false});
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("Bulbasaur");

    useEffect(() => {
        getCards();
    },[query] );

    const getCards = async () => {
        const response = await fetch (`https://api.pokemontcg.io/v1/cards?name=${query}`);
        const data = await response.json();
        if (data.cards.length === 0) {
            setCards({cards: [], error: true});
        }
        else {
            setCards({cards: data.cards, error: false});
        }
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

    const menuRet = () => {
        history.push("/");
    }

    return (
        <div className = "Name">
            <br></br>
            <h1 id = "main-heading">Search By Name</h1>
            <form className = "search-name" onSubmit = {getSearch}>
                <input type="text" className = "search-bar" value = {search} onChange = {updateSearch} placeholder = "Enter Pokemon Name"></input>
                <button className = "search-button" type = "submit">Search</button>
                <button className = "menu-button" onClick = {menuRet}>Main Menu</button>
            </form>
            <div className = "Cards">
                {
                !cards.error ? 
                cards.cards.map(card => {
                    return (
                        <Card
                            pName = {card.name}
                            cID = {card.id}
                            imgURL = {card.imageUrl}
                        />
                    );    
                }) 
                :
                <h1>Invalid Pokemon Name - Please Re-Enter</h1>
                }
            </div>
        </div>
    );
}

export default Name;