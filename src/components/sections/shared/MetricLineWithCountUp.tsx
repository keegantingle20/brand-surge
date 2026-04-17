"use client";

import { Fragment } from "react";
import { StatCountUp } from "@/components/ui/StatCountUp";
import {
  parseNumericToken,
  tokenizeMetricLine,
} from "@/lib/metric-number-tokens";

export function MetricLineWithCountUp({ line }: { line: string }) {
  const tokens = tokenizeMetricLine(line);
  let numIndex = 0;

  return (
    <>
      {tokens.map((tok, i) => {
        if (tok.type === "text") {
          return <Fragment key={`t-${i}`}>{tok.value}</Fragment>;
        }
        const parsed = parseNumericToken(tok.raw);
        const suffix = `${parsed.suffix}${tok.trailingPlus ? "+" : ""}`;
        const delay = numIndex * 0.05;
        numIndex += 1;
        return (
          <StatCountUp
            key={`n-${i}-${tok.raw}`}
            className="tabular-nums"
            end={parsed.end}
            decimals={parsed.decimals}
            prefix={parsed.prefix}
            suffix={suffix}
            separator={parsed.separator}
            duration={1.9}
            delay={delay}
          />
        );
      })}
    </>
  );
}
