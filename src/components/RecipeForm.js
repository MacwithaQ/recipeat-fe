import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { observer } from "mobx-react";
import recipeStore from "../stores/recipesStore";

const RecipeForm = ({ recipeIsOpen, setRecipeIsOpen }) => {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    image: "",
    description: "",
    ingredients: "",
    category: "",
  });
  const handleChange = (event) => {
    setNewRecipe({ ...newRecipe, [event.target.name]: event.target.value });
  };
  const handleImage = (event) => {
    setNewRecipe({ ...newRecipe, image: event.target.files[0] });
  };
  const handleClose = () => {
    setRecipeIsOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    recipeStore.addRecipe(newRecipe);
  };

  return (
    <>
      <Modal show={recipeIsOpen} onHide={() => setRecipeIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add new recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter recipe name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                placeholder="Enter recipe name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImage">
              <Form.Label>image</Form.Label>
              <Form.Control name="image" type="file" onChange={handleImage} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formIngredient">
              <Form.Label>ingredients</Form.Label>
              <Form.Select
                onChange={handleChange}
                name="ingredient"
                id="ingredientSelect"
              >
                <option value="silver">bai6'</option>
                <option value="gold">be6a6</option>
                <option value="platinum">be9al</option>
                <option value="Diamond">baq9am</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMembership">
              <Form.Label>Available books</Form.Label>
              <Form.Select
                onChange={handleChange}
                name="available"
                id="availableBook"
              ></Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default observer(RecipeForm);
