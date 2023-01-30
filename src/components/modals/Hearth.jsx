import { useModalData } from "./ModalContext";

function Hearth() {

   const { dispatch, state: { currentModal } } = useModalData();

   if (currentModal !== "Hearth") {
      return <></>
   }

   return (
      <div className="modal-background p-3 pointer-events-none">
         <div className="pointer-events-auto modal max-w-screen-xs w-full mx-auto top-20 relative rounded-sm" role="dialog" aria-modal="true">
            <div className="bg-custom-bg border border-custom-mg p-6 rounded">
               <div className="flex items-center justify-center mb-6">
                  <div className="flex-1 pl-7">
                     <h2 className="text-sm text-center uppercase text-custom-line font-semibold tracking-widest">GRAZIE!</h2>
                  </div>
                  <div className="justify-self-end flex">
                     <button autofocus="" className="border-none text-custom-mg" type="button" aria-label="Kapat" title="Kapat"
                        onClick={() => { dispatch({ type: 'Reset' }) }}>
                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                           fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <line x1="18" y1="6" x2="6" y2="18"></line>
                           <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                     </button>
                  </div>
               </div>
               <div className="text-center">
              
                  <p className="mb-3">Grazie per giocare a "L'Indovino con Una!"</p>
                  <p className="mb-3">Hai qualche domanda o riscontri qualche bug? <br/>Scrivimi su Instagram!</p>
                  <p class="mb-3">
                     <a href="https://www.instagram.com/il_laurice.exe/" class="flex items-center no-underline" target="_blank" rel="noreferrer">
                        <img src="iglogo.svg"/> @il_laurice.exe</a>
                  </p>
                 {/* <p class="mb-3">
                     <a href="https://ko-fi.com/X8X4ELG6W" class="flex items-center no-underline" target="_blank" rel="noreferrer">
                        <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 24 22" fill="currentColor">
                        <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z" fill="white"></path>
                        </svg> Ko-fi
                     </a>
                  </p>*/}
               
               </div>
               {/*<div className="text">
                    <p className="pt-3 mb-3 text-xs text-custom-line">Un ringrazimento speciale a <a href="https://github.com/agtokty">agtokty</a></p>
               </div>*/}
            </div>
         </div>
      </div>
   );
}

export default Hearth;
