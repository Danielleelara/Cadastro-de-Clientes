import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import { CgEye, CgTrash } from "react-icons/cg";
import styles from "./Table.module.css";

const Table = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getClients() {
      const response = await api.get("/clients");
      const { clients } = response.data;

      setClients(clients);
      setLoading(false);
    }
    getClients();
  }, []);

  return (
    <>
      <div className={styles.container_table}>
        <ul className="list-group">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-light" role="status"></div>
            </div>
          ) : (
            clients.map((client) => (
              <li key={client.id} className="list-group-item">
                {client.name}
                <span>
                  <CgTrash size={20} color="gray"></CgTrash>
                  <Link to={`/details/${client.id}`}>
                    <CgEye size={20} color="gray" />
                  </Link>
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default Table;
