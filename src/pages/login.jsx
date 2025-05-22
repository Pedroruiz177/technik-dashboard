import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [lembrar, setLembrar] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login:", { email, senha, lembrar });
        navigate("/2fa");
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-white px-4 text-slate-900 dark:bg-slate-900 dark:text-white">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md dark:bg-slate-800">
                <h1 className="mb-6 text-center text-3xl font-bold">Entrar</h1>
                <form
                    onSubmit={handleLogin}
                    className="space-y-4"
                >
                    <div>
                        <label className="mb-1 block font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full rounded border border-slate-300 bg-white px-4 py-2 dark:border-slate-600 dark:bg-slate-700"
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
                        />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={lembrar}
                                onChange={(e) => setLembrar(e.target.checked)}
                                className="accent-blue-600"
                            />
                            Manter logado
                        </label>
                        <a
                            href="#"
                            className="text-blue-600 hover:underline"
                        >
                            Esqueci minha senha
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded bg-blue-600 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                        Entrar
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                    Ainda não tem uma conta?{" "}
                    <Link
                        to="/cadastro"
                        className="text-blue-600 hover:underline"
                    >
                        Cadastre-se
                    </Link>
                </p>
            </div>
        </div>
    );
}
