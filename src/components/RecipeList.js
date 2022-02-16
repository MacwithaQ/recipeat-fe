import recipesStore from "../stores/recipesStore";
import { observer } from "mobx-react";
import RecipeItem from "./RecipeItem";
import { Button, Container, Row } from "react-bootstrap";
import { useState } from "react";
import RecipeForm from "./RecipeForm";

const RecipeList = () => {
  const recipe = recipesStore.recipes.map((recipe) => (
    <RecipeItem key={recipe.id} recipe={recipe} />
  ));

  const [recipeFormIsOpen, setRecipeFormIsOpen] = useState(false);
  return (
    <div>
      <Container className="mt-5 " fluid="md">
        <RecipeForm
          recipeFormIsOpen={recipeFormIsOpen}
          setRecipeFormIsOpen={setRecipeFormIsOpen}
        />
        <Button
          onClick={() => {
            setRecipeFormIsOpen(true);
          }}
        >
          hello
        </Button>
        <Row>{recipe}</Row>
      </Container>
    </div>
  );
};

export default observer(RecipeList);
