// /pages/vault-demo.js
import { useEffect } from "react";

export default function VaultDemo() {
useEffect(() => {
const vaultButton = document.getElementById("vaultButton");

if (vaultButton) {
vaultButton.addEventListener("click", async () => {
try {
const response = await fetch(
"https://8ohd2ffyp2.execute-api.us-east-2.amazonaws.com/saveSecret",
{
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ secret: "My first secret from the portfolio!" }),
}
);

const data = await response.json();
alert(data.message);
} catch (err) {
console.error(err);
alert("Something went wrong. Check console for details.");
}
});
}
}, []);


return (
<div className="container">
<h1>Vault Project</h1>
<p>Click the button below to see my cloud backend in action.</p>
<button id="vaultButton">Open Vault</button>
</div>
);
}
