import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight, ArrowRight, Menu, X, Phone, MapPin, Clock, HeartHandshake,
  MessageCircle, CalendarDays, ChevronDown, CheckCircle2, Sparkles, Brain,
  Speech, Activity, Users, ShieldCheck, Star, Instagram, Facebook, Send,
  Plus, Minus, Quote, Leaf, HandHeart, Accessibility, Baby, Mail
} from 'lucide-react';
import './styles.css';

const phone = '08147955104';
const whatsapp = `https://wa.me/91${phone.replace(/\D/g,'')}`;
const services = [
  { id: 'speech', icon: Speech, eyebrow: 'COMMUNICATION & CONNECTION', title: 'Speech therapy', text: 'Helping every voice find its way. Individualised support for speech, language, communication and confidence.', tags: ['Speech & language', 'Communication skills', 'Language development'], color: 'lilac' },
  { id: 'physio', icon: Activity, eyebrow: 'MOVEMENT & MOBILITY', title: 'Physiotherapy', text: 'Building strength, coordination and independence through purposeful movement and guided practice.', tags: ['Gross motor skills', 'Balance & coordination', 'Functional movement'], color: 'mint' },
  { id: 'development', icon: Brain, eyebrow: 'GROWTH AT EVERY STAGE', title: 'Developmental support', text: 'A thoughtful, child-centred approach that meets each individual where they are and celebrates progress.', tags: ['Developmental milestones', 'Sensory-aware activities', 'Family guidance'], color: 'peach' }
];
const faqs = [
  { q: 'How do I book an initial consultation?', a: 'You can call us or use the appointment form on this page. Share your preferred day and the type of support you are looking for, and our team can help with the next steps.' },
  { q: 'Do I need a referral before visiting?', a: 'If you have a referral or previous assessment, you can bring it along. If you are unsure what is needed, contact the centre before your visit and we can guide you.' },
  { q: 'Can parents or caregivers be involved in sessions?', a: 'Family involvement can be an important part of progress. Our team can discuss practical ways to support goals between sessions based on individual needs.' },
  { q: 'Where is The Kalakin located?', a: 'We are listed on VIP Road, Vadodara. Please call ahead to confirm the exact address, availability and appointment timing before travelling.' }
];
const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: .55, ease: 'easeOut' } } };

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState('speech');
  const [openFaq, setOpenFaq] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', service: 'Speech therapy', date: '', note: '' });
  const [lightbox, setLightbox] = useState(null);

  const openBooking = () => { setSent(false); setModalOpen(true); setMenuOpen(false); };
  const submitBooking = (e) => {
    e.preventDefault();
    const msg = `Hello The Kalakin, I would like to enquire about an appointment.%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AService: ${encodeURIComponent(form.service)}%0APreferred date: ${encodeURIComponent(form.date || 'Flexible')}%0ANote: ${encodeURIComponent(form.note || 'None')}`;
    window.open(`${whatsapp}?text=${msg}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };
  const goTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };

  return <div className="site-shell">
    <div className="topline"><span><span className="pulse-dot" /> A welcoming space for every kind of progress</span><span className="topline-right"><MapPin size={13}/> VIP Road, Vadodara <span className="topline-divider">·</span> <a href={`tel:${phone}`}>Call us <ArrowUpRight size={12}/></a></span></div>
    <header className="header">
      <a className="brand" href="#home" aria-label="The Kalakin home">
        <img src="/images/kalakin-logo.png" alt="The Kalakin logo" />
        <span className="brand-text"><b>The Kalakin</b><small>ADULT & CHILD DEVELOPMENT CENTER</small></span>
      </a>
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>Our approach</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#space" onClick={() => setMenuOpen(false)}>Our space</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a>
        <button className="mobile-book" onClick={openBooking}>Book a visit <ArrowUpRight size={16}/></button>
      </nav>
      <div className="header-actions"><a className="phone-link" href={`tel:${phone}`}><Phone size={15}/><span>{phone}</span></a><button className="button button-dark button-small" onClick={openBooking}>Book an appointment <ArrowUpRight size={16}/></button></div>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="eyebrow"><span className="eyebrow-line"/><span>CARE THAT SEES THE WHOLE PERSON</span></div>
            <h1>Every little step<br/>is a <span className="serif-accent">big thing.</span></h1>
            <p className="hero-lede">A supportive space to discover strengths, build skills and celebrate progress — at your own pace.</p>
            <div className="hero-actions"><button className="button button-dark" onClick={openBooking}>Let's talk about your goals <ArrowUpRight size={17}/></button><button className="text-link" onClick={() => goTo('services')}>Explore our services <ArrowRight size={16}/></button></div>
            <div className="hero-proof"><div className="avatar-stack"><span>✳</span><span>♡</span><span>✦</span></div><div><div className="stars"><Star/><Star/><Star/><Star/><Star/></div><p><b>5.0/5</b> from 34 listed ratings</p></div><span className="proof-separator"/><div className="proof-years"><b>10 years</b><small>in healthcare*</small></div></div>
          </motion.div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-wrap"><img className="hero-photo" src="/images/therapy-room-2.png" alt="A colourful, welcoming therapy and activity room at The Kalakin" /><div className="photo-shade"/></div>
          <div className="hero-sticker"><span className="sticker-icon"><HeartHandshake size={22}/></span><div><b>Progress looks different<br/>for everyone.</b><small>And that's a beautiful thing.</small></div></div>
          <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
          <div className="floating-leaf"><Leaf size={27}/></div>
          <div className="image-caption"><span>01 / OUR SPACE</span><span>Made for curiosity <Sparkles size={13}/></span></div>
        </div>
        <div className="hero-bottom-note"><span>01</span><span className="note-line"/><span>CARE · CONNECTION · CONFIDENCE</span></div>
      </section>

      <section className="trust-strip">
        <div className="trust-item"><ShieldCheck/><span><b>Individualised care</b><small>Support shaped around you</small></span></div>
        <div className="trust-item"><HandHeart/><span><b>People-first approach</b><small>Warmth without judgement</small></span></div>
        <div className="trust-item"><Accessibility/><span><b>Skills for everyday life</b><small>Progress that matters</small></span></div>
        <div className="trust-item"><Users/><span><b>Family is part of it</b><small>Growing together</small></span></div>
      </section>

      <section className="about section-wrap section-pad" id="about">
        <div className="section-label"><span>02</span><span className="label-line"/><span>OUR APPROACH</span></div>
        <div className="about-grid">
          <div><h2>Care is not a checklist.<br/>It's a <span className="serif-accent">connection.</span></h2></div>
          <div className="about-content"><p className="large-copy">At The Kalakin, we believe meaningful progress begins when people feel understood, supported and safe to try.</p><p>Our centre brings together therapeutic support in a welcoming environment, with attention to individual strengths, goals and everyday experiences. Whether you're exploring support for yourself or your child, we're here to help you understand the next step.</p><button className="underlined-link" onClick={openBooking}>Start a conversation <ArrowUpRight size={16}/></button></div>
        </div>
        <div className="values-row">
          <div className="value-card value-lilac"><span className="value-number">01</span><div className="value-icon"><HeartHandshake/></div><h3>Listen first</h3><p>Understanding your story, priorities and goals comes before anything else.</p><span className="value-doodle">〰</span></div>
          <div className="value-card value-mint"><span className="value-number">02</span><div className="value-icon"><Sparkles/></div><h3>Find your rhythm</h3><p>Thoughtful activities and guidance that respect your own pace.</p><span className="value-doodle">✳</span></div>
          <div className="value-card value-peach"><span className="value-number">03</span><div className="value-icon"><Leaf/></div><h3>Celebrate growth</h3><p>Small wins deserve to be noticed. Every step can mean something.</p><span className="value-doodle">✧</span></div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-wrap section-pad">
          <div className="section-label"><span>03</span><span className="label-line"/><span>HOW WE CAN HELP</span></div>
          <div className="section-heading-row"><div><h2>Support for the <span className="serif-accent">next step.</span></h2><p className="section-intro">Explore our areas of support. We'll help you figure out where to begin.</p></div><span className="handwritten-note">One step at a time ↘</span></div>
          <div className="services-layout">
            <div className="service-tabs" role="tablist" aria-label="Services">
              {services.map((s, i) => { const Icon = s.icon; return <button key={s.id} role="tab" aria-selected={activeService === s.id} className={`service-tab ${activeService === s.id ? 'active' : ''}`} onClick={() => setActiveService(s.id)}><span className="tab-num">0{i+1}</span><span className="tab-icon"><Icon size={21}/></span><span className="tab-title">{s.title}</span><ArrowUpRight className="tab-arrow" size={18}/></button> })}
              <div className="service-help"><span className="help-icon"><MessageCircle size={18}/></span><p>Not sure where to start?</p><button onClick={openBooking}>Let's figure it out <ArrowRight size={14}/></button></div>
            </div>
            <AnimatePresence mode="wait"><motion.div key={activeService} className={`service-detail ${services.find(s => s.id === activeService).color}`} initial={{opacity:0, x:14}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-10}} transition={{duration:.25}}>
              {(() => { const s = services.find(x => x.id === activeService); const Icon = s.icon; return <><div className="service-detail-top"><span>{s.eyebrow}</span><span className="service-detail-icon"><Icon size={25}/></span></div><h3>{s.title}<br/><span className="serif-accent">with care.</span></h3><p className="service-description">{s.text}</p><div className="service-tags">{s.tags.map(t => <span key={t}><CheckCircle2 size={14}/>{t}</span>)}</div><button className="button button-dark" onClick={openBooking}>Enquire about {s.title.toLowerCase()} <ArrowUpRight size={16}/></button><span className="detail-watermark">✳</span></> })()}
            </motion.div></AnimatePresence>
          </div>
          <p className="disclaimer">Services and suitability are discussed individually. Please contact the centre to confirm current offerings and availability.</p>
        </div>
      </section>

      <section className="space-section section-wrap section-pad" id="space">
        <div className="section-label"><span>04</span><span className="label-line"/><span>A LOOK INSIDE</span></div>
        <div className="space-heading"><h2>A space to feel<br/><span className="serif-accent">at ease.</span></h2><div><p>Bright, colourful and designed to invite exploration. Our space is part of creating a welcoming experience from the moment you arrive.</p><button className="underlined-link" onClick={() => goTo('contact')}>Plan your visit <ArrowUpRight size={16}/></button></div></div>
        <div className="gallery">
          <button className="gallery-main gallery-image-button" onClick={() => setLightbox('/images/therapy-room-1.png')} aria-label="View therapy room photo"><img src="/images/therapy-room-1.png" alt="Therapy room with colourful shelves and activity table"/><span className="gallery-overlay"><span>THE ACTIVITY CORNER</span><ArrowUpRight/></span></button>
          <button className="gallery-side gallery-image-button" onClick={() => setLightbox('/images/therapy-room-2.png')} aria-label="View activity space photo"><img src="/images/therapy-room-2.png" alt="Colourful movement and play area in the centre"/><span className="gallery-overlay"><span>ROOM TO EXPLORE</span><ArrowUpRight/></span></button>
          <div className="gallery-note"><span className="note-spark">✳</span><p>Every detail is an invitation to learn, move and discover.</p><span className="gallery-note-sign">The Kalakin team</span></div>
        </div>
      </section>

      <section className="quote-band"><div className="quote-inner"><Quote className="quote-mark"/><p>Progress isn't always a big leap.<br/><span>Sometimes it's the courage to try again.</span></p><span className="quote-decoration">✳</span></div></section>

      <section className="faq-section section-wrap section-pad" id="faq">
        <div className="section-label"><span>05</span><span className="label-line"/><span>GOOD TO KNOW</span></div>
        <div className="faq-grid"><div><h2>A few things<br/>you might be <span className="serif-accent">wondering.</span></h2><p className="faq-intro">Have another question? We’re happy to help you find the right information.</p><button className="button button-outline" onClick={openBooking}>Ask us directly <MessageCircle size={16}/></button></div><div className="faq-list">{faqs.map((f, i) => <div className={`faq-item ${openFaq === i ? 'faq-open' : ''}`} key={f.q}><button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span><i>0{i+1}</i>{f.q}</span><span className="faq-plus">{openFaq === i ? <Minus size={17}/> : <Plus size={17}/>}</span></button><AnimatePresence>{openFaq === i && <motion.div className="faq-answer" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}><p>{f.a}</p></motion.div>}</AnimatePresence></div>)}</div></div>
      </section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="contact-copy"><div className="eyebrow eyebrow-light"><span className="eyebrow-line"/><span>YOUR NEXT STEP STARTS HERE</span></div><h2>Let's make room<br/>for <span>progress.</span></h2><p>Tell us what you're looking for. We'll help you understand how to get started.</p><button className="button button-cream" onClick={openBooking}>Request an appointment <ArrowUpRight size={17}/></button><span className="contact-doodle">✳</span></div><div className="contact-card"><div className="contact-card-header"><span className="contact-card-icon"><MapPin size={19}/></span><div><span>COME SAY HELLO</span><h3>Find The Kalakin</h3></div></div><div className="contact-detail"><MapPin/><div><b>Location</b><p>VIP Road, Vadodara, Gujarat</p><small>Please call to confirm the exact address.</small></div></div><div className="contact-detail"><Phone/><div><b>Give us a call</b><a href={`tel:${phone}`}>{phone}</a></div></div><div className="contact-detail"><Clock/><div><b>Availability</b><p>Contact us to confirm timings</p></div></div><div className="contact-card-actions"><a className="button button-dark" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp us <ArrowUpRight size={15}/></a><a className="map-link" href="https://www.google.com/maps/search/?api=1&query=The+Kalakin+Adult+Child+Development+Center+VIP+Road+Vadodara" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={14}/></a></div></div></div></section>
    </main>

    <footer className="footer"><div className="footer-top"><a className="brand footer-brand" href="#home"><img src="/images/kalakin-logo.png" alt="The Kalakin logo"/><span className="brand-text"><b>The Kalakin</b><small>ADULT & CHILD DEVELOPMENT CENTER</small></span></a><p>Small steps. Real progress.<br/>A little more confidence every day.</p><div className="footer-social"><a href={whatsapp} aria-label="WhatsApp" target="_blank" rel="noreferrer"><MessageCircle/></a><a href={`tel:${phone}`} aria-label="Call"><Phone/></a><a href="#contact" aria-label="Email and contact"><Mail/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} The Kalakin. Demo website concept.</span><span>Made with care <span className="footer-heart">♥</span></span><button onClick={() => goTo('home')}>Back to top ↑</button></div><p className="demo-note">*Business details and ratings are based on the information provided for this demo. Please verify all details before publishing.</p></footer>

    <AnimatePresence>{modalOpen && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={e => { if(e.target === e.currentTarget) setModalOpen(false); }}><motion.div className="booking-modal" initial={{opacity:0,y:22,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:12}} role="dialog" aria-modal="true" aria-labelledby="booking-title"><button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close"><X/></button>{sent ? <div className="success-state"><span><CheckCircle2 size={34}/></span><h2>You're one step closer.</h2><p>Your enquiry has been prepared in WhatsApp. Send the message there to reach The Kalakin team.</p><button className="button button-dark" onClick={() => setModalOpen(false)}>Done <ArrowRight size={16}/></button></div> : <><div className="modal-eyebrow"><span className="pulse-dot"/> LET'S START A CONVERSATION</div><h2 id="booking-title">Tell us a little<br/><span className="serif-accent">about your needs.</span></h2><p className="modal-intro">Share a few details and we'll open a WhatsApp message for you to send.</p><form onSubmit={submitBooking} className="booking-form"><label>Your name<input required value={form.name} onChange={e => setForm({...form,name:e.target.value})} placeholder="Enter your name"/></label><label>Phone number<input required type="tel" value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} placeholder="Your contact number"/></label><label>What support are you looking for?<select value={form.service} onChange={e => setForm({...form,service:e.target.value})}><option>Speech therapy</option><option>Physiotherapy</option><option>Developmental support</option><option>Not sure yet</option></select></label><label>Preferred date <span className="optional">(optional)</span><input type="date" value={form.date} onChange={e => setForm({...form,date:e.target.value})} min={new Date().toISOString().split('T')[0]}/></label><label className="full-field">Anything you'd like us to know? <span className="optional">(optional)</span><textarea rows="3" value={form.note} onChange={e => setForm({...form,note:e.target.value})} placeholder="A short note (please avoid sharing sensitive medical details)"/></label><button className="button button-dark form-submit" type="submit">Continue to WhatsApp <Send size={16}/></button><p className="form-privacy">Your details are used to prepare the message only; this demo does not store submissions.</p></form></>}</motion.div></motion.div>}</AnimatePresence>
    <AnimatePresence>{lightbox && <motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setLightbox(null)}><button aria-label="Close image" onClick={() => setLightbox(null)}><X/></button><img src={lightbox} alt="Expanded view of The Kalakin centre" onClick={e => e.stopPropagation()}/></motion.div>}</AnimatePresence>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);