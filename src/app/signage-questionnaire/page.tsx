import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signage Project Questionnaire | Herts Signs Group",
  description: "",
};

export default function Page() {
  return (
    <main>
      
<form id="signageForm" noValidate>
<div className="form-notice">
<span className="icon">i</span>
<div>
<strong>Only two fields are required.</strong>
          Please complete the signage type and the site location. All other questions are optional and simply help us scope and quote the work accurately.
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
<span className="brief-strength-title">Brief Strength</span>
<strong className="brief-strength-level" id="briefStrengthLevel">Basic Brief</strong>
</div>
<div className="brief-strength-percent" id="briefStrengthPercent">0%</div>
</div>
<div aria-hidden="true" className="brief-strength-meter">
<div className="brief-strength-fill" id="briefStrengthFill"></div>
</div>
<p className="brief-strength-message" id="briefStrengthMessage">Add the signage type and site location to give us the essentials. Adding the sign details, branding and site notes will help us create a more accurate signage proposal.</p>
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
<section className="section form-step" data-step-title="2. Project Basics">
<div className="section-header">
<div>
<h2>2. Project Basics</h2>
<p>The essentials of what you need and where. These are the required fields.</p>
</div>
<span className="required-tag">Required section</span>
</div>
<div className="grid">
<div className="field" data-required-field="">
<label htmlFor="signageType">Type of signage <span className="required-marker">*</span></label>
<select id="signageType" name="Type of signage" required>
<option value="">Please select</option>
<option>Fascia / shopfront sign</option>
<option>Projecting / hanging sign</option>
<option>Illuminated sign</option>
<option>Built-up / 3D letters</option>
<option>Flat panel sign</option>
<option>Window graphics / film</option>
<option>Wayfinding / directional</option>
<option>Safety / statutory signs</option>
<option>Banner / temporary</option>
<option>Hoarding</option>
<option>Other / not sure</option>
</select>
<div className="error-message">Please choose the type of signage.</div>
</div>
<div className="field" data-required-field="">
<label htmlFor="signageLocation">Site location or address <span className="required-marker">*</span></label>
<input id="signageLocation" name="Site location or address" placeholder="Town, postcode or full site address" required type="text"/>
<div className="error-message">Please enter the site location or address.</div>
</div>
<div className="field third"><label htmlFor="numberSigns">Number of signs</label><input id="numberSigns" name="Number of signs" placeholder="1, 2, several, not sure, etc." type="text"/></div>
<div className="field third">
<label htmlFor="interiorExterior">Interior or exterior</label>
<select id="interiorExterior" name="Interior or exterior">
<option value="">Please select if known</option>
<option>Exterior</option>
<option>Interior</option>
<option>Both</option>
</select>
</div>
<div className="field third">
<label htmlFor="vatStatus">Is this for a business or personal?</label>
<select id="vatStatus" name="Business or personal">
<option value="">Please select if known</option>
<option>Business</option>
<option>Personal</option>
</select>
</div>
</div>
</section>
<section className="section form-step" data-step-title="3. The Sign Itself">
<div className="section-header"><div><h2>3. The Sign Itself</h2><p>Anything you know about size, wording and how it will be mounted. Rough answers are fine — we confirm everything on site.</p></div><span className="optional-tag">Optional</span></div>
<div className="grid">
<div className="field"><label htmlFor="signSize">Approximate size or dimensions</label><input id="signSize" name="Approximate size or dimensions" placeholder="Width x height, or the width of the shopfront" type="text"/></div>
<div className="field">
<label htmlFor="illumination">Illumination required</label>
<select id="illumination" name="Illumination required">
<option value="">Please select if known</option>
<option>None</option>
<option>Halo / back-lit</option>
<option>Face-lit</option>
<option>Trough or spotlights</option>
<option>Not sure</option>
</select>
</div>
<div className="field"><label htmlFor="mountingSurface">Mounting surface</label><input id="mountingSurface" name="Mounting surface" placeholder="Brick, render, glass, cladding, fence, etc." type="text"/></div>
<div className="field">
<label htmlFor="removeExisting">Existing sign to remove?</label>
<select id="removeExisting" name="Existing sign removal required">
<option value="">Please select if known</option>
<option>Yes</option>
<option>No</option>
<option>Not sure</option>
</select>
</div>
<div className="field full"><label htmlFor="signWording">Wording or text to display</label><textarea id="signWording" name="Wording or text to display" placeholder="Business name, services, phone number, opening hours, etc. Less is often more on signage."></textarea></div>
</div>
</section>
<section className="section form-step" data-step-title="4. About Your Business">
<div className="section-header"><div><h2>4. About Your Business</h2><p>A little context helps us design signage that suits your audience and setting.</p></div><span className="optional-tag">Optional</span></div>
<div className="grid">
<div className="field full"><label htmlFor="businessDescription">What does your business do?</label><textarea id="businessDescription" name="Business description" placeholder="Briefly describe your products or services."></textarea></div>
<div className="field"><label htmlFor="mainCustomers">Who are your main customers?</label><input id="mainCustomers" name="Main customers" placeholder="Homeowners, commercial clients, schools, local authorities, etc." type="text"/></div>
<div className="field"><label htmlFor="areaCovered">Area covered</label><input id="areaCovered" name="Area covered" placeholder="Hertfordshire, London, nationwide, etc." type="text"/></div>
<div className="field full"><label htmlFor="businessDifference">What makes your business different?</label><textarea id="businessDifference" name="What makes the business different" placeholder="Family run, premium service, eco-friendly, specialist knowledge, etc."></textarea></div>
</div>
</section>
<section className="section form-step" data-step-title="5. Branding &amp; Design Direction">
<div className="section-header"><div><h2>5. Branding &amp; Design Direction</h2><p>Tell us what you already have, or what you would like us to help develop.</p></div><span className="optional-tag">Optional</span></div>
<div className="grid">
<div className="field third"><label htmlFor="hasLogo">Do you already have a logo?</label><select id="hasLogo" name="Existing logo"><option value="">Please select if known</option><option>Yes</option><option>No</option><option>Not sure</option></select></div>
<div className="field third"><label htmlFor="brandColours">Brand colours</label><input id="brandColours" name="Brand colours" placeholder="Blue, white, gold, etc." type="text"/></div>
<div className="field third"><label htmlFor="fonts">Preferred fonts or style</label><input id="fonts" name="Preferred fonts or typography" placeholder="Modern, traditional, bold, script, etc." type="text"/></div>
<div className="field full">
<label htmlFor="brandFiles">Branding files you can supply</label>
<textarea id="brandFiles" name="Branding files available" placeholder="Logo files, brand guidelines, photos of the site, previous signage, etc. Please email these separately if the form does not support uploads."></textarea>
<div className="hint-row">
<span className="hint">For logos, vector files such as AI, EPS, PDF or SVG are preferred. JPG or PNG files are still useful if that is all you have.</span>
<details className="why-details">
<summary>Why this matters</summary>
<div className="why-popover">
<strong>Vector files are best for signs and vehicle graphics.</strong>
                  AI, EPS, SVG and many PDF logo files are usually vector-based, which means they can be enlarged to any size without becoming blurry or pixelated. JPG and PNG files are pixel-based images, so they can lose quality when scaled up for large signage. A vector logo also makes it easier for us to cut vinyl, match colours, separate elements and create clean production-ready artwork.
                </div>
</details>
</div>
</div>
</div>
</section>
<section className="section form-step" data-step-title="6. Site, Access &amp; Installation">
<div className="section-header"><div><h2>6. Site, Access &amp; Installation</h2><p>These help us plan the survey and installation safely and accurately.</p></div><span className="optional-tag">Optional</span></div>
<div className="grid">
<div className="field full"><label htmlFor="siteAccess">Site access notes</label><input id="siteAccess" name="Site access notes" placeholder="Parking, busy road, restricted hours, pedestrian area, height of the sign, etc." type="text"/></div>
<div className="field">
<label htmlFor="workingHeight">Likely to need working at height?</label>
<select id="workingHeight" name="Working at height likely">
<option value="">Please select if known</option>
<option>Yes</option>
<option>No</option>
<option>Not sure</option>
</select>
</div>
<div className="field">
<label htmlFor="permissions">Planning or landlord approval needed?</label>
<select id="permissions" name="Planning or landlord approval needed">
<option value="">Please select if known</option>
<option>Yes</option>
<option>No</option>
<option>Not sure</option>
</select>
</div>
<div className="field"><label htmlFor="completionDate">Preferred completion date</label><input id="completionDate" name="Preferred completion date" placeholder="Specific date or general timeframe" type="text"/></div>
<div className="field"><label htmlFor="budget">Budget range</label><input id="budget" name="Budget range" placeholder="Optional, but useful for recommending a suitable approach" type="text"/></div>
</div>
</section>
<section className="section form-step" data-step-title="7. Style &amp; Anything Else">
<div className="section-header"><div><h2>7. Style &amp; Anything Else</h2><p>Choose any words that describe the look you want, and add anything not covered above.</p></div><span className="optional-tag">Optional</span></div>
<div className="field full">
<label>Preferred style words</label>
<div className="checkbox-grid" data-checkbox-group="Preferred design style">
<label className="check-card"><input type="checkbox" value="Clean"/>Clean</label><label className="check-card"><input type="checkbox" value="Minimal"/>Minimal</label><label className="check-card"><input type="checkbox" value="Modern"/>Modern</label>
<label className="check-card"><input type="checkbox" value="Traditional"/>Traditional</label><label className="check-card"><input type="checkbox" value="Bold"/>Bold</label><label className="check-card"><input type="checkbox" value="Premium"/>Premium</label>
<label className="check-card"><input type="checkbox" value="High visibility"/>High visibility</label><label className="check-card"><input type="checkbox" value="Corporate"/>Corporate</label><label className="check-card"><input type="checkbox" value="Not sure, please advise"/>Not sure</label>
</div>
</div>
<div className="field full" style={{marginTop: "18px"} as React.CSSProperties}><label htmlFor="anythingElse">Additional comments</label><textarea id="anythingElse" name="Additional comments" placeholder="Anything else that may help us design, quote or install your signage."></textarea></div>
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
