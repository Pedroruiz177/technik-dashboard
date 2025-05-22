import { useState } from "react";
import profileImg from "@/assets/profile-image.jpg";

export default function MInhaConta() {
    const [formData, setFormData] = useState({
        nome: "Jamed",
        sobrenome: "Allan",
        username: "@james",
        senha: "********",
        confirmarSenha: "********",
        email: "demo@mail.com",
        confirmarEmail: "demo@mail.com",
        facebook: "facebook.com/james",
        twitter: "@james",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados salvos:", formData);
        alert("Informações atualizadas com sucesso!");
    };

    return (
        <div className="flex flex-col gap-6 p-6 text-slate-900 dark:text-white md:flex-row">
            {/* Lado Esquerdo - Perfil */}
            <div className="w-full rounded-lg bg-white p-6 text-center shadow-md dark:bg-slate-800 md:w-1/3">
                <img
                    src={profileImg}
                    alt="Foto de perfil"
                    className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                />
                <h2 className="text-xl font-semibold">
                    {formData.nome} {formData.sobrenome}
                </h2>
                <p className="text-slate-500 dark:text-slate-300">{formData.username}</p>
                <button className="mt-4 rounded bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700">Upload Nova Foto</button>
                <p className="mt-2 text-xs text-slate-400">Use uma imagem quadrada. Máximo de 2MB.</p>
                <p className="mt-6 text-sm text-slate-500 dark:text-slate-300">
                    Membro desde: <strong>20 de Setembro de 2024</strong>
                </p>
            </div>

            {/* Lado Direito - Formulário */}
            <div className="w-full rounded-lg bg-white p-6 shadow-md dark:bg-slate-800 md:w-2/3">
                <h2 className="mb-4 text-2xl font-bold">Editar Perfil</h2>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-4 md:grid-cols-2"
                >
                    <div>
                        <label className="mb-1 block font-medium">Nome</label>
                        <input
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            className="w-full rounded border border-slate-300 bg-white p-2 dark:border-slate-600 dark:bg-slate-700"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block font-medium">Sobrenome</label>
                        <input
                            name="sobrenome"
                            value={formData.sobrenome}
                            onChange={handleChange}
                            className="w-full rounded border border-slate-300 bg-white p-2 dark:border-slate-600 dark:bg-slate-700"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block font-medium">Senha</label>
                        <input
                            type="password"
                            name="senha"
                            value={formData.senha}
                            onChange={handleChange}
                            className="w-full rounded border border-slate-300 bg-white p-2 dark:border-slate-600 dark:bg-slate-700"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block font-medium">Confirmar Senha</label>
                        <input
                            type="password"
                            name="confirmarSenha"
                            value={formData.confirmarSenha}
                            onChange={handleChange}
                            className="w-full rounded border border-slate-300 bg-white p-2 dark:border-slate-600 dark:bg-slate-700"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded border border-slate-300 bg-white p-2 dark:border-slate-600 dark:bg-slate-700"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block font-medium">Confirmar Email</label>
                        <input
                            type="email"
                            name="confirmarEmail"
                            value={formData.confirmarEmail}
                            onChange={handleChange}
                            className="w-full rounded border border-slate-300 bg-white p-2 dark:border-slate-600 dark:bg-slate-700"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block font-medium">Facebook</label>
                        <input
                            name="facebook"
                            value={formData.facebook}
                            onChange={handleChange}
                            className="w-full rounded border border-slate-300 bg-white p-2 dark:border-slate-600 dark:bg-slate-700"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block font-medium">Twitter</label>
                        <input
                            name="twitter"
                            value={formData.twitter}
                            onChange={handleChange}
                            className="w-full rounded border border-slate-300 bg-white p-2 dark:border-slate-600 dark:bg-slate-700"
                        />
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            className="mt-4 rounded bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
                        >
                            Atualizar Informações
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
