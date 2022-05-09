// import logo from './logo.svg';
import './App.css';
import image from './img/chatbotimage.jpg';
import {useState} from 'react';


function App() {

  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  const[time,setTime]=useState(`${hours}:${seconds}`);
  const[dateTime,setDateTime]=useState(`${days[day]},${months[month]} ${year}`);
  console.log(dateTime);
  const checkStatus =(e)=>{
    let isActive = true;
    console.log(dateTime);
    if(dateTime==="Monday,May 2022"){
      isActive = false;

    }
    const status = document.querySelector('.status')
    if(isActive === true){
      status.innerHTML='Active';
      status.style.color='green';
    }
    else{
      status.innerHTML ='Not Active';
      status.style.color ='red';
    }
  }
  const handleInput=(e)=>{
    const botMessage=document.querySelector('#message1');
    const userMessage=document.querySelector('#message2');
    let badwords=['bad|useless'];
    let words=new RegExp(badwords);
    if(words.test(document.querySelector('#input').value)){
      botMessage.innerHTML='Typing...';
      setTimeout(()=>{
        botMessage.innerHTML='Please do not use bad words';
        document.querySelector('#input').value='';
      },2000);
    }
    let welcome=['hi|hello|hey|sup|yo|whatsapp|Hii sir|Hii Sir'];
    let words2= new RegExp(welcome);
    if(words2.test(document.querySelector('#input').value)){
      const status =document.querySelector('.status');
      botMessage.innerHTML='Typing...';
      setTimeout(()=>{
        botMessage.innerHTML='Hello There how are you';
      status.innerHTML='Active';
      status.style.color='green';
        document.querySelector('#input').value='';
      },2000);
    }
    let bye=['bye|seeyoulatter|cya'];
    let words3= new RegExp(bye);
    if(words3.test(document.querySelector('#input').value)){
    const status =document.querySelector('.status');
    botMessage.innerHTML='Typing...';
    setTimeout(()=>{
      botMessage.innerHTML='Bye,have a nice day';
      document.querySelector('#input').value='';
    },2000);
        
    setTimeout(()=>{
      status.innerHTML='Not active';
      status.style.color ='red';
    },5000);
  }
    let para=['headpain|cold|ihavefever'];
    let words4 = new RegExp(para);
    if( words4.test(document.querySelector('#input').value)){
      const status =document.querySelector('#input');
      botMessage.innerHTML='Typing...';
      setTimeout(()=>{
        botMessage.innerHTML='Take Paracetamol for now and do blood test tomorrow';
        document.querySelector('#input').value='';
      },2000);
    
    setTimeout(()=>{
      status.innerHTML='Not active';
      status.style.color ='red';
    },5000);
  }
  
  let fev=['Vomiting|suffocation|ihavefever'];
  let words7 = new RegExp(fev);
  if( words7.test(document.querySelector('#input').value)){
    const status =document.querySelector('#input');
    botMessage.innerHTML='Typing...';
    setTimeout(()=>{
      botMessage.innerHTML='Vikash take Paracetamol for now and do blood test tomorrow';
      document.querySelector('#input').value='';
    },2000);
  }
  let para1=['headpain|cold|ihavefever'];
  let words14 = new RegExp(para);
  if( words14.test(document.querySelector('#input').value)){
    const status =document.querySelector('#input');
    botMessage.innerHTML='Typing...';
    setTimeout(()=>{
      botMessage.innerHTML='Take Paracetamol for now and do blood test tomorrow';
      document.querySelector('#input').value='';
    },2000);
  }
  
  let ok=['Thankyou |Thanks|Ok'];
  let words6 = new RegExp(ok);
  if( words6.test(document.querySelector('#input').value)){
    const status =document.querySelector('#input');
    botMessage.innerHTML='Typing...';
    setTimeout(()=>{
      botMessage.innerHTML='Welcome vikash for any other assistance feel free to contact me';
      document.querySelector('#input').value='';
    },2000);
  }
  let na=['MynameisVikash|Vikashhere|Iamvikash|Itsvikash'];
  let words8 = new RegExp(na);
  if( words8.test(document.querySelector('#input').value)){
    const status =document.querySelector('#input');
    botMessage.innerHTML='Typing...';
    setTimeout(()=>{
      botMessage.innerHTML='Hii Vikash what happened';
      document.querySelector('#input').value='';
    },2000);
  }
  let thanks =['Thanks|thanks|thankyou|thank you very much'];
  let words9 = new RegExp(thanks);
  if( words9.test(document.querySelector('#input').value)){
   
    botMessage.innerHTML='Typing...';
    setTimeout(()=>{
      botMessage.innerHTML='You are Welcome';
      document.querySelector('#input').value='';
    },2000);
  }
  let how =['How are you|how are you doing'];
  let how1 = new RegExp(how);
  if( how1.test(document.querySelector('#input').value)){
    const status =document.querySelector('#input');
   
    botMessage.innerHTML='Typing...';
    setTimeout(()=>{
      botMessage.innerHTML='I am fine ,thank you';
      status.innerHTML='Active';
      status.style.color='green';
    },2000);
  }
 

    
userMessage.innerHTML= document.querySelector('#input').value;

  }

  return (
    <div className="App" onLoad= {checkStatus}>
      <div className="wrapper">
         <div className="content">
             <div className="header">
                <div className="img">
                 <img src={image} alt=""/>
                </div>
                <div className="right">
                  <div className="name">DoctorBot</div>
                  <div className="status">Active</div>
                </div>
             </div>
             <div className="main">
                 <div className="main-content"> 
                    <div className="messages">
                        <div className="bot-message" id ='message1'>Hello i am Dr.Vikash</div>
                        <div className="human-message" id ='message2'></div>
                    </div>
                 </div>
             </div>
             <div className="bottom">
               <div className="btm">
                 <div className="input">
                   <input type="text" id="input" placeholder='Enter your message'/> 
                 </div>
                   <div className="btn">
                      <button onClick={handleInput}><i className="fas fa-paper-plane "></i> Send</button>
                   </div>
               </div>
             </div>
         </div>
      </div>
    </div>
  );
}

export default App;
