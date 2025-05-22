import React, { useState } from "react";
import { Plus, Search, FileDown } from "lucide-react";
import * as XLSX from "xlsx";

const initialFaturas = [
    { nome: "Fatura 1", valor: 120.5, vencimento: "2024-06-10", status: "Paga" },
    { nome: "Fatura 2", valor: 89.99, vencimento: "2024-06-20", status: "Pendente" },
    { nome: "Fatura 3", valor: 200.0, vencimento: "2024-05-10", status: "Atrasada" },
];

const FaturasPage = () => {
    const [faturas, setFaturas] = useState(initialFaturas);
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [novaFatura, setNovaFatura] = useState({
        nome: "",
        valor: "",
        vencimento: "",
        status: "Pendente",
    });

    const filteredFaturas = faturas.filter((f) => f.nome.toLowerCase().includes(search.toLowerCase()));

    const handleAddFatura = () => {
        setFaturas([...faturas, novaFatura]);
        setNovaFatura({ nome: "", valor: "", vencimento: "", status: "Pendente" });
        setShowModal(false);
    };

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(faturas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Faturas");
        XLSX.writeFile(workbook, "faturas.xlsx");
    };

    return (
        <div className="min-h-screen bg-gray-950 p-6 text-white">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div className="relative w-full md:max-w-md">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar fatura..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-md bg-gray-800 px-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-2 rounded bg-indigo-700 px-5 py-3 text-sm font-semibold hover:bg-indigo-800"
                    >
                        <Plus size={18} /> Nova Fatura
                    </button>
                    <button
                        onClick={exportToExcel}
                        className="flex items-center gap-2 rounded bg-green-700 px-5 py-3 text-sm font-semibold hover:bg-green-800"
                    >
                        <FileDown size={18} /> Exportar
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto rounded-lg bg-gray-900 shadow-lg">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Nome</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Valor</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Vencimento</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredFaturas.map((fatura, idx) => (
                            <tr
                                key={idx}
                                className="border-t border-gray-800"
                            >
                                <td className="px-6 py-4">{fatura.nome}</td>
                                <td className="px-6 py-4">R$ {fatura.valor.toFixed(2)}</td>
                                <td className="px-6 py-4">{fatura.vencimento}</td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                                            fatura.status === "Paga"
                                                ? "bg-green-700 text-white"
                                                : fatura.status === "Pendente"
                                                  ? "bg-yellow-600 text-white"
                                                  : "bg-red-700 text-white"
                                        }`}
                                    >
                                        {fatura.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal para nova fatura */}
            {showModal && (
                <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-full max-w-md rounded-xl bg-gray-900 p-6">
                        <h2 className="mb-4 text-lg font-bold">Nova Fatura</h2>

                        <input
                            type="text"
                            placeholder="Nome"
                            value={novaFatura.nome}
                            onChange={(e) => setNovaFatura({ ...novaFatura, nome: e.target.value })}
                            className="mb-3 w-full rounded bg-gray-800 p-2 text-white placeholder-gray-400"
                        />
                        <input
                            type="number"
                            placeholder="Valor"
                            value={novaFatura.valor}
                            onChange={(e) => setNovaFatura({ ...novaFatura, valor: parseFloat(e.target.value) })}
                            className="mb-3 w-full rounded bg-gray-800 p-2 text-white placeholder-gray-400"
                        />
                        <input
                            type="date"
                            value={novaFatura.vencimento}
                            onChange={(e) => setNovaFatura({ ...novaFatura, vencimento: e.target.value })}
                            className="mb-3 w-full rounded bg-gray-800 p-2 text-white"
                        />
                        <select
                            value={novaFatura.status}
                            onChange={(e) => setNovaFatura({ ...novaFatura, status: e.target.value })}
                            className="mb-4 w-full rounded bg-gray-800 p-2 text-white"
                        >
                            <option value="Pendente">Pendente</option>
                            <option value="Paga">Paga</option>
                            <option value="Atrasada">Atrasada</option>
                        </select>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="rounded bg-gray-700 px-4 py-2 text-sm hover:bg-gray-600"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleAddFatura}
                                className="rounded bg-indigo-700 px-4 py-2 text-sm hover:bg-indigo-800"
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FaturasPage;
