import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OWERPLAY — Controle de créditos" },
      { name: "description", content: "Painel OwerPlay com saldos Uniplay, GOAT e caixinha de reposição." },
    ],
  }),
  component: Index,
});

function ServerCard({ name, value, variant, server }: { name: string; value: number; variant: "uni" | "goat"; server: string }) {
  const gradient =
    variant === "uni"
      ? "linear-gradient(145deg,#075ec9 0%,#0a9ed8 52%,#19c6d4 100%)"
      : "linear-gradient(145deg,#d94b08 0%,#f57612 50%,#ffb32f 100%)";

  return (
    <article
      className="relative min-h-[178px] overflow-hidden rounded-[21px] p-4 text-white shadow-[inset_0_1px_rgba(255,255,255,.27)]"
      style={{ background: gradient }}
    >
      <div className="pointer-events-none absolute -right-[52px] -top-12 h-[120px] w-[120px] rounded-full border border-white/25" />
      <div className="pointer-events-none absolute bottom-0 left-[15px] right-[15px] h-0.5 rounded-full bg-white/40" />
      <div className="text-[8px] uppercase tracking-[.22em] text-white/75">{server}</div>
      <div className="mt-1 text-[15px] font-extrabold">{name}</div>
      <div className="relative mt-[39px] text-[63px] font-black leading-[.95] tracking-[-.05em]">{value}</div>
      <div className="mt-2 text-[10px] text-white/80">créditos disponíveis</div>
    </article>
  );
}

function Index() {
  return (
    <main
      className="min-h-screen w-full px-[17px] pb-7 pt-[22px] text-[#eaf7ff]"
      style={{
        backgroundColor: "#07111d",
        backgroundImage:
          "radial-gradient(circle at 12% 0%,rgba(20,184,230,.20),transparent 30%),radial-gradient(circle at 100% 28%,rgba(255,154,53,.14),transparent 28%),linear-gradient(rgba(70,217,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(70,217,255,.035) 1px,transparent 1px)",
        backgroundSize: "auto,auto,30px 30px,30px 30px",
      }}
    >
      <div className="mx-auto w-full max-w-[430px]">
        <header className="mb-[18px] flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src="/owerplay-logo.png"
              alt="OwerPlay TV Online"
              className="h-[72px] w-[72px] shrink-0 object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,.45)]"
            />
            <div className="min-w-0">
              <strong className="mt-1 block text-[18px] leading-tight">Controle de créditos</strong>
            </div>
          </div>
        </header>

        <section className="rounded-[27px] border border-white/15 bg-white/[.055] p-[11px] shadow-[0_24px_70px_rgba(0,0,0,.38),inset_0_1px_rgba(255,255,255,.14)] backdrop-blur-[18px]">
          <div className="grid grid-cols-2 gap-[10px]">
            <ServerCard name="UNIPLAY" value={67} variant="uni" server="Servidor 01" />
            <ServerCard name="GOAT" value={9} variant="goat" server="Servidor 02" />
          </div>

          <section
            className="relative mt-[11px] overflow-hidden rounded-[22px] border border-[#9dffe24a] p-[21px] shadow-[inset_0_1px_rgba(255,255,255,.22)]"
            style={{ background: "linear-gradient(140deg,#075d4a 0%,#07946c 48%,#18c58e 100%)" }}
          >
            <div className="pointer-events-none absolute -right-[88px] -top-[78px] h-[205px] w-[205px] rounded-full border border-[#b6ffe455] shadow-[0_0_55px_rgba(67,245,184,.16)]" />
            <div className="pointer-events-none absolute -bottom-12 right-4 h-[90px] w-[90px] rounded-full bg-white/[.07]" />

            <div className="relative flex items-start justify-between gap-2">
              <div>
                <strong className="text-[15px]">Caixinha de reposição</strong>
                <span className="mt-1 block text-[8px] uppercase tracking-[.18em] text-white/70">Reserva operacional</span>
              </div>
              <span className="rounded-full border border-white/25 bg-white/[.09] px-[9px] py-[7px] text-[8px] tracking-[.12em] text-[#d9fff3]">
                EM DIA
              </span>
            </div>

            <div className="relative mb-[17px] mt-[27px] text-[58px] font-black leading-none tracking-[-.05em]">R$ 30,00</div>
            <div className="relative h-[7px] overflow-hidden rounded-full border border-white/10 bg-[#002d2466]">
              <span className="block h-full w-[8%] bg-gradient-to-r from-[#a6ffe1] to-white" />
            </div>
            <div className="relative mt-[9px] flex justify-between gap-2 text-[9px] text-[#d2f8ebcc]">
              <span>Acumulado atual</span>
              <span>Meta R$ 375</span>
            </div>
          </section>
        </section>

        <footer className="mt-[14px] text-center text-[8px] uppercase tracking-[.2em] text-[#536b7d]">
          OwerPlay • controle inteligente
        </footer>
      </div>
    </main>
  );
}
