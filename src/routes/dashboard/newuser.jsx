import { useState } from "react";
import { UserPlus, Mail, UserCheck, Shield } from "lucide-react";

export default function NewCustomerPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "Usuário",
        status: "Ativo",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Novo usuário cadastrado:", formData);

    };

    return (
        <div className="p-6 max-w-2xl mx-auto bg-[#0e1117] text-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <UserPlus className="text-blue-500" />
                Cadastrar Novo Usuário
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Nome</label>
                    <div className="flex items-center bg-[#1c1f26] rounded px-3 py-2">
                        <UserCheck className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-transparent focus:outline-none w-full text-white"
                            placeholder="Digite o nome"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <div className="flex items-center bg-[#1c1f26] rounded px-3 py-2">
                        <Mail className="text-gray-400 mr-2" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-transparent focus:outline-none w-full text-white"
                            placeholder="Digite o email"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block mb-1 font-medium">Função</label>
                    <div className="bg-[#1c1f26] rounded px-3 py-2">
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="bg-transparent text-white w-full focus:outline-none"
                        >
                            <option value="Usuário">Usuário</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block mb-1 font-medium">Status</label>
                    <div className="bg-[#1c1f26] rounded px-3 py-2">
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="bg-transparent text-white w-full focus:outline-none"
                        >
                            <option value="Ativo">Ativo</option>
                            <option value="Inativo">Inativo</option>
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >Cadastrar</button>
            </form>
        </div>
    );
}
