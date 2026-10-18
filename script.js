const scenarios = [
  {
    type: "PHISHING",
    title: "The urgent bank message",
    sender: "SecureBank Alerts",
    detail: "SMS · 10:42 AM",
    channel: "SMS",
    avatar: "SB",
    body: "Your account will be suspended today. Verify your identity immediately to prevent loss of access.\n\nA link is included below.",
    link: "securebank-verify.example/login",
    question: "What should you do first?",
    choices: [
      ["Open the link and verify immediately.", "wrong"],
      [
        "Pause and contact the bank using its official app, website, or phone number.",
        "correct",
      ],
      ["Forward the message to a friend and ask them to check it.", "wrong"],
      [
        "Reply with your account details so the issue can be resolved.",
        "wrong",
      ],
    ],
    explanation:
      "Urgency is a common phishing tactic. Verify through a trusted channel you find independently.",
  },
  {
    type: "OTP FRAUD",
    title: "The 'support' call",
    sender: "Unknown caller",
    detail: "Phone call · Caller ID looks familiar",
    channel: "CALL",
    avatar: "?",
    body: "The caller says they are from customer support. They claim a suspicious transaction is happening and ask you to read out the OTP that just arrived on your phone.",
    question: "What is the safest response?",
    choices: [
      ["Read the OTP because the caller knows your name.", "wrong"],
      ["Ask for their employee ID and then share the OTP.", "wrong"],
      [
        "Do not share the OTP. End the call and contact the organization directly.",
        "correct",
      ],
      ["Send a screenshot of the OTP instead.", "wrong"],
    ],
    explanation:
      "An OTP is a secret authentication factor. Do not disclose it to an unsolicited caller.",
  },
  {
    type: "FAKE PAYMENT",
    title: "The QR-code refund",
    sender: "Marketplace buyer",
    detail: "Chat message · New contact",
    channel: "CHAT",
    avatar: "MB",
    body: "“I accidentally sent you a payment request instead of a refund. Scan this QR code to receive your money back.”",
    question: "What is the warning sign?",
    choices: [
      ["QR codes are always dangerous.", "wrong"],
      [
        "A QR code presented as a way to “receive” money can actually initiate a payment.",
        "correct",
      ],
      ["Marketplace buyers should never use phones.", "wrong"],
      ["Refunds always take exactly 24 hours.", "wrong"],
    ],
    explanation:
      "A QR code can initiate a payment. Stop and verify the transaction inside the official payment app.",
  },
  {
    type: "SOCIAL ENGINEERING",
    title: "The fake authority request",
    sender: "“College administration”",
    detail: "WhatsApp · New number",
    channel: "WHATSAPP",
    avatar: "CA",
    body: "“This is urgent. I am arranging an important event and need you to buy gift cards right now. Do not tell anyone because it is confidential.”",
    question: "Which clues deserve your attention?",
    choices: [
      ["Only the spelling mistakes.", "wrong"],
      [
        "Urgency, secrecy, unusual payment method, and an unverified identity.",
        "correct",
      ],
      ["The fact that they used WhatsApp.", "wrong"],
      ["Nothing. Authority figures should always be trusted.", "wrong"],
    ],
    explanation:
      "Pressure, secrecy and unusual requests are reasons to stop and verify the person independently.",
  },
  {
    type: "MALWARE",
    title: "The cracked software download",
    sender: "A random download site",
    detail: "Browser · Free premium software",
    channel: "WEB",
    avatar: "DL",
    body: "A website offers a paid application for free. It asks you to disable your antivirus before installing an “activation patch”.",
    question: "What should you do?",
    choices: [
      ["Disable antivirus because the site told you to.", "wrong"],
      ["Install it inside your main computer first.", "wrong"],
      ["Avoid it and use a legitimate source for the software.", "correct"],
      ["Download it twice in case the first copy fails.", "wrong"],
    ],
    explanation:
      "Requests to disable security protections are a major warning sign. Use legitimate software sources.",
  },
  {
    type: "ACCOUNT TAKEOVER",
    title: "The password-reset email",
    sender: "Account Security",
    detail: "Email · “New login detected”",
    channel: "EMAIL",
    avatar: "AS",
    body: "“We detected a login from a new device. If this was not you, reset your password using the button below.”\n\nThe sender address contains an unfamiliar domain.",
    question: "What is the safer approach?",
    choices: [
      ["Click the button quickly before the account locks.", "wrong"],
      ["Use the email’s phone number to verify it.", "wrong"],
      [
        "Open the service through a known bookmark or official app and check security there.",
        "correct",
      ],
      ["Reply to the email asking if it is real.", "wrong"],
    ],
    explanation:
      "Navigate independently to the real service rather than trusting a link in an unexpected email.",
  },
  {
    type: "PUBLIC WI-FI",
    title: "The free Wi-Fi trap",
    sender: "Network: 'FREE_AIRPORT_WIFI'",
    detail: "Public network · Unverified",
    channel: "WI-FI",
    avatar: "Wi",
    body: "You are in a public place. A network with a familiar-looking name is open and asks you to log in to “unlock high-speed internet”.",
    question: "What should you avoid doing?",
    choices: [
      ["Confirming the official network name with staff.", "wrong"],
      ["Using secure, trusted connections for sensitive accounts.", "wrong"],
      [
        "Entering banking or important account credentials into a page you cannot verify.",
        "correct",
      ],
      ["Turning off automatic connection to unknown networks.", "wrong"],
    ],
    explanation:
      "Public networks can be impersonated. Verify the network and avoid sensitive activity on untrusted connections.",
  },
  {
    type: "ATTACHMENT SCAM",
    title: "The unexpected invoice",
    sender: "“Accounts Department”",
    detail: "Email · Attachment included",
    channel: "EMAIL",
    avatar: "AD",
    body: "“Please review the attached invoice before 5 PM.”\n\nYou were not expecting an invoice, and the attachment is a file type you do not recognize.",
    question: "What is the safest next step?",
    choices: [
      ["Open it immediately because it says invoice.", "wrong"],
      [
        "Verify the sender and request through a trusted channel before opening it.",
        "correct",
      ],
      ["Forward it to everyone so they can identify it.", "wrong"],
      ["Rename the file and open it.", "wrong"],
    ],
    explanation:
      "Unexpected attachments can contain malicious content. Verify the request before opening unfamiliar files.",
  },
  {
    type: "IMPERSONATION",
    title: "The emergency family message",
    sender: "“Mom” · New number",
    detail: "Messaging app · New device",
    channel: "CHAT",
    avatar: "FM",
    body: "“My phone broke. I am using a friend’s number. I need money urgently. Please send it now and do not call because my phone is unavailable.”",
    question: "How should you verify the request?",
    choices: [
      ["Send the money because the message knows family details.", "wrong"],
      ["Ask for a voice note and trust it automatically.", "wrong"],
      [
        "Verify the person’s identity through a known contact method before sending anything.",
        "correct",
      ],
      ["Post the number publicly to expose the scammer.", "wrong"],
    ],
    explanation:
      "Impersonation scams use emotion and urgency. Verify through a contact method you already trust.",
  },
  {
    type: "FAKE SUPPORT",
    title: "The fake customer-support call",
    sender: "“Official Support”",
    detail: "Phone call · Caller claims your account needs urgent verification",
    channel: "CALL",
    avatar: "CS",
    body: "The caller says they are from a popular payment or shopping platform. They ask you to install a remote-support app so they can “fix” a problem with your account.",
    question: "What is the safest response?",
    choices: [
      ["Install the app because they say they are official support.", "wrong"],
      ["Give them a screen-share code but keep the call open.", "wrong"],
      [
        "End the call and contact the company through its official app or website.",
        "correct",
      ],
      ["Share your OTP first so they can confirm your identity.", "wrong"],
    ],
    explanation:
      "Unsolicited remote-access requests are a major warning sign. Verify support independently before installing software or granting access.",
  },
];

