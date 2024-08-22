import AdressStep from "./SignUpSteps/Adress/AdressStep";
import { useState } from "react";
import { PersonalInfosStep } from "./SignUpSteps/PersonalInfos/PersonalInfos";
// import { useSession } from "../../../hooks/useSession";
// import { Navigate } from "react-router-dom";
// import { LoadingScreen } from "../../../components/common/LoadingScreen";
import { register } from "../../../services/auth.service";

/**
 * caso alguma prop seja passada para
 * o formulário adicione-a aqui
 */
interface SignUpDoadorProps {}

function SignUpScreen(props: SignUpDoadorProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState({});
  // const { user, status } = useSession();
  let requestError = false;

  const steps = [PersonalInfosStep, AdressStep];

  function backStep(step: number) {
    if (step < currentStep) {
      setCurrentStep(step);
    }
  }

  function addToValues(data: any, submit?: string) {
    setFormValues({ ...formValues, ...data });

    if (submit) {
      submitForm(data);
    }
  }

  async function submitForm(data: any) {
    const user = { ...formValues, ...data };

    const response = await register(user);

    requestError = response;
  }

  /**
   * Checa se a sessão está ativa,
   * se estiver redirecione o usuário
   * para a tela de usuário
   */

  // if (status === "pending") return <LoadingScreen />;

  // if (status === "authorized") return <Navigate to={"/home"} />;

  return (
    <section className="signup-section">
      <div className="hero min-h-screen bg-base-200 py-10">
        <div className="hero-content w-3/4 flex flex-col">
          <div className="text-center">
            <h1 className="text-3xl mb-5 uppercase font-semibold">cadastro</h1>
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
          <div className="card shrink-0 w-full md:px-10 max-w-lg shadow-2xl bg-base-100">
            <div className="card-body">
              {steps.map((Step, i) => {
                const lastStep = i + 1 === steps.length;

                return (
                  <div
                    className={`flex-col justify-center ${
                      currentStep !== i + 1 ? "hidden" : "flex"
                    }`}
                    key={i}
                  >
                    {
                      <Step
                        steps={{
                          current: currentStep,
                          setCurrent: setCurrentStep,
                        }}
                        form={{ values: formValues, setValues: addToValues }}
                        submitForm={lastStep && submitForm}
                      />
                    }
                  </div>
                );
              })}
              <span
                className={`${
                  !!requestError ? "" : "hidden"
                } italic text-error text-center bold`}
              >
                {requestError}
                <a
                  href="https://discord.com/invite/FARNSbkZKt"
                  className="link text-blue-500 hover:text-blue-600 underline"
                >
                  suporte
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpScreen;
