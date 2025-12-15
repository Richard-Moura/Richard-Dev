export default function Projects() {
  const projetos = [
    {
      nome: 'comércio eletrônico-carros-de-luxo',
      descricao: 'LuxCars é uma plataforma que conecta entusiastas a carros de luxo exclusivos, oferecendo uma experiência completa de navegação, visualização e compra. Com catálogo curado, avaliação profissional de cada veículo, financiamento facilitado, atendimento personalizado e suporte pós-venda.',
      link: 'https://richard-moura.github.io/ecommerce-luxury-cars/'
    },
    {
      nome: 'Dashboard interativo',
      descricao: 'Este é um Dashboard interativo desenvolvido em React e TypeScript com suporte a modo claro/escuro e personalizado de núcleos do tema.',
      link: 'https://richard-moura.github.io/meu-dashboard/'
    },
    {
      nome: 'Minha pokédex',
      descricao: 'Um projeto de Pokédex desenvolvido em React e TypeScript , consumindo a API pública PokéAPI para buscar informações de Pokémon. O projeto é responsivo, possui tema claro/escuro e foi desenvolvido como exemplo para portfólio.',
      link: 'https://richard-moura.github.io/my-pokedex/'
    },
    {
      nome: 'Lista de tarefas',
      descricao: 'Uma aplicação simples de Lista de Tarefas desenvolvida em React com TypeScript , que permite adicionar, marcar como concluídas e remover tarefas. Os dados são persistidos no LocalStorage , garantindo que as tarefas permaneçam mesmo após atualizar a página.',
      link: 'https://richard-moura.github.io/todo-list/'
    },
    {
      nome: 'Meu Portfólio',
      descricao: 'Bem-vindo ao meu portfólio online! Aqui você encontra meus projetos, habilidades e informações sobre minha formação. Desenvolvido com HTML5, CSS3 e JavaScript.',
      link: 'https://richard-moura.github.io/Portifolio/'
    },
    {
      nome: 'Projeto Rede Social',
      descricao: 'Projeto estático que simula um smartphone no centro da tela e, dentro dele, carrega telas de redes sociais via iframe. Cada tela exibe uma imagem estática e um botão ACESSE com o link real da rede.',
      link: 'https://richard-moura.github.io/projeto-rede-social/'
    },   
    {
      nome: 'Loja React',
      descricao: 'Projeto de e-commerce simples com React + Vite, com carrinho, checkout simulado e header fixo.',
      link: 'https://richard-moura.github.io/my-ecommerce/'
    },
    
  ];

  return (
    <section id="projetos" className="container">
      <h2>Projetos</h2>
      <div className="project-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((p, i) => (
          <article className="project-card border p-4 rounded shadow hover:shadow-lg transition" key={i}>
            <h3 className="text-lg font-semibold mb-2">{p.nome}</h3>
            <p className="mb-4">{p.descricao}</p>
            <a 
              className="btn-small bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition" 
              href={p.link} 
              target="_blank" 
              rel="noreferrer"
              title={`Abrir ${p.nome} em nova aba`}
            >
              Ver projeto
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

