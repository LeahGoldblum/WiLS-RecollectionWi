import { ArrowRight, ArrowDown } from 'lucide-react';

export function WireflowDiagram() {
  return (
    <div className="bg-neutral-50 p-8 overflow-x-auto">
      <div className="max-w-[2000px] mx-auto">
        {/* Title Section */}
        <div className="mb-8 border-2 border-neutral-900 bg-white p-6">
          <h2 className="text-2xl font-bold mb-2">Low-Fidelity User Flow Diagram (Wireflow)</h2>
          <p className="text-sm text-neutral-600 mb-4">
            Two distinct user flows addressing accessibility for small contributors and search clarity for educators
          </p>
          <div className="flex gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border-2 border-neutral-900 bg-neutral-100"></div>
              <span>Screen/Page</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border-2 border-neutral-900 bg-neutral-100 rotate-45"></div>
              <span>Decision Point</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border-2 border-neutral-900 bg-yellow-100"></div>
              <span>System Action</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border-2 border-red-600 bg-red-50"></div>
              <span>External System (DPLA)</span>
            </div>
          </div>
        </div>

        {/* Two Flows Side by Side */}
        <div className="grid grid-cols-2 gap-12">
          {/* FLOW 1: EDUCATOR */}
          <div className="space-y-6">
            {/* Flow Header */}
            <div className="border-2 border-neutral-900 bg-blue-100 p-4">
              <h3 className="font-bold text-lg">FLOW 1: EDUCATOR'S "PRE-SEARCH" BRIDGE</h3>
              <p className="text-sm mt-1"><strong>Persona:</strong> Sarah (4th Grade Teacher)</p>
              <p className="text-sm"><strong>Goal:</strong> Find relevant K-4 content despite fuzzy search logic</p>
            </div>

            {/* Step 1: Educator Portal */}
            <div className="relative">
              <div className="border-2 border-neutral-900 bg-white p-6">
                <div className="absolute -top-3 left-4 bg-neutral-900 text-white px-2 py-1 text-xs font-bold">
                  STEP 1: ENTRY
                </div>
                <h4 className="font-bold mb-3 text-sm uppercase">Educator Portal Landing Page</h4>
                <div className="border border-neutral-400 p-4 space-y-3">
                  <div className="border border-neutral-400 p-2 text-xs">
                    <p className="font-bold">[ HEADER: "Educator Resources" ]</p>
                  </div>
                  <div className="border border-neutral-400 p-3 space-y-2">
                    <p className="text-xs font-bold">Quick Filters (NEW FEATURE):</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="border border-neutral-900 bg-neutral-50 p-2 text-xs text-center">
                        Grade: K-4
                      </div>
                      <div className="border border-neutral-900 bg-neutral-50 p-2 text-xs text-center">
                        Grade: 5-8
                      </div>
                      <div className="border border-neutral-900 bg-neutral-50 p-2 text-xs text-center">
                        Topic: Fur Trade
                      </div>
                      <div className="border border-neutral-900 bg-neutral-50 p-2 text-xs text-center">
                        Topic: Mining
                      </div>
                    </div>
                  </div>
                  <div className="border border-neutral-400 p-2">
                    <input
                      type="text"
                      placeholder="Search for resources..."
                      className="w-full text-xs border border-neutral-400 p-1"
                      readOnly
                    />
                  </div>
                </div>
                <div className="mt-3 text-xs bg-neutral-100 p-2 border border-neutral-400">
                  <strong>Note:</strong> Curated list reduces cognitive load
                </div>
              </div>
              {/* Arrow Down */}
              <div className="flex justify-center py-3">
                <ArrowDown className="text-neutral-900" size={32} />
              </div>
            </div>

            {/* Step 2: User Action */}
            <div className="relative">
              <div className="border-2 border-neutral-900 bg-white p-6">
                <div className="absolute -top-3 left-4 bg-neutral-900 text-white px-2 py-1 text-xs font-bold">
                  STEP 2: ACTION
                </div>
                <h4 className="font-bold mb-3 text-sm uppercase">User Selection</h4>
                <div className="border border-neutral-400 p-4">
                  <p className="text-xs mb-2">User selects:</p>
                  <div className="space-y-2">
                    <div className="border-2 border-neutral-900 bg-blue-50 p-2 text-xs font-bold">
                      ✓ Grade Level: K-4
                    </div>
                    <div className="border border-neutral-400 bg-white p-2 text-xs">
                      Topic: Fur Trade
                    </div>
                  </div>
                </div>
              </div>
              {/* Arrow Down */}
              <div className="flex justify-center py-3">
                <ArrowDown className="text-neutral-900" size={32} />
              </div>
            </div>

            {/* Step 3: Intervention (Decision Point) */}
            <div className="relative">
              <div className="relative border-2 border-neutral-900 bg-white p-6">
                <div className="absolute -top-3 left-4 bg-neutral-900 text-white px-2 py-1 text-xs font-bold">
                  STEP 3: INTERVENTION
                </div>
                <h4 className="font-bold mb-3 text-sm uppercase">User Types "Native American"</h4>
                <div className="border border-neutral-400 p-4">
                  <div className="border-2 border-neutral-900 bg-neutral-50 p-2 text-xs mb-3">
                    Search: "Native American" ▸
                  </div>
                  <div className="w-16 h-16 border-2 border-neutral-900 bg-neutral-100 rotate-45 mx-auto my-4"></div>
                  <p className="text-xs text-center font-bold">SYSTEM DECISION</p>
                </div>
              </div>
              {/* Arrow Down */}
              <div className="flex justify-center py-3">
                <ArrowDown className="text-neutral-900" size={32} />
              </div>
            </div>

            {/* System Action: Modal */}
            <div className="relative">
              <div className="border-2 border-neutral-900 bg-yellow-100 p-6">
                <div className="absolute -top-3 left-4 bg-yellow-600 text-white px-2 py-1 text-xs font-bold">
                  SYSTEM ACTION
                </div>
                <h4 className="font-bold mb-3 text-sm uppercase">"Did You Mean?" Modal</h4>
                <div className="border-2 border-neutral-900 bg-white p-4">
                  <p className="text-xs font-bold mb-3">💡 SEARCH TIP:</p>
                  <p className="text-xs mb-3">For better results, try these synonyms:</p>
                  <div className="space-y-2">
                    <div className="border-2 border-neutral-900 bg-neutral-50 p-2 text-xs text-center hover:bg-neutral-900 hover:text-white cursor-pointer">
                      → "First Nations"
                    </div>
                    <div className="border-2 border-neutral-900 bg-neutral-50 p-2 text-xs text-center hover:bg-neutral-900 hover:text-white cursor-pointer">
                      → "Ho-Chunk"
                    </div>
                    <div className="border-2 border-neutral-900 bg-neutral-50 p-2 text-xs text-center hover:bg-neutral-900 hover:text-white cursor-pointer">
                      → "Indigenous Peoples"
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-xs bg-yellow-50 p-2 border border-yellow-600">
                  <strong>Pre-Search Guidance:</strong> Synonym awareness prevents poor results
                </div>
              </div>
              {/* Arrow Down */}
              <div className="flex justify-center py-3">
                <ArrowDown className="text-neutral-900" size={32} />
              </div>
            </div>

            {/* Step 4: Handoff */}
            <div className="relative">
              <div className="border-2 border-neutral-900 bg-white p-6">
                <div className="absolute -top-3 left-4 bg-neutral-900 text-white px-2 py-1 text-xs font-bold">
                  STEP 4: HANDOFF
                </div>
                <h4 className="font-bold mb-3 text-sm uppercase">User Clicks "Search"</h4>
                <div className="border border-neutral-400 p-4">
                  <div className="border-2 border-neutral-900 bg-neutral-900 text-white p-3 text-xs text-center font-bold">
                    [ SEARCH BUTTON ]
                  </div>
                </div>
              </div>
              {/* Arrow Down */}
              <div className="flex justify-center py-3">
                <ArrowDown className="text-neutral-900" size={32} strokeWidth={3} />
              </div>
            </div>

            {/* External System */}
            <div className="relative">
              <div className="border-4 border-red-600 bg-red-50 p-6">
                <div className="absolute -top-3 left-4 bg-red-600 text-white px-2 py-1 text-xs font-bold">
                  ⚠️ EXTERNAL SYSTEM (DPLA)
                </div>
                <h4 className="font-bold mb-3 text-sm uppercase">DPLA Search Results Page</h4>
                <div className="border-2 border-red-600 bg-white p-4">
                  <p className="text-xs mb-2 font-bold">System opens new tab with optimized query:</p>
                  <div className="bg-neutral-100 p-2 text-xs font-mono border border-neutral-400">
                    dpla.org/search?q=Ho-Chunk&grade=K-4
                  </div>
                </div>
                <div className="mt-3 text-xs bg-red-100 p-2 border-2 border-red-600">
                  <strong>CONSTRAINT:</strong> This page cannot be modified. All UX improvements happen BEFORE handoff.
                </div>
              </div>
            </div>

            {/* Success State */}
            <div className="relative">
              <div className="border-2 border-green-600 bg-green-50 p-6">
                <div className="absolute -top-3 left-4 bg-green-600 text-white px-2 py-1 text-xs font-bold">
                  ✓ SUCCESS STATE
                </div>
                <h4 className="font-bold mb-3 text-sm uppercase">User Views Relevant Results</h4>
                <div className="text-xs space-y-2">
                  <p>✓ Search term optimized before leaving site</p>
                  <p>✓ Grade-level filter applied</p>
                  <p>✓ Results quality improved via pre-search guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* FLOW 2: CONTRIBUTOR */}
          <div className="space-y-6">
            {/* Flow Header */}
            <div className="border-2 border-neutral-900 bg-purple-100 p-4">
              <h3 className="font-bold text-lg">FLOW 2: CONTRIBUTOR'S "WIZARD" ONBOARDING</h3>
              <p className="text-sm mt-1"><strong>Persona:</strong> Joseph (Small Cultural Org)</p>
              <p className="text-sm"><strong>Goal:</strong> Simplified intake process to reduce ambiguity</p>
            </div>

            {/* Step 1: Entry */}
            <div className="relative">
              <div className="border-2 border-neutral-900 bg-white p-6">
                <div className="absolute -top-3 left-4 bg-neutral-900 text-white px-2 py-1 text-xs font-bold">
                  STEP 1: ENTRY
                </div>
                <h4 className="font-bold mb-3 text-sm uppercase">Homepage</h4>
                <div className="border border-neutral-400 p-4 space-y-3">
                  <div className="border border-neutral-400 p-2 text-xs">
                    <p className="font-bold">[ NAVIGATION BAR ]</p>
                  </div>
                  <div className="border-2 border-neutral-900 bg-purple-50 p-3 text-center">
                    <p className="text-xs font-bold">→ "BECOME A PARTNER" CTA ←</p>
                  </div>
                  <div className="border border-neutral-400 p-4 text-xs text-center">
                    [ Hero Content ]
                  </div>
                </div>
              </div>
              {/* Arrow Down */}
              <div className="flex justify-center py-3">
                <ArrowDown className="text-neutral-900" size={32} />
              </div>
            </div>

            {/* Progress Bar Component */}
            <div className="border-2 border-neutral-900 bg-blue-50 p-4">
              <p className="text-xs font-bold mb-2 uppercase">System Status Indicator:</p>
              <div className="border-2 border-neutral-900 bg-white p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 border-2 border-neutral-900 bg-neutral-900 text-white flex items-center justify-center text-xs font-bold">1</div>
                  <div className="flex-1 h-1 bg-neutral-300 mx-1"></div>
                  <div className="w-8 h-8 border-2 border-neutral-900 bg-white flex items-center justify-center text-xs font-bold">2</div>
                  <div className="flex-1 h-1 bg-neutral-300 mx-1"></div>
                  <div className="w-8 h-8 border-2 border-neutral-900 bg-white flex items-center justify-center text-xs font-bold">3</div>
                  <div className="flex-1 h-1 bg-neutral-300 mx-1"></div>
                  <div className="w-8 h-8 border-2 border-neutral-900 bg-white flex items-center justify-center text-xs font-bold">4</div>
                </div>
                <div className="text-xs flex justify-between">
                  <span className="font-bold">Type</span>
                  <span>Needs</span>
                  <span>Resources</span>
                  <span>Commit</span>
                </div>
              </div>
              <p className="text-xs mt-2 bg-blue-100 p-2 border border-blue-600">
                <strong>Accessibility:</strong> Persistent progress indicator reduces cognitive load
              </p>
            </div>

            {/* Step 2: Wizard Screen 1 */}
            <div className="relative">
              <div className="border-2 border-neutral-900 bg-white p-6">
                <div className="absolute -top-3 left-4 bg-neutral-900 text-white px-2 py-1 text-xs font-bold">
                  STEP 2: WIZARD - SCREEN 1
                </div>
                <h4 className="font-bold mb-3 text-sm uppercase">Organization Type</h4>
                <div className="border border-neutral-400 p-4 space-y-2">
                  <p className="text-xs font-bold mb-2">Select your organization type:</p>
                  <div className="border-2 border-neutral-900 bg-neutral-50 p-2 text-xs">
                    ○ Tribal Organization
                  </div>
                  <div className="border-2 border-neutral-900 bg-purple-50 p-2 text-xs font-bold">
                    ● Community Nonprofit
                  </div>
                  <div className="border-2 border-neutral-900 bg-neutral-50 p-2 text-xs">
                    ○ Individual Contributor
                  </div>
                </div>
              </div>
              {/* Arrow Down */}
              <div className="flex justify-center py-3">
                <ArrowDown className="text-neutral-900" size={32} />
              </div>
            </div>

            {/* Step 3: Wizard Screen 2 - Decision Node */}
            <div className="relative">
              <div className="border-2 border-neutral-900 bg-white p-6">
                <div className="absolute -top-3 left-4 bg-neutral-900 text-white px-2 py-1 text-xs font-bold">
                  STEP 3: WIZARD - SCREEN 2 (DECISION NODE)
                </div>
                <h4 className="font-bold mb-3 text-sm uppercase">Needs Assessment</h4>
                <div className="border border-neutral-400 p-4">
                  <p className="text-xs font-bold mb-3">What support do you need?</p>
                  <div className="space-y-2 mb-4">
                    <div className="border-2 border-neutral-900 bg-neutral-50 p-2 text-xs">
                      ○ Digitization Equipment
                    </div>
                    <div className="border-2 border-neutral-900 bg-neutral-50 p-2 text-xs">
                      ○ Metadata Training
                    </div>
                  </div>
                  <div className="w-20 h-20 border-2 border-neutral-900 bg-yellow-100 rotate-45 mx-auto my-4 flex items-center justify-center">
                    <span className="text-xs font-bold -rotate-45">BRANCH</span>
                  </div>
                </div>
              </div>
              
              {/* Branching Arrows */}
              <div className="flex justify-center gap-12 py-3">
                <div className="flex flex-col items-center">
                  <ArrowDown className="text-neutral-900" size={24} />
                  <span className="text-xs font-bold mt-1">Path A</span>
                </div>
                <div className="flex flex-col items-center">
                  <ArrowDown className="text-neutral-900" size={24} />
                  <span className="text-xs font-bold mt-1">Path B</span>
                </div>
              </div>
            </div>

            {/* Branching Outcomes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-neutral-900 bg-orange-50 p-4">
                <p className="text-xs font-bold mb-2 uppercase">Path A: Digitization</p>
                <div className="text-xs space-y-1">
                  <p>→ Continue to Screen 3</p>
                  <p>→ Then: Consultation Request Form</p>
                </div>
              </div>
              <div className="border-2 border-neutral-900 bg-green-50 p-4">
                <p className="text-xs font-bold mb-2 uppercase">Path B: Metadata</p>
                <div className="text-xs space-y-1">
                  <p>→ Continue to Screen 3</p>
                  <p>→ Then: Upload Guide</p>
                </div>
              </div>
            </div>

            {/* Convergence Arrow */}
            <div className="flex justify-center py-2">
              <ArrowDown className="text-neutral-900" size={24} />
            </div>

            {/* Step 4: Wizard Screen 3 */}
            <div className="relative">
              <div className="border-2 border-neutral-900 bg-white p-6">
                <div className="absolute -top-3 left-4 bg-neutral-900 text-white px-2 py-1 text-xs font-bold">
                  STEP 4: WIZARD - SCREEN 3
                </div>
                <h4 className="font-bold mb-3 text-sm uppercase">The Commitment</h4>
                <div className="border border-neutral-400 p-4">
                  <p className="text-xs font-bold mb-3">Resource Assessment:</p>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs mb-1">Collection Size:</p>
                      <div className="border border-neutral-400 bg-neutral-50 p-1 text-xs">
                        [ Dropdown: 1-50, 51-200, 200+ items ]
                      </div>
                    </div>
                    <div>
                      <p className="text-xs mb-1">Primary Subject:</p>
                      <div className="border border-neutral-400 bg-neutral-50 p-1 text-xs">
                        [ Text Input ]
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-neutral-900 bg-yellow-50 p-3">
                    <p className="text-xs font-bold mb-2">📅 Bi-Weekly Check-in Requirement:</p>
                    <div className="border border-neutral-400 bg-white p-2 mb-2">
                      <div className="grid grid-cols-7 gap-1 text-xs text-center">
                        <div className="border border-neutral-300 p-1">S</div>
                        <div className="border border-neutral-300 p-1">M</div>
                        <div className="border border-neutral-300 bg-blue-100 p-1 font-bold">T</div>
                        <div className="border border-neutral-300 p-1">W</div>
                        <div className="border border-neutral-300 p-1">T</div>
                        <div className="border border-neutral-300 p-1">F</div>
                        <div className="border border-neutral-300 p-1">S</div>
                      </div>
                    </div>
                    <p className="text-xs">1 hour Microsoft Teams sessions</p>
                  </div>
                </div>
                <div className="mt-3 text-xs bg-neutral-100 p-2 border border-neutral-400">
                  <strong>Visual Cue:</strong> Timeline graphic sets clear expectations
                </div>
              </div>
              {/* Arrow Down */}
              <div className="flex justify-center py-3">
                <ArrowDown className="text-neutral-900" size={32} />
              </div>
            </div>

            {/* Step 5: Success Screen */}
            <div className="relative">
              <div className="border-2 border-green-600 bg-green-50 p-6">
                <div className="absolute -top-3 left-4 bg-green-600 text-white px-2 py-1 text-xs font-bold">
                  STEP 5: OUTCOME
                </div>
                <h4 className="font-bold mb-3 text-sm uppercase">Success Screen</h4>
                <div className="border-2 border-neutral-900 bg-white p-4">
                  <div className="w-12 h-12 border-2 border-neutral-900 bg-green-200 rounded-full mx-auto mb-3 flex items-center justify-center text-xl">
                    ✓
                  </div>
                  <p className="text-xs text-center font-bold mb-2">REQUEST SUBMITTED</p>
                  <div className="bg-neutral-100 border border-neutral-400 p-2 text-xs">
                    <p className="font-bold mb-1">Next Steps:</p>
                    <p>• WiLS staff notified via email</p>
                    <p>• You'll receive confirmation within 48hrs</p>
                    <p>• Calendar invite for first check-in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* System Action Note */}
            <div className="border-2 border-neutral-900 bg-yellow-100 p-4">
              <p className="text-xs font-bold mb-1 uppercase">System Action Triggered:</p>
              <p className="text-xs">→ Email sent to WiLS staff with submission details</p>
              <p className="text-xs">→ User record created in partner database</p>
              <p className="text-xs">→ Confirmation email sent to contributor</p>
            </div>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="mt-12 border-2 border-neutral-900 bg-white p-6">
          <h3 className="font-bold mb-4">DESIGN RATIONALE & CONSTRAINTS</h3>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-bold mb-2">Flow 1 Key Decisions:</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li><strong>Pre-Search Guidance:</strong> Addresses DPLA constraint by optimizing query before handoff</li>
                <li><strong>Synonym Awareness:</strong> Reduces failed searches due to terminology mismatch</li>
                <li><strong>Curated Filters:</strong> K-4 grade level and topic shortcuts reduce cognitive load</li>
                <li><strong>External System Handoff:</strong> Clearly marked to acknowledge design boundary</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2">Flow 2 Key Decisions:</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li><strong>Wizard Pattern:</strong> Step-by-step reduces ambiguity for small organizations</li>
                <li><strong>Progress Indicator:</strong> Persistent status bar improves accessibility (WCAG)</li>
                <li><strong>Decision Branching:</strong> Needs assessment creates personalized pathways</li>
                <li><strong>Visual Timeline:</strong> Commitment screen sets realistic expectations upfront</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 border-t-2 border-neutral-900 pt-4">
            <p className="text-xs text-neutral-600">
              <strong>Methodology:</strong> User flows based on persona research (Sarah: Educator, Joseph: Contributor). 
              Acknowledges technical constraint (DPLA search) by focusing UX improvements on controllable touchpoints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
