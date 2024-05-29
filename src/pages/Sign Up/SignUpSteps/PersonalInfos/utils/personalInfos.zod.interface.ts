import moment from "moment";
import z from "zod";

export type PersonalInfosInterface = {
  nome: string;
  email: string;
  senha: string;
  confirma: string;
  nascimento: string;
  telefone: string;
  isDonor: boolean;
  isCoordinator: boolean;
};

function isAdult(birthDateString: string) {
  const birthDate = moment(birthDateString, "YYYY-MM-DD");
  const currentDate = moment();
  const age = currentDate.diff(birthDate, "years");
  return age >= 18;
}

function isYearInRange(dateString: string) {
  const date = moment(dateString, "YYYY-MM-DD", true);

  if (!date.isValid()) {
    return false;
  }

  const year = date.year();
  const currentYear = moment().year();

  return year >= 1900 && year <= currentYear;
}

export const PersonalInfosSchema = z
  .object({
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
    confirma: z.string().min(1, { message: "Confirmação vazia" }),
    nascimento: z
      .string()
      .min(1, { message: "Data vazia ou incompleta" })
      .pipe(
        z
          .string()
          .date("Data inválida")
          .refine((data) => isYearInRange(data), { message: "Data inválida" })
      )
      .refine((data) => isAdult(data), { message: "Você deve ser adulto" }),
    telefone: z
      .string()
      .min(1, { message: "Telefone vazio" })
      .min(10, { message: "Adicione também seu ddd" })
      .max(11, { message: "telefone invalido" }),
    isDonor: z.boolean(),
    isCoordinator: z.preprocess(value => value === 'on', z.boolean())
  })
  .refine(
    ({ senha, confirma }) => {
      return senha === confirma;
    },
    {
      message: "As senhas não coincidem",
      path: ["confirma"],
    }
  );
