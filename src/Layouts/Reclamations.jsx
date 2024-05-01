import { useState } from "react";
const Reclamations = () => {
    const [reclamations, setReclamations] = useState([
        {
          id: 1,
          nom: "Sarah",
          prenom: "Smith",
          content: "bad quality",
          pic: "../src/Pics/a.jpg",
        },
        {
          id: 2,
          nom: "Sarah",
          prenom: "Smith",
          content: "slow delivery",
          pic: "../src/Pics/a.jpg",
        },
        {
          id: 3,
          nom: "Sarah",
          prenom: "Smith",
          content: "bad quality",
          pic: "../src/Pics/a.jpg",
        },
      ]);
      return (
        <div className="mx-5 w-calc(100% - 40px)">
          <h1 className="txt p-1">Reclamations :</h1>
    
          {reclamations.length === 0 ? (
            <h1 className="txt">Pas de reclamation :</h1>
          ) : (
            <div>
              {reclamations.map((reclamation) => (
                <div
                  key={reclamation.id}
                  className="flex flex-row my-1 py-1 px-2 shadow-md bg-white border-[1px] rounded-xl gap-4 w-full items-center justify-start"
                >
                  <img
                    className="object-cover h-10 w-10 lil:h-20 lil:w-20 rounded-full"
                    src={reclamation.pic}
                    alt=""
                  />
                  <div>
                    <h1 className="lg:text-xl font-bold">{`${reclamation.nom} ${reclamation.prenom}`}</h1>
                    <h1 className="text-sm lil:text-lg font-normal">{reclamation.content}</h1>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
}
 
export default Reclamations;