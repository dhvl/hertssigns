import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Logo & Brand Design Questionnaire | Herts Signs Group",
  description: "",
};

export default function Page() {
  return (
    <main>
      
<form id="logoForm" noValidate>
<div className="form-notice">
<span className="icon">i</span>
<div>
<strong>Only one field is required.</strong>
          Please enter your brand or business name exactly as it should appear. Everything else is optional and simply helps us design a stronger logo.
        </div>
</div>
<div aria-hidden="true" className="progress-wrap">
<div className="progress-label">
<span>Step progress</span>
<span id="progressText">Step 1 of 7</span>
</div>
<div className="progress-track">
<div className="progress-bar" id="progressBar"></div>
</div>
</div>
<div aria-live="polite" className="brief-strength-card">
<div className="brief-strength-top">
<div>
<span className="brief-strength-title">Design Brief Strength</span>
<strong className="brief-strength-level" id="briefStrengthLevel">Basic Brief</strong>
</div>
<div className="brief-strength-percent" id="briefStrengthPercent">0%</div>
</div>
<div aria-hidden="true" className="brief-strength-meter">
<div className="brief-strength-fill" id="briefStrengthFill"></div>
</div>
<p className="brief-strength-message" id="briefStrengthMessage">Add your brand name to give us the essentials. Adding your business, style and usage details will help us create a more accurate logo proposal.</p>
</div>
<div className="step-header">
<div className="step-meta">
<div className="step-count" id="stepCount">Step 1 of 7</div>
<div className="step-title" id="stepTitle">1. Your Details</div>
<div className="step-section-status" id="stepSectionStatus">This section: Not started</div>
</div>
<div className="step-actions-nav">
<button className="btn-ghost" id="prevStepBtn" type="button">Back</button>
<button className="btn-secondary" id="nextStepBtn" type="button">Next</button>
</div>
</div>
<section className="section form-step active" data-step-title="1. Your Details">
<div className="section-header">
<div>
<h2>1. Your Details</h2>
<p>These details help us contact you if we need to clarify anything. Only required if you have not already provided them.</p>
</div>
<span className="optional-tag">Optional</span>
</div>
<div className="grid">
<div className="field"><label htmlFor="businessName">Business name</label><input autoComplete="organization" id="businessName" name="Business name" type="text"/></div>
<div className="field"><label htmlFor="contactName">Contact name</label><input autoComplete="name" id="contactName" name="Contact name" type="text"/></div>
<div className="field third"><label htmlFor="phone">Phone number</label><input autoComplete="tel" id="phone" name="Phone number" type="tel"/></div>
<div className="field third"><label htmlFor="email">Email address</label><input autoComplete="email" id="email" name="Email address" type="email"/></div>
<div className="field third"><label htmlFor="website">Website</label><input id="website" name="Website" placeholder="www.example.co.uk" type="text"/></div>
<div className="field full"><label htmlFor="socials">Social media handles</label><input id="socials" name="Social media handles" placeholder="Instagram, Facebook, LinkedIn, TikTok, etc." type="text"/></div>
</div>
</section>
<section className="section form-step" data-step-title="2. Your Name &amp; Tagline">
<div className="section-header">
<div>
<h2>2. Your Name &amp; Tagline</h2>
<p>The exact text we should design around. This is the only required part of the form.</p>
</div>
<span className="required-tag">Required section</span>
</div>
<div className="grid">
<div className="field full" data-required-field="">
<label htmlFor="brandName">Brand or business name <span className="required-marker">*</span></label>
<input id="brandName" name="Brand or business name" placeholder="Exactly as it should appear in the logo" required type="text"/>
<div className="error-message">Please enter the brand or business name.</div>
</div>
<div className="field"><label htmlFor="tagline">Tagline or strapline</label><input id="tagline" name="Tagline or strapline" placeholder="Optional words to sit with the name" type="text"/></div>
<div className="field"><label htmlFor="establishedSince">Established since</label><input id="establishedSince" name="Established since" placeholder="Year, if you want it shown" type="text"/></div>
<div className="field full"><label htmlFor="nameNotes">Exact wording or spelling notes</label><textarea id="nameNotes" name="Exact wording or spelling notes" placeholder="Capitalisation, ampersands, abbreviations, anything that must be exact, or the meaning behind the name."></textarea></div>
</div>
</section>
<section className="section form-step" data-step-title="3. About Your Business">
<div className="section-header"><div><h2>3. About Your Business</h2><p>A little context helps us design something that speaks to the right audience.</p></div><span className="optional-tag">Optional</span></div>
<div className="grid">
<div className="field full"><label htmlFor="businessDescription">What does your business do?</label><textarea id="businessDescription" name="Business description" placeholder="Briefly describe your products or services."></textarea></div>
<div className="field"><label htmlFor="mainCustomers">Who are your main customers?</label><input id="mainCustomers" name="Main customers" placeholder="Homeowners, commercial clients, schools, local authorities, etc." type="text"/></div>
<div className="field"><label htmlFor="areaCovered">Area covered</label><input id="areaCovered" name="Area covered" placeholder="Hertfordshire, London, nationwide, etc." type="text"/></div>
<div className="field full"><label htmlFor="businessDifference">What makes your business different?</label><textarea id="businessDifference" name="What makes the business different" placeholder="Family run, premium service, eco-friendly, specialist knowledge, etc."></textarea></div>
</div>
</section>
<section className="section form-step" data-step-title="4. Existing Brand &amp; Files">
<div className="section-header"><div><h2>4. Existing Brand &amp; Files</h2><p>Tell us what you already have, and what you would like us to keep or change.</p></div><span className="optional-tag">Optional</span></div>
<div className="grid">
<div className="field third">
<label htmlFor="hasLogo">Is this a new logo or a redesign?</label>
<select id="hasLogo" name="New logo or redesign">
<option value="">Please select if known</option>
<option>New logo from scratch</option>
<option>Redesign of an existing logo</option>
<option>Refresh or tidy of an existing logo</option>
<option>Not sure</option>
</select>
</div>
<div className="field third"><label htmlFor="brandColours">Brand colours</label><input id="brandColours" name="Brand colours" placeholder="Blue, white, gold, etc." type="text"/></div>
<div className="field third"><label htmlFor="fonts">Preferred fonts or typography</label><input id="fonts" name="Preferred fonts or typography" placeholder="Modern, traditional, bold, script, etc." type="text"/></div>
<div className="field full"><label htmlFor="keepChange">What would you like to keep or change?</label><textarea id="keepChange" name="What to keep or change" placeholder="If you have an existing logo, tell us what works, what doesn't, and anything that must stay."></textarea></div>
<div className="field full">
<label htmlFor="brandFiles">Branding files you can supply</label>
<textarea id="brandFiles" name="Branding files available" placeholder="Existing logo files, brand guidelines, business cards, photos, previous designs, etc. Please email these separately if the form does not support uploads."></textarea>
<div className="hint-row">
<span className="hint">For logos, vector files such as AI, EPS, PDF or SVG are preferred. JPG or PNG files are still useful if that is all you have.</span>
<details className="why-details">
<summary>Why this matters</summary>
<div className="why-popover">
<strong>Vector files are best for signs and vehicle graphics.</strong>
                  AI, EPS, SVG and many PDF logo files are usually vector-based, which means they can be enlarged to any size without becoming blurry or pixelated. JPG and PNG files are pixel-based images, so they can lose quality when scaled up. A vector logo also makes it easier for us to cut vinyl, match colours, separate elements and create clean production-ready artwork.
                </div>
</details>
</div>
</div>
</div>
</section>
<section className="section form-step" data-step-title="5. Logo Style &amp; Type">
<div className="section-header"><div><h2>5. Logo Style &amp; Type</h2><p>Choose anything that describes the direction you have in mind. Useful if you do not already have established branding.</p></div><span className="optional-tag">Optional</span></div>
<div className="field full">
<label>Preferred logo type</label>
<div className="checkbox-grid" data-checkbox-group="Preferred logo type">
<label className="check-card"><input type="checkbox" value="Wordmark (text only)"/>Wordmark (text only)</label>
<label className="check-card"><input type="checkbox" value="Icon and text together"/>Icon and text together</label>
<label className="check-card"><input type="checkbox" value="Icon or symbol only"/>Icon or symbol only</label>
<label className="check-card"><input type="checkbox" value="Monogram or initials"/>Monogram or initials</label>
<label className="check-card"><input type="checkbox" value="Emblem or badge"/>Emblem or badge</label>
<label className="check-card"><input type="checkbox" value="Not sure, please advise"/>Not sure</label>
</div>
</div>
<div className="field full" style={{marginTop: "18px"} as React.CSSProperties}>
<label>Preferred style words</label>
<div className="checkbox-grid" data-checkbox-group="Preferred design style">
<label className="check-card"><input type="checkbox" value="Clean"/>Clean</label><label className="check-card"><input type="checkbox" value="Minimal"/>Minimal</label><label className="check-card"><input type="checkbox" value="Modern"/>Modern</label>
<label className="check-card"><input type="checkbox" value="Traditional"/>Traditional</label><label className="check-card"><input type="checkbox" value="Bold"/>Bold</label><label className="check-card"><input type="checkbox" value="Premium or luxury"/>Premium or luxury</label>
<label className="check-card"><input type="checkbox" value="Friendly"/>Friendly</label><label className="check-card"><input type="checkbox" value="Corporate"/>Corporate</label><label className="check-card"><input type="checkbox" value="Technical"/>Technical</label>
<label className="check-card"><input type="checkbox" value="Playful"/>Playful</label><label className="check-card"><input type="checkbox" value="Hand-crafted"/>Hand-crafted</label><label className="check-card"><input type="checkbox" value="Not sure, please advise"/>Not sure</label>
</div>
</div>
<div className="grid" style={{marginTop: "18px"} as React.CSSProperties}>
<div className="field"><label htmlFor="coloursWanted">Colours you would like to use</label><input id="coloursWanted" name="Colours wanted" type="text"/></div>
<div className="field"><label htmlFor="coloursAvoid">Colours you would like to avoid</label><input id="coloursAvoid" name="Colours to avoid" type="text"/></div>
</div>
</section>
<section className="section form-step" data-step-title="6. Usage &amp; Inspiration">
<div className="section-header"><div><h2>6. Usage &amp; Inspiration</h2><p>Where the logo needs to work, and any examples that help explain your taste.</p></div><span className="optional-tag">Optional</span></div>
<div className="field full">
<label>Where will the logo be used?</label>
<div className="checkbox-grid" data-checkbox-group="Where the logo will be used">
<label className="check-card"><input type="checkbox" value="Website"/>Website</label>
<label className="check-card"><input type="checkbox" value="Signage"/>Signage</label>
<label className="check-card"><input type="checkbox" value="Vehicles"/>Vehicles</label>
<label className="check-card"><input type="checkbox" value="Workwear and clothing"/>Workwear and clothing</label>
<label className="check-card"><input type="checkbox" value="Social media"/>Social media</label>
<label className="check-card"><input type="checkbox" value="Print and stationery"/>Print and stationery</label>
<label className="check-card"><input type="checkbox" value="Promotional items"/>Promotional items</label>
<label className="check-card"><input type="checkbox" value="Email signatures"/>Email signatures</label>
</div>
</div>
<div className="grid" style={{marginTop: "18px"} as React.CSSProperties}>
<div className="field full"><label htmlFor="likes">Examples of logos, competitors or brands you like</label><textarea id="likes" name="Design examples liked" placeholder="You can list websites, describe examples, or email us screenshots separately."></textarea></div>
<div className="field full"><label htmlFor="dislikes">Examples of logos or styles you dislike</label><textarea id="dislikes" name="Design examples disliked"></textarea></div>
</div>
<div className="ai-box" style={{marginTop: "18px"} as React.CSSProperties}>
<h3>Using tools such as ChatGPT or Gemini for ideas</h3>
<p>If you are unsure what you want, you may find it useful to ask an AI tool for rough ideas to react to. For example:</p>
<code>Logo ideas for a modern plumbing company called Apex using blue and white</code>
<p>Please note that AI-generated logos are often not production-ready. They may include distorted text, unusable proportions or artwork that cannot be reproduced cleanly. Any ideas supplied will be recreated properly by our designers as clean vector artwork.</p>
</div>
</section>
<section className="section form-step" data-step-title="7. Timing &amp; Anything Else">
<div className="section-header"><div><h2>7. Timing &amp; Anything Else</h2><p>Anything practical we should know, plus a space for anything not covered above.</p></div><span className="optional-tag">Optional</span></div>
<div className="grid">
<div className="field"><label htmlFor="budget">Budget range</label><input id="budget" name="Budget range" placeholder="Optional, but useful for recommending a suitable approach" type="text"/></div>
<div className="field"><label htmlFor="completionDate">Preferred completion date</label><input id="completionDate" name="Preferred completion date" placeholder="Specific date or general timeframe" type="text"/></div>
<div className="field full"><label htmlFor="anythingElse">Additional comments</label><textarea id="anythingElse" name="Additional comments"></textarea></div>
</div>
</section>
<div className="step-nav-bottom">
<button className="btn-ghost" id="prevStepBtnBottom" type="button">Back</button>
<div className="step-nav-bottom-right">
<button className="btn-secondary" id="nextStepBtnBottom" type="button">Next</button>
<button className="btn-secondary" id="printBtn" style={{display: "none"} as React.CSSProperties} type="button">Print form</button>
<button className="btn-primary" id="downloadPdfBtn" style={{display: "none"} as React.CSSProperties} type="button">Download completed PDF</button>
</div>
</div>
<div className="actions">
<div>
<div aria-live="polite" className="status-message" id="statusMessage"></div>
<div className="privacy-note">
            This form currently generates a PDF on your device. It does not submit data to us automatically unless your website developer connects it to a server-side form handler.
          </div>
</div>
<div className="button-row">
<button className="btn-ghost" id="clearFormBtn" type="button">Clear form</button>
</div>
</div>
</form>

    </main>
  );
}
