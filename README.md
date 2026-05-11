# 🌐 Landing Page - Vue 3 + Vite

Este projeto é uma **landing page** desenvolvida com **Vue 3 + TypeScript** e **Vite**, focada em apresentar conteúdos sobre **Frontend, Node.js, MySQL e Vercel**.  
O sistema é versionado no **GitHub** e editado diretamente no IDE online **StackBlitz**.

---

## 📂 Estrutura de Pastas

src/
├─ components/   # Componentes reutilizáveis (botões, cards, headers, etc.)
├─ pages/        # Páginas principais (Home, Login, Cadastro, NotFound)
├─ styles/       # Estilos globais e específicos
│   ├─ global.scss        # Estilos globais aplicados em todo o app
│   ├─ _variables.scss    # Variáveis Sass (cores, fontes, espaçamentos)
│   ├─ _mixins.scss       # Mixins Sass reutilizáveis
│   └─ components/        # Estilos isolados por componente
└─ classes/      # Classes utilitárias e helpers



---

## ⚙️ Tecnologias Utilizadas

- **[Vue 3](ca://s?q=Vue_3)** com **TypeScript**
- **[Vite](ca://s?q=Vite)** como bundler e dev server
- **[Yarn](ca://s?q=Yarn)** como gerenciador de pacotes
- **[Sass/SCSS](ca://s?q=Sass_SCSS)** para estilização
- **[Vue Router](ca://s?q=Vue_Router)** para navegação entre páginas
- **[GitHub](ca://s?q=GitHub)** para versionamento
- **[StackBlitz](ca://s?q=StackBlitz)** como IDE online
- **[Vercel](ca://s?q=Vercel)** para deploy

---

## 🎨 Estilização

- **Global:** `src/styles/global.scss` define reset, tipografia e classes utilitárias.
- **Por componente:** cada `.vue` importa seu próprio arquivo SCSS de `src/styles/components/` usando:
  ```vue
  <style lang="scss" src="../styles/components/home.scss" scoped></style>

🚀 Executando o Projeto
yarn install


Rodar em desenvolvimento
yarn dev

Build para produção
yarn build

