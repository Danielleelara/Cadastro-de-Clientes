
const Login = () => {
    return (
    <>
       <h1>Login</h1>
        <form>
            <div className="mb-8">
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">Nunca compartilharemos seu e-mail com mais ninguém.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Senha</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Lembre-me</label>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>  
    
    </>
    
    );
}
 
export default Login;