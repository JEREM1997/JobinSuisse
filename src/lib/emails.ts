import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEbookEmail = async (email: string, downloadUrl: string) => {
  return await resend.emails.send({
    from: 'JobinSuisse <noreply@jobinsuisse.com>',
    to: email,
    subject: 'Votre eBook "Travailler en Suisse" est prêt !',
    html: `
      <div style="font-family: 'Inter', system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: #C93D26; padding: 40px 20px; text-align: center;">
          <img src="${process.env.NEXT_PUBLIC_SITE_URL}/brand/logo.png" alt="JobinSuisse" style="height: 60px; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">Merci pour votre achat !</h1>
        </div>
        <div style="padding: 40px 20px;">
          <h2 style="color: #1F2937; margin: 0 0 20px 0; font-size: 24px;">Votre eBook est prêt</h2>
          <p style="color: #4B5563; line-height: 1.6; margin: 0 0 30px 0;">
            Félicitations ! Votre Starter Pack JobinSuisse est maintenant disponible. Cliquez sur le lien ci-dessous pour télécharger votre eBook complet sur l'emploi en Suisse.
          </p>
          <div style="text-align: center; margin: 40px 0;">
            <a href="${downloadUrl}" style="background: #C93D26; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block;">
              Télécharger mon eBook
            </a>
          </div>
          <p style="color: #6B7280; font-size: 14px; margin: 30px 0 0 0;">
            <strong>Important :</strong> Ce lien est valable 7 jours. N'hésitez pas à nous envoyer votre CV à cv@jobinsuisse.com pour bénéficier de notre révision professionnelle incluse dans votre pack.
          </p>
        </div>
        <div style="background: #F9FAFB; padding: 20px; text-align: center; border-top: 1px solid #E5E7EB;">
          <p style="color: #6B7280; margin: 0; font-size: 14px;">
            JobinSuisse — powered by G-Services<br>
            Rue du Vieux-Chêne 8, 1224 Genève
          </p>
        </div>
      </div>
    `
  })
}

export const sendPackConfirmationEmail = async (email: string, packType: string, amount: number) => {
  const packNames = {
    'emploi': 'Pack Emploi',
    'emploi_logement': 'Pack Emploi + Logement'
  }

  return await resend.emails.send({
    from: 'JobinSuisse <noreply@jobinsuisse.com>',
    to: email,
    subject: `Acompte reçu - ${packNames[packType as keyof typeof packNames]}`,
    html: `
      <div style="font-family: 'Inter', system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: #C93D26; padding: 40px 20px; text-align: center;">
          <img src="${process.env.NEXT_PUBLIC_SITE_URL}/brand/logo.png" alt="JobinSuisse" style="height: 60px; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">Acompte reçu</h1>
        </div>
        <div style="padding: 40px 20px;">
          <h2 style="color: #1F2937; margin: 0 0 20px 0; font-size: 24px;">Merci pour votre confiance</h2>
          <p style="color: #4B5563; line-height: 1.6; margin: 0 0 20px 0;">
            Nous avons bien reçu votre acompte de <strong>${amount} CHF</strong> pour le <strong>${packNames[packType as keyof typeof packNames]}</strong>.
          </p>
          <p style="color: #4B5563; line-height: 1.6; margin: 0 0 30px 0;">
            Un membre de notre équipe va vous contacter sous 24h pour échanger sur vos besoins et vous présenter un devis personnalisé.
          </p>
          <div style="background: #FEF3C7; border: 1px solid #F59E0B; border-radius: 8px; padding: 20px; margin: 30px 0;">
            <h3 style="color: #92400E; margin: 0 0 10px 0; font-size: 16px;">Prochaines étapes :</h3>
            <ul style="color: #92400E; margin: 0; padding-left: 20px;">
              <li>Préparation de votre dossier personnalisé</li>
              <li>Prise de contact par notre équipe</li>
              <li>Présentation du devis détaillé</li>
            </ul>
          </div>
        </div>
        <div style="background: #F9FAFB; padding: 20px; text-align: center; border-top: 1px solid #E5E7EB;">
          <p style="color: #6B7280; margin: 0; font-size: 14px;">
            JobinSuisse — powered by G-Services<br>
            contact@jobinsuisse.com • +41 79 412 46 35
          </p>
        </div>
      </div>
    `
  })
}

export const sendInternalAlertEmail = async (packType: string, email: string, requestId: string) => {
  const recipients = {
    'starter': [process.env.INTERNAL_CV_ALERT_EMAIL!],
    'emploi': [process.env.INTERNAL_EMPLOI_EMAIL!],
    'emploi_logement': [process.env.INTERNAL_EMPLOI_EMAIL!, process.env.INTERNAL_LOGEMENT_EMAIL!]
  }

  const subject = {
    'starter': 'Nouveau CV à réviser - Starter Pack',
    'emploi': 'Nouvelle demande Pack Emploi',
    'emploi_logement': 'Nouvelle demande Pack Emploi + Logement'
  }

  return await resend.emails.send({
    from: 'JobinSuisse System <system@jobinsuisse.com>',
    to: recipients[packType as keyof typeof recipients],
    subject: subject[packType as keyof typeof subject],
    html: `
      <div style="font-family: monospace; background: #F3F4F6; padding: 20px;">
        <h2>Nouvelle demande - ${packType.toUpperCase()}</h2>
        <p><strong>Email client:</strong> ${email}</p>
        <p><strong>ID demande:</strong> ${requestId}</p>
        <p><strong>Dashboard admin:</strong> <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/requests/${requestId}">Voir la demande</a></p>
      </div>
    `
  })
}