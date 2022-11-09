import { useSelector } from "react-redux";
import "./homePage.css";

const HomePage = () => {
  const recipeData = useSelector((state) => state.fetch);
  // console.log(recipeData);

  return (
    <div className="homePageContainer">
      {recipeData &&
        recipeData.data &&
        recipeData.data.data &&
        recipeData.data.data.map((ele, i) => {
          return (
            <div className="cardContainer">
              <div className="title">{ele.title}</div>
              <div className="ingredients">
                <label className="ingredientsLabel">Ingrdients: </label>
                {ele.ingredients.split("\n")}
              </div>
              <div className="instructions">{ele.instructions}</div>
              <div className="servings">
                <label htmlFor="">Servings: </label>
                {ele.servings}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
