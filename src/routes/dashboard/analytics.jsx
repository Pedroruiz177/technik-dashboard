import React, { useState } from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import { DollarSign, ArrowDown, ArrowUp, Calendar } from "lucide-react";

const exampleData = [
    { name: "Jan", total: 1200 },
    { name: "Feb", total: 2100 },
    { name: "Mar", total: 800 },
    { name: "Apr", total: 1600 },
    { name: "May", total: 900 },
    { name: "Jun", total: 1700 },
];

const KPI = ({ icon: Icon, label, value, color }) => (
    <div className="flex items-center gap-4 rounded-xl bg-gray-900 p-4 text-white shadow-md">
        <div
            className={`rounded-full bg-opacity-20 p-2`}
            style={{ backgroundColor: color }}
        >
            <Icon
                className="h-6 w-6"
                color={color}
            />
        </div>
        <div>
            <p className="text-sm text-gray-400">{label}</p>
            <p className="text-xl font-bold">{value}</p>
        </div>
    </div>
);

const OverviewCard = ({ title, data, color = "#2563eb" }) => (
    <div className="col-span-1 rounded-xl bg-gray-900 p-4 text-white shadow-md md:col-span-2 lg:col-span-3">
        <p className="mb-2 text-lg font-semibold">{title}</p>
        <ResponsiveContainer
            width="100%"
            height={250}
        >
            <AreaChart
                data={data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient
                        id={`color-${title}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop
                            offset="5%"
                            stopColor={color}
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor={color}
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <Tooltip
                    cursor={false}
                    formatter={(value) => `$${value}`}
                />
                <XAxis
                    dataKey="name"
                    stroke="#94a3b8"
                    tickMargin={6}
                />
                <YAxis
                    dataKey="total"
                    stroke="#94a3b8"
                    tickFormatter={(value) => `$${value}`}
                    tickMargin={6}
                />
                <Area
                    type="monotone"
                    dataKey="total"
                    stroke={color}
                    fillOpacity={1}
                    fill={`url(#color-${title})`}
                />
            </AreaChart>
        </ResponsiveContainer>
    </div>
);

const PeriodFilter = ({ selected, setSelected }) => {
    return (
        <div className="mb-6 flex items-center gap-2 text-white">
            <Calendar className="h-5 w-5 text-gray-400" />
            <select
                className="rounded bg-gray-800 px-3 py-1 text-white"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
            >
                <option value="6m">Últimos 6 meses</option>
                <option value="1y">Último ano</option>
                <option value="all">Tudo</option>
            </select>
        </div>
    );
};

const AnalyticPage = () => {
    const [period, setPeriod] = useState("6m");

    return (
        <div className="min-h-screen bg-gray-950 p-6">
            <h1 className="mb-6 text-2xl font-bold text-white">Análige Geral</h1>

            <PeriodFilter
                selected={period}
                setSelected={setPeriod}
            />

            {/* KPIs */}
            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <KPI
                    icon={DollarSign}
                    label="Total Receita"
                    value="R$ 12.400"
                    color="#10b981"
                />
                <KPI
                    icon={ArrowDown}
                    label="Despesas"
                    value="R$ 6.200"
                    color="#ef4444"
                />
                <KPI
                    icon={ArrowUp}
                    label="Lucro Líquido"
                    value="R$ 6.200"
                    color="#3b82f6"
                />
            </div>

            {/* Gráficos */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
                <OverviewCard
                    title="Receita Mensal"
                    data={exampleData}
                    color="#10b981"
                />
                <OverviewCard
                    title="Despesas Mensais"
                    data={exampleData}
                    color="#ef4444"
                />
                <OverviewCard
                    title="Lucro Líquido"
                    data={exampleData}
                    color="#3b82f6"
                />
            </div>
        </div>
    );
};

export default AnalyticPage;
