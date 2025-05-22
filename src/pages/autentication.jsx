import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TwoFactorAuth() {
    const navigate = useNavigate();
    const [code, setCode] = useState("");

    const handleVerify = (e) => {
        e.preventDefault();
        console.log("Código inserido:", code);
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4">
            <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
                
                
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-center mb-6">Autenticação</h1>
                    <p className="text-center text-sm mb-6 text-slate-500 dark:text-slate-400">
                        Insira o código enviado para seu email ou celular
                    </p>
                    <form onSubmit={handleVerify} className="space-y-4">
                        <div>
                            <label className="block mb-1 font-medium">Código de verificação</label>
                            <input
                                type="text"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                required
                                className="w-full px-4 py-2 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
                                placeholder="000000"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors"
                        >
                            Verificar e acessar
                        </button>
                    </form>
                    <p className="text-center text-sm mt-4 text-slate-500 dark:text-slate-400">
                        Não recebeu o código?{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Reenviar
                        </a>
                    </p>
                </div>

                {/* QR Code à direita */}
                <div className="md:w-1/2 flex items-center justify-center p-8 bg-slate-100 dark:bg-slate-800">
                    <img
                        src="https://api.qrserver.com/v1/create-qr-code/?data=example123&size=200x200"
                        alt="QR Code"
                        className="w-80 h-80 p-4"
                    />
                </div>
            </div>
        </div>
    );
}
