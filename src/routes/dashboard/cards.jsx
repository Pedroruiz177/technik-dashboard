import React, { useState } from "react";
import { Pencil, Search, Plus } from "lucide-react";

const COLORS = [
    { label: "Roxo", value: "from-purple-800 to-indigo-900" },
    { label: "Verde", value: "from-green-800 to-teal-900" },
    { label: "Rosa", value: "from-pink-800 to-rose-900" },
    { label: "Amarelo", value: "from-yellow-700 to-orange-800" },
    { label: "Azul", value: "from-blue-800 to-cyan-900" },
];

// Modal simples
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <>
            <div
                className="fixed inset-0 z-40 bg-black bg-opacity-60"
                onClick={onClose}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    className="w-full max-w-md rounded-xl bg-gray-900 p-6 shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </>
    );
};

const CreditCard = ({ name, last4, expiry, onEdit, selected, colorClass }) => {
    return (
        <div
            className={`h-[200px] w-[320px] rounded-3xl bg-gradient-to-br p-5 text-white shadow-xl ${colorClass} transform transition-transform duration-300 ${
                selected ? "z-20 scale-105" : ""
            } relative flex flex-col justify-between`}
        >
            <div className="text-lg font-extrabold tracking-widest">**** **** **** {last4}</div>
            <div>
                <div className="text-xs uppercase opacity-70">Nome no Cartão</div>
                <div className="text-base font-semibold">{name}</div>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-xs uppercase opacity-70">Validade</div>
                    <div className="text-base font-semibold">{expiry}</div>
                </div>
                <button
                    onClick={onEdit}
                    className="flex items-center gap-1 rounded  px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-900"
                >
                    <Pencil size={16} /> Editar
                </button>
            </div>
        </div>
    );
};