const legalScams = [
  {
    icon: "👮",
    title: "Digital Arrest Scam",
    type: "AUTHORITY IMPERSONATION",
    claim:
      "“You are involved in a serious case. Stay on video call and follow our instructions.”",
    why: "Police, CBI, ED or other authorities can sound convincing when a scammer uses official names, logos or fake documents.",
    reality:
      "“Digital arrest” is not a real legal arrest procedure. A caller cannot place you under arrest simply by keeping you on a video call.",
    red: [
      "Threats of immediate arrest",
      "Demand for secrecy or continuous video call",
      "Requests for money, OTPs or bank details",
    ],
    action:
      "End the call, do not pay, and independently contact the claimed authority through an official source.",
  },
  {
    icon: "⚖",
    title: "Fake Court Summons",
    type: "LEGAL DOCUMENT SCAM",
    claim:
      "“This is an urgent court summons. Pay the settlement/processing fee today.”",
    why: "Court names, case numbers, seals and legal language make fake documents look authoritative.",
    reality:
      "A document that looks official is not proof that the sender is an official court or that a payment demand is genuine.",
    red: [
      "Unknown sender or personal UPI",
      "Immediate payment deadline",
      "Suspicious links or QR codes",
    ],
    action:
      "Do not pay from the message. Verify the case and court through trusted official channels.",
  },
  {
    icon: "👮‍♂️",
    title: "Fake Police Verification",
    type: "POLICE IMPERSONATION",
    claim: "“Your ID is linked to a criminal case. Complete verification now.”",
    why: "People naturally take a police call seriously, especially when the caller knows some personal details.",
    reality:
      "A caller claiming to be police does not automatically make a payment, OTP or remote-access request legitimate.",
    red: [
      "Fear-based questioning",
      "Personal-account payment request",
      "OTP or remote-access demand",
    ],
    action:
      "Stop the conversation and verify the identity and matter independently using trusted contact details.",
  },
  {
    icon: "🏦",
    title: "Fake Bank Account Freeze",
    type: "BANK IMPERSONATION",
    claim:
      "“Your account will be frozen in 10 minutes unless you complete verification.”",
    why: "Banks really do perform security checks and can restrict accounts, so the threat feels plausible.",
    reality:
      "A random caller's OTP, PIN or payment request is not a legitimate way to prevent an account freeze.",
    red: [
      "Very short deadline",
      "OTP/PIN request",
      "Link to an unfamiliar website",
    ],
    action:
      "Open the bank's official app or use a verified bank contact number to check the account.",
  },
  {
    icon: "🪪",
    title: "Fake KYC Update",
    type: "KYC / IDENTITY SCAM",
    claim:
      "“Your KYC expires today. Click this link or your account/SIM will be blocked.”",
    why: "KYC is a real process, which makes the scam message sound routine.",
    reality:
      "You should not need to trust an unsolicited link, APK or caller with OTPs to perform a genuine KYC process.",
    red: ["Urgent deadline", "APK/download request", "OTP or card details"],
    action:
      "Use the institution's official app, website or branch instead of the message link.",
  },
  {
    icon: "📦",
    title: "Fake Courier / Customs Case",
    type: "COURIER / CUSTOMS IMPERSONATION",
    claim:
      "“A parcel in your name contains illegal items. Pay the clearance/penalty immediately.”",
    why: "Courier and customs systems are real, and scammers may provide fake parcel IDs and documents.",
    reality:
      "A threatening phone call is not proof of a customs case or a valid payment demand.",
    red: [
      "Unexpected parcel",
      "Police-threat escalation",
      "Payment to a personal account",
    ],
    action:
      "Check shipment details directly with the courier through its official website/app and do not pay the caller.",
  },
  {
    icon: "⚡",
    title: "Fake Electricity Disconnection",
    type: "UTILITY IMPERSONATION",
    claim:
      "“Your electricity will be disconnected tonight. Pay now to avoid action.”",
    why: "Bill due dates and disconnections are real, so an urgent message can feel believable.",
    reality:
      "The safe way to confirm a bill is through the electricity provider's official portal/app or verified customer service.",
    red: [
      "Personal UPI/QR",
      "Threat of immediate disconnection",
      "Unknown payment link",
    ],
    action: "Check the bill independently before making any payment.",
  },
  {
    icon: "💼",
    title: "Fake Job / Recruitment Notice",
    type: "EMPLOYMENT SCAM",
    claim:
      "“Your government/company job is confirmed. Pay the registration or document fee now.”",
    why: "Real recruitment has forms, interviews and documents, so fake appointment letters can look credible.",
    reality:
      "A guaranteed job plus an unexplained upfront payment is a major warning sign.",
    red: [
      "Guaranteed selection",
      "Personal-account fee",
      "Pressure to pay immediately",
    ],
    action:
      "Verify the vacancy and recruiter through the employer's official website before sharing documents or money.",
  },
  {
    icon: "🎓",
    title: "Fake Scholarship / College Notice",
    type: "EDUCATION IMPERSONATION",
    claim:
      "“Your scholarship is approved. Pay a small processing fee to release it.”",
    why: "Students are used to real verification, forms and scholarship portals.",
    reality:
      "An unofficial person demanding a fee or OTP is not made legitimate by using a college or government logo.",
    red: ["Personal UPI", "Fake PDF/letter", "OTP or password request"],
    action:
      "Confirm the notice with the college and the official scholarship portal.",
  },
  {
    icon: "🧾",
    title: "Fake Tax / Income-Tax Notice",
    type: "TAX IMPERSONATION",
    claim:
      "“You have a tax violation. Pay the penalty immediately to avoid legal action.”",
    why: "Tax notices and penalties are real, and scammers exploit fear of legal consequences.",
    reality:
      "Never treat an unexpected caller or payment link as proof of a genuine tax demand.",
    red: [
      "Threatening caller",
      "Immediate UPI/card payment",
      "Suspicious shortened URL",
    ],
    action:
      "Check notices and tax information through the official tax portal or a trusted professional.",
  },
  {
    icon: "📱",
    title: "Fake TRAI / SIM Deactivation",
    type: "TELECOM IMPERSONATION",
    claim:
      "“Your number is linked to illegal activity. Your SIM will be disconnected today.”",
    why: "Telecom verification and SIM-related processes are real, making the threat sound official.",
    reality:
      "A caller claiming to represent a regulator should not be trusted with OTPs, payments or remote access.",
    red: [
      "Police/cybercrime threat",
      "Video-call pressure",
      "OTP or app-install request",
    ],
    action:
      "Contact your telecom provider through its official support channel and verify the issue.",
  },
  {
    icon: "🚗",
    title: "Fake Traffic Challan",
    type: "TRAFFIC / PAYMENT SCAM",
    claim:
      "“Your challan is pending. Pay this fine immediately using the attached link.”",
    why: "Real traffic challans exist and often contain vehicle details.",
    reality:
      "A message containing a vehicle number does not prove that its payment link is genuine.",
    red: ["Unfamiliar domain", "APK download", "Pressure to pay through a QR"],
    action:
      "Check the challan independently on the official government traffic/challan service.",
  },
  {
    icon: "👨‍⚖️",
    title: "Fake Lawyer / Legal Settlement",
    type: "LEGAL IMPERSONATION",
    claim:
      "“I am the lawyer handling your case. Pay this settlement amount today.”",
    why: "Legal language and case details can make the person sound professionally connected to a real matter.",
    reality:
      "Identity, case details and payment instructions must be independently verified before any money moves.",
    red: [
      "Personal UPI",
      "Secrecy request",
      "Refusal to allow independent verification",
    ],
    action:
      "Verify the lawyer and case through known contact details or the relevant legal institution.",
  },
  {
    icon: "🏠",
    title: "Fake Property / Registry Notice",
    type: "PROPERTY / LEGAL SCAM",
    claim:
      "“Your property has a registry/legal issue. Pay a settlement fee to stop action.”",
    why: "Property records and registration processes are complex, so fake notices can be hard to judge quickly.",
    reality:
      "A caller's demand is not proof of a valid registry order or legal penalty.",
    red: [
      "Unexpected legal threat",
      "Unverified document",
      "Personal payment request",
    ],
    action:
      "Verify the property matter with the relevant official registry authority or a trusted legal professional.",
  },
  {
    icon: "💳",
    title: "Fake Credit / Loan Recovery Notice",
    type: "FINANCIAL IMPERSONATION",
    claim:
      "“Your loan account is overdue. Pay this amount today or legal recovery will start.”",
    why: "Banks and lenders really do send recovery communications, so fake notices exploit that familiarity.",
    reality:
      "Verify the account and outstanding amount directly with the lender using trusted contact details.",
    red: [
      "Personal UPI",
      "Threatening language",
      "No verifiable account reference",
    ],
    action:
      "Contact the lender through its official app, website or known number before paying.",
  },
];

