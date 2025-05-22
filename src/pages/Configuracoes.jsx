import { Settings, UserCog, Bell, ShieldCheck } from "lucide-react";
import { Footer } from "@/layouts/footer";

const Configuracoes = () => {
    return (
        <div className="flex min-h-screen flex-col gap-y-6 bg-[#111827] p-6 text-white">
            <h1 className="text-2xl font-bold">Configurações</h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Preferências da Conta */}
                <div className="rounded-xl bg-[#1F2937] p-5 shadow-md">
                    <div className="mb-4 flex items-center gap-4">
                        <div className="rounded-lg bg-blue-600/20 p-2 text-blue-400">
                            <UserCog size={24} />
                        </div>
                        <h2 className="text-lg font-semibold">Conta</h2>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="cursor-pointer hover:text-white">Editar perfil</li>
                        <li className="cursor-pointer hover:text-white">Alterar email</li>
                        <li className="cursor-pointer hover:text-white">Alterar senha</li>
                    </ul>
                </div>

                {/* Notificações */}
                <div className="rounded-xl bg-[#1F2937] p-5 shadow-md">
                    <div className="mb-4 flex items-center gap-4">
                        <div className="rounded-lg bg-yellow-500/20 p-2 text-yellow-400">
                            <Bell size={24} />
                        </div>
                        <h2 className="text-lg font-semibold">Notificações</h2>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="cursor-pointer hover:text-white">Ativar notificações por email</li>
                        <li className="cursor-pointer hover:text-white">Alertas do sistema</li>
                        <li className="cursor-pointer hover:text-white">Preferências de som</li>
                    </ul>
                </div>

                {/* Segurança */}
                <div className="rounded-xl bg-[#1F2937] p-5 shadow-md">
                    <div className="mb-4 flex items-center gap-4">
                        <div className="rounded-lg bg-green-600/20 p-2 text-green-400">
                            <ShieldCheck size={24} />
                        </div>
                        <h2 className="text-lg font-semibold">Segurança</h2>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="cursor-pointer hover:text-white">Autenticação em duas etapas</li>
                        <li className="cursor-pointer hover:text-white">Gerenciar dispositivos</li>
                        <li className="cursor-pointer hover:text-white">Ver histórico de login</li>
                    </ul>
                </div>

                {/* Sistema */}
                <div className="rounded-xl bg-[#1F2937] p-5 shadow-md">
                    <div className="mb-4 flex items-center gap-4">
                        <div className="rounded-lg bg-purple-600/20 p-2 text-purple-400">
                            <Settings size={24} />
                        </div>
                        <h2 className="text-lg font-semibold">Sistema</h2>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="cursor-pointer hover:text-white">Modo escuro</li>
                        <li className="cursor-pointer hover:text-white">Idioma</li>
                        <li className="cursor-pointer hover:text-white">Atualizações automáticas</li>
                    </ul>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Configuracoes;
