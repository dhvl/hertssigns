import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vehicle Livery Design Questionnaire | Herts Signs Group",
  description: "",
};

export default function Page() {
  return (
    <main>
      
<form id="liveryForm" noValidate>
<div className="form-notice">
<span className="icon">i</span>
<div>
<strong>Only four fields are required.</strong>
          Please complete the vehicle make, vehicle model, wheelbase and vehicle colour. All other questions are optional and simply help us give you a better design proposal.
        </div>
</div>
<div aria-hidden="true" className="progress-wrap">
<div className="progress-label">
<span>Step progress</span>
<span id="progressText">Step 1 of 12</span>
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
<p className="brief-strength-message" id="briefStrengthMessage">Complete the required vehicle details to give us the essentials. Adding branding, style and service details will help us create a more accurate design proposal.</p>
</div>
<div className="step-header">
<div className="step-meta">
<div className="step-count" id="stepCount">Step 1 of 12</div>
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
<p>These details help us contact you if we need to clarify anything. These details are only required if you have not already provided them.</p>
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
<section className="section form-step" data-step-title="2. Vehicle Details">
<div className="section-header">
<div>
<h2>2. Vehicle Details</h2>
<p>Please tell us the basic details of the vehicle. These are the required fields.</p>
</div>
<span className="required-tag">Required section</span>
</div>
<div className="grid">
<div className="field third" data-required-field="">
<label htmlFor="vehicleMake">Vehicle make <span className="required-marker">*</span></label>
<input id="vehicleMake" name="Vehicle make" placeholder="Ford, Mercedes, VW, Citroën..." required type="text"/>
<div className="error-message">Please enter the vehicle make.</div>
</div>
<div className="field third" data-required-field="">
<label htmlFor="vehicleModel">Vehicle model <span className="required-marker">*</span></label>
<input id="vehicleModel" name="Vehicle model" placeholder="Transit Custom, Sprinter, Berlingo..." required type="text"/>
<div className="error-message">Please enter the vehicle model.</div>
</div>
<div className="field third" data-required-field="">
<label htmlFor="wheelbase">Wheelbase <span className="required-marker">*</span></label>
<input id="wheelbase" name="Wheelbase" placeholder="SWB, MWB, LWB, L1H1, L2H2, etc." required type="text"/>
<div className="error-message">Please enter the wheelbase or vehicle size.</div>
</div>
<div className="field third"><label htmlFor="vehicleYear">Vehicle year</label><input id="vehicleYear" name="Vehicle year" placeholder="2024, 2025, etc." type="text"/></div>
<div className="field third"><label htmlFor="registration">Registration number</label><input id="registration" name="Registration number" placeholder="If known" type="text"/></div>
<div className="field third" data-required-field="">
<label htmlFor="vehicleColour">Vehicle colour <span className="required-marker">*</span></label>
<input id="vehicleColour" name="Vehicle colour" placeholder="White, black, silver, blue..." required type="text"/>
<div className="error-message">Please enter the vehicle colour.</div>
</div>
<div className="field third">
<label htmlFor="vehicleType">Vehicle type</label>
<select id="vehicleType" name="Vehicle type">
<option value="">Please select if known</option>
<option>Small van</option><option>Medium van</option><option>Large van</option><option>Car</option><option>Pickup</option><option>Luton van</option><option>Box van</option><option>Trailer</option><option>Other</option>
</select>
</div>
<div className="field third"><label htmlFor="numberVehicles">Number of vehicles</label><input id="numberVehicles" name="Number of vehicles" placeholder="1, 2, 5, fleet, etc." type="text"/></div>
<div className="field third">
<label htmlFor="vehicleStatus">Vehicle status</label>
<select id="vehicleStatus" name="Vehicle status">
<option value="">Please select if known</option>
<option>Already in our possession</option><option>On order</option><option>New vehicle</option><option>Used vehicle</option><option>Part of an existing fleet</option><option>Replacement for an existing branded vehicle</option>
</select>
</div>
<div className="field full"><label htmlFor="vehicleNotes">Any extra vehicle information?</label><textarea id="vehicleNotes" name="Extra vehicle information" placeholder="For example, different wheelbase/roof height versions, multiple vehicles, specific trim level, etc."></textarea></div>
</div>
</section>
<section className="section form-step" data-step-title="3. Vehicle Features and Special Circumstances">
<div className="section-header">
<div>
<h2>3. Vehicle Features and Special Circumstances</h2>
<p>These details help us avoid placing important artwork over awkward areas such as handles, locks, cameras, sensors or windows.</p>
</div>
<span className="optional-tag">Optional</span>
</div>
<div className="field full">
<label>Please tick anything that applies</label>
<div className="checkbox-grid" data-checkbox-group="Vehicle features">
<label className="check-card"><input type="checkbox" value="Rear windows"/>Rear windows</label>
<label className="check-card"><input type="checkbox" value="Side windows"/>Side windows</label>
<label className="check-card"><input type="checkbox" value="Sliding side door"/>Sliding side door</label>
<label className="check-card"><input type="checkbox" value="Tailgate"/>Tailgate</label>
<label className="check-card"><input type="checkbox" value="Barn doors"/>Barn doors</label>
<label className="check-card"><input type="checkbox" value="Roof rack"/>Roof rack</label>
<label className="check-card"><input type="checkbox" value="Ladder rack"/>Ladder rack</label>
<label className="check-card"><input type="checkbox" value="Rear ladder"/>Rear ladder</label>
<label className="check-card"><input type="checkbox" value="Tow bar"/>Tow bar</label>
<label className="check-card"><input type="checkbox" value="Parking sensors"/>Parking sensors</label>
<label className="check-card"><input type="checkbox" value="Reversing camera"/>Reversing camera</label>
<label className="check-card"><input type="checkbox" value="Dash camera"/>Dash camera</label>
<label className="check-card"><input type="checkbox" value="Security locks"/>Security locks</label>
<label className="check-card"><input type="checkbox" value="Lock plates"/>Lock plates</label>
<label className="check-card"><input type="checkbox" value="Door handle guards"/>Door handle guards</label>
<label className="check-card"><input type="checkbox" value="Side steps"/>Side steps</label>
<label className="check-card"><input type="checkbox" value="Plastic mouldings"/>Plastic mouldings</label>
<label className="check-card"><input type="checkbox" value="Existing graphics"/>Existing graphics</label>
<label className="check-card"><input type="checkbox" value="Body damage"/>Body damage</label>
<label className="check-card"><input type="checkbox" value="Recently resprayed panels"/>Recently resprayed panels</label>
</div>
</div>
<div className="grid" style={{marginTop: "18px"} as React.CSSProperties}>
<div className="field"><label htmlFor="removeGraphics">Will any existing graphics need to be removed?</label><select id="removeGraphics" name="Existing graphics removal required"><option value="">Please select if known</option><option>Yes</option><option>No</option><option>Not sure</option></select></div>
<div className="field"><label htmlFor="avoidAreas">Areas to avoid</label><input id="avoidAreas" name="Areas to avoid" placeholder="Doors, windows, handles, panels, etc." type="text"/></div>
<div className="field full"><label htmlFor="specialCircumstances">Other notes about the vehicle</label><textarea id="specialCircumstances" name="Other vehicle feature notes" placeholder="Please mention anything unusual that may affect the design or installation."></textarea></div>
</div>
</section>
<section className="section form-step" data-step-title="4. Type of Vehicle Graphics">
<div className="section-header">
<div>
<h2>4. Type of Vehicle Graphics</h2>
<p>Select the option closest to what you are looking for. If you are unsure, leave it blank or select “not sure”.</p>
</div>
<span className="optional-tag">Optional</span>
</div>
<div className="grid">
<div className="field">
<div className="label-row">
<label htmlFor="graphicsType">Graphics type</label>
{/*  PLACEHOLDER: supply img/vehicle-graphics-types-example.jpg, or remove this link  */}
<a className="example-link" href="/img/vehicle-graphics-types-example.jpg" rel="noopener" target="_blank">View examples</a>
</div>
<select id="graphicsType" name="Type of vehicle graphics required">
<option value="">Please select if known</option>
<option>Simple lettering and contact details</option>
<option>Logo and basic business information</option>
<option>Part wrap</option>
<option>Full wrap</option>
<option>Rear-only graphics</option>
<option>Chapter 8 / reflective safety markings</option>
<option>Magnetic signs</option>
<option>Temporary promotional graphics</option>
<option>Not sure, please advise</option>
</select>
</div>
<div className="field"><label htmlFor="budget">Budget range</label><input id="budget" name="Budget range" placeholder="Optional, but useful for recommending a suitable approach" type="text"/></div>
</div>
</section>
<section className="section form-step" data-step-title="5. About Your Business">
<div className="section-header"><div><h2>5. About Your Business</h2><p>A little context helps us create a design that speaks to the right audience.</p></div><span className="optional-tag">Optional</span></div>
<div className="grid">
<div className="field full"><label htmlFor="businessDescription">What does your business do?</label><textarea id="businessDescription" name="Business description" placeholder="Briefly describe your products or services."></textarea></div>
<div className="field"><label htmlFor="mainCustomers">Who are your main customers?</label><input id="mainCustomers" name="Main customers" placeholder="Homeowners, commercial clients, schools, local authorities, etc." type="text"/></div>
<div className="field"><label htmlFor="areaCovered">Area covered</label><input id="areaCovered" name="Area covered" placeholder="Hertfordshire, London, nationwide, etc." type="text"/></div>
<div className="field full"><label htmlFor="businessDifference">What makes your business different?</label><textarea id="businessDifference" name="What makes the business different" placeholder="Family run, fast response, premium service, eco-friendly, established since, specialist knowledge, etc."></textarea></div>
</div>
</section>
<section className="section form-step" data-step-title="6. Branding and Design Direction">
<div className="section-header"><div><h2>6. Branding and Design Direction</h2><p>Tell us what you already have, or what you would like us to help develop.</p></div><span className="optional-tag">Optional</span></div>
<div className="grid">
<div className="field third"><label htmlFor="hasLogo">Do you already have a logo?</label><select id="hasLogo" name="Existing logo"><option value="">Please select if known</option><option>Yes</option><option>No</option><option>Not sure</option></select></div>
<div className="field third"><label htmlFor="brandColours">Brand colours</label><input id="brandColours" name="Brand colours" placeholder="Blue, white, gold, etc." type="text"/></div>
<div className="field third"><label htmlFor="fonts">Preferred fonts or style</label><input id="fonts" name="Preferred fonts or typography" placeholder="Modern, traditional, bold, script, etc." type="text"/></div>
<div className="field full">
<label htmlFor="brandFiles">Branding files you can supply</label>
<textarea id="brandFiles" name="Branding files available" placeholder="Logo files, brand guidelines, business cards, website screenshots, previous designs, etc. Please email these files separately if the form does not support uploads."></textarea>
<div className="hint-row">
<span className="hint">For logos, vector files such as AI, EPS, PDF or SVG are preferred. JPG or PNG files are still useful if that is all you have.</span>
<details className="why-details">
<summary>Why this matters</summary>
<div className="why-popover">
<strong>Vector files are best for signs and vehicle graphics.</strong>
                  AI, EPS, SVG and many PDF logo files are usually vector-based, which means they can be enlarged to any size without becoming blurry or pixelated. JPG and PNG files are pixel-based images, so they can lose quality when scaled up for large vehicle graphics. A vector logo also makes it easier for us to cut vinyl, match colours, separate elements and create clean production-ready artwork.
                </div>
</details>
</div>
</div>
</div>
</section>
<section className="section form-step" data-step-title="7. Information to Include on the Vehicle">
<div className="section-header"><div><h2>7. Information to Include on the Vehicle</h2><p>Please tell us what text and details you would like shown. Less is often more with vehicle graphics.</p></div><span className="optional-tag">Optional</span></div>
<div className="field full">
<label>Please tick any information you may want included</label>
<div className="checkbox-grid" data-checkbox-group="Information to include">
<label className="check-card"><input type="checkbox" value="Business name"/>Business name</label>
<label className="check-card"><input type="checkbox" value="Logo"/>Logo</label>
<label className="check-card"><input type="checkbox" value="Phone number"/>Phone number</label>
<label className="check-card"><input type="checkbox" value="Email address"/>Email address</label>
<label className="check-card"><input type="checkbox" value="Website"/>Website</label>
<label className="check-card"><input type="checkbox" value="Social media handles"/>Social media handles</label>
<label className="check-card"><input type="checkbox" value="QR code"/>QR code</label>
<label className="check-card"><input type="checkbox" value="Main services"/>Main services</label>
<label className="check-card"><input type="checkbox" value="Tagline or slogan"/>Tagline or slogan</label>
<label className="check-card"><input type="checkbox" value="Accreditations"/>Accreditations</label>
<label className="check-card"><input type="checkbox" value="Locations covered"/>Locations covered</label>
<label className="check-card"><input type="checkbox" value="Established since date"/>Established since date</label>
</div>
</div>
<div className="grid" style={{marginTop: "18px"} as React.CSSProperties}>
<div className="field third"><label htmlFor="displayPhone">Phone number to display</label><input id="displayPhone" name="Phone number to display" type="text"/></div>
<div className="field third"><label htmlFor="displayEmail">Email to display</label><input id="displayEmail" name="Email to display" type="text"/></div>
<div className="field third"><label htmlFor="displayWebsite">Website to display</label><input id="displayWebsite" name="Website to display" type="text"/></div>
<div className="field"><label htmlFor="tagline">Tagline or slogan</label><input id="tagline" name="Tagline or slogan" type="text"/></div>
<div className="field"><label htmlFor="accreditations">Accreditations or memberships</label><input id="accreditations" name="Accreditations or memberships" type="text"/></div>
<div className="field full"><label htmlFor="services">Main services to list</label><textarea id="services" name="Main services to list" placeholder="Please keep this brief where possible. Too much text can make the vehicle harder to read."></textarea></div>
</div>
</section>
<section className="section form-step" data-step-title="8. Design Style">
<div className="section-header"><div><h2>8. Design Style</h2><p>Choose any words that describe the style you would like. This is useful if you do not already have established branding.</p></div><span className="optional-tag">Optional</span></div>
<div className="field full">
<label>Preferred style words</label>
<div className="checkbox-grid" data-checkbox-group="Preferred design style">
<label className="check-card"><input type="checkbox" value="Clean"/>Clean</label><label className="check-card"><input type="checkbox" value="Minimal"/>Minimal</label><label className="check-card"><input type="checkbox" value="Premium"/>Premium</label>
<label className="check-card"><input type="checkbox" value="Bold"/>Bold</label><label className="check-card"><input type="checkbox" value="Colourful"/>Colourful</label><label className="check-card"><input type="checkbox" value="Corporate"/>Corporate</label>
<label className="check-card"><input type="checkbox" value="Modern"/>Modern</label><label className="check-card"><input type="checkbox" value="Traditional"/>Traditional</label><label className="check-card"><input type="checkbox" value="Friendly"/>Friendly</label>
<label className="check-card"><input type="checkbox" value="Fun"/>Fun</label><label className="check-card"><input type="checkbox" value="Technical"/>Technical</label><label className="check-card"><input type="checkbox" value="Luxury"/>Luxury</label>
<label className="check-card"><input type="checkbox" value="Industrial"/>Industrial</label><label className="check-card"><input type="checkbox" value="Eco-friendly"/>Eco-friendly</label><label className="check-card"><input type="checkbox" value="High visibility"/>High visibility</label>
<label className="check-card"><input type="checkbox" value="Subtle"/>Subtle</label><label className="check-card"><input type="checkbox" value="Loud and eye-catching"/>Loud and eye-catching</label><label className="check-card"><input type="checkbox" value="Not sure, please advise"/>Not sure</label>
</div>
</div>
<div className="grid" style={{marginTop: "18px"} as React.CSSProperties}>
<div className="field"><label htmlFor="coloursWanted">Colours you would like to use</label><input id="coloursWanted" name="Colours wanted" type="text"/></div>
<div className="field"><label htmlFor="coloursAvoid">Colours you would like to avoid</label><input id="coloursAvoid" name="Colours to avoid" type="text"/></div>
<div className="field full"><label htmlFor="likes">Examples of designs, competitors or brands you like</label><textarea id="likes" name="Design examples liked" placeholder="You can list websites, describe examples, or email us screenshots separately."></textarea></div>
<div className="field full"><label htmlFor="dislikes">Examples of designs you dislike</label><textarea id="dislikes" name="Design examples disliked"></textarea></div>
</div>
</section>
<section className="section form-step" data-step-title="9. Design Priorities">
<div className="section-header"><div><h2>9. Design Priorities</h2><p>Tell us what matters most. This helps us balance readability, impact, cost and coverage.</p></div><span className="optional-tag">Optional</span></div>
<div className="field full">
<label>Please tick all that apply</label>
<div className="checkbox-grid" data-checkbox-group="Design priorities">
<label className="check-card"><input type="checkbox" value="Easy to read from a distance"/>Easy to read from a distance</label>
<label className="check-card"><input type="checkbox" value="Clear contact details"/>Clear contact details</label>
<label className="check-card"><input type="checkbox" value="Strong brand recognition"/>Strong brand recognition</label>
<label className="check-card"><input type="checkbox" value="Premium and professional appearance"/>Premium appearance</label>
<label className="check-card"><input type="checkbox" value="Stand out from competitors"/>Stand out</label>
<label className="check-card"><input type="checkbox" value="Advertise specific services"/>Advertise services</label>
<label className="check-card"><input type="checkbox" value="Match existing company branding"/>Match existing branding</label>
<label className="check-card"><input type="checkbox" value="Works across multiple vehicles"/>Works across a fleet</label>
<label className="check-card"><input type="checkbox" value="Keep costs down"/>Keep costs down</label>
<label className="check-card"><input type="checkbox" value="Cover or disguise parts of the vehicle"/>Cover/disguise areas</label>
<label className="check-card"><input type="checkbox" value="Make the vehicle look more modern"/>Modernise vehicle</label>
</div>
</div>
<div className="field full" style={{marginTop: "18px"} as React.CSSProperties}><label htmlFor="priorityNotes">Additional priority notes</label><textarea id="priorityNotes" name="Additional priority notes"></textarea></div>
</section>
<section className="section form-step" data-step-title="10. Practical Use and Timing">
<div className="section-header"><div><h2>10. Practical Use and Timing</h2><p>These details help us understand where the vehicle will be seen and when it needs to be completed.</p></div><span className="optional-tag">Optional</span></div>
<div className="grid">
<div className="field"><label htmlFor="vehicleUse">How is the vehicle mainly used?</label><input id="vehicleUse" name="How the vehicle is used" placeholder="Local work, site visits, deliveries, mobile service, etc." type="text"/></div>
<div className="field"><label htmlFor="vehicleSeen">Where is the vehicle usually seen?</label><input id="vehicleSeen" name="Where the vehicle is usually seen" placeholder="Roadside, sites, residential areas, events, etc." type="text"/></div>
<div className="field"><label htmlFor="matchingRequired">Does it need to match existing branding?</label><select id="matchingRequired" name="Match existing branding required"><option value="">Please select if known</option><option>Yes</option><option>No</option><option>Not sure</option></select></div>
<div className="field"><label htmlFor="completionDate">Preferred completion date</label><input id="completionDate" name="Preferred completion date" placeholder="Specific date or general timeframe" type="text"/></div>
<div className="field"><label htmlFor="availability">Vehicle availability</label><input id="availability" name="Vehicle availability" placeholder="When can the vehicle be measured or installed?" type="text"/></div>
<div className="field"><label htmlFor="offRoadRestrictions">Restrictions on taking vehicle off the road</label><input id="offRoadRestrictions" name="Off-road restrictions" type="text"/></div>
</div>
</section>
<section className="section form-step" data-step-title="11. Inspiration and AI-Generated Ideas">
<div className="section-header"><div><h2>11. Inspiration and AI-Generated Ideas</h2><p>You are welcome to send us rough ideas, sketches, screenshots or AI-generated examples to help explain the style you like.</p></div><span className="optional-tag">Optional</span></div>
<div className="ai-box">
<h3>Using tools such as ChatGPT or Gemini for design ideas</h3>
<p>If you are unsure what you want, you may find it useful to ask an AI tool for rough design ideas. For example:</p>
<code>Vehicle livery ideas for a modern plumbing company using blue and white branding</code>
<code>Minimalist van graphics for a premium cleaning company on a white Ford Transit Custom</code>
<p>Please note that AI-generated vehicle designs are often not technically accurate. They may show incorrect vehicle proportions, distorted logos, unreadable text, impossible panel layouts or graphics that cannot be applied in the real world. Any ideas supplied will need to be recreated properly by our designers using accurate vehicle templates and production-ready artwork.</p>
</div>
<div className="field full" style={{marginTop: "18px"} as React.CSSProperties}><label htmlFor="inspirationNotes">Inspiration notes</label><textarea id="inspirationNotes" name="Inspiration or AI-generated design notes" placeholder="Describe any ideas you have generated, links you like, or files you intend to send separately."></textarea></div>
</section>
<section className="section form-step" data-step-title="12. Anything Else We Should Know?">
<div className="section-header"><div><h2>12. Anything Else We Should Know?</h2><p>Include any other details, ideas, concerns or requirements that may help us create the right design.</p></div><span className="optional-tag">Optional</span></div>
<div className="field full"><label htmlFor="anythingElse">Additional comments</label><textarea id="anythingElse" name="Additional comments"></textarea></div>
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