const helpTopics = [
  [
    "💸",
    "Money sent / UPI fraud",
    "If money has moved without your intended authorization, call 1930 immediately and report through the official portal. Also contact your bank/payment provider through official channels.",
  ],
  [
    "🔐",
    "Password or account compromised",
    "Use the genuine service directly, change compromised credentials, review active sessions and secure recovery options.",
  ],
  [
    "🎣",
    "Phishing link / fake message",
    "Do not interact further. Preserve the message, sender, URL and screenshots, then report the incident through appropriate official channels.",
  ],
  [
    "📞",
    "Fake call / impersonation",
    "End the call and verify the claimed organization or person independently. Never disclose OTPs, PINs or passwords.",
  ],
  [
    "💼",
    "Job / investment scam",
    "Stop payments and communication, preserve advertisements/chats/payment records, and report through official cybercrime channels.",
  ],
  [
    "🛒",
    "Shopping / marketplace scam",
    "Save order, seller, chat and payment evidence. Contact the payment provider/platform through its official support route.",
  ],
  [
    "📱",
    "SIM / phone takeover concern",
    "Contact your mobile operator through an official channel and secure important accounts from a trusted device.",
  ],
  [
    "🧩",
    "Something else",
    "If you are unsure which category fits, start with the official National Cyber Crime Reporting Portal and follow its current instructions.",
  ],
];

