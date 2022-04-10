import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    const user = {
      nickname: form.nickname,
      password: form.password,
    };
    setLoading(true);
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify(user),
    });
    
    setLoading(false);
    if (!!JSON.parse([response["_bodyInit"]])) {
      return navigate("/clients", { replace: true });
    }
    alert("Usuário ou Senha Incorreta!");
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={submit}>
        <div className="mb-4">
          <label htmlFor="nickname" className="form-label">
            Usuário
          </label>
          <input
            placeholder="Apelido"
            type="text"
            className="form-control"
            id="nickname"
            aria-describedby="emailHelp"
            name="nickname"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Senha
          </label>
          <input
            name="password"
            placeholder="Apenas letras minúsculas"
            type="password"
            className="form-control"
            id="password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.button}>{
              loading ? (
                <div className="text-center">
                  <div className="spinner-border text-light" role="status"></div>
                </div>
              ): 'Enviar'
            }
        </button>
      </form>
    </main>
  );
};

export default Login;
