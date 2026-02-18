# Sistema de Cadastro de OS

Projeto de **Sistema de Ordem de Serviço (OS)** desenvolvido para uso em navegador, com foco em **Android offline**. Permite cadastrar, editar, excluir e calcular lucro de ordens de serviço com peças e mão de obra.

---

## Funcionalidades

- Cadastro de OS com número, status, peças e valores.
- Lista completa de peças:
  - Capacitor
  - Fusível
  - Chave
  - Mag Novo
  - Mag Recon
  - Pintura
  - Membrana
- Cálculo automático de:
  - Mão de obra
  - Comissão (33%)
  - Lucro técnico por período
- Edição e exclusão de OS existentes.
- Filtragem por status da OS.
- Símbolo ✅ nas OS finalizadas.
- Responsivo para telas de celulares.
- Rodapé com assinatura do desenvolvedor injetado automaticamente via `footer.html` e `footer.js`.
- Armazenamento local via `localStorage` (funciona offline).

---
CadastroOS/
│
├── index.html # Página principal
├── style.css # Estilos do projeto
├── app.js # Lógica do sistema de OS
├── footer.html # Rodapé de desenvolvedor
└── footer.js # Script que injeta o rodapé automaticamente
## Estrutura do projeto
Como usar

No campo Número da OS, insira o número da ordem de serviço.

Informe o valor total da OS.

Selecione o status da OS.

Marque as peças utilizadas e insira os valores correspondentes.

Clique em Salvar OS.

Para filtrar, escolha um status e clique em Buscar.

Para calcular o lucro técnico por período, selecione as datas e clique em Calcular.

OS finalizadas aparecem com ✅ no título.

Personalização

O rodapé do desenvolvedor é carregado automaticamente via footer.html e footer.js.
Para reutilizar em outros projetos, basta copiar esses arquivos e incluir <script src="footer.js"></script> antes do </body>.

Tecnologias utilizadas

HTML5

CSS3

JavaScript (ES6)

localStorage para armazenamento offline

Autor

Dony_Dev – Full Stack Developer
© 2026

Observações

Projeto otimizado para uso em navegadores mobile (Android).

Layout responsivo e simples para fácil navegação.

Fundo cinza claro e cards brancos com sombra para contraste.

Botões azuis destacados para melhor visualização.
