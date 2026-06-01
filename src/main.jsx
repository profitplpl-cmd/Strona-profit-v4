import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Send, CheckCircle, Menu, X, Star, Fuel,
  ShieldCheck, Wrench, FileText, Globe
} from "lucide-react";
import "./style.css";

import heroBanner from "./assets/hero-banner.png";
import corolla from "./assets/corolla.png";
import prius from "./assets/prius.png";
import logoShowcase from "./assets/logo-showcase.png";
import rearWindow from "./assets/rear-window.png";

const T = {
  pl: {
    offer: "Oferta", fleet: "Flota", req: "Wymagania", apply: "Zgłoszenie",
    heroTop: "PRO-FIT Rent & Drive • Warszawa / Ząbki",
    hero: "Auta dla kierowców Uber i Bolt",
    sub: "Nowoczesny wynajem aut hybrydowych gotowych do pracy. Toyota Prius+, Corolla Hybrid i inne modele — od 400 zł tygodniowo.",
    cta: "Zacznij zarabiać", call: "Zadzwoń", price: "od 400 zł / tydzień",
    why: "Premium obsługa dla kierowców", fleetTitle: "Dostępne auta", reqTitle: "Co jest potrzebne?",
    applyTitle: "Zgłoszenie kierowcy", name: "Imię i nazwisko", phone: "Telefon",
    exp: "Doświadczenie / pytanie", send: "Wyślij zgłoszenie na WhatsApp",
    reviews: "Opinie kierowców", footer: "PRO-FIT Ireneusz Pleskot"
  },
  en: {
    offer: "Offer", fleet: "Fleet", req: "Requirements", apply: "Apply",
    heroTop: "PRO-FIT Rent & Drive • Warsaw / Ząbki",
    hero: "Cars for Uber and Bolt drivers",
    sub: "Modern hybrid car rental ready for work. Toyota Prius+, Corolla Hybrid and other models — from 400 PLN per week.",
    cta: "Start earning", call: "Call", price: "from 400 PLN / week",
    why: "Premium driver support", fleetTitle: "Available cars", reqTitle: "Requirements",
    applyTitle: "Driver application", name: "Full name", phone: "Phone",
    exp: "Experience / question", send: "Send via WhatsApp",
    reviews: "Driver reviews", footer: "PRO-FIT Ireneusz Pleskot"
  },
  ua: {
    offer: "Пропозиція", fleet: "Авто", req: "Вимоги", apply: "Заявка",
    heroTop: "PRO-FIT Rent & Drive • Варшава / Зомбки",
    hero: "Авто для водіїв Uber і Bolt",
    sub: "Сучасна оренда гібридних авто готових до роботи. Toyota Prius+, Corolla Hybrid та інші моделі — від 400 зл на тиждень.",
    cta: "Почати заробляти", call: "Подзвонити", price: "від 400 зл / тиждень",
    why: "Преміум підтримка водіїв", fleetTitle: "Доступні авто", reqTitle: "Вимоги",
    applyTitle: "Заявка водія", name: "Імʼя та прізвище", phone: "Телефон",
    exp: "Досвід / питання", send: "Надіслати у WhatsApp",
    reviews: "Відгуки водіїв", footer: "PRO-FIT Ireneusz Pleskot"
  }
};

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: .18 },
  transition: { duration: .65 }
};

