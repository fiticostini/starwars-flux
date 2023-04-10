const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: "Octavio",
      algo: "agregado",
      lastName: "Lara",
      todoList: ["Tarea de Prueba"],
      personajesSwapi: [],
      planetasSwapi: [],
      favorites: [],
    },
    actions: {
      funcionDemo: () => console.log("me ejecuto en el flux"),

      fetchCharacters: async () => {
        const store = getStore(); //traigo valores del store a mi funcion
        const localCaracters = localStorage.getItem("character")
        if (localCaracters) {
          setStore({...store, personajesSwapi: JSON.parse(localCaracters) })
          return
        }
        let caracterDetails = []
        for (let index = 1; index <= 10; index++) {
          try {
            const response = await fetch(`https://www.swapi.tech/api/people/${index}`);
            if (response.ok) {  //validamos si fue correcto
              const data = await response.json();  //traducimos a js
              console.log(data);
              caracterDetails.push(data.result)
              setStore({...store, personajesSwapi: caracterDetails})
              localStorage.setItem("character", JSON.stringify (caracterDetails))
            }
          } catch (error) {
            console.log(error);
          }
        }
        
      },

      fetchPlanets: async () => {
        const store = getStore(); //traigo valores del store a mi funcion
        const localPlanets = localStorage.getItem("planet")
        if (localPlanets) {
          setStore({...store, planetasSwapi: JSON.parse(localPlanets) })
          return
        }
        let planetDetails = []
        for (let index = 2; index <= 11; index++) {
          try {
            const response = await fetch(`https://www.swapi.tech/api/planets/${index}`);
            if (response.ok) {  //validamos si fue correcto
              const data = await response.json();  //traducimos a js
              planetDetails.push(data.result)
              setStore({ ...store, planetasSwapi: planetDetails});
              localStorage.setItem("planet", JSON.stringify (planetDetails))
            }
          } catch (error) {
            console.log(error);
          }
        }
      },

      addFavorite: (item) => {
        const store = getStore();
        const favorites = store.favorites;
        const exists = favorites.find((favorito) => favorito === item);
        console.log(exists);
        if (exists) {
          const filteredFavorites = favorites.filter(
            (favorito) => item !== favorito
          );
          setStore({ ...store, favorites: filteredFavorites });
          return;
        }
        const newFavorites = [...favorites, item];
        setStore({ ...store, favorites: newFavorites });
        console.log("estoy en favoritos", newFavorites);
      },

    },
  };
};



export default getState;
