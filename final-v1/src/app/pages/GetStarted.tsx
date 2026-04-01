import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { CheckCircle, AlertCircle, ChevronRight, Info, Clock, Edit2 } from 'lucide-react';

type Pathway = 'hosting' | 'harvesting' | '';

interface WizardData {
  // Step 0: Fit
  isOrganization: boolean | null;
  goal: string;
  interestedInRWDI: boolean;
  // Step 1: Pathway
  pathway: Pathway;
  // Step 2: Org Snapshot
  orgName: string;
  location: string;
  website: string;
  contactName: string;
  contactEmail: string;
  orgType: string;
  // Step 3: Collection Snapshot
  collectionTitle: string;
  formats: string[];
  sizeRange: string;
  collectionDescription: string;
  underrepresented: boolean;
  // Step 4: Rights
  cc0Acknowledged: boolean;
  permissionToPublish: string;
  rightsReady: string;
  // Step 5: Digital Readiness
  hasPlatform: string;
  platformName: string;
  hasOaiPmh: string;
  needsHelp: boolean;
  // Step 6: Timeline
  timeline: string;
  contactMethod: string;
  notes: string;
  // Submission copy
  emailCopy: boolean;
}

const emptyData: WizardData = {
  isOrganization: null, goal: '', interestedInRWDI: false,
  pathway: '',
  orgName: '', location: '', website: '', contactName: '', contactEmail: '', orgType: '',
  collectionTitle: '', formats: [], sizeRange: '', collectionDescription: '', underrepresented: false,
  cc0Acknowledged: false, permissionToPublish: '', rightsReady: '',
  hasPlatform: '', platformName: '', hasOaiPmh: '', needsHelp: false,
  timeline: '', contactMethod: '', notes: '',
  emailCopy: false,
};

const STEPS = [
  'Fit & Intent',
  'Choose Pathway',
  'Organization',
  'Collection',
  'Rights & Ownership',
  'Digital Readiness',
  'Timeline & Support',
  'Review & Submit',
];

const FORMAT_OPTIONS = [
  'Photographs', 'Documents / manuscripts', 'Maps', 'Newspapers', 'Books / pamphlets',
  'Audio recordings', 'Video', 'Oral histories', 'Artwork / illustrations', 'Digital-born materials', 'Other',
];

const ORG_TYPES = [
  'Public library', 'Academic library', 'Special library', 'Historical society',
  'Museum', 'Archive', 'Government agency', 'Tribal organization', 'Other nonprofit',
];

// ── Shared UI helpers ─────────────────────────────────────────────────────────

function FieldLabel({ htmlFor, required, children }: { htmlFor?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-[var(--foreground)] mb-2">
      {children}
      {required && <span className="text-[var(--accent-warm)] ml-1" aria-hidden="true">*</span>}
    </label>
  );
}

function TextInput({ id, value, onChange, placeholder, type = 'text', required }: {
  id: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      aria-required={required}
      className="w-full border-2 border-[var(--card-border)] rounded-lg px-4 py-3 text-sm text-[var(--foreground)] bg-white placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--primary)] hover:border-[var(--border-hover)] transition-colors"
    />
  );
}

