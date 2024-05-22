import { Link } from "react-router-dom";

/**
 * caso alguma prop seja passada para
 * o formulário adicione-a aqui
 */
interface SignUpScreenInterface {}

function SignUpChoiceScreen(props: SignUpScreenInterface) {
  /**
   * Checa se a sessão está ativa,
   * se estiver redirecione o usuário
   * para a tela de usuário
   */
  return (
    <section className="login-section flex items-center h-svh w-full">
      <div className="flex flex-col w-full lg:flex-row py-auto">
        <div className="grid flex-grow h-32 card rounded-box place-items-center">
          <Link
            to={"/cadastro/doador"}
            className="btn btn-outline btn-lg btn-primary"
          >
            Doador
          </Link>
        </div>
        <div className="divider lg:divider-horizontal">OU</div>
        <div className="grid flex-grow h-32 card rounded-box place-items-center">
          <Link
            to={"/cadastro/abrigo"} //to do
            className="btn btn-outline btn-lg btn-primary"
          >
            Abrigo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignUpChoiceScreen;
