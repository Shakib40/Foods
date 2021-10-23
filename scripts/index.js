//Latest Meals Start	
const showData = document.getElementById('showMenu');
async function getData(){
		const res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?f=c`);
		const resData = await res.json();
	    console.log("List of Meals" , resData.meals);
		showFood(resData.meals);
		
}
getData();	
function showFood(allfoods){ 
		showData.innerHTML = "";
		allfoods.forEach((news) => {
			const { idMeal, strMealThumb ,  strMeal } = news;
			const NewsEl  = document.createElement('div');
			
			NewsEl.classList.add("news");
			let img = document.createElement('img');
			img.src = strMealThumb;
			let text = document.createElement('b');
			text.innerHTML = strMeal;
		    NewsEl.append(img , text);
			
			NewsEl.addEventListener("click", function() {
				const searchTerm = idMeal;
				if (searchTerm) {
					getLatestFood('https://themealdb.com/api/json/v1/1/lookup.php?i=' + searchTerm);
				}
				
            });
			showData.appendChild(NewsEl);
		});
}
async function getLatestFood(url){
		const res = await fetch(url);
		const resData = await res.json();
		console.log("database" , resData.meals);
        addtoCart(resData.meals);
}
	
if(localStorage.getItem("database") == null){
	localStorage.setItem("database" , JSON.stringify([]));
}

function addtoCart(p){
	
	let cart_products = JSON.parse(localStorage.getItem("database"));
	localStorage.setItem("database" , JSON.stringify(cart_products));
	cart_products.push(p);
	
	localStorage.setItem("database" , JSON.stringify(cart_products));
	
	console.log("Products" , cart_products);
	console.log("Products" , cart_products.length);
	window.location.href = "foods.html";
}
	
//Latest Meals End

	
// List of all Categories Start
//const showData2 = document.getElementById('showMenu2');
//async function getData2(){				
//		const res = await fetch(`https://themealdb.com/api/json/v1/1/list.php?c=list`);
//		const resData = await res.json();
//		ListallCategories(resData.meals);
//}
//getData2();
//function ListallCategories(allfoods){
//	 
//		showData2.innerHTML = "";
//		allfoods.forEach((news) => {
//			const { strCategory } = news;
//			const NewsEl  = document.createElement('div');
//			NewsEl.classList.add("news");
//			
//			let text = document.createElement('b');
//			text.innerHTML = strCategory;
//
//			NewsEl.addEventListener("click", function() {
//				const searchTerm = strCategory;
//				if (searchTerm) {
//					getCategoryFood('https://themealdb.com/api/json/v1/1/filter.php?c=' + searchTerm);
//				}
//				
//            });
//			NewsEl.append(text);
//			showData2.appendChild(NewsEl);
//		});
//}
// List of all Categories End

	
//async function getCategoryFood(url){
//	const res = await fetch(url);
//	const resData = await res.json();
//	console.log("movie" , resData.meals);
//	showCategoryFood(resData.meals);
//}
//	
//const showData4 = document.getElementById('showMenu4');	
//
//function showCategoryFood(allfoods){
//	 
//		showData4.innerHTML = "";
//		allfoods.forEach((news) => {
//			const { strMealThumb ,  strMeal } = news;
//			const NewsEl  = document.createElement('div');
//			
//			NewsEl.classList.add("news");
//			let img = document.createElement('img');
//			img.src = strMealThumb;
//			let text = document.createElement('b');
//			text.innerHTML = strMeal;
//		    NewsEl.append(img , text);
//			showData4.appendChild(NewsEl);
//		});
//}

//	
// ShowMenu 3
//	
//const showData3 = document.getElementById('showMenu3');
//async function getData3(){
//		const res = await fetch(`https://themealdb.com/api/json/v1/1/list.php?c=list`);
//		const resData = await res.json();
//	    console.log("Ingre" , resData.meals);
//}
//getData3();