import { useEffect, useRef, useState } from "react";

export default function App() {
  const canvasRef = useRef(null);
  const [output, setOutput] = useState([
    "booting system...",
    "initializing modules...",
    "access granted ✔"
  ]);

  // MATRIX BACKGROUND
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff9f";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  // TERMINAL COMMANDS
  const handleCommand = (cmd) => {
    let res = "";

    switch (cmd) {
      case "whoami":
        res = "Poornaprajna P - Cybersecurity Professional";
        break;
      case "scan":
        simulateHack();
        return;
      case "experience":
        res = "Opening Experience...";
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        res = "Opening Projects...";
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        res = "Opening Skills...";
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "certifications":
        res = "Opening Certifications...";
        document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        res = "Opening Contact...";
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        res = "command not found";
    }

    setOutput((prev) => [...prev, "> " + cmd, res]);
  };

  const simulateHack = () => {
    const steps = [
      "Starting scan...",
      "Port 80 OPEN",
      "Port 443 OPEN",
      "SQL Injection FOUND",
      "Exploit completed ✔"
    ];

    let i = 0;
    const interval = setInterval(() => {
      setOutput((prev) => [...prev, steps[i]]);
      i++;
      if (i >= steps.length) clearInterval(interval);
    }, 800);
  };

  // SECTION COMPONENT
  const Section = ({ id, title, children }) => (
    <section id={id} className="mt-12 max-w-3xl cyber-card">
      <h2 className="text-purple-400 text-2xl mb-3">{title}</h2>
      <div className="text-gray-300">{children}</div>
    </section>
  );

  // SKILL TAG
  const Tag = ({ children }) => (
    <span className="inline-block mr-2 mb-2 px-3 py-1 border border-green-400 rounded 
    hover:bg-green-400 hover:text-black transition shadow-[0_0_10px_#00ff9f]">
      {children}
    </span>
  );

  return (
    <div className="relative min-h-screen bg-black text-green-400 font-mono">
      
      {/* MATRIX BACKGROUND */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />

      <div className="relative z-10 p-6">

        {/* PROFILE HEADER */}
        <div className="flex items-center gap-8 mt-6">

          <div className="relative group">
            <div className="absolute inset-0 rounded-full border border-purple-500 animate-spin-slow opacity-40"></div>

            <img
              src="/image.PNG"
              alt="profile"
              className="w-40 h-40 rounded-full object-cover border-2 border-green-400 shadow-[0_0_25px_#00ff9f]"
            />

            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="w-full h-1 bg-green-400 opacity-40 animate-scan"></div>
            </div>
          </div>

          <div>
            <h1 className="text-5xl text-purple-400 glitch">
              <b>Poornaprajna P</b>
            </h1>
            <p className="text-green-400">
              Cybersecurity Professional | CEH Trainee | Security Enthusiast
            </p>
          </div>
        </div>

        {/* TERMINAL */}
        <div className="bg-black border border-gray-700 p-4 rounded-lg mt-4 shadow-[0_0_15px_#00ff9f]">
          {output.map((line, i) => (
            <div key={i}>{line}</div>
          ))}

          <input
            className="bg-transparent outline-none mt-2 w-full"
            placeholder="whoami | scan | projects | contact"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleCommand(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>

        {/* ABOUT */}
        <Section id="about" title="About">
          Cybersecurity Engineering graduate with hands-on experience in Web Application and Network Vulnerability
Assessment and Penetration Testing. Skilled in identifying and exploiting vulnerabilities using tools such as Burp
Suite, sqlmap, Nmap, OWASP, ZAP and DVWA. Strong understanding of SQL Injection, authentication flaws,
misconfigurations, and secure coding practices. Experienced in Python scripting, enabling deeper insight into
application security. Passionate about ethical hacking, exploit development, and strengthening system defenses
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience"> 
        <div className="mb-6"> 
            <h3 className="text-lg text-white">
              VAPT Trainee</h3> 
            <p className="text-sm text-gray-400">Texial, Bangalore | September-November 2025</p> 
            <ul className="list-disc ml-5 mt-2"> 
              <li>Completed comprehensive training focused on both manual and tool-based
                 security testing across web applications, networks, and system infrastructures.</li>
               <li>Completed comprehensive CEH-based training covering all core modules.</li> 
               <li>Performed hands-on exploitation on DVWA, Metasploitable2.</li>
               <li>Performed web exploitation using Burp Suite, OWASP ZAP, sqlmap,
                 Cookie manipulation, Payload-basedtesting</li>
                </ul>
                 </div> 
                 <div className="mb-6"> 
                  <h3 className="text-lg text-white">Cybersecurity Intern</h3> 
                  <p className="text-sm text-gray-400">EyeQ Dot Net | June 2024 - July 2024</p>
                   <ul className="list-disc ml-5 mt-2">
                     <li>Performed vulnerability assessments using OWASP guidelines.</li>
                      <li>Detected SQL Injection and XSS vulnerabilities.</li> 
                      <li>Used Burp Suite to intercept and modify HTTP requests.</li>
                       <li>Applied Google Dorking to identify exposed sensitive data.</li>
                        </ul>
                         </div>
                <div className="mb-6"> 
            <h3 className="text-lg text-white">
              Student Internship on Browser Security</h3> 
            <p className="text-sm text-gray-400">NITK Surathkal | August 2023 - September 2023</p> 
            <ul className="list-disc ml-5 mt-2"> 
              <li>Experimented with OpenSSL for secure communication and cryptographic hashing.</li>
               <li>Validated web page integrity using hash-matching techniques.</li> 
               <li>Explored browser internals and applied cryptography within browsers.</li>
                </ul>
                 </div>
            </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Project">
          <p>
            <strong>Anti-Theft Mobile Application:</strong>
             <p>As part of my final year project, I co-developed an Anti-Theft Mobile Application using Kotlin, Node.js, React,
and Firebase, aimed at enhancing mobile device security through features like real-time GPS tracking,
geofencing and remote command execution (lock, alarm). The system followed a distributed architecture with
Firebase backed authentication, cloud messaging, and Firestore integration</p>
          </p>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills">
          <Tag>Penetration Testing</Tag>
          <Tag>Vulnerability Assessment</Tag>
          <Tag>System Hacking</Tag>
        </Section>

        {/* CERTIFICATIONS */}
        <Section id="certifications" title="Certifications">
          <ul className="list-disc ml-5">
            <li>Certified Ethical Hacker (CEH) – In Progress</li>
            <li>Linux Fundamentals</li>
            <li>Introduction to Cybersecurity (CISCO)</li>
            <li>Career Essentials in Cybersecurity (LinkedIn and Microsoft)</li>
            <li>Texial information security auditor certification (TISA)</li>
            <li>Web Development (Apna college) Issued on Aug 2024</li>
            <li>ISO 27001:2022-Compliant Cybersecurity</li>
          </ul>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <p>
            GitHub: <a href="https://github.com/Poorna2604" target="_blank" className="text-purple-400 hover:underline">View Profile</a>
          </p>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/poornaprajna-p/" target="_blank" className="text-purple-400 hover:underline">View Profile</a>
          </p>
          <p>Email: poornaprajna2604@gmail.com</p>

          <a href="Poornaprajna.pdf" download 
          className="inline-block mt-4 px-4 py-2 border border-purple-500 text-purple-400 rounded hover:bg-purple-500 hover:text-black transition"> 
            Download Resume 
          </a>
        </Section>

      </div>
    </div>
  );
}