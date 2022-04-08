import styles from "./Table.module.css";
import { CgTrash, CgEye } from "react-icons/cg";
import { Link } from "react-router-dom";

const Table = () => {
  return (
    <>
      <table className={styles.container_table}>
        <ul className="list-group">
          <li className="list-group-item">
            Lara de Souza Andrade
            <span>
              <CgTrash
                size={20}
                color="gray"
              ></CgTrash>
              <Link to={`/details/1`}>
                <CgEye size={20} color="gray" />
              </Link>
            </span>
          </li>
          <li className="list-group-item">Danielle de Souza Andrade
          <span>
              <CgTrash
                size={20}
                color="gray"
              ></CgTrash>
              <Link to={`/details/1`}>
                <CgEye size={20} color="gray" />
              </Link>
            </span>
          </li>
          <li className="list-group-item">Carlos Eugenio Costa Barros Jr
          <span>
              <CgTrash
                size={20}
                color="gray"
              ></CgTrash>
              <Link to={`/details/1`}>
                <CgEye size={20} color="gray" />
              </Link>
            </span>
          </li>
        </ul>
      </table>
    </>
  );
};

export default Table;
