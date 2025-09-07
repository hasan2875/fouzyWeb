const faqs = {
  en: {
    "ticket": "We provide flight, train, and bus ticket booking services.",
    "money": "We offer secure domestic and international money transfer services.",
    "aadhaar": "We help with Aadhaar updates and related services.",
    "pan": "We assist with PAN card applications and corrections.",
    "exam": "We support exam applications like TNPSC, TRB, UPSC, SSC, NEET, JEE, etc.",
    "passport": "We provide passport services and certificate support.",
    "bill": "We accept electricity, water, and other bill payments.",
    "fees": "We provide online school and college fee payment services."
  },
  ta: {
    "ticket": "விமானம், ரயில், பேருந்து டிக்கெட் முன்பதிவு செய்யலாம்.",
    "money": "உள்ளூர் மற்றும் வெளிநாட்டு பண பரிமாற்ற சேவை செய்யப்படுகிறது.",
    "aadhaar": "ஆதார் திருத்தம் மற்றும் தொடர்புடைய சேவைகள் செய்யப்படுகிறது.",
    "pan": "பான் கார்டு விண்ணப்பம் மற்றும் திருத்தம் செய்ய உதவுகிறோம்.",
    "exam": "டிஎன்பிஎஸ்சி, டிஆர்பி, யூபிஎஸ்சி, எஸ்எஸ்சி, நீட், ஜேஈஇ போன்ற தேர்வு விண்ணப்ப சேவைகள்.",
    "passport": "பாஸ்போர்ட் மற்றும் பிறப்புச் சான்றிதழ், மரணச் சான்றிதழ் சேவைகள்.",
    "bill": "மின்சாரம், நீர் மற்றும் பிற பில் கட்டண சேவைகள்.",
    "fees": "பள்ளி மற்றும் கல்லூரி கட்டணங்கள் ஆன்லைனில் செலுத்தலாம்."
  }
};

function detectLanguage(text) {
  const tamilRegex = /[\u0B80-\u0BFF]/;
  return tamilRegex.test(text) ? 'ta' : 'en';
}

function sendMessage() {
  const input = document.getElementById('userInput');
  const chatBox = document.getElementById('chatBox');
  const userText = input.value.trim().toLowerCase();
  if(userText === '') return;

  const userMessage = document.createElement('div');
  userMessage.textContent = 'You: ' + userText;
  chatBox.appendChild(userMessage);

  const lang = detectLanguage(userText);

  let reply = '';
  if(lang === 'ta') {
    if(userText.includes('டிக்கெட்')) reply = faqs.ta.ticket;
    else if(userText.includes('பணம்')) reply = faqs.ta.money;
    else if(userText.includes('ஆதார்')) reply = faqs.ta.aadhaar;
    else if(userText.includes('பான்')) reply = faqs.ta.pan;
    else if(userText.includes('தேர்வு')) reply = faqs.ta.exam;
    else if(userText.includes('பாஸ்போர்ட்')) reply = faqs.ta.passport;
    else if(userText.includes('பில்')) reply = faqs.ta.bill;
    else if(userText.includes('கட்டணம்')) reply = faqs.ta.fees;
    else reply = 'மன்னிக்கவும், உங்கள் கேள்வியை புரிந்து கொள்ளவில்லை. மீண்டும் முயற்சிக்கவும்!';
  } else {
    if(userText.includes('ticket')) reply = faqs.en.ticket;
    else if(userText.includes('money')) reply = faqs.en.money;
    else if(userText.includes('aadhaar')) reply = faqs.en.aadhaar;
    else if(userText.includes('pan')) reply = faqs.en.pan;
    else if(userText.includes('exam')) reply = faqs.en.exam;
    else if(userText.includes('passport')) reply = faqs.en.passport;
    else if(userText.includes('bill')) reply = faqs.en.bill;
    else if(userText.includes('fee')) reply = faqs.en.fees;
    else reply = 'Sorry, I did not understand your question. Please try again!';
  }

  const aiMessage = document.createElement('div');
  aiMessage.style.color = '#1e3a8a';
  aiMessage.textContent = 'AI: ' + reply;
  chatBox.appendChild(aiMessage);

  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
}