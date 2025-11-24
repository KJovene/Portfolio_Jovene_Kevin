import React, { useState } from "react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Créer le mailto link simplifié
    const subject = `Portfolio Contact: Message de ${formData.name}`;
    const body = `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    // Ouvrir directement le client mail par défaut
    const mailtoLink = `mailto:jovene.kevin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_blank");

    setStatus("success");
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setStatus("idle");
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">
        <span className="section-title-gradient">Get In Touch</span>
      </h2>

      <div className="contact-container">
        <div className="contact-info-grid"></div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="form-textarea"
              required
            />
          </div>

          <button
            type="submit"
            className="form-submit"
            disabled={status === "sending"}
          >
            {status === "sending" && "Envoi en cours..."}
            {status === "success" && "Message envoyé !"}
            {status === "error" && "Erreur, réessayez"}
            {status === "idle" && "Envoyer le message"}
          </button>

          {status === "success" && (
            <p className="form-message success">
              ✓ Votre client mail va s'ouvrir avec le message pré-rempli !
            </p>
          )}
          {status === "error" && (
            <p className="form-message error">
              ✗ Une erreur est survenue. Veuillez réessayer.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
