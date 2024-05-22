import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "../../components/FormField";
import { Link } from "react-router-dom";

export type FormData = {
  email: string;
  senha: string;
};

/**
 * caso alguma prop seja passada para
 * o formulário adicione-a aqui
 */
interface LoginComponentProps {}

const UserSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email vazio" })
    .email({ message: "Email inválido" }),
  senha: z
    .string()
    .min(1, { message: "Senha vazia" })
    .min(8, { message: "Sua senha deve conter no mínimo 8 caracteres" })
    .max(50, { message: "Sua senha deve conter no máximo 50 caracteres" }),
});

function LoginPointScreen(props: LoginComponentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
    mode: "onBlur",
  });

  /**
   * Adicione chamada de login da API
   * retorne erro se erro;
   * salve token nos cookies se ok
   * redirecione para pagina de doador;
   */
  async function onSubmit(data: FormData) {
    console.log("SUCESSO", data);
  }

  /**
   * Checa se a sessão está ativa,
   * se estiver redirecione o usuário
   * para a tela de usuário
   */
  return (
    <section className="login-section">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl pb-5 font-bold">Login</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <FormField
                name="email"
                type="email"
                placeHolder="Seu Email"
                register={register}
                setError={setError}
                error={errors?.email}
              />
              <FormField
                name="senha"
                type="password"
                register={register}
                placeHolder="Sua senha"
                setError={setError}
                error={errors.senha}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Esqueceu a senha?
                </a>
              </label>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <label className="label">
                <Link
                  to={"/cadastro"}
                  className="label-text-alt link link-hover"
                >
                  Não tem uma conta?
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPointScreen;
