# DCDev - Portfólio de Desenvolvedor

![Status](https://img.shields.io/badge/status-ativo-brightgreen)
![Version](https://img.shields.io/badge/version-0.1.0-blue)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.14-38B2AC?logo=tailwindcss)

Portfólio pessoal interativo desenvolvido com React e TypeScript, apresentando projetos, experiências profissionais e educacionais de forma moderna e responsiva.

## 📋 Tabela de Conteúdos

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Screenshots](#screenshots)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)
- [Autor](#autor)

## 📖 Sobre o Projeto

O **DCDev** é um portfólio web moderno e interativo que apresenta de forma organizada e profissional os projetos, experiências de carreira e formação educacional. O projeto foi desenvolvido com foco na experiência do usuário, utilizando design responsivo e navegação intuitiva.

Este portfólio serve como uma vitrine digital para demonstrar habilidades técnicas em desenvolvimento web, showcasing projetos reais e experiências profissionais de forma atrativa e organizada.

## ✨ Funcionalidades

- 🏠 **Página About**: Apresentação pessoal com informações profissionais
- 💼 **Seção Career**: Timeline de experiências profissionais
- 🎓 **Seção Educational**: Histórico de formação acadêmica
- 🚀 **Portfólio de Projetos**: Showcase de projetos desenvolvidos com detalhes técnicos
- 👥 **Informações de Equipe**: Dados dos membros colaboradores dos projetos
- 🛠️ **Stack Tecnológica**: Visualização das tecnologias utilizadas em cada projeto
- 📱 **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela
- 🎨 **Interface Moderna**: Design clean e profissional com Tailwind CSS
- ⚡ **Performance Otimizada**: Carregamento rápido e experiência fluida

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React** 19.1.0 - Biblioteca JavaScript para construção de interfaces
- **TypeScript** 4.9.5 - Superset JavaScript com tipagem estática
- **React Router DOM** 7.7.0 - Roteamento para aplicações React
- **Tailwind CSS** 3.4.14 - Framework CSS utility-first
- **Lucide React** 0.525.0 - Biblioteca de ícones

### Ferramentas de Desenvolvimento
- **React Scripts** 5.0.1 - Scripts e configurações para React
- **PostCSS** 8.5.6 - Ferramenta para transformar CSS
- **Autoprefixer** 10.4.20 - Plugin PostCSS para adicionar prefixos CSS

### Testes
- **Testing Library** - Suite completa para testes React
- **Jest** - Framework de testes JavaScript
- **User Event** - Simulação de eventos de usuário

## 🚀 Instalação e Configuração

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passos para instalação

1. **Clone o repositório**
```bash
git clone https://github.com/dellacross/DCDev.git
```

2. **Acesse a pasta do projeto**
```bash
cd DCDev
```

3. **Instale as dependências**
```bash
npm install
```

4. **Execute o projeto em modo de desenvolvimento**
```bash
npm start
```

5. **Abra o navegador**
O projeto será executado em [http://localhost:3000](http://localhost:3000)

### Scripts disponíveis

```bash
# Inicia o servidor de desenvolvimento
npm start

# Gera build de produção
npm run build

# Executa os testes
npm test

# Ejeta as configurações (irreversível)
npm run eject
```

## 💻 Como Usar

### Navegação Principal

O portfólio está organizado em seções principais acessíveis através da navegação:

- **About** (`/about`) - Informações pessoais e profissionais
- **Career** (`/career`) - Experiências profissionais
- **Educational** (`/educational`) - Formação acadêmica
- **Projects** (`/projects`) - Portfólio de projetos

### Visualização de Projetos

Na seção de projetos, você encontrará:
- Descrição detalhada de cada projeto
- Tecnologias utilizadas com cores identificadoras
- Informações da equipe de desenvolvimento
- Links e recursos relacionados

### Estrutura de Dados

O projeto utiliza arquivos JSON para gerenciar:
- `src/data/projects.json` - Dados dos projetos
- `src/data/educational.json` - Informações educacionais

## 📁 Estrutura do Projeto

```
DCDev/
├── public/
│   └── index.html
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Banner.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Navbar.tsx
│   │   ├── Career/
│   │   ├── Educational/
│   │   └── Projects/
│   ├── pages/              # Páginas principais
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Educational.tsx
│   │   └── Projects.tsx
│   ├── data/               # Dados em JSON
│   │   ├── educational.json
│   │   └── projects.json
│   ├── types/              # Definições TypeScript
│   ├── utils/              # Funções utilitárias
│   ├── styles/             # Arquivos de estilo
│   └── assets/             # Recursos estáticos
├── package.json
└── README.md
```

### Reportando Bugs

Encontrou um bug? Por favor, abra uma [issue](https://github.com/dellacross/DCDev/issues) incluindo:
- Descrição detalhada do problema
- Passos para reproduzir
- Comportamento esperado vs. atual
- Screenshots (se aplicável)

## 👨‍💻 Autor

**Victor Della Croce Maltez**
- Desenvolvedor Full Stack
- GitHub: [@dellacross](https://github.com/dellacross)
- LinkedIn: [Victor Della Croce](https://linkedin.com/in/victor-della-croce)
- Email: victor@example.com

---
