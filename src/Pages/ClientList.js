import Table from "../Components/Table";
import PageWrapper from "../Components/PageWrapper";

const ClientList = () => {
  const handleClick = () => {
    return alert("deu certo");
  };
  return (
    <PageWrapper>
      <div>
        <button className={""} onClick={handleClick}>
          Adicionar Cliente
        </button>
      </div>
      {/* <Form/> */}
      <Table />
    </PageWrapper>
  );
};

export default ClientList;
