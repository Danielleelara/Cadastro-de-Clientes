import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    client: Model,
  },
  seeds(server) {
    server.db.loadData({
      clients: [
        {
          id: 1,
          name: "Cláudia Rosângela Marcela Freitas",
          phone: "(91) 2882-9072",
          address: {
            street: "Rua AD Cinco",
            city: "Capanema",
            state: "PA",
            cep: "68703-331",
            complement: "",
            number: "635",
          },
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/clients", (schema) => {
      return schema.clients.all();
    });

    this.get("/clients/:id", (schema, request) => {
      const { id } = request.params;

      return schema.clients.find(id);
    });

    this.post("/clients", (schema, request) => {
      const client = JSON.parse(request.requestBody);

      return schema.clients.create(client);
    });

    this.delete("/clients/:id", (schema, request) => {
      const { id } = request.params;

      return schema.clients.find(id).destroy();
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
