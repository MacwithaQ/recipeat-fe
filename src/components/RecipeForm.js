import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { observer } from "mobx-react";
import recipeStore from "../stores/recipesStore";

const RecipeForm = ({ recipeFormIsOpen, setRecipeFormIsOpen }) => {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    image: "",
    description: "",
    ingredients: "",
    category: "",
  });
  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setNewRecipe({ ...newRecipe, image: e.target.files[0] });
  };
  const handleClose = () => {
    setRecipeFormIsOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    recipeStore.addRecipe(newRecipe);
  };

  return (
    <>
      <Modal show={recipeFormIsOpen} onHide={() => setRecipeFormIsOpen(false)}>
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
                <option value="4">bai6'</option>
                <option value="3">be6a6</option>
                <option value="2">be9al</option>
                <option value="1">baq9am</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formIngredient">
              <Form.Label>category</Form.Label>
              <Form.Select
                onChange={handleChange}
                name="category"
                id="categorySelect"
              >
                <option value="1">hindi'</option>
                <option value="2">ee 6ali</option>
                <option value="3">as bani</option>
                <option value="4">faransi</option>
              </Form.Select>
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
