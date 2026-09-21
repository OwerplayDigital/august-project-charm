import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, PiggyBank, ShieldCheck } from "lucide-react";

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
  const uniplay = theme === "uniplay";
  const from = uniplay ? "var(--uniplay-from)" : "var(--goat-from)";
  const to = uniplay ? "var(--uniplay-to)" : "var(--goat-to)";
  const accent = uniplay ? "var(--uniplay-accent)" : "var(--goat-accent)";
  const shadow = uniplay
    ? "0_20px_42px_-20px_rgba(37,99,235,0.55)"
    : "0_20px_42px_-20px_rgba(234,88,12,0.55)";

  return (
    <div
      className={`relative flex min-h-[188px] flex-col overflow-hidden rounded-3xl p-4 shadow-[${shadow}]`}
      style={{
        backgroundImage: `linear-gradient(145deg, ${from}, ${to})`,
        border: "1px solid oklch(1 0 0 / 28%)",
      }}
    >
      {/* decorativos abstratos sutis */}
      <div
        className="pointer-events-none absolute -top-10 -right-8 h-28 w-28 rounded-full opacity-40 blur-2xl"
        style={{ backgroundColor: accent }}
      />
      <div
        className="pointer-events-none absolute -bottom-12 -left-6 h-32 w-40 rounded-full opacity-20"
        style={{ backgroundColor: "oklch(1 0 0)" }}
      />

      <p
        className="relative text-[0.6rem] font-semibold tracking-[0.24em] uppercase"
        style={{ color: "oklch(1 0 0 / 75%)" }}
      >
        Servidor
      </p>
      <p
        className="relative text-base font-bold tracking-wide uppercase"
        style={{ color: "var(--card-ink)" }}
      >
        {name}
      </p>

      <p
        className="relative mt-auto text-6xl leading-none font-extrabold tabular-nums"
        style={{ color: "var(--card-ink)" }}
      >
        {value}
      </p>
      <p className="relative mt-1.5 text-xs" style={{ color: "oklch(1 0 0 / 85%)" }}>
        créditos disponíveis
      </p>
    </div>
  );
}

function Index() {
  return (
    <main
      className="min-h-screen w-full px-5 py-6"
      style={{
        backgroundImage:
          "radial-gradient(120% 70% at 50% 0%, oklch(0.99 0.014 235) 0%, var(--background) 65%)",
      }}
    >
      <div className="mx-auto w-full max-w-md">
        <header className="mb-5 flex items-center gap-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-[0_10px_24px_-12px_rgba(37,99,235,0.6)]"
            style={{
              backgroundImage:
                "linear-gradient(145deg, var(--uniplay-from), var(--uniplay-to))",
            }}
          >
            <span
              className="ml-0.5 block h-0 w-0"
              style={{
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
                borderLeft: "13px solid oklch(1 0 0)",
              }}
            />
          </div>
          <div>
            <h1 className="text-2xl leading-none font-extrabold tracking-tight text-foreground">
              OWER<span style={{ color: "var(--uniplay-from)" }}>PLAY</span>
            </h1>
            <p className="mt-1 text-[0.65rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Controle de créditos
            </p>
          </div>
        </header>

        <section className="grid grid-cols-2 gap-3.5">
          <ServerCard name="Uniplay" value={68} theme="uniplay" />
          <ServerCard name="Goat" value={10} theme="goat" />
        </section>

        <section
          className="relative mt-3.5 overflow-hidden rounded-[2rem] px-5 pt-6 pb-7 shadow-[0_28px_60px_-24px_rgba(5,150,105,0.55)]"
          style={{
            backgroundImage: "linear-gradient(155deg, var(--vault-from), var(--vault-to) 92%)",
            border: "1px solid oklch(1 0 0 / 28%)",
          }}
        >
          <div
            className="pointer-events-none absolute -top-16 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full opacity-35 blur-3xl"
            style={{ backgroundColor: "var(--vault-accent)" }}
          />
          <PiggyBank
            className="pointer-events-none absolute -right-4 bottom-2 h-40 w-40 opacity-15"
            style={{ color: "oklch(1 0 0)" }}
          />

          <div className="relative flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-2xl"
              style={{ backgroundColor: "oklch(1 0 0 / 22%)" }}
            >
              <PiggyBank className="h-5 w-5" style={{ color: "var(--card-ink)" }} />
            </div>
            <div>
              <p
                className="text-sm font-bold tracking-[0.1em] uppercase"
                style={{ color: "var(--card-ink)" }}
              >
                Caixinha de reposição
              </p>
              <p
                className="mt-0.5 text-[0.6rem] font-semibold tracking-[0.22em] uppercase"
                style={{ color: "oklch(1 0 0 / 80%)" }}
              >
                Sempre um passo à frente
              </p>
            </div>
          </div>

          <p
            className="relative mt-5 text-[3.6rem] leading-none font-extrabold tabular-nums"
            style={{ color: "var(--card-ink)" }}
          >
            R$ 20,00
          </p>

          <div
            className="relative mt-5 flex items-start gap-3 rounded-2xl px-4 py-3"
            style={{
              backgroundColor: "oklch(1 0 0 / 16%)",
              border: "1px solid oklch(1 0 0 / 28%)",
            }}
          >
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "var(--card-ink)" }} />
            <p className="text-xs leading-relaxed" style={{ color: "oklch(1 0 0 / 92%)" }}>
              A cada crédito consumido, reserve <strong>R$ 10,00</strong> e mantenha seu estoque em
              dia.
            </p>
          </div>
        </section>

        <footer
          className="mt-3.5 flex items-center gap-3 rounded-2xl px-4 py-3"
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid oklch(0.22 0.04 262 / 8%)",
            boxShadow: "0 10px 26px -20px rgba(15,23,42,0.5)",
          }}
        >
          <BarChart3 className="h-5 w-5" style={{ color: "var(--uniplay-from)" }} />
          <p className="text-[0.62rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Pequenos controles,{" "}
            <span style={{ color: "var(--uniplay-from)" }}>grandes resultados.</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
