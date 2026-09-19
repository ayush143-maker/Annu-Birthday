import { siteContent } from "../data/content";
import { PageLabel } from "../components/ui.jsx";
import TapeStrip from "../components/TapeStrip.jsx";
import {
  IconBell,
  IconCup,
  IconLock,
  IconNote,
  IconPhone,
  IconStar,
} from "../components/icons.jsx";

const ITEM_ICONS = {
  star: { Icon: IconStar, color: "text-gold" },
  cup: { Icon: IconCup, color: "text-rose" },
  note: { Icon: IconNote, color: "text-powderDeep" },
  bell: { Icon: IconBell, color: "text-rose" },
  lock: { Icon: IconLock, color: "text-gold" },
  phone: { Icon: IconPhone, color: "text-powderDeep" },
};

export default function ReceiptPage({ page }) {
  const receipt = siteContent.receipt;

  return (
    <div className="mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center gap-4 md:gap-6">
      <header className="text-center">
        <PageLabel>{page.label}</PageLabel>

        <h2 className="display-heading text-glow mt-2 text-3xl leading-tight md:text-6xl">
          Some people just make{" "}
          <span className="rounded-[10px] bg-powder px-2 italic">ordinary days</span>{" "}
          <span className="italic text-rose">better.</span>
        </h2>
      </header>

      <div className="paper-card relative w-full max-w-md rotate-[-0.5deg] px-5 pb-6 pt-8 md:px-7 md:pb-8">
        <TapeStrip className="-top-3 left-1/2 -translate-x-1/2 rotate-[-3deg]" />

        <p className="text-center text-sm font-semibold uppercase tracking-widest2 text-cocoa">
          {receipt.title}
        </p>

        <p className="mt-2 text-center text-[10px] uppercase tracking-[0.18em] text-mutedBrown/80">
          {receipt.meta}
        </p>

        <ul className="mt-4">
          {receipt.items.map((item) => {
            const meta = ITEM_ICONS[item.icon] || ITEM_ICONS.star;
            const Icon = meta.Icon;

            return (
              <li
                key={item.label}
                className="flex items-center gap-3 border-b border-dashed border-cocoa/10 py-2 last:border-0"
              >
                <Icon className={`h-4 w-4 shrink-0 ${meta.color}`} />

                <span className="flex-1 text-left text-[13px] font-medium leading-snug text-cocoa md:text-[15px]">
                  {item.label}
                </span>

                <span
                  aria-hidden="true"
                  className="mx-1 flex-1 border-b border-dotted border-mutedBrown/30"
                />

                <span className="shrink-0 font-serifDisplay text-base italic text-mutedBrown md:text-lg">
                  {item.value}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 flex items-center justify-between gap-3 rounded-[14px] border border-dashed border-gold/40 bg-softGold/30 px-4 py-3">
          <span className="font-serifDisplay text-base font-semibold text-cocoa md:text-lg">
            {receipt.totalLabel}
          </span>

          <span className="text-right text-[10px] uppercase tracking-[0.18em] text-sage md:text-[11px]">
            {receipt.totalValue}
          </span>
        </div>

        <p className="mt-4 text-center font-hand text-xl text-mutedBrown">
          {receipt.footnote}
        </p>
      </div>
    </div>
  );
}
