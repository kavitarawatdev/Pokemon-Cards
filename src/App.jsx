import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css"
import { AppLayout } from "./layout/AppLayout";
import { Cards } from "./pages/Cards";
import { About } from "./pages/About";
import { Contact, contactData } from "./pages/Contact";
import { Pokemon } from "./UI/Pokemon";
import { Error } from "./UI/Error";
import { getPokemonsData } from "./api/PokemonsData";
import { getPokemonDetails } from "./api/GetPokemon";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Cards />,
          loader: getPokemonsData,
        },
        {
          path: "/:pokemon",
          element: <Pokemon />,
          loader: getPokemonDetails,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
          action:contactData,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
