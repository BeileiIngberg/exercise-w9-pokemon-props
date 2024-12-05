/*
Using the data.json you will create a list of pokemons.
We've created the necessary components for you, now it's
up to you to pass the props properly (😅) to these
components. Begin with the Pokemon's names, and continue on
with their types. Don't forget the key! Read more here:
https://reactjs.org/docs/lists-and-keys.html
*/

/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */

import { Pokemon } from "./components/Pokemon.jsx";
import { Type } from "./components/Type.jsx";
import { Weaknesses } from "./components/Weaknesses.jsx";
import { pokemons } from './data.json';

export const App = () => {
  return (
    <div className="App">
      <p>Pokemon list</p>
      {pokemons.map((pokemon) => {
        const { id, name, types, weaknesses } = pokemon;
        return (
          <div key={id}>
            <Pokemon name={name} /> 
            <Type types={types} />
            <Weaknesses weaknesses={weaknesses} />
            <br></br>
          </div>
        );
      })}
    </div>
  );
}