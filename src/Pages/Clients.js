import Table from "../components/Table";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import styles from './Clients.module.css';

const Clients = () => {
   

  return (
    <PageWrapper>
      <div>
        <Link to={`/create`} className={styles.link}>
          Adicionar Cliente
        </Link>
      </div>
      {/* <Form/> */}
      <Table />
    </PageWrapper>
  );
};

export default Clients;
