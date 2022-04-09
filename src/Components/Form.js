import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import styles from "./Form.module.css";

const Form = () => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    const client = {
      name: form.name,
      phone: form.phone,
      address: {
        street: form.street,
        cep: form.cep,
        city: form.city,
        state: form.state,
        complement: form.complement,
        number: form.number,
      },
    };

    setLoading(false)
    const response = await api.post("/clients", client);
    setLoading(true)
    // Redirect Tela Home
    console.log(response.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCepBlur = async () => {
    const response = await fetch(`https://opencep.com/v1/${form.cep}.json`);
    const address = await response.json();

    setForm({
      ...form,
      street: address.logradouro,
      city: address.localidade,
      state: address.uf,
    });
  };

  return (
    <>
      <h1 className={styles.title}>Cadastro</h1>
      <form onSubmit={submit} className="row g-3 needs-validation" noValidate>
        <div className="col-md-8">
          <label htmlFor="validationCustom01" className="form-label">
            Nome Completo
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            required
            name="name"
            onChange={handleChange}
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
              name="phone"
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Por favor escolha um usuário.
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="cep" className="form-label">
            CEP
          </label>
          <input
            type="number"
            className="form-control"
            id="cep"
            name="cep"
            maxLength={8}
            onBlur={handleCepBlur}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">CEP inválido</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="street" className="form-label">
            Rua/Av/Travessa
          </label>
          <input
            className="form-control"
            id="street"
            name="street"
            value={form.street}
            disabled
          ></input>
          <div className="invalid-feedback">Endereço inválido</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="number" className="form-label">
            Número
          </label>
          <input
            type="text"
            className="form-control"
            id="number"
            name="number"
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Número inválido</div>
        </div>
        <div className="col-md-5">
          <label htmlFor="complement" className="form-label">
            Complemento
          </label>
          <input
            type="text"
            className="form-control"
            id="complement"
            name="complement"
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Complemento inválido</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="city" className="form-label">
            Cidade
          </label>
          <input
            className="form-control"
            id="city"
            onChange={handleChange}
            value={form.city}
            name="city"
            disabled
          ></input>
          <div className="invalid-feedback">Cidade inválida</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="state" className="form-label">
            Estado
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            onChange={handleChange}
            name="state"
            value={form.state}
            disabled
          />
          <div className="invalid-feedback">Estado inválido</div>
        </div>
        <div className="col-12">
          <button
            disabled={!form.state || loading}
            className={styles.button}
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
