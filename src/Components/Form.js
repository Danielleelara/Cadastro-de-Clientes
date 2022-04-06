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
      <h1 className={styles.title}>Cadastro de Clientes</h1>
      <form className="row g-3 needs-validation" novalidate>
        <div className="col-md-6">
          <label for="validationCustom01" className="form-label">
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
        <div className="col-md-6">
          <label for="validationCustomUsername" className="form-label">
            Usuário
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
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
          <label for="validationCustom05" className="form-label">
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
          <label for="validationCustom04" className="form-label">
            Rua/Av/Travessa
          </label>
          <input
            className="form-control"
            id="validationCustom04"
            required
          ></input>
          <div className="invalid-feedback">Endereço inválido</div>
        </div>
        <div className="col-md-3">
          <label for="validationCustom03" className="form-label">
            Número
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom05"
            required
          />
          <div class="invalid-feedback">Número inválido</div>
        </div>
        <div className="col-md-5">
          <label for="validationCustom03" className="form-label">
            Complemento
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom05"
            required
          />
          <div class="invalid-feedback">Complemento inválido</div>
        </div>
        <div className="col-md-4">
          <label for="validationCustom04" className="form-label">
            Cidade
          </label>
          <input
            className="form-control"
            id="validationCustom04"
            required
          ></input>
          <div className="invalid-feedback">Cidade inválida</div>
        </div>
        <div className="col-md-3">
          <label for="validationCustom03" className="form-label">
            Estado
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom05"
            required
          />
          <div class="invalid-feedback">Estado inválido</div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label class="form-check-label" for="invalidCheck">
              Concordo com os termos e condições
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-secondary" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
