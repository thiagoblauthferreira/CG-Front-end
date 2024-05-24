import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { LoginInterface, LoginSchema } from "./utils/login.zod.interface";
import { FormFieldConstructor } from "../../components/FormField";

/**
 * caso alguma prop seja passada para
 * o formulário adicione-a aqui
 */
interface LoginComponentProps {}

function LoginPointScreen(props: LoginComponentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginInterface>({
    resolver: zodResolver(LoginSchema),
    mode: "onBlur",
  });

  /**
   * Adicione chamada de login da API
   * retorne erro se erro;
   * salve token nos cookies se ok
   * redirecione para pagina de doador;
   */
  async function onSubmit(data: LoginInterface) {
    console.log("SUCESSO", data);
  }

  const FormField = FormFieldConstructor<LoginInterface>();

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
