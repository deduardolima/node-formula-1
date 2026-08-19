# 🏎️ Node Formula 1 API

API REST desenvolvida durante o Bootcamp da [DIO](https://www.dio.me), com melhorias próprias.

## 🚀 Tecnologias
- Node.js
- TypeScript
- Fastify
- CORS

## ✨ Melhorias implementadas
- Correção de bug de IDs duplicados nos pilotos (Lewis Hamilton e Lando Norris tinham o mesmo id)
- Rotas organizadas em módulos separados por domínio (teams.ts e drivers.ts), usando plugins do Fastify
- Centralização dos dados em database.ts
- Tipagem das entidades com interfaces em types.ts
- Endpoint `GET /teams/:id` — busca de equipe por ID (não existia no projeto original)
- Endpoint `GET /drivers/search?team=NOME` — busca de pilotos filtrando por nome da equipe (case insensitive e busca parcial)
- Tratamento de erros com status codes apropriados 400 e 404
- Padronização das respostas em JSON


## 📦 Como executar
```
npm install
npm run dev
```

## 📌 Endpoints
| Método | Rota                       | Descrição                                |
|--------|------------------------------|--------------------------------------------|
| GET    | /teams                      | Lista todas as equipes                     |
| GET    | /teams/:id                  | Busca equipe por ID                        |
| GET    | /drivers                    | Lista todos os pilotos                     |
| GET    | /drivers/:id                | Busca piloto por ID                        |
| GET    | /drivers/search?team=NOME   | Busca pilotos por nome da equipe           |


## 🔗 Links úteis
- [Repositório original (DIO)](https://github.com/digitalinnovationone/node-formula-1)
- [Certificado do curso](#)

## 👨‍💻 Autor
Diego — [LinkedIn](https://www.linkedin.com/in/diego-eduardo-lima/) | [GitHub](https://github.com/deduardolima)
