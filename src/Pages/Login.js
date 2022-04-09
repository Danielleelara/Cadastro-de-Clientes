import styles from './Login.module.css';

const Login = () => {

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Usuário</label>
                    <input placeholder="Apelido" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                    <input placeholder="Apenas letras minúsculas" type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className={styles.button}>Enviar</button>
            </form>  
        
        </main>
        
    );
}
 
export default Login;