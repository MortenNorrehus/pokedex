export const fetchAll = async () => {
  const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon/`);

  if (!apiRes.ok) {
    throw new Error("API not working");
  }

  return apiRes.json();
};

export const fetchPokemon = async ({ queryKey }) => {
  const [_key, id] = queryKey;

  const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

  if (!apiRes.ok) {
    throw new Error("API not working");
  }

  return apiRes.json();
};

export const fetchDescription = async ({ queryKey }) => {
  const [_key, id] = queryKey;
  const apiRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}/`
  );

  if (!apiRes.ok) {
    throw new Error("API not working");
  }

  return apiRes.json();
};
