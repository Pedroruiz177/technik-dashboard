import { useState, useMemo } from "react";
import { PencilLine, Trash, User } from "lucide-react";
import { Footer } from "@/layouts/footer";

const USERS_PER_PAGE = 15;

const initialUsers = [

{
"id": 1,
"name": "Alice Ferreira",
"email": "alice@email.com",
"role": "Admin",
"status": "Ativo",
"avatar": "https://i.pravatar.cc/150?img=1"
},
{
"id": 2,
"name": "Carlos Silva",
"email": "carlos@email.com",
"role": "Usuário",
"status": "Inativo",
"avatar": "https://i.pravatar.cc/150?img=2"
},
{
"id": 3,
"name": "Beatriz Costa",
"email": "beatriz@email.com",
"role": "Usuário",
"status": "Ativo",
"avatar": "https://i.pravatar.cc/150?img=3"
},
{
"id": 4,
"name": "Diego Oliveira",
"email": "diego@email.com",
"role": "Admin",
"status": "Ativo",
"avatar": "https://i.pravatar.cc/150?img=4"
},
{
"id": 5,
"name": "Fernanda Lima",
"email": "fernanda@email.com",
"role": "Usuário",
"status": "Inativo",
"avatar": "https://i.pravatar.cc/150?img=5"
},
{
"id": 6,
"name": "Gabriel Souza",
"email": "gabriel@email.com",
"role": "Usuário",
"status": "Ativo",
"avatar": "https://i.pravatar.cc/150?img=6"
},
{
"id": 7,
"name": "Helena Rocha",
"email": "helena@email.com",
"role": "Usuário",
"status": "Ativo",
"avatar": "https://i.pravatar.cc/150?img=7"
},
{
"id": 8,
"name": "Igor Martins",
"email": "igor@email.com",
"role": "Admin",
"status": "Inativo",
"avatar": "https://i.pravatar.cc/150?img=8"
},
{
"id": 9,
"name": "Juliana Mendes",
"email": "juliana@email.com",
"role": "Usuário",
"status": "Ativo",
"avatar": "https://i.pravatar.cc/150?img=9"
},
{
"id": 10,
"name": "Lucas Ferreira",
"email": "lucas@email.com",
"role": "Usuário",
"status": "Ativo",
"avatar": "https://i.pravatar.cc/150?img=10"
},
{
"id": 11,
"name": "Mariana Barros",
"email": "mariana@email.com",
"role": "Admin",
"status": "Ativo",
"avatar": "https://i.pravatar.cc/150?img=11"
},
{
"id": 12,
"name": "Nicolas Teixeira",
"email": "nicolas@email.com",
"role": "Usuário",
"status": "Inativo",
"avatar": "https://i.pravatar.cc/150?img=12"
},
{
"id": 13,
"name": "Olívia Almeida",
"email": "olivia@email.com",
"role": "Usuário",
"status": "Ativo",
"avatar": "https://i.pravatar.cc/150?img=13"
},
{
"id": 14,
"name": "Pedro Henrique",
"email": "pedro@email.com",
"role": "Admin",
"status": "Ativo",
"avatar": "https://i.pravatar.cc/150?img=14"
},
{
"id": 15,
"name": "Queila Batista",
"email": "queila@email.com",
"role": "Usuário",
"status": "Ativo",
"avatar": "https://i.pravatar.cc/150?img=15"
},
{
"id": 16,
"name": "Rafael Cardoso",
"email": "rafael@email.com",
"role": "Usuário",
"status": "Inativo",
"avatar": "https://i.pravatar.cc/150?img=16"
},
{
"id": 17,
"name": "Sabrina Ribeiro",
"email": "sabrina@email.com",
"role": "Usuário",
"status": "Ativo",
"avatar": "https://i.pravatar.cc/150?img=17"
},
{
"id": 18,
"name": "Thiago Nunes",
"email": "thiago@email.com",
"role": "Admin",
"status": "Ativo",
"avatar": "https://i.pravatar.cc/150?img=18"
},
{
"id": 19,
"name": "Ursula Farias",
"email": "ursula@email.com",
"role": "Usuário",
"status": "Ativo",
"avatar": "https://i.pravatar.cc/150?img=19"
},
{
"id": 20,
"name": "Vinícius Azevedo",
"email": "vinicius@email.com",
"role": "Usuário",
"status": "Inativo",
"avatar": "https://i.pravatar.cc/150?img=20"
},
{
"id": 21,
"name": "Wesley Dias",
"email": "wesley@email.com",
"role": "Usuário",
"status": "Ativo",
"avatar": "https://i.pravatar.cc/150?img=21"
},
{
"id": 22,
"name": "Yasmin Andrade",
"email": "yasmin@email.com",
"role": "Admin",
"status": "Inativo",
"avatar": "https://i.pravatar.cc/150?img=22"
},
{
"id": 23,
"name": "Zeca Morais",
"email": "zeca@email.com",
"role": "Usuário",
"status": "Ativo",
"avatar": "https://i.pravatar.cc/150?img=23"
},
{
"id": 24,
"name": "Ana Luiza",
"email": "ana@email.com",
"role": "Usuário",
"status": "Ativo",
"avatar": "https://i.pravatar.cc/150?img=24"
},
{
"id": 25,
"name": "Bruno Machado",
"email": "bruno@email.com",
"role": "Admin",
"status": "Inativo",
"avatar": "https://i.pravatar.cc/150?img=25"
}
];

