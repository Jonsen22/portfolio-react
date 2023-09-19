import { useState } from "react";
import Linguaruda from "../images/linguaruda.jpg";
import { postEmail } from "../Context/email";

const Contact = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [nomeError, setNomeError] = useState(false);
  const [emailError, setEmailError] = useState("ok");
  const [mensagemError, setMensagemError] = useState(false);
  const [status, setStatus] = useState("");

  async function submit() {

    if (!nome) setNomeError(true);

    if (!email) setEmailError("Email empty");

    if (!mensagem) setMensagemError(true);

    if(nome && mensagem && validateEmail(email)) {

     
      try{
        var response = await postEmail(nome, email, mensagem);
        setStatus(response);
      } catch(error) {
        setStatus("Error sending email.");
        console.log(response)
      }
      
      console.log(response)
      
      if (response === "Sended" || status === "Sended") {
        setNome("");
        setEmail("");
        setMensagem("");
        setEmailError("ok");
        setNomeError(false);
        setMensagemError(false);
        setStatus("");
      }
    }
  }

  const validateEmail = (input) => {

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailPattern.test(input);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;

    if (email) setEmailError("ok");

    setEmail(inputEmail);

    if(!validateEmail(inputEmail)) 
      setEmailError("Email invalid");
    else
      setEmailError("ok");

  }


  return (
    <div className="contact flex flex-col items-center" id="contact">
      <h1>Contact</h1>
      <div className="flex flex-wrap justify-start ml-[10%] md:ml-[20%] w-[80%] md:justify-center mr-[10%] mt-16 h-[65%]  md:flex-row flex-col items-center">
        <div className="w-full md:flex-grow-0  md:w-1/3 md:max-w-[450px] md:h-1/2  flex flex-col justify-start md:justify-end">
          <div className="flex-col flex md:items-start relative md:pl-4">
            <span className="w-full text-left mb-1 ">Your name:</span>
            {nomeError ? (
              <>
                <input
                  className="border-2 border-rose-500 outline-none text-xs px-2 py-2 w-full md:w-4/5 rounded-2xl bg-gray-600 text-white md:max-w-[250px]"
                  value={nome}
                  onChange={(e) => {
                    setNome(e.target.value);
                  }}
                ></input>
                <span className="text-rose-600 font-thin text-xs text-start pl-2 mt-1 h-3">
                  Name empty
                </span>
              </>
            ) : (
              <>
                <input
                  className="outline-none text-xs px-2 py-2 w-full md:w-4/5 rounded-2xl bg-gray-600 text-white md:max-w-[250px]"
                  value={nome}
                  onChange={(e) => {
                    setNome(e.target.value);
                  }}
                ></input>
                <div className="pl-2 mt-1 h-3" />
              </>
            )}
          </div>
          <div className="pt-2 flex-col flex md:items-start relative md:pl-4">
            <span className="w-full text-left mb-1">Your email:</span>

            {emailError !== "ok" ? (
              <>
                <input
                  className="border-2 border-rose-500 outline-none text-xs px-2 py-2 w-full  rounded-2xl bg-gray-600 text-white md:w-full md:max-w-[300px]"
                  value={email}
                  onChange={handleEmailChange}
                ></input>
                <span className="text-rose-600 font-thin text-xs text-start pl-2 mt-1 h-3">
                  {emailError}
                </span>
              </>
            ) : (
              <>
                <input
                  className="outline-none text-xs py-2 rounded-2xl bg-gray-600 text-white px-2 w-full md:w-full md:max-w-[300px] "
                  value={email}
                  onChange={handleEmailChange}
                ></input>
                <div className="pl-2 mt-1 h-3" />
              </>
            )}
          </div>
        </div>
        <div className="md:h-1/2 md:flex-1 md:max-w-[690px] hidden md:flex pl-2 items-start self-end md:w-2/3">
          <img
            alt="Gata com a lingua de fora"
            src={Linguaruda}
            className="shadow-[20px_20px_4px_rgba(0,0,0,0.2)] object-cover w-[300px] w-min-[300px] bg-slate-600  h-full rounded-full max-h-[300px]"
          ></img>
        </div>
        <div className="items-center h-1/2 md:h-1/2 w-full md:flex justify-center md:w-full flex-col ">
          <div className=" pt-2 flex-col flex items-start  md:w-full md:max-w-[1140px] md:pl-4 h-full">
            <span className="w-full text-start ">Your message:</span>
            {mensagemError ? (
              <>
                <textarea
                  className="border-2 border-rose-500 outline-none  rounded-2xl bg-gray-600 text-white px-2 w-full md:w-4/5 h-2/3 resize-none "
                  value={mensagem}
                  onChange={(e) => {
                    setMensagem(e.target.value);
                  }}
               
                ></textarea>
                <div className=" flex mt-1 w-full md:w-4/5 justify-between">
                <span className="text-rose-600 font-thin text-xs text-start pl-2 mt-1 h-3">
                  Message empty
                </span>
                  <button
                    className=" rounded bg-gray-600 self-end px-[2px] py-[1px] border-2 border-gray-400"
                    onClick={(e) => submit()}
                  >
                    Send it
                  </button>
                </div>
              </>
            ) : (
              <>
                <textarea
                  className="outline-none max-w-[800px] rounded-2xl bg-gray-600 text-white px-2 w-full md:w-4/5 h-2/3 resize-none "
                  value={mensagem}
                  onChange={(e) => {
                    setMensagem(e.target.value);
                  }}
                  
                ></textarea>
                <div className="max-w-[800px] flex mt-1 w-full md:w-4/5 justify-end">
                  <button
                    className=" rounded bg-gray-600 self-end px-[2px] py-[1px] border-2 border-gray-400"
                    onClick={(e) => submit()}
                  >
                    Send it
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
