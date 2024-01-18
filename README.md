# API de gerenciamento Imobiliário

Esta API permite realizar o cadastro de imóveis e de usuários interessados na aquisição dos mesmos. Além disso, é possível realizar o agendamento e consultar horários de visitas às propriedades disponíveis no banco de dados da imobiliária.

## Como Rodar a API?

### Docker:

1. **Configure o arquivo `.env`:**
   - Crie um arquivo `.env` na raiz do projeto.
   - Copie o conteúdo do arquivo `.env.example` para dentro do novo arquivo `.env`.
   - Preencha as variáveis de ambiente no arquivo `.env` conforme indicado abaixo:

   ```env
   PORT=3000
   PGPORT=5432
   DATABASE_URL=postgres://postgres:1234@db:5432/imobiliaria
   SECRET_KEY=(insira_sua_chave_secreta)
   EXPIRES_IN=1hr
   POSTGRES_USER=postgres
   POSTGRES_DB=imobiliaria
   POSTGRES_PASSWORD=1234

  - Docker-compose up. (Necessita do docker e docker compose previamente instalado na sua máquina)

## Executando localmente:
  - Configure o arquivo .env:
  - Crie um arquivo .env na raiz, copie tudo que esta no arquivo .env.example para dentro do arquivo .env que você criou e preencha com os dados do seu banco de       dados criado localmente, sugestão:
    ```env
            PORT=3000
            DATABASE_URL=postgres://postgres:1234@localhost:5432/imobiliaria
            SECRET_KEY=(crie uma secret key)
            EXPIRES_IN=1hr
  - npm install;
  - npm run dev;
