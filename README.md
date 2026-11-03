AppFtv - Sistema de Agendamento de Quadras de Futevôlei
API Backend desenvolvida para o gerenciamento e agendamento de quadras de futevôlei, construída com foco em boas práticas de programação, tipagem estrita e validação de regras de negócio.

Tecnologias Utilizadas
Este projeto foi construído utilizando a seguinte stack:

Node.js com TypeScript
GraphQL para a API
TypeORM para mapeamento objeto-relacional
PostgreSQL como banco de dados
Docker & Docker Compose para o ambiente conteinerizado
PNPM como gerenciador de pacotes
Funcionalidades
Cadastro, listagem e remoção de Clientes.
Cadastro, listagem e remoção de Quadras.
Agendamento de horários com validação inteligente de conflitos por quadra (impedindo sobreposições indevidas).
Tratamento de datas e fusos horários via formato ISO 8601.
Como Rodar o Projeto na sua Máquina
Pré-requisitos
Certifique-se de ter instalado em sua máquina:

Node.js
PNPM
Docker e Docker Compose
Passo a Passo
Clone o repositório:
git clone [https://github.com/joaovitor1407/appftv.git](https://github.com/joaovitor1407/appftv.git)
cd appftv
