// Libraries
import React, {useEffect, useState} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import axios from './axios'
import {UserSchema} from '../../backend/database/dbCards'
// Components
// Icons

export interface ITinderCardsProps {
}

type Direction = "up"|"down"|"left"|"right"

export function swiped (direction: Direction, nameToDelete: string) {
    console.log("removing: " + nameToDelete)
}

export function outOfFrame (name: string) {
    console.log(name + " left the screen!")
}

export default function TinderCards (props: ITinderCardsProps) {
    const [people, setPeople] = useState<Array<UserSchema>>([])

    useEffect(() => {
        async function fetchData() {
            const req:{
                data: Array<UserSchema>
            } = await axios.get('/tinder/cards')
        
            setPeople(req.data)
        }

        fetchData()
    }, [])

    return (
    <div className="tinderCards">
        <div className="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div style={{backgroundImage: `url(${person.imgURL})`}} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
    );
}
