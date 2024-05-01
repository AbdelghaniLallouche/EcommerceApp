import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showSignupOptions, setShowSignupOptions] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const toggleSignupOptions = () => {
    setShowSignupOptions((prevShowSignupOptions) => !prevShowSignupOptions);
  };

  return (
    <div className="login-main">
      <div className="login">
        <div className="login-container">
          <div className="login-center">
            <h2 className="text-5xl text-center mt-0">Se connecter</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                className="w-full box-border mb-4 p-4 border-b-[black] border-0 border-b border-solid outline-none "   style={{ fontSize: "1.5rem" }}
              />
              <div className="pass-input-div relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={handleChange}
                  className="w-full box-border mb-4 p-4 border-b-[black] border-0 border-b border-solid outline-none" style={{ fontSize: "1.5rem" }}
                  />
                
                {showPassword ? (
                  <FaEye
                    onClick={togglePasswordVisibility}
                    className="text-xl absolute cursor-pointer right-2.5 bottom-[35px]"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={togglePasswordVisibility}
                    className="text-xl absolute cursor-pointer right-2.5 bottom-[35px]"
                  />
                )}
              </div>
              <div className="login-center-options">
                <div className="continue-div">
                  <input
                    type="checkbox"
                    id="continue-checkbox"
                    className="cursor-pointer mt-2.5"
                  />
                  <label
                    htmlFor="continue-checkbox"
                    className="text-[1.3rem] font-medium cursor-pointer mt-2.5"
                  >
                    En continuant, vous acceptez les conditions d'utilisation & politique de confidentialité
                  </label>
                </div>
              </div>
              <div className="login-center-buttons">
                <button
                  type="submit"
                  className="w-6/12 text-base font-semibold cursor-pointer mx-auto my-4 p-4 rounded-[30px] border-[none] bg-[black] text-[white] border-[3px] border-solid border-[black] hover:text-[#333] hover:bg-[rgb(254,249,249)]"
                >
                  Se connecter
                </button>
              </div>
            </form>
          </div>
          <p className="login-bottom-p text-center text-2xl mt-2.5 pb-10">
            Tu n'as pas de compte? 
            <a
              href="#"
              onClick={toggleSignupOptions}
              className="no-underline font-semibold hover:underline"
            >
              Inscrivez-vous
            </a>
            {showSignupOptions && (
              <div className="signup-buttons">
                <Link to='/inscriptionclient'><button>Inscrivez-vous comme client</button></Link>
                <Link to = '/inscriptionVendeur'><button>Inscrivez-vous comme vendeur</button></Link>
              </div>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
