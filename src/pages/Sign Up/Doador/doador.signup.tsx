import AdressStep from "./SignUpSteps/Adress/AdressStep";
import VehiclesStep from "./SignUpSteps/Vehicles/VehiclesStep";
import { useState } from "react";
import { PersonalInfosStep } from "./SignUpSteps/PersonalInfos/PersonalInfos";

/**
 * caso alguma prop seja passada para
 * o formulário adicione-a aqui
 */
interface SignUpDoadorProps {}

function SignUpDoadorScreen(props: SignUpDoadorProps) {
  const [currentStep, setCurrentStep] = useState(3);
  const [formValues, setFormValues] = useState({});

  const steps = [PersonalInfosStep, AdressStep, VehiclesStep];

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
          <div className="text-center">
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
          <div className="card shrink-0 w-full px-10 max-w-lg shadow-2xl bg-base-100">
            <div className="card-body">
              {steps.map((Step, i) => {
                return (
                  <div
                    className={`flex-col justify-center ${
                      currentStep !== i + 1 ? "hidden" : "flex"
                    }`}
                    key={i}
                  >
                    {
                      <Step
                        steps={{current: currentStep, setCurrent: setCurrentStep}}
                        form={{values: formValues, setValues: setFormValues}}
                      />
                    }
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpDoadorScreen;
