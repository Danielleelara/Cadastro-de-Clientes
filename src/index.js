import { createServer, Model } from "miragejs";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";


createServer({
  models: {
    client: Model,
    user: Model,
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
            complement: "Farmácia Pague Menos",
            number: "635",
          },
        },
        {
          id: 2,
          name: "Caio Antonio Theo Freitas",
          phone: "(85) 3627-9568",
          address: {
            street: "Travessa Nossa Senhora das Graças",
            city: "Fortaleza",
            state: "CE",
            cep: "60011-240",
            complement: "Farmácia Pague Menos",
            number: "850",
          },
        },
        {
          id: 3,
          name: "Luna Carla Analu Figueiredo",
          phone: "(91) 2882-9072",
          address: {
            street: "Rua Cândido Ferreira Campanha",
            city: "Marília",
            state: "SP",
            cep: "17533-191",
            complement: "Farmácia Pague Menos",
            number: "690",
          },
        },
        {
          id: 4,
          name: "Isabelly Kamilly Renata Castro",
          phone: "(83) 2902-8685",
          address: {
            street: "Rua Princesa Isabel",
            city: "Santa Rita",
            state: "PB",
            cep: "58302-090",
            complement: "Farmácia Pague Menos",
            number: "844",
          },
        },
      ],
      users: [
        {
          nickname: "zitrino",
          password: "venhaserfeliz",
        },
      ],
    });
  },
  routes() {
    this.passthrough();

    this.urlPrefix = "http://localhost:8080";

    this.post("/login", (schema, request) => {
      const login = JSON.parse(request.requestBody);

      return schema.users.findBy({
        nickname: login.nickname,
        password: login.password,
      });
    });

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

    this.passthrough("https://opencep.com/v1/**");
  },
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
