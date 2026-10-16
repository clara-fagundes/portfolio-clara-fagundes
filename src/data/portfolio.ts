// Edite aqui seus dados pessoais, tecnologias e projetos.

export const profile = {
  name: "Clara Fagundes",
  email: "cfagundes236@gmail.com", //
  github: "https://github.com/clara-fagundes", 
  linkedin: "https://www.linkedin.com/in/clara-fagundes", 
};

export const highlights = [
  "Aprendizado contínuo",
  "Desenvolvimento de soluções web",
  "Boas práticas de programação",
  "Interesse em novos desafios",
];

export type Tech = { name: string; icon: string };
export const techGroups: { title: string; items: Tech[] }[] = [
  {
    title: "Front-end",
    items: [  
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "react" },
    ],
  },
  { title: "Back-end", items: [{ name: "PHP", icon: "php" }, { name: "Laravel", icon: "laravel" }] },
  { title: "Banco de dados", items: [{ name: "MySQL", icon: "mysql" }] },
  {
    title: "Ferramentas e versionamento",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitLab", icon: "gitlab" },
    ],
  },
  { title: "Prototipagem", items: [{ name: "Figma", icon: "figma" }] },
];

export type Project = {
  title: string;
  description: string;
  image: string; // URL ou import de imagem
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

// Adicione, remova ou reordene projetos nesta lista. Vazia = estado vazio elegante.
export const projects: Project[] = [];
