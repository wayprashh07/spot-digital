SPOT DIGITAL MARKETING - Full Stack Project
------------------------------------------

Structure:
- server/    -> Node/Express backend (contact endpoint)
- client/    -> React frontend (Home, About, Services, Contact)

Instructions:
1. On your EC2 Ubuntu instance, install Node.js, npm, nginx, pm2.
2. Copy this project to the instance.
3. In server/: run `npm install`.
4. In client/: run `npm install` then `npm run build`.
5. Configure server/.env with SMTP credentials (see .env.example).
6. Start the server: in server/ run `pm2 start index.js --name spot-digital-server`.
7. Configure nginx to proxy to port 5000 or let the app serve static files.
See the original chat for full deployment steps and notes.

Contact email will be sent to spot99digital@gmail.com by default (configure CONTACT_TO).
