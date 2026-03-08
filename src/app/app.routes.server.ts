import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }, 
  {
    path: 'celulares',
    renderMode: RenderMode.Server
  },
    {
    path: 'celulares2',
    renderMode: RenderMode.Prerender
  }
];

// RenderMode.Prerender — SSG - Conteudo não muda ou muda raramente, pode ser pré-renderizado em build time
// Landing pages / páginas institucionais
// Blog posts, documentação
// Páginas de marketing
// SEO estático

// RenderMode.Server — SSR - Conteudo muda frequentemente, precisa ser renderizado a cada requisição
// Dashboard com dados do usuário logado
// E-commerce (preço, estoque em tempo real)
// Feeds, notícias, resultados de busca
// Qualquer coisa que depende de API no momento do request


//RenderMode.Client — CSR Conteúdo que não precisa de SEO e é altamente interativo

// Área logada / admin panels
// Ferramentas internas
// Apps tipo SPA onde SEO não importa