let current = 0,
  score = 0,
  answered = false,
  userName = "";

const pages = [
  "homePage",
  "trainingPage",
  "summaryPage",
  "legalPage",
  "shieldPage",
  "helpPage",
  "certificatePage",
];

const $ = (id) => document.getElementById(id);

function showPage(name) {
  pages.forEach((p) => $(p).classList.toggle("active", p === name + "Page"));
  document
    .querySelectorAll(".nav-link")
    .forEach((b) => b.classList.toggle("active", b.dataset.page === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document
  .querySelectorAll("[data-page]")
  .forEach((b) => b.addEventListener("click", () => showPage(b.dataset.page)));

$("brandBtn").onclick = () => showPage("home");
$("legalNavBtn").onclick = () => {
  renderLegalScams();
  showPage("legal");
};

function updateMap() {
  $("scenarioMap").innerHTML = scenarios
    .map(
      (_, i) =>
        `<div class="map-dot ${i === current ? "current" : ""} ${i < current ? "done" : ""}"><span>${i < current ? "✓" : String(i + 1).padStart(2, "0")}</span></div>`,
    )
    .join("");
}

function renderScenario() {
  const s = scenarios[current];
  answered = false;
  updateMap();
  $("scenarioTag").textContent =
    `SCENARIO ${String(current + 1).padStart(2, "0")}`;
  $("userChip").textContent = userName ? `FOR ${userName.toUpperCase()}` : "";
  $("userChip").hidden = !userName;
  $("scenarioTitle").textContent = s.title;
  $("scenarioType").textContent = s.type;
  $("scoreBadge").textContent = `${score} / ${scenarios.length}`;
  $("progressBar").style.width = `${((current + 1) / scenarios.length) * 100}%`;
  $("senderAvatar").textContent = s.avatar;
  $("senderName").textContent = s.sender;
  $("senderDetail").textContent = s.detail;
  $("channelBadge").textContent = s.channel;
  $("scenarioBody").textContent = s.body;
  $("fakeLink").hidden = !s.link;
  if (s.link) $("fakeLink").textContent = "↗ " + s.link;
  $("scenarioQuestion").textContent = s.question;
  $("feedback").hidden = true;
  $("feedback").innerHTML = "";
  $("choices").innerHTML = "";
  s.choices.forEach(([text, result]) => {
    const b = document.createElement("button");
    b.className = "choice";
    b.textContent = text;
    b.onclick = () => answer(b, result, s.explanation);
    $("choices").appendChild(b);
  });
  showPage("training");
}

function answer(button, result, explanation) {
  if (answered) return;
  answered = true;
  if (result === "correct") score++;
  document.querySelectorAll(".choice").forEach((b) => (b.disabled = true));
  button.classList.add(result);
  $("scoreBadge").textContent = `${score} / ${scenarios.length}`;
  const fb = $("feedback");
  fb.hidden = false;
  fb.innerHTML = `<strong>${result === "correct" ? "Good call." : "Watch out."}</strong>${explanation}<div class="next-row"><button class="next-btn">${current === scenarios.length - 1 ? "See your results" : "Next scenario →"}</button></div>`;
  fb.querySelector(".next-btn").onclick = () => {
    current++;
    current < scenarios.length ? renderScenario() : renderSummary();
  };
}

function renderSummary() {
  $("finalScore").textContent = score;
  $("accuracy").textContent =
    Math.round((score / scenarios.length) * 100) + "%";
  $("summaryGrid").innerHTML = scenarios
    .map(
      (s, i) =>
        `<article class="summary-item"><span>0${i + 1} · ${s.type}</span><h3>${s.title}</h3><p>${s.explanation}</p></article>`,
    )
    .join("");
  showPage("summary");
}

function renderLegalScams(index = 0) {
  const grid = $("legalGrid");
  grid.innerHTML = legalScams
    .map(
      (s, i) => `
    <button class="legal-card ${i === index ? "selected" : ""}" data-i="${i}">
      <span class="legal-icon">${s.icon}</span><span class="legal-number">${String(i + 1).padStart(2, "0")}</span>
      <span class="legal-title">${s.title}</span><span class="legal-type">${s.type}</span>
    </button>`,
    )
    .join("");
  grid
    .querySelectorAll(".legal-card")
    .forEach((b) => (b.onclick = () => renderLegalScams(Number(b.dataset.i))));
  const s = legalScams[index];
  $("legalDetail").innerHTML = `
    <div class="legal-detail-head"><div><p class="eyebrow">${s.type}</p><h3>${s.icon} ${s.title}</h3></div><span class="legal-alert">VERIFY</span></div>
    <div class="legal-claim"><span>WHAT THE SCAMMER MAY SAY</span><p>${s.claim}</p></div>
    <div class="legal-detail-grid">
      <div><span>WHY IT LOOKS REAL</span><p>${s.why}</p></div>
      <div><span>THE REALITY</span><p>${s.reality}</p></div>
    </div>
    <div class="legal-redflags"><span>RED FLAGS</span><ul>${s.red.map((x) => `<li>${x}</li>`).join("")}</ul></div>
    <div class="legal-action"><strong>✓ SAFE RESPONSE</strong><p>${s.action}</p></div>`;
}

function renderHelp() {
  if (!$("helpCards").children.length) {
    $("helpCards").innerHTML = helpTopics
      .map(
        (t, i) =>
          `<button class="help-card" data-i="${i}">${t[0]}&nbsp; ${t[1]}</button>`,
      )
      .join("");
    document.querySelectorAll(".help-card").forEach(
      (b) =>
        (b.onclick = () => {
          document
            .querySelectorAll(".help-card")
            .forEach((x) => x.classList.remove("selected"));
          b.classList.add("selected");
          const t = helpTopics[Number(b.dataset.i)];
          $("helpDetail").hidden = false;
          $("helpDetail").innerHTML = `<strong>${t[1]}</strong>${t[2]}`;
        }),
    );
  }
}

document.querySelectorAll('[data-page="help"]').forEach((b) =>
  b.addEventListener("click", () => {
    renderHelp();
    showPage("help");
  }),
);

const nameModal = $("nameModal");
const participantName = $("participantName");
const nameError = $("nameError");

function openNameModal() {
  nameModal.classList.add("open");
  nameModal.setAttribute("aria-hidden", "false");
  nameError.hidden = true;
  setTimeout(() => participantName.focus(), 80);
}

function closeNameModal() {
  nameModal.classList.remove("open");
  nameModal.setAttribute("aria-hidden", "true");
}

function beginTraining() {
  const cleanName = participantName.value.trim().replace(/\s+/g, " ");
  if (cleanName.length < 2) {
    nameError.hidden = false;
    participantName.focus();
    return;
  }
  userName = cleanName;
  localStorage.setItem("fraudLabParticipantName", userName);
  closeNameModal();
  current = 0;
  score = 0;
  renderScenario();
}

$("startBtn").onclick = openNameModal;
$("confirmNameBtn").onclick = beginTraining;
participantName.addEventListener("keydown", (e) => {
  if (e.key === "Enter") beginTraining();
});
document.querySelectorAll("[data-close-name]").forEach((el) => {
  el.addEventListener("click", closeNameModal);
});

function formatCertificateDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
    .format(date)
    .toUpperCase();
}

function renderCertificate() {
  const date = formatCertificateDate();
  $("certNameOverlay").textContent = userName;
  $("certDateOverlay").textContent = date;
  $("certNameSide").textContent = userName;
  $("certDateSide").textContent = date;
  showPage("certificate");
}

$("certificateBtn").onclick = renderCertificate;
$("printBtn").onclick = () => {
  document.title = `Fraud Lab Certificate - ${userName}`;
  window.print();
};

const savedName = localStorage.getItem("fraudLabParticipantName");
if (savedName) {
  userName = savedName;
  participantName.value = savedName;
}
renderHelp();

// Setup Status Badge directly on Client-Side
(function updateShieldProviderStatus() {
  const pill = document.getElementById("shieldProviderStatus");
  const text = document.getElementById("shieldProviderText");
  if (!pill || !text) return;
  pill.classList.remove("is-local", "is-error");
  pill.classList.add("is-ai");
  text.textContent = "PROCESS COMPLETED";
})();

const shieldInputEl = document.getElementById("shieldInput");
const shieldCharCount = document.getElementById("shieldCharCount");
if (shieldInputEl && shieldCharCount) {
  const updateShieldCount = () => {
    shieldCharCount.textContent = `${shieldInputEl.value.length.toLocaleString()} / 5000`;
  };
  shieldInputEl.addEventListener("input", updateShieldCount);
  updateShieldCount();
}

const shieldExamples = {
  urgent:
    "URGENT: Your bank account will be blocked today. Verify your KYC immediately using this link or lose access. Reply with your OTP to confirm.",
  prize:
    "Congratulations! You won a cash prize. Pay a small processing fee now and share your bank details to receive it.",
  safe: "Hi, the team meeting has moved to 3 PM. Please check the calendar invite when you have time.",
  upi: "Your UPI refund is pending. Scan this QR code and approve the collect request to receive your refund. Share the OTP if asked.",
  courier:
    "Your parcel is held by customs. A police case will be filed unless you install this verification app and pay the release fee immediately.",
};

document.querySelectorAll("[data-shield-example]").forEach((button) => {
  button.addEventListener("click", () => {
    $("shieldInput").value = shieldExamples[button.dataset.shieldExample] || "";
    $("shieldInput").focus();
  });
});

function localShieldAnalysis(text) {
  const checks = [
    {
      re: /\b(otp|one[- ]time password|pin|password|cvv|verification code)\b/i,
      title: "Requests sensitive credentials",
      detail:
        "Never share OTPs, PINs, passwords, CVVs, or verification codes with callers or message senders.",
      weight: 3,
    },
    {
      re: /\b(urgent|immediately|within\s+\d+\s*(minute|hour)|today only|act now|last warning|account.{0,20}(blocked|suspended|closed))\b/i,
      title: "Urgency or threat language",
      detail:
        "Scammers often pressure people to act before they can verify a claim independently.",
      weight: 2,
    },
    {
      re: /\b(prize|won|winner|lottery|reward|processing fee|claim your)\b/i,
      title: "Prize or fee bait",
      detail:
        "Unexpected prizes that require an upfront payment are a common fraud pattern.",
      weight: 2,
    },
    {
      re: /\b(send money|transfer|pay now|refund fee|deposit|upi id|collect request)\b/i,
      title: "Payment pressure",
      detail:
        "Verify any payment or refund request using a trusted channel you find independently.",
      weight: 2,
    },
    {
      re: /https?:\/\/|www\.|\b(bit\.ly|tinyurl|t\.co)\b/i,
      title: "Contains a web link",
      detail:
        "A link alone does not prove fraud. Check the exact domain carefully and avoid opening unexpected links.",
      weight: 1,
    },
    {
      re: /\b(police|court|digital arrest|case registered|legal action|warrant)\b/i,
      title: "Authority or legal intimidation",
      detail:
        "Do not transfer money or install apps because someone claims to be police, a court, or a government officer. Verify through official channels.",
      weight: 2,
    },
    {
      re: /\b(remote access|install this app|screen share|anydesk|teamviewer|quick.?support)\b/i,
      title: "Remote-access request",
      detail:
        "Do not give unknown people remote access to your device or screen.",
      weight: 3,
    },
    {
      re: /\b(upi collect|collect request|scan (the )?qr|qr code).{0,100}\b(refund|receive|cashback|payment|money)\b|\b(refund|cashback).{0,100}\b(upi collect|collect request|scan (the )?qr|qr code)\b/i,
      title: "UPI / QR refund trick",
      detail:
        "Receiving a refund normally does not require approving a collect request or sharing an OTP. Read every UPI prompt before approving.",
      weight: 3,
    },
    {
      re: /\b(kyc|electricity|power).{0,50}\b(expir|disconnect|suspend|block|deactivat)\b|\b(expir|disconnect|suspend|deactivat).{0,50}\b(kyc|electricity|power)\b/i,
      title: "KYC or utility-disconnection pressure",
      detail:
        "Do not use links or phone numbers in threatening messages. Verify through the official bank or utility app/site.",
      weight: 2,
    },
    {
      re: /\b(parcel|courier|customs|delivery).{0,100}\b(fee|held|blocked|police|case|pay|install)\b|\b(digital arrest|police case|warrant).{0,100}\b(pay|transfer|install|verify)\b/i,
      title: "Courier or authority impersonation",
      detail:
        "Unexpected delivery fees and threats of arrest are common pressure tactics. Verify with the courier or authority using an independently found official contact.",
      weight: 3,
    },
    {
      re: /\b(work from home|part.?time job|daily income|guaranteed return|double your money|investment profit)\b/i,
      title: "Job or investment bait",
      detail:
        "Be wary of guaranteed returns, upfront job fees, and tasks that require deposits to unlock earnings.",
      weight: 2,
    },
  ];
  const hits = checks.filter((c) => c.re.test(text));
  const score = Math.min(99, hits.reduce((n, c) => n + c.weight, 0) * 16);
  const level = score >= 60 ? "HIGH" : score >= 28 ? "CAUTION" : "LOW SIGNALS";
  return {
    level,
    score,
    summary: hits.length
      ? "Potential warning signs were found. Treat this as suspicious until you verify it independently."
      : "No common warning patterns were detected by the basic checks. That does not prove the message is safe.",
    signs: hits.map(({ title, detail }) => ({ title, detail })),
    actions: hits.length
      ? [
          "Do not click links or send money yet.",
          "Never share OTPs, PINs, passwords, or recovery codes.",
          "Contact the organization using its official app, website, or a number you find independently.",
        ]
      : [
          "Check the sender and context independently.",
          "Do not share sensitive details or follow unexpected payment requests.",
          "If unsure, contact the supposed organization through an official channel.",
        ],
    mode: "PROCESS COMPLETED",
  };
}

function escapeShield(s) {
  return String(s).replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        ch
      ],
  );
}

