import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [telefone, setTelefone] = useState("");

    const handleCadastro = (e) => {
        e.preventDefault();
        console.log("Cadastro:", { nome, email, senha, telefone });
        // Aqui você pode adicionar a lógica de cadastro (API, validação, etc)
        navigate("/login"); // Redireciona após cadastro (por exemplo)
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-white px-4 text-slate-900 dark:bg-slate-900 dark:text-white">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md dark:bg-slate-800">
                <h1 className="mb-6 text-center text-3xl font-bold">Cadastro</h1>
                <form
                    onSubmit={handleCadastro}
                    className="space-y-4"
                >
                    <div>
                        <label className="mb-1 block font-medium">Nome</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                            className="w-full rounded border border-slate-300 bg-white px-4 py-2 dark:border-slate-600 dark:bg-slate-700"
                            placeholder="Seu nome completo"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full rounded border border-slate-300 bg-white px-4 py-2 dark:border-slate-600 dark:bg-slate-700"
                            placeholder="seuemail@exemplo.com"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block font-medium">Senha</label>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="w-full rounded border border-slate-300 bg-white px-4 py-2 dark:border-slate-600 dark:bg-slate-700"
                            placeholder="Digite uma senha segura"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block font-medium">Telefone</label>
                        <input
                            type="tel"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                            className="w-full rounded border border-slate-300 bg-white px-4 py-2 dark:border-slate-600 dark:bg-slate-700"
                            placeholder="(99) 99999-9999"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded bg-blue-600 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                        Cadastrar
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                    Já tem uma conta?{" "}
                    <a
                        href="/login"
                        className="text-blue-600 hover:underline"
                    >
                        Entrar
                    </a>
                </p>
            </div>
        </div>
    );
}