function SelectInput({ id, value, onChange, options, placeholder, required }: {
  id: string; value: string; onChange: (v: string) => void; options: string[]; placeholder?: string; required?: boolean;
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={e => onChange(e.target.value)}
      required={required}
      aria-required={required}
      className="w-full border-2 border-[var(--card-border)] rounded-lg px-4 py-3 text-sm text-[var(--foreground)] bg-white focus:outline-none focus:border-[var(--primary)] hover:border-[var(--border-hover)] transition-colors appearance-none"
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

function RadioGroup({ name, value, onChange, options }: {
  name: string; value: string; onChange: (v: string) => void;
  options: { value: string; label: string; hint?: string }[];
}) {
  return (
    <fieldset className="space-y-3">
      {options.map(opt => (
        <label
          key={opt.value}
          className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
            value === opt.value ? 'border-[var(--primary)] bg-[var(--primary-light)] shadow-sm' : 'border-[var(--card-border)] hover:border-[var(--border-hover)] hover:bg-[var(--muted)]'
          }`}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="mt-0.5 accent-[var(--primary)]"
          />
          <div>
            <span className="text-sm text-[var(--foreground)] font-medium">{opt.label}</span>
            {opt.hint && <p className="text-xs text-[var(--muted-foreground)] mt-1 leading-relaxed">{opt.hint}</p>}
          </div>
        </label>
      ))}
    </fieldset>
  );
}

function PathwayCard({ id, title, desc, bullets, selected, onSelect }: {
  id: Pathway; title: string; desc: string; bullets: string[]; selected: boolean; onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left border-2 rounded-lg p-6 transition-all focus:outline-2 focus:outline-offset-2 focus:outline-[var(--primary)] ${
        selected ? 'border-[var(--primary)] bg-[var(--primary-light)] shadow-md' : 'border-[var(--card-border)] hover:border-[var(--border-hover)] hover:shadow-sm'
      }`}
      aria-pressed={selected}
    >
      <div className="flex items-start gap-4">
        <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
          selected ? 'border-[var(--primary)] bg-[var(--primary)]' : 'border-[var(--card-border)]'
        }`}>
          {selected && <div className="w-3 h-3 rounded-full bg-white" />}
        </div>
        <div className="flex-1">
          <p className="text-base font-semibold text-[var(--primary)] mb-2">{title}</p>
          <p className="text-sm text-[var(--foreground)] mb-3 leading-relaxed">{desc}</p>
          <ul className="space-y-2">
            {bullets.map(b => (
              <li key={b} className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-warm)] mt-2 flex-shrink-0"></span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </button>
  );
}

// ── Step Components ────────────────────────────────────────────────────────────

function Step0({ data, setData }: { data: WizardData; setData: (d: WizardData) => void }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-3xl text-[var(--primary)] mb-3">Is your organization eligible?</h2>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">Recollection Wisconsin partners with institutions, not individuals.</p>
      </div>

      <div>
        <FieldLabel required>Are you applying on behalf of an organization or institution?</FieldLabel>
        <RadioGroup
          name="isOrg"
          value={data.isOrganization === null ? '' : data.isOrganization ? 'yes' : 'no'}
          onChange={v => setData({ ...data, isOrganization: v === 'yes' })}
          options={[
            { value: 'yes', label: 'Yes — I represent a library, museum, historical society, archive, or similar institution' },
            { value: 'no', label: 'No — I am an individual', hint: 'We recommend connecting with a local cultural heritage institution who may be able to help.' },
          ]}
        />
      </div>

      {data.isOrganization === false && (
        <div className="border-2 border-[var(--warning)] bg-[var(--accent-warm-light)] rounded-lg p-5 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[var(--warning)] flex-shrink-0 mt-0.5" />
          <div className="text-sm text-[var(--foreground)]">
            <p className="font-semibold mb-2">RW partners with institutions, not individuals.</p>
            <p className="leading-relaxed">If you have materials of historical significance, consider reaching out to your county historical society, public library, or local museum — they may be able to help digitize and share your collection through their partnership with RW.</p>
          </div>
        </div>
      )}

      <div>
        <FieldLabel htmlFor="goal">What best describes your goal? <span className="text-[var(--muted-foreground)] font-normal">(optional)</span></FieldLabel>
        <RadioGroup
          name="goal"
          value={data.goal}
          onChange={v => setData({ ...data, goal: v })}
          options={[
            { value: 'share', label: 'Share an existing digitized collection', hint: 'You have materials ready to publish.' },
            { value: 'digitize-start', label: "I'm just getting started digitizing materials", hint: 'You have physical items and are beginning to plan a digitization project.' },
            { value: 'digitize-help', label: 'Get help digitizing undigitized materials', hint: "You have physical items you'd like to scan and share but need support." },
            { value: 'explore', label: "I'm exploring — not sure yet", hint: "That's completely fine. The wizard will guide you." },
          ]}
        />
      </div>

      <label className="flex items-start gap-3 p-4 border-2 border-[var(--card-border)] rounded-lg cursor-pointer hover:border-[var(--border-hover)] hover:bg-[var(--muted)] transition-all">
        <input
          type="checkbox"
          checked={data.interestedInRWDI}
          onChange={e => setData({ ...data, interestedInRWDI: e.target.checked })}
          className="mt-1 accent-[var(--primary)]"
        />
        <div>
          <span className="text-sm text-[var(--foreground)] font-medium">I'd like to learn more about hosting a student intern to assist with digitization, description, and uploading.</span>
          <p className="text-xs text-[var(--muted-foreground)] mt-1.5 leading-relaxed">Placement is limited. A colleague who coordinates this program will follow up.</p>
        </div>
      </label>
    </div>
  );
}

function Step1({ data, setData }: { data: WizardData; setData: (d: WizardData) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-3xl text-[var(--primary)] mb-3">Choose your pathway</h2>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">Select the option that best fits your organization's situation. You can always ask for help deciding.</p>
      </div>

      <div className="space-y-3">
        <PathwayCard
          id="hosting"
          title="Hosting"
          desc="RW hosts your collection on the RW platform."
          bullets={['You don\'t have your own digital platform', 'You have digitized files ready to share', 'RW manages technical infrastructure']}
          selected={data.pathway === 'hosting'}
          onSelect={() => setData({ ...data, pathway: 'hosting' })}
        />
        <PathwayCard
          id="harvesting"
          title="Harvesting"
          desc="RW harvests metadata from your existing platform via OAI-PMH."
          bullets={['You already have a digital repository', 'Your platform supports OAI-PMH', 'Harvesting runs every three months']}
          selected={data.pathway === 'harvesting'}
          onSelect={() => setData({ ...data, pathway: 'harvesting' })}
        />
      </div>

      <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
        Not sure?{' '}
        <Link to="/contribute/contributor-faq" className="text-[var(--primary)] underline hover:text-[var(--primary-hover)] font-medium" target="_blank">Read the FAQ</Link>
        {' '}or select your best guess — we'll confirm fit during our discovery call.
      </p>
    </div>
  );
}

function Step2({ data, setData }: { data: WizardData; setData: (d: WizardData) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-3xl text-[var(--primary)] mb-3">About your organization</h2>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">Tell us about your institution and who we'll be working with.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2">
          <FieldLabel htmlFor="orgName" required>Organization name</FieldLabel>
          <TextInput id="orgName" value={data.orgName} onChange={v => setData({ ...data, orgName: v })} placeholder="e.g. Bayfield County Historical Society" required />
        </div>
        <div>
          <FieldLabel htmlFor="location" required>Location (city or county)</FieldLabel>
          <TextInput id="location" value={data.location} onChange={v => setData({ ...data, location: v })} placeholder="e.g. Ashland County, WI" required />
        </div>
        <div>
          <FieldLabel htmlFor="orgType" required>Organization type</FieldLabel>
          <SelectInput id="orgType" value={data.orgType} onChange={v => setData({ ...data, orgType: v })} options={ORG_TYPES} placeholder="Select type…" required />
        </div>
        <div className="md:col-span-2">
          <FieldLabel htmlFor="website">Website URL <span className="text-[var(--muted-foreground)] font-normal">(optional)</span></FieldLabel>
          <TextInput id="website" type="url" value={data.website} onChange={v => setData({ ...data, website: v })} placeholder="https://…" />
        </div>
        <div>
          <FieldLabel htmlFor="contactName" required>Primary contact name</FieldLabel>
          <TextInput id="contactName" value={data.contactName} onChange={v => setData({ ...data, contactName: v })} placeholder="First and last name" required />
        </div>
        <div>
          <FieldLabel htmlFor="contactEmail" required>Primary contact email</FieldLabel>
          <TextInput id="contactEmail" type="email" value={data.contactEmail} onChange={v => setData({ ...data, contactEmail: v })} placeholder="name@institution.org" required />
        </div>
      </div>
    </div>
  );
}

function Step3({ data, setData }: { data: WizardData; setData: (d: WizardData) => void }) {
  const toggleFormat = (fmt: string) => {
    const next = data.formats.includes(fmt) ? data.formats.filter(f => f !== fmt) : [...data.formats, fmt];
    setData({ ...data, formats: next });
  };
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-3xl text-[var(--primary)] mb-3">About your collection</h2>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">Give us a snapshot of what you'd like to share.</p>
      </div>

      <div>
        <FieldLabel htmlFor="collectionTitle" required>Collection title or theme</FieldLabel>
        <TextInput id="collectionTitle" value={data.collectionTitle} onChange={v => setData({ ...data, collectionTitle: v })} placeholder="e.g. Northwoods Logging Photographs, 1890-1930" required />
      </div>

      <div>
        <FieldLabel required>Material formats <span className="text-[var(--muted-foreground)] font-normal">(select all that apply)</span></FieldLabel>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {FORMAT_OPTIONS.map(fmt => (
            <label key={fmt} className={`flex items-center gap-2 p-3 border-2 rounded-lg cursor-pointer text-sm transition-all ${
              data.formats.includes(fmt) ? 'border-[var(--primary)] bg-[var(--primary-light)] shadow-sm' : 'border-[var(--card-border)] hover:border-[var(--border-hover)] hover:bg-[var(--muted)]'
            }`}>
              <input
                type="checkbox"
                checked={data.formats.includes(fmt)}
                onChange={() => toggleFormat(fmt)}
                className="accent-[var(--primary)]"
              />
              <span className="text-[var(--foreground)]">{fmt}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="sizeRange" required>Approximate collection size</FieldLabel>
        <SelectInput
          id="sizeRange"
          value={data.sizeRange}
          onChange={v => setData({ ...data, sizeRange: v })}
          options={['Under 100 items', '100-500 items', '500-2,000 items', '2,000-10,000 items', 'Over 10,000 items', 'Not sure yet']}
          placeholder="Select a range…"
          required
        />
      </div>

      <div>
        <FieldLabel htmlFor="collectionDescription" required>Brief description</FieldLabel>
        <textarea
          id="collectionDescription"
          value={data.collectionDescription}
          onChange={e => setData({ ...data, collectionDescription: e.target.value })}
          rows={4}
          placeholder="Describe the collection in a few sentences — what it depicts, the time period, geographic focus, and why it matters."
          required
          className="w-full border-2 border-[var(--card-border)] rounded-lg px-4 py-3 text-sm text-[var(--foreground)] bg-white placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--primary)] hover:border-[var(--border-hover)] transition-colors resize-none"
        />
      </div>

      <label className="flex items-start gap-3 p-4 border-2 border-[var(--card-border)] rounded-lg cursor-pointer hover:border-[var(--border-hover)] hover:bg-[var(--muted)] transition-all">
        <input
          type="checkbox"
          checked={data.underrepresented}
          onChange={e => setData({ ...data, underrepresented: e.target.checked })}
          className="mt-1 accent-[var(--primary)]"
        />
        <div>
          <span className="text-sm text-[var(--foreground)] font-medium">This collection documents underrepresented or underserved Wisconsin communities</span>
          <p className="text-xs text-[var(--muted-foreground)] mt-1.5 leading-relaxed">e.g. Indigenous communities, immigrant communities, LGBTQ+ history, communities of color, rural communities. RW prioritizes these collections; we can discuss more how the digital materials and metadata are handled.</p>
        </div>
      </label>
    </div>
  );
}

function Step4({ data, setData }: { data: WizardData; setData: (d: WizardData) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-3xl text-[var(--primary)] mb-3">Rights & ownership</h2>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">Understand how ownership works before you proceed.</p>
      </div>

      {/* Ownership block */}
      <div className="border-2 border-[var(--info)] bg-[var(--primary-light)] rounded-lg p-5">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-[var(--primary)] mb-2">You retain ownership of your materials.</p>
            <p className="text-sm text-[var(--foreground)] leading-relaxed">
              Contributing to Recollection Wisconsin does not transfer copyright or ownership. You grant RW a non-exclusive license to display your materials publicly. You may withdraw from the program at any time.
            </p>
          </div>
        </div>
      </div>

      {/* CC0 checkbox — required */}
      <div>
        <p className="text-sm font-semibold text-[var(--foreground)] mb-3">CC0 Metadata Acknowledgement <span className="text-[var(--accent-warm)]">*</span></p>
        <label className={`flex items-start gap-3 p-5 border-2 rounded-lg cursor-pointer transition-all ${
          data.cc0Acknowledged ? 'border-[var(--accent-sage)] bg-[var(--accent-sage-light)] shadow-sm' : 'border-[var(--card-border)] hover:border-[var(--border-hover)]'
        }`}>
          <input
            type="checkbox"
            checked={data.cc0Acknowledged}
            onChange={e => setData({ ...data, cc0Acknowledged: e.target.checked })}
            required
            aria-required="true"
            className="mt-0.5 accent-[var(--accent-sage)]"
          />
          <span className="text-sm text-[var(--foreground)] leading-relaxed">
            I understand that Recollection Wisconsin publishes the descriptive <strong>metadata records</strong> (title, description, subject tags, dates, etc.) associated with contributed collections as <strong>CC0 (public domain)</strong>. This applies to the metadata record only — not to the original images or documents, which remain under my organization's ownership and copyright.{' '}
            <a href="https://creativecommons.org/public-domain/cc0/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] underline hover:text-[var(--primary-hover)] font-medium">What is CC0?</a>
          </span>
        </label>
      </div>

      <div>
        <FieldLabel required>Does your organization have permission to publish these materials online?</FieldLabel>
        <RadioGroup
          name="permission"
          value={data.permissionToPublish}
          onChange={v => setData({ ...data, permissionToPublish: v })}
          options={[
            { value: 'yes', label: 'Yes — we created or own the materials, or have rights holder permission' },
            { value: 'unsure', label: 'Unsure — we need to assess rights status', hint: "That's OK. A Recollection Wisconsin staff member can help guide your rights assessment." },
            { value: 'no', label: 'No — rights status is complicated', hint: 'We can still discuss options. Select this and add notes in the final step.' },
          ]}
        />
      </div>

      <div>
        <FieldLabel required>How would you describe your rights readiness?</FieldLabel>
        <RadioGroup
          name="rightsReady"
          value={data.rightsReady}
          onChange={v => setData({ ...data, rightsReady: v })}
          options={[
            { value: 'ready', label: 'Ready — we have rights statements or documentation prepared' },
            { value: 'partial', label: 'Partially ready — some items need review' },
            { value: 'unsure', label: 'Unsure — we haven\'t done a formal rights review', hint: 'No problem. We can discuss resources during our discovery call.' },
          ]}
        />
      </div>
    </div>
  );
}

function Step5({ data, setData }: { data: WizardData; setData: (d: WizardData) => void }) {
  const showOai = data.pathway === 'harvesting' || data.hasPlatform === 'yes';
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-3xl text-[var(--primary)] mb-3">Digital readiness</h2>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">Tell us about your current technical setup. "Unsure" is always a valid answer.</p>
      </div>

      <div>
        <FieldLabel required>Does your organization currently use a digital repository or collections platform?</FieldLabel>
        <RadioGroup
          name="hasPlatform"
          value={data.hasPlatform}
          onChange={v => setData({ ...data, hasPlatform: v })}
          options={[
            { value: 'yes', label: 'Yes — we use a platform (CONTENTdm, Omeka, DSpace, etc.)' },
            { value: 'no', label: 'No — we do not currently have a platform' },
            { value: 'unsure', label: 'Unsure' },
          ]}
        />
      </div>

      {data.hasPlatform === 'yes' && (
        <div>
          <FieldLabel htmlFor="platformName">Which platform? <span className="text-[var(--muted-foreground)] font-normal">(optional)</span></FieldLabel>
          <TextInput id="platformName" value={data.platformName} onChange={v => setData({ ...data, platformName: v })} placeholder="e.g. CONTENTdm, Omeka Classic, Islandora…" />
        </div>
      )}

      {showOai && (
        <div>
          <FieldLabel required>Does your platform have an OAI-PMH endpoint?</FieldLabel>
          {data.pathway === 'harvesting' && (
            <div className="border border-neutral-200 bg-neutral-50 p-3 mb-3 flex items-start gap-2">
              <Info className="w-4 h-4 text-neutral-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-neutral-600">Required for Harvesting pathway. If you're unsure, select "Unsure" — we can help assess during our discovery call.</p>
            </div>
          )}
          <RadioGroup
            name="hasOaiPmh"
            value={data.hasOaiPmh}
            onChange={v => setData({ ...data, hasOaiPmh: v })}
            options={[
              { value: 'yes', label: 'Yes — we have a working OAI-PMH endpoint' },
              { value: 'no', label: 'No — our platform does not support OAI-PMH' },
              { value: 'unsure', label: 'Unsure — I need to check', hint: data.pathway === 'harvesting' ? 'If you don\'t have OAI-PMH, we can help assess whether Hosting may be a better fit.' : '' },
            ]}
          />
          {data.pathway === 'harvesting' && data.hasOaiPmh === 'no' && (
            <div className="mt-3 border border-neutral-300 bg-neutral-50 p-4 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-neutral-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-neutral-700">
                OAI-PMH is required for Harvesting. We can help assess your platform's capabilities — or discuss whether <Link to="/contribute/hosting" className="underline hover:text-neutral-900" target="_blank">Hosting</Link> may be a better fit. Continue with your application and we'll work through this together.
              </p>
            </div>
          )}
          {(data.pathway === 'harvesting' && data.hasOaiPmh === 'unsure') && (
            <div className="mt-3 border border-neutral-200 bg-neutral-50 p-4 flex items-start gap-3">
              <Info className="w-4 h-4 text-neutral-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-neutral-600">No problem. A Recollection Wisconsin staff member can help you assess OAI-PMH readiness after you submit.</p>
            </div>
          )}
        </div>
      )}

      <div>
        <FieldLabel>Would you like help with scanning or metadata creation?</FieldLabel>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.needsHelp}
            onChange={e => setData({ ...data, needsHelp: e.target.checked })}
            className="mt-0.5 accent-neutral-800"
          />
          <span className="text-sm text-neutral-800">Yes — we'd like guidance on digitization or metadata standards</span>
        </label>
        {data.needsHelp && (
          <p className="text-xs text-neutral-500 mt-2">
            Check out our <Link to="/resources" className="underline hover:text-neutral-800" target="_blank">Resources library</Link> for guides. We'll also discuss this during your discovery call.
          </p>
        )}
      </div>
    </div>
  );
}

function Step6({ data, setData }: { data: WizardData; setData: (d: WizardData) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-3xl text-[var(--primary)] mb-3">Timeline & support preferences</h2>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">Help us understand your timeline and how best to follow up.</p>
      </div>

      <div>
        <FieldLabel required>When are you hoping to get started?</FieldLabel>
        <RadioGroup
          name="timeline"
          value={data.timeline}
          onChange={v => setData({ ...data, timeline: v })}
          options={[
            { value: 'now', label: 'As soon as possible — we\'re ready now' },
            { value: 'quarter', label: 'Next quarter (within 3–6 months)' },
            { value: 'year', label: 'Within the year, but not urgent' },
            { value: 'exploring', label: 'Just exploring at this stage', hint: 'No pressure — we\'ll follow up with information and answer any questions.' },
          ]}
        />
      </div>

      {data.pathway === 'harvesting' && (
        <div className="border border-neutral-200 bg-neutral-50 p-4 flex items-start gap-3">
          <Clock className="w-4 h-4 text-neutral-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-neutral-700">
            <strong>Harvesting reminder:</strong> RW runs harvests every three months. New items added after an initial harvest may take up to three months to appear in the RW portal and DPLA.
          </p>
        </div>
      )}

      <div>
        <FieldLabel required>Preferred contact method</FieldLabel>
        <RadioGroup
          name="contactMethod"
          value={data.contactMethod}
          onChange={v => setData({ ...data, contactMethod: v })}
          options={[
            { value: 'email', label: 'Email is fine' },
            { value: 'phone', label: 'Phone call preferred' },
            { value: 'video', label: 'Video call (Zoom or Teams)' },
          ]}
        />
      </div>

      <div>
        <FieldLabel htmlFor="notes">Anything else you'd like us to know? <span className="text-neutral-400 font-normal">(optional)</span></FieldLabel>
        <textarea
          id="notes"
          value={data.notes}
          onChange={e => setData({ ...data, notes: e.target.value })}
          rows={4}
          placeholder="Questions, concerns, special circumstances, or anything that didn't fit above…"
          className="w-full border border-neutral-300 px-3 py-2.5 text-sm text-neutral-800 bg-white placeholder:text-neutral-400 focus:outline-2 focus:outline-offset-0 focus:outline-neutral-800 hover:border-neutral-400 transition-colors resize-none"
        />
      </div>
    </div>
  );
}

function ReviewRow({ label, value, onEdit }: { label: string; value: React.ReactNode; onEdit: () => void }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-neutral-100 last:border-0">
      <div className="flex-1">
        <p className="text-xs text-neutral-500 font-mono uppercase tracking-wide mb-0.5">{label}</p>
        <div className="text-sm text-neutral-800">{value || <span className="text-neutral-400 italic">Not provided</span>}</div>
      </div>
      <button
        type="button"
        onClick={onEdit}
        className="flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-800 hover:underline transition-colors flex-shrink-0 mt-1"
        aria-label={`Edit ${label}`}
      >
        <Edit2 className="w-3 h-3" /> Edit
      </button>
    </div>
  );
}

function Step7({ data, goToStep, onSubmit, submitting, onToggleEmailCopy }: { data: WizardData; goToStep: (s: number) => void; onSubmit: () => void; submitting: boolean; onToggleEmailCopy: () => void }) {
  const pathwayLabel = { hosting: 'Hosting', harvesting: 'Harvesting', '': 'Not selected' };
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-3xl text-[var(--primary)] mb-3">Review your submission</h2>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">Check your responses before submitting. Click "Edit" to go back to any section.</p>
      </div>

      {/* Pathway */}
      <div className="border border-neutral-200 p-4">
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">Pathway</p>
        <ReviewRow label="Selected pathway" value={pathwayLabel[data.pathway]} onEdit={() => goToStep(1)} />
      </div>

      {/* Org */}
      <div className="border border-neutral-200 p-4">
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">Organization</p>
        <ReviewRow label="Org name" value={data.orgName} onEdit={() => goToStep(2)} />
        <ReviewRow label="Type" value={data.orgType} onEdit={() => goToStep(2)} />
        <ReviewRow label="Location" value={data.location} onEdit={() => goToStep(2)} />
        <ReviewRow label="Contact" value={data.contactName ? `${data.contactName} — ${data.contactEmail}` : ''} onEdit={() => goToStep(2)} />
        <ReviewRow label="Website" value={data.website} onEdit={() => goToStep(2)} />
      </div>

      {/* Collection */}
      <div className="border border-neutral-200 p-4">
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">Collection</p>
        <ReviewRow label="Title / theme" value={data.collectionTitle} onEdit={() => goToStep(3)} />
        <ReviewRow label="Formats" value={data.formats.length > 0 ? data.formats.join(', ') : ''} onEdit={() => goToStep(3)} />
        <ReviewRow label="Approximate size" value={data.sizeRange} onEdit={() => goToStep(3)} />
        <ReviewRow label="Description" value={data.collectionDescription} onEdit={() => goToStep(3)} />
        <ReviewRow label="Underrepresented communities" value={data.underrepresented ? 'Yes' : 'No'} onEdit={() => goToStep(3)} />
      </div>

      {/* Rights */}
      <div className="border border-neutral-200 p-4">
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">Rights & Ownership</p>
        <ReviewRow label="CC0 metadata acknowledged" value={data.cc0Acknowledged ? 'Yes ✓' : 'Not yet — required'} onEdit={() => goToStep(4)} />
        <ReviewRow label="Permission to publish" value={data.permissionToPublish} onEdit={() => goToStep(4)} />
        <ReviewRow label="Rights readiness" value={data.rightsReady} onEdit={() => goToStep(4)} />
      </div>

      {/* Digital readiness */}
      <div className="border border-neutral-200 p-4">
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">Digital Readiness</p>
        <ReviewRow label="Has platform" value={data.hasPlatform} onEdit={() => goToStep(5)} />
        {data.platformName && <ReviewRow label="Platform name" value={data.platformName} onEdit={() => goToStep(5)} />}
        {(data.pathway === 'harvesting' || data.hasPlatform === 'yes') && (
          <ReviewRow label="OAI-PMH endpoint" value={data.hasOaiPmh} onEdit={() => goToStep(5)} />
        )}
        <ReviewRow label="Needs digitization help" value={data.needsHelp ? 'Yes' : 'No'} onEdit={() => goToStep(5)} />
      </div>

      {/* Timeline */}
      <div className="border border-neutral-200 p-4">
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">Timeline & Support</p>
        <ReviewRow label="Timeline" value={data.timeline} onEdit={() => goToStep(6)} />
        <ReviewRow label="Preferred contact" value={data.contactMethod} onEdit={() => goToStep(6)} />
        <ReviewRow label="Notes" value={data.notes} onEdit={() => goToStep(6)} />
      </div>

      {!data.cc0Acknowledged && (
        <div className="border border-neutral-400 bg-neutral-50 p-4 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-neutral-700 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-neutral-700">
            You must acknowledge the CC0 metadata requirement before submitting.{' '}
            <button type="button" onClick={() => goToStep(4)} className="underline hover:text-neutral-900">Go back to Rights →</button>
          </p>
        </div>
      )}

      {/* Email copy option */}
      <div className="border border-neutral-200 bg-neutral-50 p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.emailCopy}
            onChange={onToggleEmailCopy}
            className="mt-0.5 accent-neutral-800"
          />
          <div>
            <span className="text-sm text-neutral-800">Email me a copy of my completed submission</span>
            <p className="text-xs text-neutral-500 mt-0.5">
              {data.emailCopy
                ? `A copy will be sent to: ${data.contactEmail || '[no email entered yet — return to Step 3]'}`
                : 'Check this to receive a copy at your contact email address.'}
            </p>
          </div>
        </label>
      </div>

      <button
        type="button"
        onClick={onSubmit}
        disabled={!data.cc0Acknowledged || submitting}
        className="w-full bg-neutral-900 text-white py-3.5 text-sm font-medium hover:bg-neutral-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900"
      >
        {submitting ? 'Submitting…' : 'Submit Your Application →'}
      </button>
    </div>
  );
}

// ── Main Wizard Component ─────────────────────────────────────────────────────

export function GetStarted() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialPathway = (searchParams.get('pathway') as Pathway) || '';
  const [step, setStep] = useState(0);
  const [data, setData] = useState<WizardData>({ ...emptyData, pathway: initialPathway });
  const [submitting, setSubmitting] = useState(false);

  // Update pathway if URL param changes
  useEffect(() => {
    if (initialPathway) setData(d => ({ ...d, pathway: initialPathway }));
  }, [initialPathway]);

  const canAdvance = () => {
    if (step === 0) return data.isOrganization === true;
    if (step === 1) return data.pathway !== '';
    if (step === 2) return data.orgName && data.location && data.orgType && data.contactName && data.contactEmail;
    if (step === 3) return data.collectionTitle && data.formats.length > 0 && data.sizeRange && data.collectionDescription;
    if (step === 4) return data.cc0Acknowledged && data.permissionToPublish && data.rightsReady;
    if (step === 5) return data.hasPlatform !== '';
    if (step === 6) return data.timeline && data.contactMethod;
    return true;
  };

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      navigate('/contribute/confirmation', { state: { pathway: data.pathway, orgName: data.orgName, contactEmail: data.contactEmail } });
    }, 1200);
  };

  const progressPct = Math.round((step / (STEPS.length - 1)) * 100);

  return (
    <>
      <Breadcrumb items={[
        { label: 'Contribute', href: '/contribute' },
        { label: 'Get Started' },
      ]} />

      <div className="min-h-screen bg-gradient-to-b from-white to-[var(--muted)]">
        {/* Progress bar */}
        <div className="border-b-2 border-[var(--card-border)] bg-white sticky top-16 z-20 shadow-sm">
          <div className="container mx-auto px-4 md:px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-3">
              <span className="text-xs text-[var(--muted-foreground)] font-mono">
                Step {step + 1} of {STEPS.length}
                <span className="hidden sm:inline">: <strong className="text-[var(--primary)] font-semibold">{STEPS[step]}</strong></span>
              </span>
              <span className="text-xs text-[var(--accent-warm)] font-mono font-semibold">{progressPct}% complete</span>
            </div>
            <p className="text-xs text-[var(--primary)] font-semibold sm:hidden mb-3">{STEPS[step]}</p>
            <div className="h-2 bg-[var(--muted)] rounded-full w-full overflow-hidden">
              <div
                className="h-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-warm)] transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progressPct}%` }}
                role="progressbar"
                aria-valuenow={progressPct}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Wizard progress: ${progressPct}%`}
              />
            </div>
          </div>

          {/* Step list — visible on md+ */}
          <div className="hidden md:block border-t-2 border-[var(--card-border)]">
            <div className="container mx-auto px-4 md:px-6">
              <ol className="flex" aria-label="Wizard steps">
                {STEPS.map((s, i) => (
                  <li key={s} className="flex-1 text-center">
                    <div className={`py-3 text-xs border-b-2 transition-all ${
                      i === step ? 'border-[var(--accent-warm)] text-[var(--primary)] font-semibold' :
                      i < step ? 'border-[var(--accent-sage)] text-[var(--accent-sage)]' :
                      'border-transparent text-[var(--muted-foreground)]'
                    }`} aria-current={i === step ? 'step' : undefined}>
                      <span className="hidden lg:inline">{s}</span>
                      <span className="lg:hidden">{i + 1}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Wizard body */}
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
          <div className="max-w-2xl mx-auto">
            {step === 0 && <Step0 data={data} setData={setData} />}
            {step === 1 && <Step1 data={data} setData={setData} />}
            {step === 2 && <Step2 data={data} setData={setData} />}
            {step === 3 && <Step3 data={data} setData={setData} />}
            {step === 4 && <Step4 data={data} setData={setData} />}
            {step === 5 && <Step5 data={data} setData={setData} />}
            {step === 6 && <Step6 data={data} setData={setData} />}
            {step === 7 && <Step7 data={data} goToStep={setStep} onSubmit={handleSubmit} submitting={submitting} onToggleEmailCopy={() => setData(d => ({ ...d, emailCopy: !d.emailCopy }))} />}

            {/* Navigation */}
            {step < 7 && (
              <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 mt-12 pt-8 border-t-2 border-[var(--card-border)]">
                <button
                  type="button"
                  onClick={() => setStep(s => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="w-full sm:w-auto border-2 border-[var(--card-border)] rounded-lg px-6 py-3 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)] hover:border-[var(--border-hover)] transition-all disabled:opacity-30 disabled:cursor-not-allowed focus:outline-2 focus:outline-offset-2 focus:outline-[var(--primary)]"
                >
                  ← Back
                </button>

                <button
                  type="button"
                  onClick={() => setStep(s => Math.min(7, s + 1))}
                  disabled={!canAdvance()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--accent-warm)] text-white rounded-lg px-8 py-3 text-sm font-semibold hover:bg-[var(--accent-warm-hover)] transition-all shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed focus:outline-2 focus:outline-offset-2 focus:outline-[var(--accent-warm)]"
                >
                  {step === 6 ? 'Review submission' : 'Continue'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Step 0 dead end for non-orgs */}
            {step === 0 && data.isOrganization === false && (
              <div className="mt-8 text-center p-6 bg-[var(--muted)] rounded-lg border-2 border-[var(--card-border)]">
                <p className="text-sm text-[var(--muted-foreground)] mb-4">Want to learn more about Recollection Wisconsin?</p>
                <Link to="/" className="text-sm text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium hover:underline">← Back to homepage</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
