import React, { useState } from 'react';

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', phone:'', message:''});
  const [status, setStatus] = useState(null);

  function update(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  async function submit(e){
    e.preventDefault();
    setStatus({loading:true});
    try {
      const res = await fetch('/api/contact', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      setStatus({success: true, message: 'Message sent! We will contact you soon.'});
      setForm({name:'', email:'', phone:'', message:''});
    } catch(err) {
      setStatus({error: true, message: err.message || 'Failed to send message'});
    }
  }

  return (
    <section className="page contact-page">
      <h2>Contact Us</h2>
      <p>Ready to grow? Fill the form or email us at <a href="mailto:spot99digital@gmail.com">spot99digital@gmail.com</a> or call <a href="tel:7721908440">7721908440</a></p>

      <form onSubmit={submit} className="contact-form">
        <label>Name<input name="name" value={form.name} onChange={update} required /></label>
        <label>Email<input name="email" type="email" value={form.email} onChange={update} required /></label>
        <label>Phone<input name="phone" value={form.phone} onChange={update} /></label>
        <label>Message<textarea name="message" value={form.message} onChange={update} required /></label>
        <button className="btn" type="submit">Send Message</button>
      </form>

      <div className="status">
        {status?.loading && <div>Sending...</div>}
        {status?.success && <div className="success">{status.message}</div>}
        {status?.error && <div className="error">{status.message}</div>}
      </div>
    </section>
  );
}
