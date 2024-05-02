import { useState } from "react"; 
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [insc, setInsc] = useState(false);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-white rounded-xl px-4 py-8 flex flex-col justify-center items-center">
        <h1 className="uppercase font-bold text-[24px] text-black">se connecter</h1>
        <form method="post" className="w-[70%] flex flex-col gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b-[1px] focus:outline-none border-black px-2 pt-1 pb-[6px]"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border-b-[1px] border-black focus:outline-none px-2 pt-1 pb-[6px]"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label  className="flex justify-center items-center gap-3" htmlFor="term">
            <input
              type="checkbox"
              name="term"
              id="term"
              value={terms}
              onChange={(e) => {
                setTerms(!terms);
              }}
            />
            <p className="text-black font-semibold text-base">
              En continuant, vous acceptez les conditions d'utilisation &
              politique de confidentialité
            </p>
          </label>
          <button
            className="bg-black px-4 pt-1 pb-2 w-full rounded-2xl text-white font-semibold"
            onClick={(e) => {
              e.preventDefault();
              //login
            }}
          >
            Se connecter
          </button>
        </form>
        <h1 className="my-3">
          Tu n'as pas de compte ?{" "}
          <span
            onClick={() => {
              setInsc(true);
            }}
            className="font-bold hover:cursor-pointer text-black"
          >
            Inscrivez-vous
          </span>
        </h1>
        {insc && <div className="flex flex-col w-[70%] justify-center items-center gap-2">
            <Link to="/inscriptionclient" className="bg-black text-center w-full rounded-2xl px-4 pt-1 pb-2 text-white font-semibold">Inscrivez-vous comme client</Link>
            <Link to="/inscriptionVendeur" className="bg-black text-center w-full rounded-2xl px-4 pt-1 pb-2 text-white font-semibold">Inscrivez-vous comme vendeur</Link>
            </div>}
      </div>
    </div>
  );
};

export default Login;
