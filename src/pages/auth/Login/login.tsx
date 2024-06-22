import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LoginInterface, LoginSchema } from "./utils/login.zod.interface";
import { FormFieldConstructor } from "../../../components/FormField";
import Cookies from "js-cookie";
import { ApiHandler } from "../../../utils/apis/api.handler";
import { useSession } from "../../../utils/hooks/useSession";
import { LoadingScreen } from "../../../utils/screens/LoadingScreen";

/**
 * caso alguma prop seja passada para
 * o formulário adicione-a aqui
 */
interface LoginComponentProps {}

function LoginPointScreen(props: LoginComponentProps) {
  const { user, status } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginInterface>({
    resolver: zodResolver(LoginSchema),
    mode: "onBlur",
  });
  const navigate = useNavigate();

  /**
   * Adicione chamada de login da API
   * retorne erro se erro;
   * salve token nos cookies se ok
   * redirecione para pagina de doador;
   */
  async function onSubmit(data: LoginInterface) {
    const request = { email: data.email, password: data.senha };

    const response = await ApiHandler.login(request);

    if (!response.token) {
      console.error("houve um erro na requisição");
    }

    Cookies.set("session", response.token);

    navigate("/home");
  }

  const FormField = FormFieldConstructor<LoginInterface>();

  if (status === "pending") return <LoadingScreen />;

  if (status === "authorized") navigate("/home");

  return (
    <section className="login-section">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col">
          <div className="text-center">
            <h1 className="text-5xl pb-5 font-bold">Login</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:px-10">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <FormField
                name="email"
                register={register}
                setError={setError}
                error={errors?.email}
                inputProps={{
                  type: "email",
                  placeholder: "Seu Email",
                }}
              />
              <FormField
                name="senha"
                register={register}
                setError={setError}
                error={errors.senha}
                inputProps={{
                  type: "password",
                  placeholder: "Sua senha",
                }}
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
