// import React, { useState } from "react";
// import IngredientsStore from ".././stores/ingredientsStore";

// function IngredientCreate({ query }) {
//   const [create, setCreate] = useState(false);
//   const [newIngredient, setNewIngredient] = useState({
//     name: "",
//     image: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setNewIngredient({ ...newIngredient, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     categoriesStore.createIngredient(newIngredient);
//     setCreate(!create);
//   };

//   const handleClick = (event) => {
//     event.preventDefault();
//     setCreate(!create);
//   };

//   return (
//     <div>
//       <div className="controls">
//         <button type="button" class="btn btn-dark" onClick={handleClick}>
//           Create Ingredient
//         </button>
//       </div>
//       {create && (
//         <div class="createForm">
//           <form class="formitself" onSubmit={handleSubmit}>
//             <div class="form-group">
//               <label>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 class="form-control"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//                 placeholder="Enter Ingredient name"
//                 onChange={handleChange}
//               />
//             </div>
//             <div class="form-check"></div>
//             <div class="form-group">
//               <label>Image URL</label>
//               <input
//                 type="url"
//                 name="image"
//                 class="form-control"
//                 id="exampleInputPassword1"
//                 placeholder="Enter image URL"
//                 onChange={handleChange}
//               />
//             </div>
//             <div class="form-check"></div>
//             <div class="form-group">
//               <label for="exampleInputPassword1">Short Description</label>
//               <input
//                 type="text"
//                 name="description"
//                 class="form-control"
//                 id="exampleInputPassword1"
//                 placeholder="Enter a short description"
//                 onChange={handleChange}
//               />
//             </div>
//             <div class="form-check"></div>
//             <div className="submitbutton">
//               <button type="submit" class="btn btn-dark">
//                 ✔
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }
// export default IngredientCreate;
