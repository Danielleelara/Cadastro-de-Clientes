import styles from "./Form.module.css";

const Form = () => {
  (function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  

  return (
    <>
      <h1 className={styles.title}>Cadastro</h1>
      <form className="row g-3 needs-validation" noValidate>
        <div className="col-md-8">
          <label htmlFor="validationCustom01" className="form-label">
            Nome Completo
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">
            Telefone
          </label>
          <div className="input-group has-validation">
            <input
              type="phone"
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">
              Por favor escolha um usuário.
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">
            CEP
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom05"
            required
          />
          <div className="invalid-feedback">CEP inválido</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom04" className="form-label">
            Rua/Av/Travessa
          </label>
          <input
            className="form-control"
            id="validationCustom04"
            disabled
          ></input>
          <div className="invalid-feedback">Endereço inválido</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom03" className="form-label">
            Número
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom05"
            required
          />
          <div className="invalid-feedback">Número inválido</div>
        </div>
        <div className="col-md-5">
          <label htmlFor="validationCustom03" className="form-label">
            Complemento
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom05"
            required
          />
          <div className="invalid-feedback">Complemento inválido</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom04" className="form-label">
            Cidade
          </label>
          <input
            className="form-control"
            id="validationCustom04"
            disabled
          ></input>
          <div className="invalid-feedback">Cidade inválida</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom03" className="form-label">
            Estado
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom05"
            disabled
          />
          <div className="invalid-feedback">Estado inválido</div>
        </div>
        <div className="col-12">
          <button className={styles.button} type="submit">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
