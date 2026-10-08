"use client";

import { useEffect, useRef, useState } from "react";

export function TemposFrame({ embed, title }: { embed: string; title: string }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const origin = new URL(embed).origin;

  useEffect(() => {
    const url = new URL(embed);
    url.search = window.location.search;
    url.hash = window.location.hash;
    setSrc(url.toString());
  }, [embed]);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== origin) return;
      const data: unknown = event.data;
      if (!data || typeof data !== "object") return;

      const message = data as { source?: unknown; search?: unknown; hash?: unknown };
      if (message.source !== "tempos" || typeof message.search !== "string") return;

      const search = message.search;
      const hash = typeof message.hash === "string" ? message.hash : "";
      const next = `${window.location.pathname}${search}${hash}`;
      const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      if (next === current) return;

      window.history.replaceState(window.history.state, "", next);
    }

    function onPopState() {
      const frame = frameRef.current;
      if (!frame) return;

      const url = new URL(embed);
      url.search = window.location.search;
      url.hash = window.location.hash;
      frame.src = url.toString();
    }

    window.addEventListener("message", onMessage);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener("popstate", onPopState);
    };
  }, [embed, origin]);

  function tellFrameWhereItLives() {
    frameRef.current?.contentWindow?.postMessage(
      { source: "tempos-parent", href: window.location.href },
      origin,
    );
  }

  if (!src) {
    return <div className="fixed inset-0 bg-[#14110e]" />;
  }

  return (
    <iframe
      ref={frameRef}
      src={src}
      title={title}
      onLoad={tellFrameWhereItLives}
      className="fixed inset-0 block h-dvh w-full border-0 bg-[#14110e]"
    />
  );
}
