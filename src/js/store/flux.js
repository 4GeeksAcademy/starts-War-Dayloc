import axios from "axios";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},
    actions: {
      getDetallePersonaje: async (id) => {
        await fetch(`https://www.swapi.tech/api/people/${id}`)
          .then((res) => res.json())
          .then((data) => {
            const { result } = data;
            const prevPeopleStore = getStore().people || [];
            setStore({
              people: [
                ...prevPeopleStore,
                {
                  properties: result.properties,
                  description: result.description,
                  uid: result.uid,
                },
              ],
            });
          })
          .catch((err) => console.error(err));
      },

      getPersonajes: async () => {
        await fetch("https://www.swapi.tech/api/people/")
          .then((res) => res.json())
          .then((data) => {
            const { results } = data;
            const actions = getActions();
            const promises = results.map((item) =>
              actions.getDetallePersonaje(item.uid)
            );

            return Promise.all(promises);
          })
          .catch((err) => console.error(err));
      },
    },
  };
};

export default getState;
