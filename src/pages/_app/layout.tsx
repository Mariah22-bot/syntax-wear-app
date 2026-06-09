import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

// Define a configuração da rota para este layout. 
// O caminho '/_app' indica que este é um layout compartilhado (usando uma rota sem caminho visível na URL).
export const Route = createFileRoute('/_app')({
    component: AppLAyout,
})

/**
 * Componente de Layout principal da aplicação.
 * Ele define a estrutura comum (Header e Footer) que envolverá as páginas filhas.
 */
function AppLAyout() {
    return (
        <div>
            {/* O Header aparece no topo de todas as páginas que usam este layout */}
            <Header />

            {/* 
                O Outlet é um componente do TanStack Router que funciona como um "espaço reservado".
                É aqui que o conteúdo das rotas filhas será renderizado.
            */}
            <Outlet />

            {/* O Footer aparece no final de todas as páginas que usam este layout */}
            <Footer />
        </div>
    )
}
