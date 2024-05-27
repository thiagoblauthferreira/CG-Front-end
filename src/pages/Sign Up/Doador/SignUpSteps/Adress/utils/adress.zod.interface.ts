import z from 'zod';
import { Estados } from './Estados';

export type AdressInterface = {
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string[];
    CEP: string;
    complemento: string;
}

export const AdressSchema = z.object({
    logradouro: z
        .string()
        .min(1, { message: "Rua vazia" })
        .max(500, { message: "caracteres demais para este campo" }),
    numero: z.string().optional(),
    bairro: z
        .string()
        .max(500, { message: "caracteres demais para este campo" })
        .min(1, { message: "Bairro vazio" }),
    cidade: z.string().min(1, { message: "Bairro vazio" }),
    estado: z.enum(Estados, { message: "Valor inválido" }),
    CEP: z
        .string()
        .min(1, { message: "CEP vazio" })
        .min(8, { message: "CEP inválido" })
        .max(9, { message: "CEP inválido" })
        .regex(/^\d{8}$|^\d{5}-\d{3}$/, { message: "CEP inválido" }),
    complemento: z.string().optional()
})