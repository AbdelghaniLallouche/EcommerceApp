import { useState } from "react";
import ReactStars from "react-stars";
import { ShopIcon } from "../public/Svgs";
import { useRef } from "react";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const [model, setModel] = useState(false);
  const [product, setProduct] = useState({ id : null , 
    name : "",
    price : 0,
    rating : 0,
    pic : ""
}); // {name: "", price: 0, ...
  const [productpics, setProductPics] = useState([null, null, null, null]); // [file, file, file, ...
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);
  const fileInputRef4 = useRef(null);
  const refs = [fileInputRef1, fileInputRef2, fileInputRef3, fileInputRef4];
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Produit 1",
      price: 100,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 2,
      name: "Produit 2",
      price: 200,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 3,
      name: "Produit 3",
      price: 300,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 4,
      name: "Produit 4",
      price: 400,
      rating: 3,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 5,
      name: "Produit 5",
      price: 500,
      rating: 5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 1,
      name: "Produit 1",
      price: 100,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 2,
      name: "Produit 2",
      price: 200,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 3,
      name: "Produit 3",
      price: 300,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 4,
      name: "Produit 4",
      price: 400,
      rating: 3,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 5,
      name: "Produit 5",
      price: 500,
      rating: 5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 1,
      name: "Produit 1",
      price: 100,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 2,
      name: "Produit 2",
      price: 200,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 3,
      name: "Produit 3",
      price: 300,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 4,
      name: "Produit 4",
      price: 400,
      rating: 3,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 5,
      name: "Produit 5",
      price: 500,
      rating: 5,
      pic: "../src/Pics/macbook.jpg",
    },
  ]);

  return (
    <div className="mx-4 relative w-calc(100% - 32px)">
      <h1 className="title">Produits Populaires :</h1>
      <div className="grid w-full aa my-2 gap-2 md:grid-cols-5 smal:grid-cols-2 sm:grid-cols-3 smal:justify-between justify-center justify-items-center items-center overflow-scroll">
        <div className="flex w-full h-full pb-2 flex-col hover:cursor-pointer justify-center items-center bg-white shadow-md border-y-[1px] rounded-sm">
          <button
            onClick={(e) => {
              e.preventDefault();
              setModel(true);
            }}
          >
            <div className="rounded-full bg-slate-400 px-2 pt-1 pb-[6px] text-white font-semibold">
              +
            </div>
          </button>
        </div>
        {products.slice(0, 5).map((product, index) => (
          <Link className="w-full" to={`/admin/products`}>
            <div
              key={index}
              className="flex w-full pb-2 flex-col bg-white shadow-md border-y-[1px] rounded-sm gap-2"
            >
              <img
                className="bg-cover w-full h-40 rounded-sm"
                src={product.pic}
                alt=""
              />
              <div className="flex flex-row mx-1 justify-between items-center">
                <h1 className="text-base">{product.name}</h1>
                <h1 className="title">{product.price} DA</h1>
              </div>

              <div className="flex flex-row mx-1 justify-between items-center">
                <ReactStars
                  count={5}
                  size={20}
                  color2={"#ffd700"}
                  edit={false}
                  value={product.rating}
                />
                <ShopIcon />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h1 className="title">Tout Les Produits :</h1>
      <div className="grid w-full aa my-2 gap-2 md:grid-cols-5 smal:grid-cols-2 sm:grid-cols-3 smal:justify-between justify-center justify-items-center items-center overflow-scroll">
        {products.map((product, index) => (
          <Link className="w-full" to={`/admin/products`}>
            <div
              key={index}
              className="flex w-full pb-2 flex-col bg-white shadow-md border-y-[1px] rounded-sm gap-2"
            >
              <img
                className="bg-cover w-full h-40 rounded-sm"
                src={product.pic}
                alt=""
              />
              <div className="flex flex-row mx-1 justify-between items-center">
                <h1 className="text-base">{product.name}</h1>
                <h1 className="title">{product.price} DA</h1>
              </div>

              <div className="flex flex-row mx-1 justify-between items-center">
                <ReactStars
                  count={5}
                  size={20}
                  color2={"#ffd700"}
                  edit={false}
                  value={product.rating}
                />
                <ShopIcon />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black z-10 bg-opacity-50 flex justify-center items-center ${
          model ? "" : "hidden"
        }`}
      >
        <div className="bg-white p-4 w-96 h-96 flex flex-col gap-2 justify-center items-center rounded-md">
          <h1 className="title">Ajouter un produit</h1>
          <input type="text" placeholder="Nom du produit" className="inputt" onChange={(e)=>{
                setProduct({...product, name : e.target.value});
          }}/>
          <input type="number" placeholder="Prix du produit" onChange={(e)=>{
                setProduct({...product, price : e.target.value});
          }} className="inputt" />

          {/* button to upload image */}
          <div className="flex justify-between items-center w-full">
            {[0, 1, 2, 3].map((i) => (
              <div
                className="flex-col gap-2 items-center justify-center"
                key={i}
              >
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    let file = e.target.files[0];
                    let pic = URL.createObjectURL(file);
                    let temp = productpics;
                    temp[i] = pic;
                    setProductPics(temp);
                  }}
                  ref={refs[i]}
                />

                <button
                  type="none"
                  className="bg-slate-400 text-white px-2 pt-1 pb-[6px] rounded-lg"
                  onClick={() => refs[i].current.click()}
                >
                  import {i + 1}
                </button>
                {productpics[i] !== null && (
                  <img
                    src={productpics[i]}
                    alt=""
                    className="w-10 object-cover h-10"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex w-full justify-center items-center gap-2 mt-1">
            <button 
            onClick={(e) => {
                e.preventDefault();
                setModel(false);
                if(productpics.includes(null)){
                    alert("Veuillez importer toutes les images");
                    return;
                }else{
                    if(product.name === "" || product.price === 0){
                        alert("Veuillez remplir tous les champs");
                        return;
                    }else{
                        setProducts([...products, {...product, pic : productpics[0] , id : products.length + 1  }]);
                        setProduct({ id : null ,  name : "",
                        price : 0,
                        rating : 0,
                        pic : "" });
                        setProductPics([null, null, null, null]);
                        setModel(false);
                    }
                }
            }}
            className="bg-slate-400 text-white px-2 pt-1 pb-[6px] rounded-lg">
              Ajouter
            </button>
            <button
              className="bg-slate-400 text-white px-2 pt-1 pb-[6px] rounded-lg"
              onClick={() => {
                setModel(false);
              }}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
