import { Card, Button } from "react-bootstrap";
import { useState } from "react";

const RecipeItem = ({ recipe }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      bg="light"
      border="secondary"
      className="mx-4 my-3"
      style={{ width: "18rem" }}
    >
      <Card.Body>
        <Card.Title>{recipe.name}</Card.Title>
        <Card.Text>{recipe.description}</Card.Text>
        <Button onClick={() => setIsOpen(true)} variant="primary">
          View Recipe
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeItem;
