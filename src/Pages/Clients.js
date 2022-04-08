import Table from "../components/Table";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import styles from './Clients.module.css';

const Clients = () => {

  return (
    <PageWrapper>
      <Table />

      <div>
        <Link className={styles.button} to={`/create`}>
          Adicionar
        </Link>
      </div>
    </PageWrapper>

  );
};

export default Clients;
