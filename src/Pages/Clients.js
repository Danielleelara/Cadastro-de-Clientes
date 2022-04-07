import Table from "../components/Table";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import styles from './Clients.module.css';
import { useState } from "react";
import Modal from "../components/Modal";


const Clients = () => {
  const [ setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <PageWrapper>
      <Table />
      <Modal 
      open={handleOpen} 
      close={handleClose} 
     />
      <div>
        <Link className={styles.button} to={`/create`}>
          Adicionar
        </Link>
      </div>
    </PageWrapper>

  );
};

export default Clients;
