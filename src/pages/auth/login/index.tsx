import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { FormFieldConstructor } from "../../../components/common/FormField";
import { LoginSchema } from "../../../validators/login.validator";
import { login } from "../../../services/auth.service";
import { setCookie } from "../../../services/cookie.service";
import { ILogin } from "../../../interfaces/auth";

interface LoginComponentProps {}

function LoginPointScreen(props: LoginComponentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ILogin>({
    resolver: zodResolver(LoginSchema),
    mode: "onBlur",
  });
  const navigate = useNavigate();

  async function onSubmit(data: ILogin) {
    try {
      const request = { email: data.email, password: data.password };

      const response = await login(request);

      console.log(response);

      // if (!response.token) {
      //   console.error("houve um erro na requisição");
      // }

      setCookie("token", response.token, 7);

      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  }

  const FormField = FormFieldConstructor<ILogin>();

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
                name="password"
                register={register}
                setError={setError}
                error={errors.password}
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
                <Link to={"/register"} className="label-text-alt link link-hover">
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
