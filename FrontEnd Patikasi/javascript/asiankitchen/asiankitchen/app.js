const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3E4C2DED-D0F9-45CD-B476-8BA54E533AD9/Derivates/d17260c9-bc36-4fb0-bbf1-3b4b8427be74.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


      //    DOMS  START
  let buttonsDOM = document.querySelector('.btn-container');
  let foodsDOM = document.querySelector(".section-center");

    /// DOMS END


 // CATEGORIZE FOODS START

  const japanFoods = menu.filter(food => food.category == "Japan");
  const chinaFoods = menu.filter(food => food.category == "China");
  const koreaFoods = menu.filter(food => food.category == "Korea");

  // // CATEGORIZE FOODS END



  function foodParsing(params) {
  }
   let allMenuCatRepeat = menu.map(menu => menu.category);
   allMenuCatRepeat.push("All");

  const menuCategories =  allMenuCatRepeat.filter((element, index) => {
    return allMenuCatRepeat.indexOf(element) === index;
});


    function createNavButtonForCategories (value){
      



      // ADD EVENT BUTTONS FOR START
      let buttomDOM = document.createElement('button');
      buttomDOM.classList.add("btn-item");
      buttomDOM.innerHTML = `${value}`
      if (value == "Korea") {
        buttomDOM.addEventListener("click", KoreaMenu)
      }else if (value == "China") {
        buttomDOM.addEventListener("click", ChinaMenu)
      }else if (value == "Japan") {
        buttomDOM.addEventListener("click", JapanMenu)
      }else if (value == "All") {
        buttomDOM.addEventListener("click", AllMenu)
      }
        
      buttonsDOM.append(buttomDOM);
    }

    menuCategories.forEach(createNavButtonForCategories);

       // ADD EVENT BUTTONS FOR END
    
    
  
   

    // PRINT HTML OBJECTS START

    function foodPrint (object){
      for (let index = 0; index < object.length; index++) {
        
        
        let foodDOM = document.createElement('div');
      
        foodDOM.classList.add("menu-items", "col-lg-6", "col-sm-12");
        foodsDOM.append(foodDOM);

        let imgDOM = document.createElement('img')
        imgDOM.classList.add('photo')
        imgDOM.src = object[index].img
                                                                    foodDOM.append(imgDOM);

       
        let menuInfoDOM = document.createElement('div');
        menuInfoDOM.classList.add('menu-info');
                                                            foodDOM.append(menuInfoDOM);
        let menuTitleDOM = document.createElement('div');
        menuTitleDOM.classList.add('menu-title');
                                                       menuInfoDOM.append(menuTitleDOM);

         
        let h4DOM = document.createElement("h4");
        h4DOM.innerHTML = object[index].title
             
                                                menuTitleDOM.append(h4DOM);

                                                
                                    
        let secondh4DOM = document.createElement('h4');
          secondh4DOM.classList.add("price")
          secondh4DOM.innerHTML = "₺" + object[index].price

                                                      menuTitleDOM.append(secondh4DOM);                                            
        let menuTextDOM = document.createElement('div')
        menuTextDOM.classList.add('menu-text'); menuTextDOM  = object[index].desc

       
                                                   menuInfoDOM.append(menuTextDOM);
                                                   
        
      }
      
      
    }

    // PRINT HTML OBJECTS END


// CLEAR WEB SITE START
    function removeHtml() {
    
     let clearDOM = document.getElementsByClassName("menu-items")
     while(clearDOM.length > 0){
      clearDOM[0].parentNode.removeChild(clearDOM[0]);
  }
     
    }

    // CLEAR WEB SITE END
    

  
    function JapanMenu(){
     removeHtml();
      foodPrint(japanFoods);
    }
    function ChinaMenu(){
      removeHtml();
      foodPrint(chinaFoods)
    }
    function KoreaMenu(){
      removeHtml();
      foodPrint(koreaFoods)
    }
    function AllMenu() {
      removeHtml();
      foodPrint(menu)
    }

    // OPEN FIRST
    window.onload = AllMenu()
  



   




 
  















