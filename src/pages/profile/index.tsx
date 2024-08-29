import React from "react";
import { IUser } from "../../interfaces/user";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Button } from "../../components/common";
import { CardPrimary } from "../../components/cards/CardPrimary";
import { BsChevronRight, BsTypeH1 } from "react-icons/bs";
import { IProduct } from "../../interfaces/products";
import { listProducts } from "../../services/products.service";
import { getUser } from "../../services/user.service";
import { useAuthProvider } from "../../context/Auth";


export default function ProfileScreen(){
    const [user, setUser] = React.useState<IUser>();
    const [product, setProduct] = React.useState<IProduct>();
    //vou ter que trabalhar após a criação da rota da demanda
    const navigate = useNavigate()
    //verificar se realmenter vai querer que seja redirecionado para o product
    const handleRedirect = (id: string) => {
      navigate(`/product/${id}`);
    };
   
  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await getUser();
        setUser(resp.data);
      } catch (error) {
        console.error("Erro ao carregar o usuário:", error);
      }
    };    
    fetchUser()
  }, []);

  

  return (    
    <section className="profile-section p-0 flex h-screen">
      {user ? (
         <>      
    <main className="data-section flex-1 pt-5 h-screen lg:block">
    <div className="user-section w-full flex flex-col items-center justify-center">
  <ul className="w-88 p-4">
    <li className="flex justify-center mb-4">
      <Avatar src={""} />
    </li>
    <li className="flex justify-start text-lg">Nome: {user?.name};</li>
    <li className="flex justify-start text-lg">E-mail: {user?.email};</li>
    <li className="flex justify-start text-lg">Tel: {user?.phone};</li>    
    <li className="flex justify-start text-lg">
  Data de nascimento: {user?.birthDate ? new Date(user.birthDate).toLocaleDateString('pt-BR') : '01/01/2000'};
    </li>
    <li className="flex justify-start text-lg">
      Endereço:{" "} 
      {user?.address?.logradouro}, nº {user?.address?.numero};<br />
      Bairro: {user?.address?.bairro}, {user?.address?.municipio} - {user?.address?.estado?.toUpperCase()};<br />
      CEP: {user?.address?.cep};<br />
      Complemento: {user?.address?.complemento || 'Não informado'}.
    </li>
    <li className="flex justify-start text-lg">Veiculo: {" "} 
      {user.hasVehicle ? 
       user.vehicleType
      : 'Não possui.'}
    </li>    
  </ul>           
</div>        
    <div className="donation-section flex-1">
      <div className="flex flex-col items-center w-full mb-4">
        {user?.roles.includes('coordinator') ? 
        <>
        <div className="flex flex-row justify-between w-full">
                    <h4 className="text-2xl">Demandas</h4>
                    <div
                      className={`
                flex justify-end
              `}
                    >
                      <Button
                        text="Nova demanda"
                        className={`
                  bg-black text-white w-full
                `} />
                  </div>
              </div>
    {/*Div de usuário coordenado para carregar os pontos de demanda, sendo produtos somente para testes.*/}
      <div className="flex flex-row justify-center space-x-4">
        {/*Tem que futuramente mudar para pontos de demanda*/}
      {product ?
                <div
          className={`
          grid grid-cols-1 gap-3
          sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          `}
            >
               <CardPrimary image={""} title="Teste">
                       <div>
                          <p>teste</p>
                          <p>teste, teste, teste</p>
                          </div>
                           <div
              className={`
              absolute bottom-0 right-0
              m-4  rounded-md
              cursor-pointer               
            `}
              >
                 <Button
                 text="Detalhes"
                 className={`
                 bg-black text-white w-full
               `} />                
                </div>
            </CardPrimary>
          </div> 
          :  <h4>Sem pontos de demanda.</h4> }
      </div>
       </>
          : 
         <>
         <h2 className="text-3xl">Minhas Doações</h2>
         <div className="flex flex-row justify-center space-x-4">
      {product ?                 
      <div
    className={`
      grid grid-cols-1 gap-3
      sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    `}
  >
    <CardPrimary image={""} title="Teste" >
      <div>
        <p>teste</p>
        <p>teste, teste, teste</p>
      </div>
        
      <div
        className={`
          absolute bottom-0 right-0
          m-4 rounded-md 
          cursor-pointer 
        `}
      >
        <Button
                 text="Detalhes"
                 className={`
                 bg-black text-white w-full
               `} />

      </div>
    </CardPrimary>
   
      </div>
    : <h4>Sem doações.</h4>  
}
     </div>
         </>
        }
      </div>  
     
  </div>
  </main>
  </>
  ) :  
  (
    <div className="w-full flex justify-center p-5">
    <h1 className="text-3xl">Usuário não encontrado</h1>
    </div>
  )}
</section>
  )
}


