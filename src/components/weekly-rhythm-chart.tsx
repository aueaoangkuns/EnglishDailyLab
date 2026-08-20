"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type WeeklyRhythmChartProps = {
  data: ReadonlyArray<{ day: string; minutes: number }>;
};

export function WeeklyRhythmChart({ data }: WeeklyRhythmChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 8, right: 4, left: -24, bottom: 0 }}>
        <CartesianGrid stroke="#edf1ee" strokeDasharray="4 4" vertical={false} />
        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#7a8580", fontSize: 12 }} dy={8} />
        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#99a29d", fontSize: 11 }} domain={[0, "auto"]} allowDecimals={false} />
        <Tooltip
          cursor={{ fill: "#f3f7f4" }}
          contentStyle={{ border: "1px solid #dfe8e2", borderRadius: 12, boxShadow: "0 8px 24px rgba(30, 60, 45, 0.08)" }}
          formatter={(value) => [`${value} min`, "Practice"]}
        />
        <Bar dataKey="minutes" fill="#59b985" radius={[7, 7, 2, 2]} maxBarSize={36} />
      </BarChart>
    </ResponsiveContainer>
  );
}
