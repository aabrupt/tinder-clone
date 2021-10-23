// Libraries
import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
// Components
// Icons

export interface ITinderCardsProps {
}

export interface Person {
    name: string
    url: string
}

type Direction = "up"|"down"|"left"|"right";

export function swiped (direction: Direction, nameToDelete: string) {
    console.log("removing: " + nameToDelete)
}

export function outOfFrame (name: string) {
    console.log(name + " left the screen!")
}

export default function TinderCards (props: ITinderCardsProps) {
    const [people, setPeople] = useState<Array<Person>>([
        {
            name: "Elon Musk",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg"
        },
        {
            name: "Jeff Bezos",
            url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixel.nymag.com%2Fimgs%2Fdaily%2Fintelligencer%2F2019%2F02%2F07%2F07-jeff-bezos.w700.h700.jpg&f=1&nofb=1"
        }
    ]);

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
                    <div style={{backgroundImage: `url(${person.url})`}} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
    );
}
