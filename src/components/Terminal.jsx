import { useState } from "react";

export default function Terminal() {
  const [output, setOutput] = useState(["booting system...", "access granted ✔"]);

  const handleCommand = (cmd) => {
    let res = "";

    if (cmd === "whoami") res = "Poornaprajna P - Cybersecurity Professional";
    else if (cmd === "skills") res = "Nmap, Nessus, Burp Suite";
    else if (cmd === "scan") simulateHack();
    else res = "command not found";

    setOutput((prev) => [...prev, "> " + cmd, res]);
  };

  const simulateHack = () => {
    const steps = ["Scanning...", "Port 80 open", "SQL Injection found ✔"];
    let i = 0;

    const interval = setInterval(() => {
      setOutput((prev) => [...prev, steps[i]]);
      i++;
      if (i >= steps.length) clearInterval(interval);
    }, 800);
  };

  return (
    <div className="bg-black border p-4 mt-6 rounded">
      {output.map((line, i) => <div key={i}>{line}</div>)}

      <input
        className="bg-transparent outline-none mt-2 w-full"
        placeholder="type command"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleCommand(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
}