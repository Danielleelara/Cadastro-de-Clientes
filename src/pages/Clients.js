import Table from "../components/Table";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import styles from "./Clients.module.css";

const Clients = () => {
  return (
    <PageWrapper>
        <Link className={styles.link} to={`/create`}>
          <button>Adicionar</button>
        </Link>
      <Table />
      <div>
      </div>
    </PageWrapper>
  );
};

export default Clients;
