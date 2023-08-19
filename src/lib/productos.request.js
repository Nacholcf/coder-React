    import { collection, getDocs, getDoc, addDoc, doc, where, query, updateDoc, deleteDoc, writeBatch, increment, } from "firebase/firestore"; 
    import { db } from "./config"; 

    const productosRef = collection(db, "items");

    export const getProductos = async (category) => {
        const q = category
        ? query(productosRef, where('category', '==', category))
        : productosRef;

      let productos = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        productos = [...productos, {...doc.data(), id: doc.id}];
    });
    
    return productos;
  };

    //LEER
    export const getProducto = async (id) => {

    const document = doc(db, "items", id);
    const docSnap = await getDoc(document);
    if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };
     
    return null;
    };
    
    //ACTUALIZAR
   export const updateProducto = async (id, item) => {
   const newProducto = await updateDoc(doc(db, "items", id), item);
   return;
   };

   //ELIMINAR
   export const deleteProducto = async (id) => {
   return await deleteProducto(doc(db, "items", id));
   };

   //OPERACION EN LOTE
   export const updateManyProductos = async ( items ) => {
   const batch = writeBatch(db);

   items.forEach(({id, qty})=>{ 
   batch.update(doc(db, "items", id), {
   stock: increment(-qty)
   })
  })

  batch.commit();
  } 