const UsersPage = () => {
const [users, setUsers] = useState(initialUsers);
const [search, setSearch] = useState("");
const [currentPage, setCurrentPage] = useState(1);

// Filtra usuários por busca
const filteredUsers = useMemo(() => {
return users.filter((user) =>
    `${user.name} ${user.email}`.toLowerCase().includes(search.toLowerCase())
);
}, [search, users]);

const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
const paginatedUsers = useMemo(() => {
const startIndex = (currentPage - 1) * USERS_PER_PAGE;
return filteredUsers.slice(startIndex, startIndex + USERS_PER_PAGE);
}, [filteredUsers, currentPage]);

// Função para editar (aqui só mostra alert, pode ser substituída por navegação)
const handleEdit = (userId) => {
alert(`Editar usuário com id ${userId}`);
//router.push(`/users/edit/${userId}`);
};

// Função para excluir usuário
const handleDelete = (userId) => {
if (window.confirm("Deseja realmente excluir este usuário?")) {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    // Se quiser resetar a página para 1 após excluir
    setCurrentPage(1);
}
};

return (
<div className="flex flex-col gap-y-4">
    <h1 className="title">Usuários</h1>
    <div className="card">
    <div className="card-header justify-between">
        <div className="flex items-center gap-2">
        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 dark:bg-blue-600/20 dark:text-blue-600">
            <User size={26} />
        </div>
        <p className="card-title">Lista de Usuários</p>
        </div>
        <input
        type="text"
        placeholder="Buscar por nome ou email..."
        className="input input-bordered w-64 text-black dark:text-black border-black"
        value={search}
        onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
        }}
        />
    </div>

    <div className="card-body p-0">
        <div className="relative h-[500px] w-full overflow-auto [scrollbar-width:_thin]">
        <table className="table">
            <thead className="table-header">
            <tr className="table-row">
                <th className="table-head">#</th>
                <th className="table-head">Nome</th>
                <th className="table-head">Email</th>
                <th className="table-head">Função</th>
                <th className="table-head">Status</th>
                <th className="table-head">Ações</th>
            </tr>
            </thead>
            <tbody className="table-body">
            {paginatedUsers.map((user) => (
                <tr key={user.id} className="table-row">
                <td className="table-cell">{user.id}</td>
                <td className="table-cell">
                    <div className="flex items-center gap-x-3">
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="size-10 rounded-full object-cover"
                    />
                    <span>{user.name}</span>
                    </div>
                </td>
                <td className="table-cell">{user.email}</td>
                <td className="table-cell">{user.role}</td>
                <td className="table-cell">
                    <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${
                        user.status === "Ativo"
                        ? "bg-green-100 text-green-700 dark:bg-green-700/20 dark:text-green-400"
                        : "bg-red-100 text-red-700 dark:bg-red-700/20 dark:text-red-400"
                    }`}
                    >
                    {user.status}
                    </span>
                </td>
                <td className="table-cell">
                    <div className="flex items-center gap-x-4">
                    <button
                        className="text-blue-500 dark:text-blue-600"
                        onClick={() => handleEdit(user.id)}
                        aria-label={`Editar usuário ${user.name}`}
                    >
                        <PencilLine size={20} />
                    </button>
                    <button
                        className="text-red-500"
                        onClick={() => handleDelete(user.id)}
                        aria-label={`Excluir usuário ${user.name}`}
                    >
                        <Trash size={20} />
                    </button>
                    </div>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>

    {/* Paginação */}
    <div className="card-footer flex justify-between items-center p-4">
        <span className="text-sm text-black dark:text-white">
        Página {currentPage} de {totalPages}
        </span>
        <div className="flex gap-x-2">
        <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`btn btn-sm ${
            currentPage === 1
                ? "text-gray-500 cursor-not-allowed"
                : "text-black dark:text-white"
            }`}
        >
            Anterior
        </button>

        <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`btn btn-sm ${
            currentPage === totalPages
                ? "text-gray-500 cursor-not-allowed"
                : "text-black dark:text-white"
            }`}
        >
            Próxima
        </button>
        </div>
    </div>
    </div>
    <Footer />
</div>
);
};

export default UsersPage;