function renderShieldResult(result) {
  const color =
    result.level === "HIGH"
      ? "high"
      : result.level === "CAUTION"
        ? "caution"
        : "low";
  const signs = (result.signs || []).length
    ? result.signs
        .map(
          (s) =>
            `<li><b>${escapeShield(s.title)}</b><p>${escapeShield(s.detail)}</p></li>`,
        )
        .join("")
    : "<li><b>No common warning pattern detected</b><p>Automated checks can miss sophisticated scams. Stay cautious.</p></li>";
  const actions = (result.actions || [])
    .map((a) => `<li>${escapeShield(a)}</li>`)
    .join("");
  $("shieldResult").innerHTML =
    `<div class="shield-result-top"><span class="risk-pill ${color}">${escapeShield(result.level || "REVIEW")} RISK</span><span class="shield-mode">${escapeShield(result.mode || "Analysis")}</span></div><div class="risk-meter"><span class="${color}" style="width:${Math.max(4, Math.min(100, Number(result.score) || 0))}%"></span></div><h3>${result.level === "HIGH" ? "Stop and verify." : result.level === "CAUTION" ? "Proceed carefully." : "Stay alert."}</h3><p>${escapeShield(result.summary || "Review these findings carefully.")}</p><div class="shield-result-section"><h4>WARNING SIGNS</h4><ul class="shield-signs">${signs}</ul></div><div class="shield-result-section shield-next"><h4>SAFER NEXT STEPS</h4><ul>${actions}</ul></div><small class="shield-result-note">This is guidance, not a guarantee or official fraud determination.</small>`;
}

