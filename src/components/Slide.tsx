import { useQuery } from "@tanstack/react-query";
import { fetchPokemon, fetchDescription } from "./fetchPokemon";
import { bgColors, Names, kanjiColors } from "./Colors";
import { formatOrder } from "./SliderFunctions";

export const Slide = ({ id }) => {
  const result = useQuery(["pokemon", id], fetchPokemon);
  const description = useQuery(["description", id], fetchDescription);

  if (result.isLoading) {
    return <h1>Henter</h1>;
  }

  if (description.isLoading) {
    return <h1>Henter</h1>;
  }

  const getDescription = () => {
    const text1 = description.data.flavor_text_entries[0].flavor_text;
    const text2 = description.data.flavor_text_entries[5].flavor_text;
    return text1 + " " + text2;
  };

  const capitalize = (string: string) => {
    const firstLetter = string.charAt(0).toUpperCase();
    return firstLetter + string.slice(1);
  };

  const pokemon = {
    name: capitalize(result.data.name),
    order: formatOrder(result.data.id),
    image: result.data.sprites.other["official-artwork"].front_default,
    description: getDescription(),
    color: bgColors[result.data.types[0].type.name],
    kanji: kanjiColors[result.data.types[0].type.name],
  };

  //document.querySelector("body").style.backgroundColor = pokemon.color;

  return (
    <div
      className="h-screen w-screen"
      style={{ backgroundColor: pokemon.color }}
    >
      <div className="max-w-[1400px] m-auto p-10 grid h-full grid-rows-layout">
        <div className="flex justify-between box-border  relative z-10">
          <div className="text-white text-4xl flex flex-col">
            <span className="text-2xl mb-2 font-medium">#{pokemon.order}</span>
            <h1 className="font-medium">{pokemon.name}</h1>
          </div>
        </div>
        <div className="flex top-0 left-0 w-full h-full text-white">
          <div className="flex z-10 w-full m-auto relative pt-20 flex-col lg:flex-row">
            <div
              className="kanji top-[35%]  md:top-0 left-0 transform -translate-y-1/2 md:translate-x-0 text-black -z-10 absolute lg:text-[14rem] text-5xl font-kanji"
              style={{ color: pokemon.kanji }}
            >
              {Names[pokemon.name]}
            </div>
            <div className="flex-1 flex flex-col pb-32 justify-center">
              Højde Vægt
            </div>
            <div className="lg:flex-2 lg:max-w-full flex-1 md:max-w-[300px] max-w-[200px] m-auto">
              <img className="w-full" src={pokemon.image} />
            </div>
            <div className="flex-1 justify-end flex flex-col pb-32">
              <h3 className="font-medium">Bio</h3>
              <span>{pokemon.description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
