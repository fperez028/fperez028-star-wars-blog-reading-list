// Initial global state
export const initialStore = () => {
  return {
    people: [],
    planets: [],
    starships: [],
    isLoading: false,
    error: null
  };
};

// Reducer logic
export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "START_LOADING":
      return { ...store, isLoading: true, error: null };

    case "SET_DATA":
      return {
        ...store,
        people: action.payload.people,
        planets: action.payload.planets,
        starships: action.payload.starships,
        isLoading: false
      };

    case "SET_ERROR":
      return { ...store, error: action.payload, isLoading: false };

    default:
      throw new Error("Unknown action type: " + action.type);
  }
}

// Async fetch logic
export async function initializeData(dispatch) {
  dispatch({ type: "START_LOADING" });

  try {
    const fetchEntity = async (type) => {
      const res = await fetch(`https://www.swapi.tech/api/${type}`);
      const data = await res.json();
      return data.results;
    };

    const [people, planets, starships] = await Promise.all([
      fetchEntity("people"),
      fetchEntity("planets"),
      fetchEntity("starships")
    ]);

    dispatch({
      type: "SET_DATA",
      payload: { people, planets, starships }
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: "SET_ERROR", payload: "Failed to fetch Star Wars data." });
  }
}
