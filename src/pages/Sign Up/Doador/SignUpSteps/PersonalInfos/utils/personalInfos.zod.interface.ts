import z from 'zod'

export type PersonalInfosInterface = {
    nome: string;
    email: string;
    senha: string;
    confirma: string;
    nascimento: string;
}

export const PersonalInfosSchema = z.object({
    nome: z.string().min(1, { message: "Nome vazio" }),
    email: z
        .string()
        .min(1, { message: "Email vazio" })
        .email({ message: "Email inválido" }),
    senha: z
        .string()
        .min(1, { message: "Senha vazia" })
        .min(8, { message: "Sua senha deve conter no mínimo 8 caracteres" })
        .max(50, { message: "Sua senha deve conter no máximo 50 caracteres" }),
    confirma: z
        .string()
        .min(1, { message: "Confirmação vazia" }),
    data: z.optional(z.string())
}).refine(({ senha, confirma }) => {
    return senha === confirma
}, {
    message: "As senhas não coincidem",
    path: ["confirma"]
})