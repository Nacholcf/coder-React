const PRODUCTOS = [
      {
        id: 1,
        title: "Remera Black",
        category: "Remeras",
        price: 12000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
        img: "https://hillsideclothes.000webhostapp.com/img/remera-negra.jpg",
        stock: 10,
      },
      {
        id: 2,
        title: "Remera Green",
        category: "Remeras",
        price: 12000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
        img: "https://hillsideclothes.000webhostapp.com/img/remera-verde.jpg",
        stock: 10,
      },
      {
        id: 3,
        title: "Overside Orange",
        category: "Oversize",
        price: 14000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
        stock: 5,
        img: "https://hillsideclothes.000webhostapp.com/img/remera-naranja.jpg"
      },
      {
        id: 4,
        title: "Remera Grey",
        category: "Remeras",
        price: 12000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
        img: "https://hillsideclothes.000webhostapp.com/img/remera-gris.jpg",
        stock: 6,
      },
      {
        id: 5,
        title: "Buzo Grey",
        category: "Buzos",
        price: 20000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
        img: "https://hillsideclothes.000webhostapp.com/img/buzogris.jpg",
        stock: 6,
      },
      {
        id: 6,
        title: "Buzo Cream",
        category: "Buzos",
        price: 20000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
        img: "https://hillsideclothes.000webhostapp.com/img/buzocrema.jpg",
        stock: 6,
      }
    ];

    export const getProductos = (id) => {
      const _productos = id
        ? PRODUCTOS.filter((producto) => producto.category.toLowerCase() === id)
        : PRODUCTOS;

      return new Promise((res)=>{
            setTimeout(()=>{
                res(_productos);
            },1000)
        })
    };

    export const getProducto = (id) => {
      const producto = PRODUCTOS.filter((producto) => producto.id === id)[0];


      return new Promise((res) => {
        setTimeout(() => {
          res(producto); 
        }, 1500);
      });
    };
    
