function showThreat(type) {
    let data = "";


if (type === "shopping") {
        data = `
        <h3>Online Shopping Scam</h3>

        <p><b>What is an Online Shopping Scam?</b><br>
        This occurs when scammers create fake e-commerce websites or social media pages (f-commerce) to sell products that do not exist or are counterfeit. They typically demand advance payment and then block the buyer without delivering the item.</p>

        <p><b>Current Situation:</b><br>
        With the rise of Facebook and Instagram shopping in Bangladesh, these scams are widespread. Fraudsters often run highly targeted, sponsored ads with stolen product images, demand full or partial advance payment via personal bKash or Nagad numbers, and immediately disable their pages or block the user once the money is sent.</p>

        <p><b>How to Avoid:</b></p>
        <ul>
            <li>Check "Page Transparency" on Facebook to see when the page was created and if it frequently changes its name.</li>
            <li>Be highly suspicious of pages that only accept payment to personal MFS numbers and have no official payment gateway or cash-on-delivery (COD) option.</li>
            <li>Look for authentic customer reviews and check if the page turns off comments on their posts.</li>
            <li>Verify the website domain (e.g., look for typos like <i>darazz-shop.com</i>).</li>
        </ul>

        <p><b>Laws in Bangladesh:</b><br>
        Online shopping fraud violates both the <b>Consumer Rights Protection Act, 2009</b> and digital fraud sections of the <b>Cyber Security Act 2023</b>. Defrauding a consumer through false advertisement or failure to deliver paid goods is a punishable offense.</p>

        <p><b>Punishment:</b><br>
        Depending on whether it is treated as a consumer rights violation or cyber fraud:</p>
        <ul>
            <li>Imprisonment ranging from 1 to 3 years.</li>
            <li>Monetary fines (under the Consumer Rights Act, the complaining consumer may even receive 25% of the fine collected from the fraudulent business).</li>
            <li>Permanent closure of the fraudulent business entity.</li>
        </ul>

        <p><b>How we can help you:</b></p>
        <ul>
            <li>You can log the fraudulent website link, page name, and transaction details securely in our portal.</li>
            <li>We will guide you through the exact process of filing a formal complaint with the Directorate of National Consumer Rights Protection (DNCRP).</li>
            <li>We securely compile your digital evidence (chat screenshots, payment receipts) for legal escalation.</li>
            <li>You can track the progress of your dispute directly through our tracking system.</li>
        </ul>
        `;
    }

 if (type === "phishing") {
        data = `
        <h3>Phishing</h3>

        <p><b>What is Phishing?</b><br>
        Phishing is a cyber attack where scammers disguise themselves as trusted entities (like your bank, bKash, or a popular website) through fake emails, SMS, or fake login pages to steal sensitive data like passwords, OTPs, or credit card numbers.</p>

        <p><b>Current Situation:</b><br>
        In Bangladesh, phishing is highly prevalent. Scammers frequently use fake Mobile Financial Service (MFS) messages, fake lottery links, or cloned social media login pages to hijack accounts and steal money. Many users fall victim due to a lack of digital literacy and urgency created by the attackers.</p>

        <p><b>How to Avoid:</b></p>
        <ul>
            <li>Never click on suspicious links in emails, Messenger, or SMS.</li>
            <li>Always double-check the sender's actual email address or phone number.</li>
            <li>Remember that legitimate organizations will <b>never</b> ask for your PIN, password, or OTP.</li>
            <li>Enable Two-Factor Authentication (2FA) on all your digital accounts.</li>
        </ul>

        <p><b>Laws in Bangladesh:</b><br>
        Phishing, identity theft, and unauthorized data access are serious crimes punishable under the <b>Cyber Security Act 2023</b> (which updated the Digital Security Act 2018). Creating fake websites or stealing credentials is a direct violation of these IT laws.</p>

        <p><b>Punishment:</b><br>
        Depending on the financial loss and severity of the data breach:</p>
        <ul>
            <li>Imprisonment (can range up to 5 years or more depending on the scale of the fraud)</li>
            <li>Heavy monetary fines</li>
            <li>Or both</li>
        </ul>

        <p><b>How we can help you:</b></p>
        <ul>
            <li>You can directly report phishing links or fake websites to us through our portal.</li>
            <li>We will analyze the threat vector and guide you on securing compromised accounts.</li>
            <li>We will securely compile your evidence and connect it to the Cyber Crime Unit (Police).</li>
            <li>You will be notified about every step of the investigation tracking through our website.</li>
        </ul>
        `;
    }

   if (type === "bullying") {
        data = `
        <h3>Cyber Bullying</h3>
        
        <p><b>What is Cyber Bullying?</b><br>
        Cyber bullying means harassing, threatening, or insulting someone using digital platforms like Facebook, Messenger, Instagram, or other online media.</p>
        
        <p><b>Current Situation:</b><br>
        In present days, cyber bullying is increasing rapidly in Bangladesh, especially among students and young people. Many victims face mental stress, anxiety, and even depression due to online harassment, fake accounts, and spreading rumors.</p>
        
        <p><b>Laws in Bangladesh:</b><br>
        Cyber bullying is punishable under the <b>Digital Security Act 2018</b> (and related ICT laws). Posting offensive, false, or harmful content online is considered a crime.</p>
        
        <p><b>Punishment:</b><br>
        Depending on the severity:</p>
        <ul>
            <li>Imprisonment (can range from a few months to several years)</li>
            <li>Monetary fines</li>
            <li>Or both</li>
        </ul>
        
        <p><b>What You Should Do:</b></p>
        <ul>
            <li>Do not respond to bullies</li>
            <li>Save evidence (screenshots)</li>
            <li>Block and report the account</li>
            <li>Report to Cyber Crime Unit (Police)</li>
        </ul>
        <p><i>Or, in case you are not able to file a case, we can help you do it through our website.</i></p>
        
        <p><b>How we can help you:</b></p>
        <ul>
            <li>You can directly report to us through our website.</li>
            <li>We will analyze your problem and how you are affected by it.</li>
            <li>We connect your problem to the Cyber Crime Unit (Police).</li>
            <li>You will be notified about every step of how the case is running through our website.</li>
        </ul>
        `;
    }

  if (type === "banking") {
        data = `
        <h3>Online Banking Fraud</h3>

        <p><b>What is Online Banking Fraud?</b><br>
        This occurs when criminals gain unauthorized access to your bank account or credit card details to steal funds. This is often achieved through cloned cards (skimming), stolen app credentials, or tricking the victim into authorizing a transfer.</p>

        <p><b>Current Situation:</b><br>
        As digital banking and dual-currency credit cards become more common in Bangladesh, cybercriminals are targeting weak passwords, unsecured public Wi-Fi networks, and physical ATM skimmers to drain accounts quickly.</p>

        <p><b>How to Avoid:</b></p>
        <ul>
            <li>Never use public Wi-Fi to log into your banking app.</li>
            <li>Regularly monitor your bank statements for unauthorized small charges.</li>
            <li>Cover the keypad when entering your PIN at an ATM to protect against hidden cameras.</li>
            <li>Ensure your bank sends instant SMS alerts for <b>every</b> transaction.</li>
        </ul>

        <p><b>Laws in Bangladesh:</b><br>
        Stealing funds via digital banking is prosecuted under the <b>Cyber Security Act 2023</b> and the <b>Penal Code 1860</b>. The Bangladesh Bank also has strict mandates requiring financial institutions to investigate disputed digital transactions.</p>

        <p><b>Punishment:</b><br>
        Depending on the scale of the financial theft:</p>
        <ul>
            <li>Imprisonment ranging from 3 to 7 years.</li>
            <li>Confiscation of the scammer's assets to repay the stolen amount.</li>
            <li>Severe monetary fines.</li>
        </ul>

        <p><b>How we can help you:</b></p>
        <ul>
            <li>We provide immediate steps to freeze your compromised accounts and cards.</li>
            <li>We help you structure the mandatory "Dispute Form" required by your specific bank in Bangladesh.</li>
            <li>If the bank fails to resolve the issue, we guide you on escalating the case to Bangladesh Bank's Financial Integrity and Customer Services Department (FICSD).</li>
            <li>We securely log your transaction IDs and communication logs for police escalation.</li>
        </ul>
        `;
    }

   if (type === "social") {
        data = `
        <h3>Social Media Hacks</h3>

        <p><b>What is a Social Media Hack?</b><br>
        This happens when unauthorized individuals gain access to your social media accounts (like Facebook, Instagram, or WhatsApp). Hackers often use these compromised accounts to impersonate you, scam your friends/family for money, or blackmail you using private data.</p>

        <p><b>Current Situation:</b><br>
        Account takeovers are rampant in Bangladesh. The most common scenario involves a hacker taking over a Facebook or WhatsApp account and immediately messaging the victim's contacts asking for emergency funds via bKash or Nagad.</p>

        <p><b>How to Avoid:</b></p>
        <ul>
            <li>Enable Two-Factor Authentication (2FA) using an authenticator app, not just SMS.</li>
            <li>Never reuse passwords across multiple platforms.</li>
            <li>Do not click on suspicious links sent via Messenger or WhatsApp, even if they appear to be from friends.</li>
            <li>Review active login sessions regularly in your account settings and log out of unrecognized devices.</li>
        </ul>

        <p><b>Laws in Bangladesh:</b><br>
        Hacking an account and identity theft are severe crimes under the <b>Cyber Security Act 2023</b>. If the hacker attempts to extort money or leak private images, additional sections regarding extortion and digital harassment are applied.</p>

        <p><b>Punishment:</b><br>
        Depending on the damages and whether extortion is involved:</p>
        <ul>
            <li>Imprisonment ranging from 3 to 5 years (can be higher for severe extortion).</li>
            <li>Significant monetary fines.</li>
            <li>Or both.</li>
        </ul>

        <p><b>How we can help you:</b></p>
        <ul>
            <li>We provide immediate, step-by-step guidance on how to use official recovery channels to lock the hacker out.</li>
            <li>We securely log the compromised profile URL and any fraudulent MFS numbers the hacker is using to ask for money.</li>
            <li>We guide you on how to properly file a General Diary (GD) at your local police station.</li>
            <li>We escalate the compiled evidence directly to the Cyber Crime Unit.</li>
        </ul>
        `;
    }

    document.getElementById("details").innerHTML = data;
}