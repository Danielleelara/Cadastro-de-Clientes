import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import { CgEye, CgTrash } from "react-icons/cg";
import styles from "./Table.module.css";


const Table = () => {

  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function getClients() {
      const response = await api.get("/clients");
      const { clients } = response.data;

      setClients(clients);
    }
    getClients();
  }, []);

  return (
    <>
      <table className={styles.container_table}>
        <ul className="list-group">
          {clients.map((client) => 
            <li className="list-group-item">
              {client.name}
              <span>
                <CgTrash size={20} color="gray"></CgTrash>
                <Link to={`/details/${client.id}`}>
                  <CgEye size={20} color="gray" />
                </Link>
              </span>
            </li>
          )}
        </ul>
      </table>
    </>
  );
};

export default Table;
