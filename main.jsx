import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Phone, Mail, MapPin, Car, CheckCircle, Globe, Send, ShieldCheck, Wrench, FileText, Fuel, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import './style.css';

import heroBanner from './assets/hero-banner.png';

const T = {
  pl: {
    navOffer:'Oferta', navReq:'Wymagania', navApply:'Zgłoszenie',
    hero:'Auta dla kierowców Uber / Bolt',
    sub:'Wynajem samochodów hybrydowych gotowych do pracy w Warszawie i okolicach.',
    price:'Od 400 zł / tydzień',
    call:'Zadzwoń',
    whatsapp:'WhatsApp',
    cars:'Toyota Prius+, Corolla Hybrid i inne hybrydy',
    why:'Dlaczego PRO-FIT?',
    req:'Wymagania',
    apply:'Zgłoszenie kierowcy',
    name:'Imię i nazwisko',
    phone:'Telefon',
    exp:'Czy jeździłeś już Uber/Bolt?',
    send:'Wyślij zgłoszenie na WhatsApp',
    docs:'Prawo jazdy kat. B, niekaralność, badania lekarskie, psychotechnika',
    footer:'PRO-FIT Ireneusz Pleskot • Warszawa / Ząbki'
  },
  en: {
    navOffer:'Offer', navReq:'Requirements', navApply:'Apply',
    hero:'Cars for Uber / Bolt drivers',
    sub:'Hybrid cars ready for work in Warsaw and nearby areas.',
    price:'From 400 PLN / week',
    call:'Call',
    whatsapp:'WhatsApp',
    cars:'Toyota Prius+, Corolla Hybrid and other hybrids',
    why:'Why PRO-FIT?',
    req:'Requirements',
    apply:'Driver application',
    name:'Full name',
    phone:'Phone',
    exp:'Have you driven Uber/Bolt before?',
    send:'Send application via WhatsApp',
    docs:'Category B driving licence, clean criminal record, medical exam, psychotechnical test',
    footer:'PRO-FIT Ireneusz Pleskot • Warsaw / Ząbki'
  },
  ua: {
    navOffer:'Пропозиція', navReq:'Вимоги', navApply:'Заявка',
    hero:'Авто для водіїв Uber / Bolt',
    sub:'Гібридні авто готові до роботи у Варшаві та околицях.',
    price:'Від 400 зл / тиждень',
    call:'Подзвонити',
    whatsapp:'WhatsApp',
    cars:'Toyota Prius+, Corolla Hybrid та інші гібриди',
    why:'Чому PRO-FIT?',
    req:'Вимоги',
    apply:'Заявка водія',
    name:'Імʼя та прізвище',
    phone:'Телефон',
    exp:'Чи працювали ви вже в Uber/Bolt?',
    send:'Надіслати заявку у WhatsApp',
    docs:'Права категорії B, довідка про несудимість, медогляд, психотести',
    footer:'PRO-FIT Ireneusz Pleskot • Варшава / Зомбки'
  }
};

function App(){
  const [lang,setLang]=useState('pl');
  const [menu,setMenu]=useState(false);
  const [form,setForm]=useState({name:'',phone:'',exp:''});
  const t=T[lang];

  const wa=()=> {
    const msg=`Zgłoszenie kierowcy PRO-FIT%0AImię: ${encodeURIComponent(form.name)}%0ATelefon: ${encodeURIComponent(form.phone)}%0ADoświadczenie: ${encodeURIComponent(form.exp)}%0AOferta: Uber/Bolt`;
    window.open(`https://wa.me/48788999850?text=${msg}`,'_blank');
  };

  const fade={initial:{opacity:0,y:28}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:.55}};

  return <div className="page">
    <header>
      <div className="brand">PRO-<span>FIT</span><small>RENT & DRIVE</small></div>
      <nav className={menu?'open':''}>
        <a href="#offer">{t.navOffer}</a>
        <a href="#req">{t.navReq}</a>
        <a href="#apply">{t.navApply}</a>
        <select value={lang} onChange={e=>setLang(e.target.value)}>
          <option value="pl">PL</option>
          <option value="en">EN</option>
          <option value="ua">UA</option>
        </select>
      </nav>
      <button className="menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
    </header>

    <section className="hero">
      <motion.div {...fade} className="heroText">
        <div className="badge"><MapPin size={18}/> Warszawa / Ząbki</div>
        <h1>{t.hero}</h1>
        <p>{t.sub}</p>
        <div className="price">{t.price}</div>
        <div className="actions">
          <a className="btn gold" href="tel:788999850"><Phone/> {t.call}: 788 999 850</a>
          <a className="btn green" href="https://wa.me/48788999850" target="_blank" rel="noreferrer"><Send/> {t.whatsapp}</a>
        </div>
      </motion.div>

      <motion.div initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:.75}} className="carCard">
        <img src={heroBanner} alt="PRO-FIT Uber Bolt" />
      </motion.div>
    </section>

    <section id="offer" className="section">
      <motion.h2 {...fade}>{t.why}</motion.h2>
      <div className="grid">
        {[[Fuel,'Niskie spalanie / Low fuel use'],[Wrench,'Serwis i assistance'],[ShieldCheck,'Bezpieczna współpraca'],[FileText,'Pakiet dokumentów'],[Car,'Auta gotowe do pracy'],[Globe,'PL / EN / UA']].map(([Icon,text],i)=>
          <motion.div {...fade} className="tile" key={i}><Icon/><h3>{text}</h3><p>Profesjonalna obsługa kierowców Uber/Bolt.</p></motion.div>
        )}
      </div>
    </section>

    <section id="req" className="section dark">
      <motion.h2 {...fade}>{t.req}</motion.h2>
      <div className="checks">
        {t.docs.split(', ').map(x=><div className="check" key={x}><CheckCircle/> {x}</div>)}
      </div>
    </section>

    <section id="apply" className="section apply">
      <motion.div {...fade} className="formBox">
        <h2>{t.apply}</h2>
        <input placeholder={t.name} value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
        <input placeholder={t.phone} value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
        <textarea placeholder={t.exp} value={form.exp} onChange={e=>setForm({...form,exp:e.target.value})}/>
        <button onClick={wa}><Send/> {t.send}</button>
      </motion.div>
    </section>

    <footer>
      <b>{t.footer}</b><br/>
      ul. Skrajna 32D/11, 05-091 Ząbki • NIP 1132499907<br/>
      <a href="tel:788999850">788 999 850</a> • <a href="mailto:profitpl.pl@gmail.com">profitpl.pl@gmail.com</a>
    </footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
