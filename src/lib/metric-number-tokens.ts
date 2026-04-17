/** Matches a stat-style number: optional +, grouped digits, optional decimals, optional %. */
const NUMBER_RE = /\+?\d{1,3}(?:,\d{3})*(?:\.\d+)?%?/g;

export type MetricToken =
  | { type: "text"; value: string }
  | { type: "num"; raw: string; trailingPlus: boolean };

export function tokenizeMetricLine(line: string): MetricToken[] {
  const tokens: MetricToken[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  NUMBER_RE.lastIndex = 0;
  while ((m = NUMBER_RE.exec(line)) !== null) {
    if (m.index > last) {
      tokens.push({ type: "text", value: line.slice(last, m.index) });
    }
    const raw = m[0];
    let end = m.index + raw.length;
    let trailingPlus = false;
    if (line[end] === "+") {
      trailingPlus = true;
      end += 1;
      NUMBER_RE.lastIndex = end;
    }
    tokens.push({ type: "num", raw, trailingPlus });
    last = end;
  }
  if (last < line.length) {
    tokens.push({ type: "text", value: line.slice(last) });
  }
  return tokens;
}

export type ParsedNumericStat = {
  end: number;
  decimals: number;
  prefix: string;
  suffix: string;
  separator?: string;
};

/** Parses a single numeric token as used in metrics (e.g. "22.7%", "+4,733"). */
export function parseNumericToken(raw: string): ParsedNumericStat {
  let s = raw;
  let prefix = "";
  if (s.startsWith("+")) {
    prefix = "+";
    s = s.slice(1);
  }
  const hasPercent = s.endsWith("%");
  const numPart = hasPercent ? s.slice(0, -1) : s;
  const suffix = hasPercent ? "%" : "";
  const normalized = numPart.replace(/,/g, "");
  const end = Number.parseFloat(normalized);
  const decPart = normalized.includes(".") ? normalized.split(".")[1] : "";
  const decimals = decPart.replace(/[^0-9]/g, "").length;
  const hasComma = numPart.includes(",");
  return {
    end: Number.isFinite(end) ? end : 0,
    decimals,
    prefix,
    suffix,
    ...(hasComma ? { separator: "," as const } : {}),
  };
}
