import { Link } from "react-router-dom";
const Popularcat = () => {

    const user = {
        id : 1,
        name : "name",
        email : "email",
        password : "password" ,
        role :  3, // 1 for costumer , 2 for vendeur , 3 for admin
       } 

    const categories = [
        {id : 1,name: "Femmes", img: "./src/Pics/femme.png"},
        {id : 2,name: "Hommes", img: "./src/Pics/homme.jpg"},
        {id : 3,name: "Beauté & Santé", img: "./src/Pics/makeup.jpg"},
        {id : 4,name: "Électronique", img: "./src/Pics/macbook.jpg"},
        {id : 5,name: "Electroménager", img: "./src/Pics/electromenage.jpg"},
    ]
    return ( 
        <div className="mx-4 w-calc(100% - 32px)">
            <h1 className="title">Categories Populaires :</h1>
            <div className="grid aa my-2 sm:grid-cols-5 grid-cols-2 smal:grid-cols-3 gap-y-4 justify-between items-center overflow-scroll">
                {categories.map((category, index) => (
                    <Link 
                    to={user.role === 3 ? `/admin/categories`: `/category/${category.id}`} ><div key={index} className="flex flex-col items-center gap-2">
                        <img className="bg-cover shadow-lg object-cover w-24 h-24 md:w-32 md:h-32 rounded-full" src={category.img} alt="" />
                        <h1 className="md:title text-sm font-semibold text-center text-wrap">{category.name}</h1>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
     );
}
 
export default Popularcat;