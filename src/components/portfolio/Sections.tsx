import { useState, type FormEvent } from "react";
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, Menu, X, Code2, FolderOpen } from "lucide-react";
import { highlights, profile, projects, techGroups } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const container = "mx-auto w-full max-w-5xl px-6";
const btnPrimary =
  "inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110 hover:-translate-y-0.5";
const btnGhost =
  "inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className={`${container} flex h-16 items-center justify-between`}>
        <a href="#inicio" className="font-bold tracking-tight">
          Clara<span className="text-primary">.</span>Fagundes
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-7 text-sm text-muted-foreground">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition hover:text-primary">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden p-2"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="md:hidden border-t border-border bg-background">
          <ul className={`${container} flex flex-col py-3`}>
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block py-3 text-muted-foreground hover:text-primary">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Socials({ size = 18 }: { size?: number }) {
  return (
    <div className="flex gap-4 text-muted-foreground">
      <a href={profile.github} {...ext} aria-label="GitHub" className="transition hover:text-primary"><Github size={size} /></a>
      <a href={profile.linkedin} {...ext} aria-label="LinkedIn" className="transition hover:text-primary"><Linkedin size={size} /></a>
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className={`${container} flex min-h-screen flex-col justify-center pt-24 pb-16`}>
      <Reveal>
        <p className="section-label">Portfólio • Desenvolvimento Web</p>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
          Olá, me chamo <span className="text-primary">Clara Fagundes.</span>
        </h1>
        <p className="mt-4 text-xl font-medium text-muted-foreground md:text-2xl">
          Transformando ideias em experiências digitais.
        </p>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Sou uma desenvolvedora web apaixonada por tecnologia, criação de soluções digitais e aprendizado contínuo. Gosto de
          transformar ideias em projetos funcionais, desenvolver interfaces intuitivas e explorar novas possibilidades por meio
          da programação. Meu objetivo é evoluir constantemente como profissional, aprimorar minhas habilidades e contribuir
          para projetos que gerem impacto real.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#projetos" className={btnPrimary}>Ver meus projetos <ArrowRight size={16} /></a>
          <a href="#contato" className={btnGhost}>Entre em contato</a>
          <div className="ml-2"><Socials /></div>
        </div>
      </Reveal>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className={`${container} py-24`}>
      <SectionHeading label="01 — Sobre" title="Um pouco sobre mim" />
      <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
        <Reveal className="space-y-5 leading-relaxed text-muted-foreground">
          <p>Meu interesse pela tecnologia nasceu da curiosidade em entender como as coisas funcionam por trás das telas — e logo virou vontade de construir.</p>
          <p>Gosto de aprender fazendo: estudar um conceito, colocar em prática em um projeto e revisar até que o código fique claro, organizado e fácil de manter.</p>
          <p>Hoje busco evoluir como desenvolvedora web, colaborar com outras pessoas e participar de projetos que façam diferença para quem os utiliza.</p>
        </Reveal>
        <Reveal>
          <ul className="grid gap-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden /> {h}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Technologies() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };
  const arrowBtn =
    "absolute top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 text-muted-foreground backdrop-blur transition hover:border-primary hover:text-primary";
  return (
    <section id="tecnologias" className={`${container} py-24`}>
      <SectionHeading label="02 — Stack" title="Tecnologias e ferramentas">
        Tecnologias que utilizo e estudo no meu dia a dia.
      </SectionHeading>
      <div className="relative">
        <button type="button" aria-label="Tecnologias anteriores" onClick={() => scrollBy(-1)} className={`${arrowBtn} -left-3`}>
          <ChevronLeft size={18} />
        </button>
        <div
          ref={trackRef}
          role="list"
          aria-label="Tecnologias"
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-2 pl-1 pr-10"
        >
          {techGroups.flatMap((g) => g.items).map((t) => (
            <div
              key={t.name}
              role="listitem"
              className="flex min-w-[110px] snap-start flex-col items-center gap-3 rounded-xl border border-border bg-card px-4 py-5 transition hover:-translate-y-0.5 hover:border-primary/60"
            >
              <img src={`https://cdn.simpleicons.org/${t.icon}/A78BFA`} alt={`Ícone do ${t.name}`} width={28} height={28} loading="lazy" />
              <span className="text-xs font-medium text-muted-foreground">{t.name}</span>
            </div>
          ))}
        </div>
        <button type="button" aria-label="Próximas tecnologias" onClick={() => scrollBy(1)} className={`${arrowBtn} -right-3`}>
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projetos" className={`${container} py-24`}>
      <SectionHeading label="03 — Trabalhos" title="Projetos em destaque">
        Alguns projetos que representam minha jornada, minhas habilidades e minha evolução no desenvolvimento web.
      </SectionHeading>
      {projects.length === 0 ? (
        <Reveal className="rounded-2xl border border-dashed border-border bg-card/50 px-6 py-16 text-center">
          <FolderOpen className="mx-auto text-primary" size={32} aria-hidden />
          <p className="mt-4 text-lg font-semibold">Novos projetos em breve</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Estou preparando projetos para compartilhar aqui. Enquanto isso, acompanhe meu trabalho no GitHub.
          </p>
          <a href={profile.github} {...ext} className={`${btnGhost} mt-6`}><Github size={16} /> Acompanhar no GitHub</a>
        </Reveal>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <article className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/60">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img src={p.image} alt={`Captura de tela do projeto ${p.title}`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground">{t}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-5 text-sm font-semibold">
                    {p.liveUrl && <a href={p.liveUrl} {...ext} className="inline-flex items-center gap-1.5 text-primary hover:underline">Ver projeto <ExternalLink size={14} /></a>}
                    {p.repoUrl && <a href={p.repoUrl} {...ext} className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary"><Code2 size={14} /> Ver código</a>}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const message = String(f.get("message") || "").trim();
    const errs: Errors = {};
    if (name.length < 2) errs.name = "Informe seu nome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Informe um e-mail válido.";
    if (message.length < 10) errs.message = "A mensagem deve ter pelo menos 10 caracteres.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name} <${email}>`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field = "mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary aria-[invalid=true]:border-destructive";

  return (
    <section id="contato" className={`${container} py-24`}>
      <SectionHeading label="04 — Contato" title="Vamos conversar?">
        Tem uma oportunidade, uma ideia ou gostaria de conhecer melhor meu trabalho? Entre em contato. Ficarei feliz em conversar com você!
      </SectionHeading>
      <div className="grid gap-10 md:grid-cols-[2fr_3fr]">
        <Reveal>
          <ul className="space-y-3">
            {[
              { href: `mailto:${profile.email}`, icon: Mail, label: "E-mail", value: profile.email, external: false },
              { href: profile.linkedin, icon: Linkedin, label: "LinkedIn", value: "Perfil profissional", external: true },
              { href: profile.github, icon: Github, label: "GitHub", value: "Projetos e código", external: true },
            ].map(({ href, icon: Icon, label, value, external }) => (
              <li key={label}>
                <a href={href} {...(external ? ext : {})} className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 transition hover:border-primary/60">
                  <Icon size={20} className="text-primary" aria-hidden />
                  <span>
                    <span className="block text-sm font-semibold">{label}</span>
                    <span className="block text-xs text-muted-foreground">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <form noValidate onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-6">
            {(["name", "email", "message"] as const).map((k) => {
              const label = { name: "Nome", email: "E-mail", message: "Mensagem" }[k];
              const props = { id: k, name: k, className: field, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined };
              return (
                <div key={k}>
                  <label htmlFor={k} className="text-sm font-medium">{label}</label>
                  {k === "message" ? <textarea rows={5} {...props} /> : <input type={k === "email" ? "email" : "text"} autoComplete={k} {...props} />}
                  {errors[k] && <p id={`${k}-error`} role="alert" className="mt-1.5 text-xs text-destructive">{errors[k]}</p>}
                </div>
              );
            })}
            <button type="submit" className={btnPrimary}>Enviar mensagem <ArrowRight size={16} /></button>
            <p className="text-xs text-muted-foreground" aria-live="polite">
              {sent ? "Seu aplicativo de e-mail foi aberto com a mensagem pronta para envio." : "Ao enviar, seu aplicativo de e-mail será aberto com a mensagem preenchida."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className={`${container} flex flex-col items-center justify-between gap-4 py-10 text-sm text-muted-foreground md:flex-row`}>
        <div>
          <p className="font-semibold text-foreground">Clara Fagundes</p>
          <p>Desenvolvido com dedicação e café.</p>
        </div>
        <Socials />
        <p>© {new Date().getFullYear()} Clara Fagundes. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
