import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AdressStep from "./SignUpSteps/Adress/Adress";
import PersonalInfosStep from "./SignUpSteps/PersonalInfos/PersonalInfos";
import { Estados } from "./SignUpSteps/Adress/Estados";
import { Veiculos } from "./SignUpSteps/Adress/Veiculos";
import VehiclesStep from "./SignUpSteps/Vehicles/Vehicles";
import { useState } from "react";

export type DoadorFormData = {
  // informações pessoais
  nome: string;
  email: string;
  senha: string;
  confirma: string;
  nascimento: string;

  // endereço
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string[];
  CEP: string;

  //veiculos
  veiculos: string[];
};

/**
 * caso alguma prop seja passada para
 * o formulário adicione-a aqui
 */
interface SignUpDoadorProps {}

const UserSchema = z.object({
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
  data: z.string().date("Data inválida"),
  rua: z
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
  veiculos: z.enum(Veiculos, { message: "Valor inválido" }),
});

function SignUpDoadorScreen(props: SignUpDoadorProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<DoadorFormData>({
    resolver: zodResolver(UserSchema),
    mode: "onTouched",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [PersonalInfosStep, AdressStep, VehiclesStep];

  /**
   * Adicione chamada de login da API
   * retorne erro se erro;
   * salve token nos cookies se ok
   * redirecione para pagina de doador;
   */
  async function onSubmit(data: DoadorFormData) {
    console.log("SUCESSO", data);
  }

  function backStep(step: number) {
    if (step < currentStep) {
      setCurrentStep(step);
    }
  }

  /**
   * Checa se a sessão está ativa,
   * se estiver redirecione o usuário
   * para a tela de usuário
   */
  return (
    <section className="login-section">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-3/4 flex flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl mb-5 uppercase font-semibold">
              cadastro de doador
            </h1>
            <ul className="steps text-slate-700">
              {steps.map((_, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => backStep(i + 1)}
                    className={`step ${
                      currentStep >= i + 1 && "step-primary cursor-pointer"
                    }`}
                  ></li>
                );
              })}
            </ul>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              {steps.map((Step, i) => {
                return (
                  <div
                    className={`flex-col justify-center ${currentStep !== i + 1 ? "hidden" : "flex"}`}
                    key={i}
                  >
                    {
                      <Step
                        errors={errors}
                        register={register}
                        setError={setError}
                        setCurrentStep={setCurrentStep}
                        currentStep={currentStep}
                      />
                    }
                  </div>
                );
              })}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpDoadorScreen;
