# 🛋️ Furniture E-commerce

Este é um projeto de e-commerce completo para uma loja de móveis, focado em proporcionar uma experiência de compra moderna, intuitiva e segura. O sistema foi construído utilizando uma arquitetura front-end robusta com **React**, **TypeScript** e **Redux**.

---

## 🚀 Tecnologias e Ferramentas

* **Front-end:** React, TypeScript e TailwindCSS.
* **Gerenciamento de Estado:** Redux (utilizado para o controle global do carrinho).
* **Autenticação:** Firebase (Suporte a E-mail/Senha, Google e Facebook).
* **Roteamento:** React Router (com implementação de rotas protegidas).
* **Consumo de Dados:** JSON Server (através do arquivo `db.json`).
* **Integração de API:** ViaCEP para preenchimento automático de endereço.

---

## 🛠️ Requisitos e Funcionalidades

### 📦 Catálogo de Móveis
* **Paginação Dinâmica:** Organização dos móveis por páginas para melhor navegação.
* **Controle de Exibição:** Possibilidade de alterar a quantidade de itens exibidos por tela.
* **Página de Detalhes:** Ao clicar em um card, o usuário é redirecionado para a página específica do produto.

### 🛒 Carrinho de Compras
* **Gerenciamento com Redux:** Adição e remoção de produtos com atualização em tempo real.
* **Persistência de Estado:** Controle total sobre a quantidade de itens no carrinho.
* **Limpeza Rápida:** Opção de esvaziar o carrinho via ícone de lixeira.

### 🔐 Autenticação e Checkout
* **Login Social:** Acesso rápido via Gmail ou Facebook através do Firebase.
* **Rotas Protegidas:** A página de Checkout só pode ser acessada por usuários devidamente logados.
* **Checkout Inteligente:** Validação de campos de formulário e preenchimento automático de endereço via API ViaCEP ao digitar o CEP.

---

## 🔧 Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

### 1. Clonar o Repositório
```bash
git clone [https://github.com/LidiaMessias/Desafio03_Semana12_CompassUOL.git](https://github.com/LidiaMessias/Desafio03_Semana12_CompassUOL)
cd Desafio03_Semana12_CompassUOL
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Configurar Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e adicione suas chaves do Firebase.
Substitua os valores abaixo pelas chaves encontradas no seu Console do Firebase.
```bash
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
```

### 4. Executar o Backend Simulado (JSON Server)
Em um terminal separado, inicie o servidor que servirá os dados do arquivo db.json:
```bash
npx json-server --watch db.json
```

### 5. Iniciar a Aplicação
```bash
npm run dev
```

---

## 📐 Decisões de Arquitetura

Neste projeto, optei pelo uso do TypeScript para garantir a segurança dos tipos de dados entre os componentes e o Redux. A integração com a API do ViaCEP foi utilizada pensando na melhor experiência do usuário (UX), reduzindo o esforço de digitação durante o Checkout.


---

## 💻 Autor

Desenvolvido por **Lidia L. Messias**  
Email: lidia.mess@gmail.com  
Este projeto faz parte do meu portfólio profissional. Você pode conferir este e outros projetos no meu domínio oficial:  
**Link do Portfólio:** www.lidiamess.dev.br


