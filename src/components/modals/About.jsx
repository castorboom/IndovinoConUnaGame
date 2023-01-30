import { useModalData } from "./ModalContext";

function About() {

   const { dispatch, state: { currentModal } } = useModalData();

   if (currentModal !== "About") {
      return <></>
   }

   return (
      <div className="modal-background p-3 pointer-events-none">
         <div className="pointer-events-auto modal max-w-screen-xs w-full mx-auto top-20 relative rounded-sm" role="dialog" aria-modal="true">
            <div className="bg-custom-bg border border-custom-mg p-6 rounded">
               <div className="flex items-center justify-center mb-6">
                  <div className="flex-1 pl-7">
                     <h2 className="text-sm text-center uppercase text-custom-line font-semibold tracking-widest">L'Indovino con Una! - Music Game</h2>
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
                  <p className="mb-3"><a href="https://indovinoconuna.it/" target="_blank" rel="noreferrer" title="L'Indovino con una!">L'Indovino con una!</a>, indovina i più grandi successi Italiani.</p>
                  <p className="mb-3">Indovina la canzone italiana scelta a caso con il minor numero di tentativi: </p>
                  <p className="mb-3">gioca, ascolta e divertiti ad indovinare!</p>
                   <p class="my-5">
                     <a href="https://www.instagram.com/il_laurice.exe/" class="flex items-center no-underline" target="_blank" rel="noreferrer">
                        <img src="iglogo.svg"/> @il_laurice.exe
                     </a>
                  </p>
               </div>
               <div className="text">
                  <p className="text-sm mb-1 text-custom-line">Piattaforme utilizzate:</p>
                  <p className="text-sm text-custom-line">
                     <a href="https://firebase.google.com/" target="_blank" rel="https://firebase.google.com/">Firebase, </a>
                     <a href="https://developers.soundcloud.com/docs/api/html5-widget" target="_blank" rel="https://soundcloud.com/">Soundcloud, </a>
                     <a href="https://developer.spotify.com/" target="_blank" rel="https://developer.spotify.com/">Spotify, </a>
                     <a href="https://reactjs.org/" target="_blank" rel="https://it.reactjs.org/">React e </a>
                     <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">Tailwind</a>
                  </p>
                  <p className="pt-3 mb-3 text-xs text-custom-line">
                     Sviluppatori: 
                     <p>
                        <li><a href="https://github.com/castorboom" target="_blank" rel="noreferrer" title="castorboom">Loris Castorani @ GitHub.com</a></li>
                     </p>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;
