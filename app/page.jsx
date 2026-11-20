"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, ChevronDown, Cloud, Code2, CreditCard,
  Globe2, Headphones, LockKeyhole, Menu, Rocket, Server, ShieldCheck,
  Sparkles, Zap, X
} from "lucide-react";

const plans = [
  { id: "starter", name: "Starter", price: "19.000", period: "/bulan", desc: "Untuk website pribadi dan portofolio.", storage: "10 GB SSD", sites: "1 website", bandwidth: "Unmetered bandwidth", email: "5 akun email", popular: false },
  { id: "business", name: "Business", price: "39.000", period: "/bulan", desc: "Untuk bisnis yang ingin berkembang.", storage: "30 GB NVMe", sites: "10 website", bandwidth: "Unmetered bandwidth", email: "25 akun email", popular: true },
  { id: "pro", name: "Pro", price: "79.000", period: "/bulan", desc: "Performa lebih untuk proyek serius.", storage: "75 GB NVMe", sites: "Website tanpa batas*", bandwidth: "Unmetered bandwidth", email: "Email tanpa batas*", popular: false },
];

const faqs = [
  ["Apa itu SkyHost?", "SkyHost adalah brand layanan hosting. Website ini merupakan starter storefront untuk menampilkan paket dan menerima permintaan pemesanan."],
  ["Apakah hosting langsung aktif setelah membayar?", "Belum otomatis. Pada starter ini, pembayaran dicatat sebagai permintaan manual. Admin perlu memverifikasi pembayaran dan mengaktifkan layanan melalui infrastruktur hosting yang disiapkan."],
  ["Bagaimana cara membayar?", "Pilih paket, kirim permintaan pesanan, lalu ikuti instruksi transfer bank atau QRIS yang diberikan admin. Jangan transfer sebelum detail pembayaran resmi dikonfirmasi."],
  ["Apakah sudah termasuk domain?", "Paket contoh ini belum termasuk domain. Domain dapat ditambahkan setelah penyedia dan harga domain ditentukan."],
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selected, setSelected] = useState("business");
  const [orderOpen, setOrderOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [notice, setNotice] = useState("");
  const [form, setForm] = useState({ name: "", email: "", website: "", payment: "Transfer bank", notes: "" });

  const chosen = useMemo(() => plans.find(p => p.id === selected) || plans[1], [selected]);

  function startOrder(planId) {
    setSelected(planId);
    setNotice("");
    setOrderOpen(true);
  }

  function submitOrder(e) {
    e.preventDefault();
    const order = {
      ...form, plan: chosen.name, price: chosen.price,
      createdAt: new Date().toISOString(), status: "Menunggu konfirmasi admin"
    };
    const old = JSON.parse(localStorage.getItem("skyhost-orders") || "[]");
    localStorage.setItem("skyhost-orders", JSON.stringify([order, ...old]));
    setNotice("Permintaan tersimpan di perangkat ini. Hubungi admin SkyHost untuk konfirmasi detail pembayaran.");
    setForm({ name: "", email: "", website: "", payment: "Transfer bank", notes: "" });
  }

  return (
    <main>
      <div className="announcement"><span className="announce-dot" /> Infrastruktur hosting generasi baru <span className="announce-sep">·</span> Dibuat untuk berkembang <ArrowUpRight size={13}/></div>
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#"><span className="brand-mark"><Cloud size={21} strokeWidth={2.5}/></span><span>sky<span className="brand-light">host</span><small>HOSTING, ABOVE EXPECTATIONS</small></span></a>
          <div className={`nav-links ${mobileOpen ? "open" : ""}`}>
            <a href="#fitur" onClick={() => setMobileOpen(false)}>Fitur</a>
            <a href="#paket" onClick={() => setMobileOpen(false)}>Paket Hosting</a>
            <a href="#tentang" onClick={() => setMobileOpen(false)}>Tentang</a>
            <a href="#faq" onClick={() => setMobileOpen(false)}>FAQ</a>
            <a className="mobile-cta" href="#paket" onClick={() => setMobileOpen(false)}>Mulai sekarang <ArrowRight size={15}/></a>
          </div>
          <div className="nav-actions"><a className="login-link" href="#akun">Area pelanggan</a><a className="btn btn-small" href="#paket">Pilih Hosting <ArrowUpRight size={15}/></a></div>
          <button className="menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Buka menu">{mobileOpen ? <X/> : <Menu/>}</button>
        </nav>
      </header>

      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-icon"><Sparkles size={13}/></span> HOSTING YANG SIAP MELAJU</div>
          <h1>Website hebat<br/>dimulai dari <span>fondasi</span><br/><span className="gradient-text">yang tepat.</span></h1>
          <p className="hero-desc">Hosting cepat, aman, dan mudah dikelola untuk membawa ide dan bisnis Anda tumbuh lebih jauh.</p>
          <div className="hero-actions"><a href="#paket" className="btn">Temukan paketmu <ArrowRight size={17}/></a><a href="#fitur" className="text-link">Jelajahi fitur <ArrowUpRight size={16}/></a></div>
          <div className="hero-proof"><div className="avatars"><i>S</i><i>H</i><i>+</i></div><div><strong>Dibangun untuk kreator & bisnis</strong><small>Mulai perjalanan digital Anda hari ini</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="visual-glow"></div>
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="server-card">
            <div className="server-top"><div className="window-dots"><i/><i/><i/></div><span>SKYHOST / CONTROL</span><span className="live"><b/> LIVE</span></div>
            <div className="server-main"><div className="server-icon"><Cloud size={31}/></div><div><small>YOUR DIGITAL SPACE</small><h3>Everything<br/>is connected.</h3></div></div>
            <div className="server-stats"><div><span>Uptime target</span><strong>99.9<em>%</em></strong></div><div><span>Performance</span><strong className="green">Ultra fast</strong></div></div>
            <div className="server-lines"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
          </div>
          <div className="float-chip chip-top"><span className="chip-icon"><Zap size={16}/></span><span><b>NVMe Storage</b><small>Responsif & cepat</small></span></div>
          <div className="float-chip chip-bottom"><span className="chip-icon shield"><ShieldCheck size={17}/></span><span><b>Security first</b><small>Perlindungan berlapis</small></span><Check size={15} className="chip-check"/></div>
          <div className="visual-caption">POWERING YOUR NEXT BIG IDEA <span>✳</span></div>
        </div>
      </section>

      <section className="trust container"><span>DIRANCANG UNTUK KEBUTUHAN DIGITAL</span><div className="trust-items"><div><Globe2/> <b>WEB READY</b></div><div><ShieldCheck/> <b>SECURE BY DESIGN</b></div><div><Rocket/> <b>BUILT TO SCALE</b></div><div><Headphones/> <b>HUMAN SUPPORT</b></div></div></section>

      <section className="section features-section" id="fitur"><div className="container">
        <div className="section-head"><div><div className="eyebrow">KENAPA SKYHOST</div><h2>Semua yang penting.<br/><span>Tanpa kerumitan.</span></h2></div><p>Kelola website dengan lebih tenang melalui fondasi hosting yang dirancang untuk kebutuhan masa kini.</p></div>
        <div className="feature-grid">
          <article className="feature-card feature-large"><div className="feature-art"><div className="speed-ring"><Zap size={32}/><span>FAST</span></div><div className="speed-bars"><i/><i/><i/><i/><i/><i/><i/></div></div><div className="feature-content"><span className="feature-number">01 / PERFORMANCE</span><h3>Kecepatan yang terasa.</h3><p>Ruang untuk website Anda berkembang dengan penyimpanan SSD/NVMe pada pilihan paket.</p></div></article>
          <article className="feature-card"><div className="feature-icon"><LockKeyhole size={25}/></div><span className="feature-number">02 / SECURITY</span><h3>Keamanan jadi prioritas.</h3><p>Siapkan SSL, backup, dan praktik keamanan terbaik pada infrastruktur produksi Anda.</p><div className="mini-lock"><ShieldCheck size={20}/><span>SECURITY LAYER</span><Check size={14}/></div></article>
          <article className="feature-card"><div className="feature-icon"><Code2 size={25}/></div><span className="feature-number">03 / SIMPLE CONTROL</span><h3>Kontrol lebih mudah.</h3><p>Dashboard yang jelas untuk memantau pesanan dan mengelola kebutuhan layanan.</p><div className="mini-terminal"><span>skyhost</span><b>_</b><small>control panel</small></div></article>
        </div>
      </div></section>

      <section className="section pricing-section" id="paket"><div className="container">
        <div className="pricing-top"><div className="eyebrow">PILIH RUANG TUMBUH</div><h2>Paket simpel.<br/><span>Potensi tanpa batas.</span></h2><p>Mulai dari kebutuhan hari ini, tingkatkan saat bisnis Anda siap.</p></div>
        <div className="pricing-grid">{plans.map((p) => <article className={`price-card ${p.popular ? "popular" : ""}`} key={p.id}>
          {p.popular && <div className="popular-label"><Sparkles size={13}/> PALING POPULER</div>}
          <div className="plan-name">{p.name}<span>{p.id === "starter" ? "01" : p.id === "business" ? "02" : "03"}</span></div>
          <p>{p.desc}</p><div className="price"><small>Rp</small>{p.price}<em>{p.period}</em></div><div className="price-divider"/>
          <ul><li><Check/>{p.storage}</li><li><Check/>{p.sites}</li><li><Check/>{p.bandwidth}</li><li><Check/>{p.email}</li></ul>
          <button className={p.popular ? "btn full" : "btn btn-outline full"} onClick={() => startOrder(p.id)}>Pilih {p.name} <ArrowRight size={16}/></button>
          <small className="plan-note">*Syarat dan ketentuan berlaku. Harga contoh.</small>
        </article>)}</div>
        <div className="pricing-foot"><ShieldCheck size={16}/> Pembayaran manual melalui transfer bank atau QRIS setelah konfirmasi admin. <a href="#faq">Pelajari lebih lanjut <ArrowUpRight size={13}/></a></div>
      </div></section>

      <section className="cta-section" id="tentang"><div className="container cta-inner"><div className="cta-orb"><Cloud size={45}/><i/><i/><i/></div><div><div className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</div><h2>Ide besar Anda<br/>layak punya rumah.</h2><p>Bangun kehadiran digital Anda bersama SkyHost.</p></div><a href="#paket" className="btn">Mulai bersama SkyHost <ArrowUpRight size={17}/></a></div></section>

      <section className="section faq-section" id="faq"><div className="container faq-layout"><div><div className="eyebrow">ADA YANG INGIN DITANYAKAN?</div><h2>Jawaban, tanpa<br/><span>tanda tanya.</span></h2><p>Belum menemukan yang dicari? Hubungi tim SkyHost setelah kanal kontak resmi disiapkan.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${faqOpen===i?"active":""}`} key={q}><button onClick={()=>setFaqOpen(faqOpen===i?-1:i)}><span>{q}</span><ChevronDown size={18}/></button>{faqOpen===i&&<p>{a}</p>}</div>)}</div></div></section>

      <section className="account-strip container" id="akun"><div className="account-symbol"><Server size={22}/></div><div><b>Sudah menjadi pelanggan?</b><span>Area pelanggan dan admin tersedia sebagai tahap pengembangan berikutnya.</span></div><a href="#paket">Lihat paket <ArrowRight size={15}/></a></section>

      <footer><div className="container footer-main"><a className="brand" href="#"><span className="brand-mark"><Cloud size={21}/></span><span>sky<span className="brand-light">host</span><small>HOSTING, ABOVE EXPECTATIONS</small></span></a><p>Memberi ruang bagi ide untuk tumbuh.<br/>Hosting modern untuk perjalanan digital Anda.</p><div className="footer-links"><a href="#fitur">Fitur</a><a href="#paket">Paket</a><a href="#faq">FAQ</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} SkyHost. All rights reserved.</span><span>Made for the next digital generation <span className="footer-star">✳</span></span></div></footer>

      {orderOpen && <div className="modal-backdrop" onClick={()=>setOrderOpen(false)}><div className="order-modal" onClick={e=>e.stopPropagation()}>
        <button className="modal-close" onClick={()=>setOrderOpen(false)} aria-label="Tutup"><X/></button>
        <div className="eyebrow">MULAI BERSAMA SKYHOST</div><h2>Pesan paket<br/><span>{chosen.name}.</span></h2>
        <div className="modal-plan"><span>{chosen.name} Hosting</span><strong>Rp {chosen.price}<small>/bulan</small></strong></div>
        <form onSubmit={submitOrder}>
          <label>Nama lengkap<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Nama Anda"/></label>
          <label>Email aktif<input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="nama@email.com"/></label>
          <label>Nama domain / website <input value={form.website} onChange={e=>setForm({...form,website:e.target.value})} placeholder="contoh: domainanda.com"/></label>
          <label>Metode pembayaran<select value={form.payment} onChange={e=>setForm({...form,payment:e.target.value})}><option>Transfer bank</option><option>QRIS</option></select></label>
          <label>Catatan (opsional)<textarea value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} placeholder="Ceritakan kebutuhan website Anda"/></label>
          <button className="btn full" type="submit">Kirim permintaan <ArrowRight size={16}/></button>
        </form>
        {notice && <div className="notice"><Check size={17}/>{notice}</div>}
        <p className="modal-disclaimer"><CreditCard size={14}/> Belum ada pembayaran otomatis. Jangan kirim dana sebelum menerima instruksi resmi dari admin.</p>
      </div></div>}
    </main>
  );
}
