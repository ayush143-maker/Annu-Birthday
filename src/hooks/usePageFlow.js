import { useCallback, useMemo, useState } from "react";
import { siteContent } from "../data/content";

export function usePageFlow() {
  const pages = useMemo(() => siteContent.pages, []);
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const pageCount = pages.length;
  const page = pages[pageIndex];

  const hasNext = pageIndex < pageCount - 1;
  const hasPrev = pageIndex > 0;

  const goTo = useCallback(
    (index) => {
      const clamped = Math.min(Math.max(index, 0), pageCount - 1);
      setDirection(clamped >= pageIndex ? 1 : -1);
      setPageIndex(clamped);
    },
    [pageCount, pageIndex]
  );

  const next = useCallback(() => {
    goTo(pageIndex + 1);
  }, [goTo, pageIndex]);

  const prev = useCallback(() => {
    goTo(pageIndex - 1);
  }, [goTo, pageIndex]);

  const replay = useCallback(() => {
    setDirection(-1);
    setPageIndex(0);
  }, []);

  return {
    pages,
    page,
    pageIndex,
    pageCount,
    direction,
    hasNext,
    hasPrev,
    goTo,
    next,
    prev,
    replay,
  };
}
