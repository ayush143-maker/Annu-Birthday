import { siteContent } from "../data/content";
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
    <div className="mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center gap-3 md:gap-6">
      <h2 className="display-heading text-glow px-4 text-center text-[22px] leading-snug md:text-6xl md:leading-tight">
        Some people just make{" "}
        <span className="rounded-[8px] bg-powder px-1.5 italic md:rounded-[10px] md:px-2">
          ordinary days
        </span>{" "}
        <span className="italic text-rose">better.</span>
      </h2>

      <div className="paper-card relative w-full max-w-[340px] rotate-[-0.6deg] px-4 pb-5 pt-6 md:max-w-md md:px-7 md:pb-8 md:pt-8">
        <TapeStrip className="-top-3 left-1/2 -translate-x-1/2 rotate-[-3deg]" />

        <p className="text-center text-xs font-semibold uppercase tracking-widest2 text-cocoa md:text-sm">
          {receipt.title}
        </p>

        <p className="mt-1.5 text-center text-[9px] uppercase tracking-[0.14em] text-mutedBrown/80 md:text-[10px]">
          {receipt.meta}
        </p>

        <ul className="mt-3 md:mt-5">
          {receipt.items.map((item) => {
            const meta = ITEM_ICONS[item.icon] || ITEM_ICONS.star;
            const Icon = meta.Icon;

            return (
              <li
                key={item.label}
                className="flex items-center gap-2 border-b border-dashed border-cocoa/10 py-1.5 last:border-0 md:gap-3 md:py-2.5"
              >
                <Icon className={`h-3.5 w-3.5 shrink-0 ${meta.color} md:h-4 md:w-4`} />

                <span className="flex-1 text-left text-[12px] font-medium leading-tight text-cocoa md:text-[15px]">
                  {item.label}
                </span>

                <span
                  aria-hidden="true"
                  className="mx-0.5 min-w-[12px] flex-1 border-b border-dotted border-mutedBrown/25 md:mx-1"
                />

                <span className="shrink-0 whitespace-nowrap font-serifDisplay text-[13px] italic text-mutedBrown md:text-lg">
                  {item.value}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="mt-3 flex flex-col items-center gap-0.5 rounded-[12px] border border-dashed border-gold/40 bg-softGold/30 px-3 py-2 text-center md:mt-5 md:px-4 md:py-3">
          <span className="font-serifDisplay text-[13px] font-semibold text-cocoa md:text-lg">
            {receipt.totalLabel}
          </span>

          <span className="text-[9px] uppercase tracking-[0.16em] text-sage md:text-[11px]">
            {receipt.totalValue}
          </span>
        </div>

        <p className="mt-3 text-center font-hand text-lg text-mutedBrown md:mt-4 md:text-xl">
          {receipt.footnote}
        </p>
      </div>
    </div>
  );
}
