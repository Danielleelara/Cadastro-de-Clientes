import PageWrapper from "../components/PageWrapper";
import styles from "./Details.module.css";

const Details = () => {
    return (
        <PageWrapper>
            <main className={styles.container}>
            <h1 className={styles.title}>Cliente</h1> 
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Nome:</li>
                <li className="list-group-item">Telefone:</li>
                <li className="list-group-item">CEP:</li>
                <li className="list-group-item">Rua/Av/Tra:</li>
                <li className="list-group-item">Número:</li>
                <li className="list-group-item">Complemento:</li>
                <li className="list-group-item">Cidade:</li>
                <li className="list-group-item">Estado:</li>
            </ul>
        
        </main>
        </PageWrapper>  
    );
}
 
export default Details;