const CreditCardList = () => {
    const [cards, setCards] = useState([
        { name: "João Silva", last4: "1234", expiry: "12/24", colorClass: COLORS[0].value },
        { name: "Maria Oliveira", last4: "5678", expiry: "09/23", colorClass: COLORS[1].value },
        { name: "Carlos Pereira", last4: "9012", expiry: "01/25", colorClass: COLORS[2].value },
        { name: "Ana Costa", last4: "3456", expiry: "06/22", colorClass: COLORS[3].value },
        { name: "Lucas Almeida", last4: "7890", expiry: "11/24", colorClass: COLORS[4].value },
    ]);

    const [search, setSearch] = useState("");
    const [selectedCard, setSelectedCard] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    // Form states para modal
    const [formName, setFormName] = useState("");
    const [formLast4, setFormLast4] = useState("");
    const [formExpiry, setFormExpiry] = useState("");
    const [formColor, setFormColor] = useState(COLORS[0].value);

    // Filtra por nome
    const filteredCards = cards.filter((card) => card.name.toLowerCase().includes(search.toLowerCase()));

    // Agrupa por ano (do expiry)
    const cardsByYear = filteredCards.reduce((acc, card) => {
        const year = "20" + card.expiry.split("/")[1]; // Ex: "24" -> "2024"
        if (!acc[year]) acc[year] = [];
        acc[year].push(card);
        return acc;
    }, {});

    // Ordena os anos (chaves) para ter ordem crescente
    const sortedYears = Object.keys(cardsByYear).sort();

    const handleEdit = (name) => {
        alert(`Editar cartão de: ${name}`);
    };

    const openModal = () => {
        // Reset form
        setFormName("");
        setFormLast4("");
        setFormExpiry("");
        setFormColor(COLORS[0].value);
        setModalOpen(true);
    };

    const handleAddCard = () => {
        // Validações simples
        if (!formName.trim() || !/^\d{4}$/.test(formLast4) || !/^\d{2}\/\d{2}$/.test(formExpiry)) {
            alert("Por favor, preencha corretamente:\n- Nome (não vazio)\n- Últimos 4 dígitos (ex: 1234)\n- Validade (MM/AA)");
            return;
        }

        const newCard = {
            name: formName.trim(),
            last4: formLast4,
            expiry: formExpiry,
            colorClass: formColor,
        };
        setCards((prevCards) => [newCard, ...prevCards]);
        setModalOpen(false);
    };

    // Função para escolher cor fixa com base no índice
    const getColorByIndex = (index) => COLORS[index % COLORS.length].value;

    return (
        <div className="min-h-screen bg-gray-950 px-6 py-8 text-white">
            {/* Header com busca e botão */}
            <div className="mx-auto mb-8 flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div className="relative w-full md:max-w-md">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar por nome"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-md bg-gray-800 px-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <button
                    onClick={openModal}
                    className="flex items-center gap-2 rounded bg-indigo-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-800"
                >
                    <Plus size={18} /> Novo Cartão
                </button>
            </div>

            {/* Grid com 2 categorias por linha */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">
                {sortedYears.map((year, yearIndex) => {
                    const cardsInYear = cardsByYear[year];
                    const enableScroll = cardsInYear.length > 3;

                    return (
                        <div key={year}>
                            <h2 className="mb-4 border-b border-gray-700 pb-1 text-xl font-bold">Cartões - Ano {year}</h2>

                            <div
                                className={`flex items-center ${
                                    enableScroll ? "scrollbar-thin scrollbar-thumb-indigo-700 scrollbar-track-gray-800 overflow-x-auto" : ""
                                } gap-4`}
                                style={{ maxWidth: "100%" }}
                            >
                                {cardsInYear.map((card, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            marginLeft: i === 0 ? 0 : -100,
                                            cursor: "pointer",
                                            zIndex: selectedCard === card ? 20 : i,
                                            position: "relative",
                                            flexShrink: 0,
                                            transition: "transform 0.3s ease",
                                            transform: selectedCard === card ? "translateY(-20px) scale(1.05)" : "none",
                                        }}
                                        onClick={() => setSelectedCard(selectedCard === card ? null : card)}
                                    >
                                        <CreditCard
                                            name={card.name}
                                            last4={card.last4}
                                            expiry={card.expiry}
                                            onEdit={() => handleEdit(card.name)}
                                            selected={selectedCard === card}
                                            colorClass={card.colorClass}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Modal de adição */}
            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            >
                <h3 className="mb-4 text-xl font-bold text-white">Adicionar Novo Cartão</h3>

                <label className="mb-1 block text-sm font-semibold text-gray-300">Nome</label>
                <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="mb-4 w-full rounded-md bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Nome no cartão"
                />

                <label className="mb-1 block text-sm font-semibold text-gray-300">Últimos 4 dígitos</label>
                <input
                    type="text"
                    maxLength={4}
                    value={formLast4}
                    onChange={(e) => setFormLast4(e.target.value.replace(/\D/, ""))}
                    className="mb-4 w-full rounded-md bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Ex: 1234"
                />

                <label className="mb-1 block text-sm font-semibold text-gray-300">Validade (MM/AA)</label>
                <input
                    type="text"
                    maxLength={5}
                    value={formExpiry}
                    onChange={(e) =>
                        setFormExpiry(
                            e.target.value
                                .replace(/[^\d/]/g, "")
                                .replace(/^(\d\d)(\d)$/g, "$1/$2")
                                .slice(0, 5),
                        )
                    }
                    className="mb-4 w-full rounded-md bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="MM/AA"
                />

                <label className="mb-1 block text-sm font-semibold text-gray-300">Cor do cartão</label>
                <select
                    value={formColor}
                    onChange={(e) => setFormColor(e.target.value)}
                    className="mb-6 w-full rounded-md bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    {COLORS.map((c) => (
                        <option
                            key={c.value}
                            value={c.value}
                        >
                            {c.label}
                        </option>
                    ))}
                </select>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={() => setModalOpen(false)}
                        className="rounded border border-gray-600 px-4 py-2 text-sm font-semibold text-gray-300 hover:bg-gray-700"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleAddCard}
                        className="rounded bg-indigo-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-800"
                    >
                        Salvar
                    </button>
                </div>
            </Modal>

            {/* Scrollbar estilizada com CSS inline */}
            <style>{`
        /* Scrollbar fina e colorida para Webkit browsers */
    .scrollbar-thin::-webkit-scrollbar {
        height: 6px;
    }
    .scrollbar-thin::-webkit-scrollbar-track {
        background: #1f2937; /* gray-800 */
        border-radius: 10px;
    }
    .scrollbar-thin::-webkit-scrollbar-thumb {
        background-color: #6366f1; /* indigo-500 */
        border-radius: 10px;
    }
    /* Firefox */
    .scrollbar-thin {
        scrollbar-width: thin;
        scrollbar-color: #6366f1 #1f2937;
    }
    `}</style>
        </div>
    );
};

export default CreditCardList;