$("shieldForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const value = $("shieldInput").value.trim();
  if (!value) return;
  const btn = $("shieldAnalyzeBtn");
  btn.disabled = true;
  btn.innerHTML = "Analyzing… <span>⌁</span>";
  $("shieldResult").innerHTML =
    '<div class="shield-empty-icon">⌁</div><p class="eyebrow">ANALYSIS REPORT</p><h3>Checking warning signs…</h3><p>Reviewing the text for common scam patterns.</p>';
  
  setTimeout(() => {
    const analysisResult = localShieldAnalysis(value);
    renderShieldResult(analysisResult);
    btn.disabled = false;
    btn.innerHTML = "Analyze risk <span>→</span>";
  }, 400);
});

let demoTone = null;
let demoAudioContext = null;
const simulateCallBtn = $("simulateCallBtn");
if (simulateCallBtn) {
  const alertPreview = $("callAlertPreview");
  const stateTitle = $("callStateTitle");
  const stateText = $("callStateText");
  const stopSirenBtn = $("stopSirenBtn");
  function stopDemoSiren() {
    if (demoTone) {
      try {
        demoTone.stop();
      } catch (_) {}
      demoTone = null;
    }
    if (demoAudioContext) {
      demoAudioContext.close().catch(() => {});
      demoAudioContext = null;
    }
    if (stopSirenBtn) stopSirenBtn.hidden = true;
  }
  function startDemoSiren() {
    stopDemoSiren();
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      demoAudioContext = new AudioCtx();
      const oscillator = demoAudioContext.createOscillator();
      const gain = demoAudioContext.createGain();
      oscillator.type = "sawtooth";
      oscillator.frequency.value = 880;
      gain.gain.value = 0.035;
      oscillator.connect(gain);
      gain.connect(demoAudioContext.destination);
      oscillator.start();
      demoTone = oscillator;
      if (stopSirenBtn) stopSirenBtn.hidden = false;
    } catch (_) {
      /* Audio may be blocked by browser/device settings. */
    }
  }
  simulateCallBtn.addEventListener("click", () => {
    stopDemoSiren();
    alertPreview.hidden = false;
    stateTitle.textContent = "Demo call flagged for caution";
    stateText.textContent =
      "A simulated safety alert is active. Your real phone is not being monitored.";
    alertPreview.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
  $("demoIgnoreBtn")?.addEventListener("click", () => {
    stopDemoSiren();
    alertPreview.hidden = true;
    stateTitle.textContent = "Demo action: ignore";
    stateText.textContent =
      "No real call was affected. For a real call, verify the caller through an independent official channel.";
  });
  $("demoAnswerBtn")?.addEventListener("click", () => {
    $("callAlertLevel").textContent = "SAFETY ADVICE";
    alertPreview.querySelector("h4").textContent = "If you already answered";
    alertPreview.querySelector("p").textContent =
      "Do not share OTPs, PINs or passwords. Do not transfer money, install remote-access apps, or follow threats. End the call and contact the organization using its official app or website.";
    startDemoSiren();
  });
  stopSirenBtn?.addEventListener("click", stopDemoSiren);
  window.addEventListener("pagehide", stopDemoSiren);
}

(function initStatus() {
  const statusLabel = document.querySelector(".shield-status b");
  const statusSmall = document.querySelector(".shield-status small");
  if (!statusLabel || !statusSmall) return;
  statusLabel.textContent = "PROCESS COMPLETED";
  statusSmall.textContent = "Client-side Risk Engine Active";
})();