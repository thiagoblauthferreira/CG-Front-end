import { useState } from "react";
import AdressStep from "../auth/register/SignUpSteps/Adress/AdressStep";
import { PersonalInfosStep } from "../auth/register/SignUpSteps/PersonalInfos/PersonalInfos";
import { register } from "../../services/auth.service";
//import { Navigate } from "react-router-dom";
//import { useSession } from "../../hooks/useSession";
import { getUserProfile } from "../../services/user.service";
import { getCookie } from "../../services/cookie.service";

interface SignUpDoadorProps {}

function ProfileScreen(props: SignUpDoadorProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState({});
  //const { user, status } = useSession();
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

    console.log(user);

    const response = await register(user);
    const token = getCookie('token')
    const userData = await getUserProfile(token)
    console.log(userData)
    requestError = response;
  }

  /**
   * Checa se a sessão está ativa,
   * se estiver redirecione o usuário
   * para a tela de usuário
   */

  // if (status === "pending") return <LoadingScreen />;

 //if (status === "authorized") return <Navigate to={"/home"} />;

  return (
    <section className="profile-section">
    <div className="hero w-[90%] h-[90%] mx-auto flex flex-col items-center justify-center bg-base-200 py-10">
      {/* Adicione seu conteúdo aqui */}
      <h1 className="text-3xl font-semibold mb-4">Seu Título Aqui</h1>
      <p className="text-lg">Seu conteúdo aqui.</p>
      {/* Outros elementos ou componentes */}
    </div>
  </section>
  
  );
}

export default ProfileScreen;
