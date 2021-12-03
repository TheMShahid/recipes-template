import React from "react";
import CardList from "./components/card-list/card-list.component";

import "./App.css";
import { SearchBox } from "./components/search/search.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: [
        {
          title: "Aunt Teen's Creamy Chocolate Fudge",
          price: "$16",
          image:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4104013.jpg&w=272&h=272&c=sc&poi=face&q=85",
          id: 1,
          descrip:
            "This was my aunt's recipe for fudge, passed down through the family.",
        },
        {
          title: "25 Recipes That Perfect the Cranberry-Orange",
          price: "$19",
          image:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F02%2F16%2F277548-cranberry-orange-curd-tart-kim-2000.jpg&w=272&h=272&c=sc&poi=face&q=85",
          id: 2,
          descrip:
            "Enjoy this dynamic duo in cookies, cakes, breads, and even savory dishes.",
        },
        {
          title: "Food Gift Recipes",
          price: "$15",
          image:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2014%2F11%2F403891_Sugar-Coated-Pecans_Photo-by-SavedByGrace.jpg&w=272&h=272&c=sc&poi=%5B318%2C223%5D&q=85",
          id: 3,
          descrip:
            "Find recipes for homemade holiday food gifts like spice rubs, soup mix, food gifts",
        },
        {
          title: "6 Beef Wellington Recipes for Elegant Special Dinners",
          price: "$25",
          image:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F12%2F12%2F8819721_chef-johns-individual-beef-wellingtons_chef-john-2000.jpg&w=272&h=272&c=sc&poi=face&q=85",
          id: 4,
          descrip:
            "A perfect centerpiece dish for occasions when you want something a bit special.",
        },
        {
          title: "Healthy Holiday Recipes for a Crowd",
          price: "$23",
          image:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F08%2F27%2F273496_festive-olive-and-cheese-appetizer_Jones-2000.jpg&w=272&h=272&c=sc&poi=%5B905%2C980%5D&q=85",
          id: 5,
          descrip:
            "Serve these healthy holiday appetizers, sides, and mains and feel good knowing",
        },
        {
          title: "15 Easy Christmas Cocktails",
          price: "$27",
          image:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2019%2F12%2Fnegroni-cocktail-photo-by-getty-images.jpg&w=272&h=272&c=sc&poi=face&q=85",
          id: 6,
          descrip:
            "Celebrate the holidays with Christmas cocktails that are simple, food friendly,",
        },
        {
          title: "Spinach Pomegranate Salad",
          price: "$10",
          image:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4576767.jpg&w=272&h=272&c=sc&poi=face&q=85",
          id: 7,
          descrip:
            "A very quick and nutritious salad made with pomegranate seeds and feta",
        },
        {
          title: "15 Chicken and Sweet Potato Recipes",
          price: "$13",
          image:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F02%2Fimage-9-2000.jpeg&w=272&h=272&c=sc&poi=face&q=85",
          id: 8,
          descrip:
            "Looking for something to do with chicken and sweet potatoes? Your",
        },
      ],
      searchField: "",
    };
  }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ recipes: users }));
  // }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { recipes, searchField } = this.state;
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Food Recipes</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder="search recipes"
          type="search"
        />
        <CardList recipes={filteredRecipes} />
      </div>
    );
  }
}

export default App;
