// Importação das funcionalidades do TanStack Router para gerenciamento de rotas
import { RouterProvider, createRouter } from "@tanstack/react-router"
// Importação da árvore de rotas gerada automaticamente
import { routeTree } from "./router-tree-gen";

// Criação da instância do roteador utilizando a árvore de rotas
const router = createRouter({ routeTree });

// Registro do roteador no módulo do TanStack Router para garantir tipagem completa (TypeScript)
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />
}

export default App;

