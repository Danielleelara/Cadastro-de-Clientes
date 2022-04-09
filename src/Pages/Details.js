import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { api } from "../services/api";
import { useParams } from "react-router";
import styles from "./Details.module.css";

const Details = () => {
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getClient(id) {
      const response = await api.get(`/clients/${id}`);
      const { client } = response.data;
      setClient(client);
      setLoading(false);
    }
    getClient(id);
  }, [id]);
  console.log(client);

  return (
    <PageWrapper>
      <main className={styles.container}>
        {loading ? (
          <div className="spinner-border text-secondary" role="status">
            <span className="sr-only"></span>
          </div>
        ) : (
          <>
            <h1 className={styles.title}>{client?.name}</h1>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Telefone: {client?.phone}</li>
              <li className="list-group-item">CEP: {client?.address?.cep}</li>
              <li className="list-group-item">
                Rua/Av/Tra: {client?.address?.street}
              </li>
              <li className="list-group-item">
                Número: {client?.address?.number}
              </li>
              <li className="list-group-item">
                Complemento: {client?.address?.complement}
              </li>
              <li className="list-group-item">
                Cidade: {client?.address?.city}
              </li>
              <li className="list-group-item">
                Estado: {client?.address?.state}
              </li>
            </ul>
          </>
        )}
      </main>
    </PageWrapper>
  );
};

export default Details;
