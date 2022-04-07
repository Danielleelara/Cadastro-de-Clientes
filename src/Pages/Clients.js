import Table from "../components/Table";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import styles from './Clients.module.css';

const Clients = () => {

  return (
    <PageWrapper>
      <div className={styles.button}>
        <Link className={styles.button_text} to={`/create`}>
          Adicionar
        </Link>
      </div>
      <Table />
    </PageWrapper>

  );
};

export default Clients;
