import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { api } from "../services/api";
import styles from "./Details.module.css";

const Details = () => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    async function getClient(id) {
      const response = await api.get(`/clients/${id}`);
      const { client } = response.data;
      setClient(client);
    }

    getClient(1);
  }, []);

  return (
    <PageWrapper>
      <main className={styles.container}>
        <h1 className={styles.title}>{client.name}</h1>
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
};

export default Details;
