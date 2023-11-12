import React, { useState } from 'react'
import "./Home.css"
import {useSearchParams } from 'react-router-dom'


export default function Home() {
  
  
  const GREETINGS = [
   "पुन्हा एक नवे वर्ष,पुन्हा एक नवी आशा,तुमच्या कर्तुत्वाला पुन्हा एक नवी दिशा नवे स्वप्न, नवे क्षितीज,सोबत माझ्या दिवाळीच्या हार्दिक शुभेच्छा!",
   "फटाके, कंदील अन् पणत्यांची रोषणाई, चिवडा-चकली, लाडू-करंजीची ही लज्जतच न्यारी,नव्यानवलाईची दिवाळी येता, आनंदली दुनिया सारी!दिवाळीच्या हार्दिक शुभेच्छा!!!",
   "तेजोमय झाला आजचा प्रकाश, जुना कालचा काळोख,लुकलुकणार्‍या चांदण्याला किरणांचा सोनेरी अभिषेक,सारे रोजचे तरीही भासे नवा सहवास,सोन्यासारख्या लोकांसाठी खास,दिवाळीच्या हार्दिक शुभेच्छा!!!",
   "सोनेरी प्रकाशात,पहाट सारी न्हाऊन गेली,आनंदाची उधळण करीत,आली दिवाळी आली,नवे लेणे भरजारी,दारी रांगोळी न्यारी,गंध प्रेमाचा उधळीत,आली आली दिवाळी आली…",
   "चंद्राचा कंदील घरावरी,चांदण्यांचे तोरण दारावरी..क्षितीजाचे रंग रांगोळीवरी दिवाळीचे स्वागत घरोघरी..!!दिवाळीच्या हार्दिक शुभेच्छा..!शुभ दीपावली…"
  ]
  const [searchParams] = useSearchParams();

  const [to,setTO]=useState(searchParams.get("to"));
  const [from,setFrom] =useState(searchParams.get("from"))
 const [GreetingsNumber,setGreetingNumber] =useState(searchParams.get('g') >= GREETINGS.length ? 0 : searchParams.get('g') || 0 )
 const [themeNumber,setThemeNumber]= useState (searchParams.get("t"))
  
  return (
    <div>
      <div className={`greeting-container ${`theme-${themeNumber}`}`}>
      <h2>Dear {to} 💐</h2>
      <span className='wishing-text'> 🙏 दिवाळीच्या हार्दिक शुभेच्छा!!! From {from}</span>

 
 <p className='font-size'>{GREETINGS[GreetingsNumber]}</p>
    </div>
    <p className='own-thoughts'>
      Do you want to create your own Diwali Greetings? customize it here 👇
    </p>
    <p className='link-url'>{import.meta.env.VITE_BASE_URL}?to={to}&from={from}&g={GreetingsNumber}&t={themeNumber}</p>

    <div className='input-field-container'>
     
        <input type='text' 
        placeholder='to'
        className='input-field'
        onChange={(e)=>{
          setTO(e.target.value)
        }}/>
      
      
        <input type='text' 
        placeholder='from'
        className='input-field'
        onChange={(e)=>{
        setFrom(e.target.value)
        }}/>
    
    <select className='input-field select-input-field' value={themeNumber} onChange={(e)=>{
       setThemeNumber(e.target.value)
      }}>
         <option>select</option>
    <option value="0">Theme-1</option>
    <option value="1">Theme-2</option>
    <option value="2">Theme-3</option>
    <option value="3">Theme-4</option>
    <option value="4">Theme-5</option>
    <option value="5">Theme-6</option>
      </select>

      <select className='input-field select-input-field' value={GreetingsNumber} onChange={(e)=>{
       setGreetingNumber(e.target.value)
      }} >
        <option>select</option>
    <option value="0">Greeting-1</option>
    <option value="1">Greeting-2</option>
    <option value="2">Greeting-3</option>
    <option value="3">Greeting-4</option>
    <option value="4">Greeting-5</option>
    <option value="5">Greeting-6</option>
      </select>
   
    </div>
    </div>
    
  )
}
