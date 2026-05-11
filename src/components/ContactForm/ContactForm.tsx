import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './ContactForm.module.css';
import type { ContactFormData } from '../../types';

// ─── EmailJS config ────────────────────────────────────────────────
// Replace these three values with your own from emailjs.com
const EMAILJS_SERVICE_ID  = 'service_1t6qf39';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_ukfnrqo';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'bQIGfIPQBfaQJ-vDj';    // e.g. 'aBcDeFgHiJkLmNoP'
// ───────────────────────────────────────────────────────────────────

const INITIAL_FORM: ContactFormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  techType: '',
  region: '',
  message: '',
};

interface FieldConfig {
  name: keyof ContactFormData;
  placeholder: string;
  type?: string;
}

const FIELDS: FieldConfig[] = [
  { name: 'name',     placeholder: 'Нэр' },
  { name: 'company',  placeholder: 'Компани' },
  { name: 'email',    placeholder: 'Имэйл',  type: 'email' },
  { name: 'phone',    placeholder: 'Утас',   type: 'tel' },
  { name: 'techType', placeholder: 'Төхөөрөмжийн төрөл' },
  { name: 'region',   placeholder: 'Тоо хэмжээ' },
];

type Status = 'idle' | 'sending' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Build the template params — these variable names must match
    // the {{variable}} placeholders in your EmailJS template
    const templateParams = {
      to_email:    'customercare@tttools.mn',
      from_name:   formData.name,
      from_email:  formData.email,
      company:     formData.company,
      phone:       formData.phone,
      tech_type:   formData.techType,
      region:      formData.region,
      message:     formData.message,
    };

    try {
      // Dynamically import EmailJS so it doesn't bloat the initial bundle
      const emailjs = await import('@emailjs/browser');

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      if (result.status === 200) {
        setStatus('success');
        setFormData(INITIAL_FORM);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const isSending = status === 'sending';

  return (
    <div className={styles.wrapper}>
      <div className={styles.section} id="contact">

        {status === 'success' ? (
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✅</div>
            <h3 className={styles.successTitle}>Амжилттай илгээсэн!</h3>
            <p className={styles.successText}>
              Бид тантай удахгүй холбогдох болно.
            </p>
            <button
              className={styles.submitBtn}
              style={{ marginTop: 20 }}
              onClick={() => setStatus('idle')}
            >
              Буцах
            </button>
          </div>
        ) : (
          <>
            <h2 className={styles.heading}>Хүсэлт гаргах</h2>
            <p className={styles.subtext}>
              Таны хүсэлтийг таны имэйлийг ашиглан манай борлуулалтын
              менежерт илгээнэ
            </p>

            {status === 'error' && (
              <div className={styles.errorBanner}>
                ⚠️ Илгээхэд алдаа гарлаа. Дахин оролдоно уу.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className={styles.grid}>
                {FIELDS.map((field) => (
                  <input
                    key={field.name}
                    className={styles.field}
                    type={field.type ?? 'text'}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    disabled={isSending}
                    required={['name', 'email'].includes(field.name)}
                  />
                ))}
                <textarea
                  className={`${styles.field} ${styles.fieldFull}`}
                  name="message"
                  placeholder="Мессеж"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSending}
                />
              </div>

              <div className={styles.footer}>
                <p className={styles.note}>
                  Бид танд техник хангамж, суурилуулалт болон урсгал
                  үйлчилгээний зардлыг харьцуулахад туслах болно.
                </p>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSending}
                >
                  {isSending ? (
                    <span className={styles.spinner}>Илгээж байна…</span>
                  ) : (
                    'Лавлагаа илгээх'
                  )}
                </button>
              </div>
            </form>
          </>
        )}

      </div>
    </div>
  );
};

export default ContactForm;