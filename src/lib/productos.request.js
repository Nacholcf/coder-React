const PRODUCTOS = [
      {
        id: 1,
        title: "Los tres mosqueteros",
        category: "Aventura",
        price: 550,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/ba/6a/ba6aa7885fba12057064610475c9bd41.jpg",
        stock: 10,
      },
      {
        id: 2,
        title: "El conde de montecristo",
        category: "Aventura",
        price: 805,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
        img: "https://imagessl4.casadellibro.com/a/l/t5/64/9788497408264.jpg",
        stock: 10,
      },
      {
        id: 3,
        title: "El exorcista",
        category: "Terror",
        price: 299,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
        stock: 5,
        img: "https://m.media-amazon.com/images/I/71yaw5OF7fL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        id: 4,
        title: "El señor de los anillos",
        category: "Fantasia",
        price: 450,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
        img: "https://lamexicanalibrerias.com/wp-content/uploads/2022/09/359897_portada_el-senor-de-los-anillos-3-el-retorno-del-rey_j-r-r-tolkien_202206071121-scaled.jpg",
        stock: 6,
      },
      {
        id: 5,
        title: "El señor de los anillos",
        category: "Fantasia",
        price: 450,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
        img: "https://lamexicanalibrerias.com/wp-content/uploads/2022/09/359897_portada_el-senor-de-los-anillos-3-el-retorno-del-rey_j-r-r-tolkien_202206071121-scaled.jpg",
        stock: 6,
      },
      {
        id: 6,
        title: "El señor de los anillos",
        category: "Fantasia",
        price: 450,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
        img: "https://lamexicanalibrerias.com/wp-content/uploads/2022/09/359897_portada_el-senor-de-los-anillos-3-el-retorno-del-rey_j-r-r-tolkien_202206071121-scaled.jpg",
        stock: 6,
      }
    ];


    export const getProductos = () => {
      return new Promise((res)=>{
            setTimeout(()=>{
                res(PRODUCTOS)
            },5000)
        })
    };

    export const getProducto = () => {
      return new Promise((res) => {
        setTimeout(() => {
          res(PRODUCTOS[0]); 
        }, 1500);
      });
    };
    
