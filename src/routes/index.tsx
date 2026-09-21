import { createFileRoute } from "@tanstack/react-router";
import { PiggyBank } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OWERPLAY — Controle de créditos" },
      {
        name: "description",
        content: "Painel rápido com os saldos de créditos Uniplay, GOAT e a caixinha de reposição.",
      },
      { property: "og:title", content: "OWERPLAY — Controle de créditos" },
      {
        property: "og:description",
        content: "Saldos de créditos Uniplay e GOAT e o valor da caixinha de reposição.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function ServerCard({
  name,
  value,
  theme,
}: {
  name: string;
  value: number;
  theme: "uniplay" | "goat";
}) {
  const from = theme === "uniplay" ? "var(--uniplay-from)" : "var(--goat-from)";
  const to = theme === "uniplay" ? "var(--uniplay-to)" : "var(--goat-to)";
  const accent = theme === "uniplay" ? "var(--uniplay-accent)" : "var(--goat-accent)";

  return (
    <div
      className="relative overflow-hidden rounded-3xl px-5 py-5 shadow-[0_18px_40px_-22px_rgba(29,78,216,0.45)]"
      style={{
        backgroundImage: `linear-gradient(150deg, ${from}, ${to})`,
        border: "1px solid var(--surface-border)",
      }}
    >
      <div
        className="pointer-events-none absolute -top-16 -right-10 h-32 w-32 rounded-full opacity-45 blur-2xl"
        style={{ backgroundColor: accent }}
      />
      <p
        className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase"
        style={{ color: accent }}
      >
        {name}
      </p>
      <p
        className="mt-2 text-5xl leading-none font-semibold tabular-nums"
        style={{ color: "var(--card-ink)" }}
      >
        {value}
      </p>
      <p className="mt-2 text-xs" style={{ color: "oklch(1 0 0 / 80%)" }}>
        créditos disponíveis
      </p>
    </div>
  );
}

function Index() {
  return (
    <main
      className="min-h-screen w-full px-5 py-7"
      style={{
        backgroundImage:
          "radial-gradient(120% 70% at 50% 0%, oklch(0.99 0.012 240) 0%, var(--background) 65%)",
      }}
    >
      <div className="mx-auto w-full max-w-md">
        <header className="mb-6">
          <h1 className="text-xl font-semibold tracking-[0.18em] text-foreground uppercase">
            Owerplay
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">Controle de créditos</p>
          <p className="mt-2 text-[0.68rem] tracking-wide text-muted-foreground/70">
            Atualizado em 20/09/2026
          </p>
        </header>

        <section className="grid grid-cols-2 gap-3">
          <ServerCard name="Uniplay" value={68} theme="uniplay" />
          <ServerCard name="Goat" value={10} theme="goat" />
        </section>

        <section
          className="relative mt-5 overflow-hidden rounded-[2rem] px-6 py-9 shadow-[0_28px_60px_-26px_rgba(5,150,105,0.5)]"
          style={{
            backgroundImage:
              "linear-gradient(160deg, var(--vault-from), var(--vault-to) 90%)",
            border: "1px solid var(--surface-border)",
          }}
        >
          <div
            className="pointer-events-none absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
            style={{ backgroundColor: "var(--vault-accent)" }}
          />
          <div className="relative flex items-center gap-3">
            <PiggyBank className="h-5 w-5" style={{ color: "var(--vault-accent)" }} />
            <p
              className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase"
              style={{ color: "var(--vault-accent)" }}
            >
              Caixinha de reposição
            </p>
          </div>
          <p
            className="relative mt-4 text-[3.25rem] leading-none font-semibold tabular-nums"
            style={{ color: "var(--card-ink)" }}
          >
            R$ 20,00
          </p>
          <p className="relative mt-4 text-xs" style={{ color: "oklch(1 0 0 / 85%)" }}>
            A cada crédito consumido, reserve R$ 10.
          </p>
        </section>
      </div>
    </main>
  );
}
