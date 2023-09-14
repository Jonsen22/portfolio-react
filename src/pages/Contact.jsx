import {useState} from "react";
import Linguaruda from "../images/linguaruda.jpg"

const Contact = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const submit = () => {

    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (
    <div className="contact flex flex-col " id="contact">
      <h1>Contact</h1>
      <div className="flex flex-wrap justify-start ml-[10%] md:ml-[20%] md:justify-between mr-[10%] mt-16 h-[65%]  md:flex-row flex-col items-center">
        <div className=" w-full md:h-1/2 md:w-2/5 flex flex-col justify-start md:justify-end">
          <div className="flex-col flex md:items-start relative md:pl-14">
            <span className="w-full text-left">Your name:</span>
            <input className="px-2 w-full md:w-4/5 rounded-2xl bg-gray-600 text-white "
            value={nome}
            onChange={(e) => {setNome(e.target.value);}}></input>
          </div>
          <div className="pt-5 flex-col flex md:items-start relative md:pl-14">
            <span className="w-full text-left">Your email:</span>
            <input className="rounded-2xl bg-gray-600 text-white px-2 w-full md:w-4/5 "
             value={email}
             onChange={(e) => {setEmail(e.target.value);}}></input>
          </div>
        </div>
        <div className="md:h-1/2 md:w-3/5 hidden md:block pr-10">
          <img alt="Gata com a lingua de fora" src={Linguaruda} 
          className="object-cover w-[300px] bg-slate-600  h-full rounded-full"></img>
        </div>
        <div className="h-1/2 md:h-1/2  w-full">
          <div className="pt-2 flex-col flex items-start relative md:pl-14 h-full">
            <span className="w-full text-left">Your message:</span>
            <textarea className="max-w-[800px] rounded-2xl bg-gray-600 text-white px-2 w-full md:w-4/5 h-2/3 resize-none "
             value={mensagem}
             onChange={(e) => {setMensagem(e.target.value);}}></textarea>
            <div className="max-w-[800px] flex mt-1 w-full md:w-4/5 justify-end">
            <button className=" rounded bg-gray-600 self-end px-[2px] py-[1px] border-2 border-gray-400"
            onClick={(e) => submit()}
            >Send it</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