function App() {
  const [lang, setLang] = useState("pl");
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", exp: "" });
  const t = T[lang];

  const sendWhatsApp = () => {
    const msg = `Zgłoszenie kierowcy PRO-FIT%0AImię: ${encodeURIComponent(form.name)}%0ATelefon: ${encodeURIComponent(form.phone)}%0AWiadomość: ${encodeURIComponent(form.exp)}%0AInteresuje mnie auto Uber/Bolt`;
    window.open(`https://wa.me/48788999850?text=${msg}`, "_blank");
  };

  const benefits = [
    [Fuel, "Niskie spalanie", "Hybrydy idealne do miasta i codziennej pracy."],
    [Wrench, "Serwis i wsparcie", "Pomoc techniczna oraz sprawna obsługa auta."],
    [ShieldCheck, "Bezpieczne zasady", "Jasne warunki współpracy i dokumenty."],
    [FileText, "Pakiet dokumentów", "Umowa, protokół, regulamin i formularze."],
  ];

  const cars = [
    { img: prius, title: "Toyota Prius+", desc: "Ekonomiczny i przestronny samochód do pracy Uber/Bolt." },
    { img: corolla, title: "Toyota Corolla Hybrid", desc: "Nowoczesna hybryda, komfortowa i oszczędna." },
    { img: rearWindow, title: "Różne auta hybrydowe", desc: "Dostępność zależna od aktualnej floty." },
  ];

  return (
    <div className="site">
      <a className="floatWhatsApp" href="https://wa.me/48788999850" target="_blank"><Send size={22}/> WhatsApp</a>

      <header className="nav">
        <div className="brandWrap">
          <img src={logoShowcase} alt="PRO-FIT logo" />
          <div className="brandText">PRO-<span>FIT</span><small>RENT & DRIVE</small></div>
        </div>
        <nav className={menu ? "open" : ""}>
          <a href="#offer">{t.offer}</a>
          <a href="#fleet">{t.fleet}</a>
          <a href="#req">{t.req}</a>
          <a href="#apply">{t.apply}</a>
          <select value={lang} onChange={(e)=>setLang(e.target.value)}>
            <option value="pl">PL</option><option value="en">EN</option><option value="ua">UA</option>
          </select>
        </nav>
        <button className="menuBtn" onClick={()=>setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
      </header>

      <section className="hero">
        <div className="heroBg" />
        <motion.div className="heroText" initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <div className="pill"><Star size={18}/>{t.heroTop}</div>
          <h1>{t.hero}</h1>
          <p>{t.sub}</p>
          <div className="heroStats">
            <div><strong>{t.price}</strong><span>Uber / Bolt</span></div>
            <div><strong>24/7</strong><span>kontakt</span></div>
            <div><strong>PL / EN / UA</strong><span>obsługa</span></div>
          </div>
          <div className="heroBtns">
            <a className="btn gold" href="#apply">{t.cta}</a>
            <a className="btn dark" href="tel:788999850"><Phone size={20}/>{t.call}: 788 999 850</a>
          </div>
        </motion.div>

        <motion.div className="heroImage" initial={{opacity:0,scale:.94,x:30}} animate={{opacity:1,scale:1,x:0}} transition={{duration:.85}}>
          <img src={heroBanner} alt="PRO-FIT Uber Bolt banner" />
        </motion.div>
      </section>

      <section id="offer" className="section">
        <motion.div {...fade} className="sectionHead">
          <span>PRO-FIT</span>
          <h2>{t.why}</h2>
        </motion.div>
        <div className="benefitGrid">
          {benefits.map(([Icon,title,desc]) => (
            <motion.div {...fade} className="benefit" key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="fleet" className="section fleet">
        <motion.div {...fade} className="sectionHead">
          <span>Hybrid Fleet</span>
          <h2>{t.fleetTitle}</h2>
        </motion.div>
        <div className="carGrid">
          {cars.map((car) => (
            <motion.article {...fade} className="carTile" key={car.title}>
              <img src={car.img} alt={car.title} />
              <div>
                <h3>{car.title}</h3>
                <p>{car.desc}</p>
                <b>{t.price}</b>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="req" className="split">
        <motion.div {...fade} className="splitImage">
          <img src={logoShowcase} alt="Logo PRO-FIT" />
        </motion.div>
        <motion.div {...fade} className="splitText">
          <span className="mini">Start</span>
          <h2>{t.reqTitle}</h2>
          {["Prawo jazdy kat. B", "Zaświadczenie o niekaralności", "Badania lekarskie", "Psychotechnika", "Odpowiedzialność i kultura osobista"].map((x)=>(
            <div className="reqItem" key={x}><CheckCircle/> {x}</div>
          ))}
        </motion.div>
      </section>

      <section className="reviews">
        <motion.div {...fade} className="sectionHead">
          <span>Driver care</span>
          <h2>{t.reviews}</h2>
        </motion.div>
        <div className="reviewGrid">
          {["Szybki start i jasne zasady współpracy.", "Auto oszczędne, dobre do jazdy po Warszawie.", "Kontakt i pomoc zawsze wtedy, gdy trzeba."].map((x, i)=>(
            <motion.div {...fade} className="review" key={i}>
              <div className="stars">★★★★★</div>
              <p>“{x}”</p>
              <b>Kierowca PRO-FIT</b>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="apply" className="apply">
        <motion.div {...fade} className="applyCard">
          <div>
            <span className="mini">WhatsApp lead system</span>
            <h2>{t.applyTitle}</h2>
            <p>Wypełnij krótki formularz — wiadomość otworzy się automatycznie w WhatsApp z gotową treścią zgłoszenia.</p>
          </div>
          <div className="form">
            <input placeholder={t.name} value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>
            <input placeholder={t.phone} value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})}/>
            <textarea placeholder={t.exp} value={form.exp} onChange={(e)=>setForm({...form,exp:e.target.value})}/>
            <button onClick={sendWhatsApp}><Send/> {t.send}</button>
          </div>
        </motion.div>
      </section>

      <footer>
        <div><b>{t.footer}</b><br/>ul. Skrajna 32D/11, 05-091 Ząbki • NIP: 1132499907</div>
        <div><Phone size={16}/> 788 999 850<br/><Mail size={16}/> profitpl.pl@gmail.com<br/><MapPin size={16}/> Warszawa / Ząbki</div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
