let parent  = document.getElementById("cartList");
let cart = JSON.parse(localStorage.getItem("database"));
console.log("Details" , cart);
	
function showProducts(){
	
	parent.innerHeight = null;
	const { strMealThumb ,  strMeal , idMeal , strCategory , strInstructions } = cart[cart.length - 1][0];	
	parent.innerHTML = `
 	<div class='left1'><img src = "${strMealThumb}"></div>
 	<div class='left2'>
        <span class="namemeal">${strMeal}</span>
 		<table>
 			<tr>
 				<th>Category</th>
 				<td>${strCategory}</td>
 			</tr>
 			<tr>
 				<th>Instructions</th>
 				<td>${strInstructions}</td>
 			</tr>
 		</table>
 	</div>`;
}
showProducts();	