# The Kalakin — Responsive Website Demo

A polished, responsive React + Vite website concept for **The Kalakin Adult & Child Development Center**, Vadodara.

## Included
- Responsive desktop, tablet and mobile layouts
- Modern editorial UI with custom typography, soft natural palette and motion
- Interactive service tabs
- Appointment enquiry modal with form validation
- Form prepares a WhatsApp message (the visitor must press Send in WhatsApp)
- FAQ accordion
- Click-to-expand photo gallery
- Click-to-call and WhatsApp links
- Supplied logo and centre photos included in `public/images`
- SEO description and accessible labels for key controls

## Tech stack
- React 18
- Vite 6
- Framer Motion
- Lucide React icons
- Plain CSS (responsive and easy to customise)

## Run locally
Install Node.js 20 LTS or newer, then run:

```bash
npm install
npm run dev
```

Vite prints a local development URL, usually `http://localhost:5173`.

## Production build
```bash
npm run build
npm run preview
```
The production-ready site is generated in `dist/`.

## Deploy
You can deploy this project to Vercel or Netlify. For Vercel, import the extracted folder/repository:
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Before publishing — important checklist
This is a **front-end demo** and does not have a database or admin dashboard.
1. Confirm the exact address, hours, phone number and all service details with the centre.
2. Confirm permission to use the supplied logo and room photos.
3. Confirm the listed rating and healthcare experience claims before publishing.
4. Replace or supplement the room photos with approved, high-quality official images.
5. Test the WhatsApp number and Google Maps result with the business owner.
6. Add a privacy notice and any legally required consent text before collecting personal information.
7. Consider a backend or appointment-management integration only if the client wants submissions stored or appointments confirmed online.

## Assets
- `public/images/kalakin-logo.png` — supplied logo
- `public/images/therapy-room-1.png` — supplied centre photo
- `public/images/therapy-room-2.png` — supplied centre photo

## Notes
No appointment is automatically booked. The form opens WhatsApp with a prefilled enquiry for the visitor to review and send. The website labels the listed ratings and years-in-healthcare claim as details to verify before launch.
