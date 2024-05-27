import AdressStep from "./SignUpSteps/Adress/AdressStep";
import { useState } from "react";
import { PersonalInfosStep } from "./SignUpSteps/PersonalInfos/PersonalInfos";

/**
 * caso alguma prop seja passada para
 * o formulário adicione-a aqui
 */
interface SignUpDoadorProps {}

function SignUpScreen(props: SignUpDoadorProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState({});

  const steps = [PersonalInfosStep, AdressStep];

  function backStep(step: number) {
    if (step < currentStep) {
      setCurrentStep(step);
    }
  }

  function submitForm(data: any) {
    console.log(data);
    console.log(formValues);
  }

  /**
   * Checa se a sessão está ativa,
   * se estiver redirecione o usuário
   * para a tela de usuário
   */
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
                        form={{ values: formValues, setValues: setFormValues }}
                        submitForm={lastStep && submitForm}
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

export default SignUpScreen;
