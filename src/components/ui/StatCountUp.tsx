"use client";

import CountUp from "react-countup";

export type StatCountUpProps = {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  duration?: number;
  delay?: number;
  className?: string;
  useGrouping?: boolean;
};

export function StatCountUp({
  end,
  decimals = 0,
  prefix = "",
  suffix = "",
  separator,
  duration = 2.2,
  delay = 0,
  className,
  useGrouping,
}: StatCountUpProps) {
  const grouping =
    useGrouping ?? (Math.abs(end) >= 1000 || Boolean(separator));

  return (
    <CountUp
      className={className}
      start={0}
      end={end}
      duration={duration}
      decimals={decimals}
      prefix={prefix}
      suffix={suffix}
      separator={separator}
      delay={delay}
      preserveValue
      enableScrollSpy
      scrollSpyOnce
      useEasing
      useGrouping={grouping}
    />
  );
}
