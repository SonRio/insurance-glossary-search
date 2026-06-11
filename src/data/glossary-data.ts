import type { GlossaryTerm } from '../types';

/**
 * Insurance glossary dataset — 57 terms across 6 categories.
 *
 * Definitions are written in plain language (2–3 sentences) and were
 * reviewed individually for domain accuracy. `relatedIds` form a graph of
 * conceptually adjacent terms; integrity (unique ids, no dead references,
 * every category populated) is enforced by glossary-data.test.ts.
 */
export const GLOSSARY: GlossaryTerm[] = [
  // ─── General Insurance ──────────────────────────────────────────────
  {
    id: 'premium',
    name: 'Premium',
    category: 'general',
    definition:
      'The amount a policyholder pays an insurer in exchange for coverage. It can be paid as a lump sum or in installments (monthly, quarterly, annually) and is priced according to the assessed level of risk.',
    shortDefinition: 'What the policyholder pays the insurer for coverage.',
    relatedIds: ['policyholder', 'underwriting', 'sum-insured'],
  },
  {
    id: 'policyholder',
    name: 'Policyholder',
    category: 'general',
    definition:
      'The person or entity that owns an insurance policy and is responsible for paying its premiums. The policyholder is not always the same party as the insured person.',
    shortDefinition: 'The person who owns the policy and pays the premiums.',
    relatedIds: ['insured', 'premium', 'beneficiary'],
  },
  {
    id: 'insured',
    name: 'Insured',
    category: 'general',
    definition:
      'The person or asset whose life, health, or property is protected by the policy. The insured is the party exposed to the covered risk, which may differ from the policyholder who owns the contract.',
    shortDefinition: 'The person or asset the policy actually protects.',
    relatedIds: ['policyholder', 'beneficiary', 'coverage'],
  },
  {
    id: 'policy',
    name: 'Policy',
    category: 'general',
    definition:
      'The legal contract between an insurer and a policyholder. It sets out what is covered, the limits, the exclusions, the premium, and the duties of each party.',
    shortDefinition: 'The contract setting out what the insurer will cover.',
    relatedIds: ['endorsement', 'exclusion', 'premium'],
  },
  {
    id: 'underwriting',
    name: 'Underwriting',
    category: 'general',
    definition:
      'The process by which an insurer evaluates the risk of insuring a person or asset and decides whether to offer coverage and on what terms. Underwriters rely on data, actuarial tables, and guidelines to set the premium.',
    shortDefinition: 'Assessing risk to decide coverage terms and price.',
    relatedIds: ['premium', 'actuarial', 'exclusion'],
  },
  {
    id: 'endorsement',
    name: 'Endorsement',
    category: 'general',
    definition:
      'A written amendment attached to a policy that adds, removes, or changes coverage. Once issued it becomes a legally binding part of the contract.',
    shortDefinition: 'A written change to an existing policy.',
    relatedIds: ['rider', 'policy', 'exclusion'],
  },
  {
    id: 'rider',
    name: 'Rider',
    category: 'general',
    definition:
      'An optional add-on to a base policy that provides extra benefits for an additional premium. Common examples include critical-illness and accidental-death riders.',
    shortDefinition: 'An optional add-on giving extra benefits for more premium.',
    relatedIds: ['endorsement', 'coverage', 'premium'],
  },
  {
    id: 'indemnity',
    name: 'Indemnity',
    category: 'general',
    definition:
      'The principle that insurance should restore the insured to the financial position they held just before a loss — no better, no worse. It underpins most property and casualty contracts.',
    shortDefinition: 'Restoring you to your pre-loss position, no more.',
    relatedIds: ['claim', 'sum-insured', 'subrogation'],
  },
  {
    id: 'insurable-interest',
    name: 'Insurable Interest',
    category: 'general',
    definition:
      'A genuine financial stake in the insured person or property, such that the policyholder would suffer a real loss if a covered event occurred. It must exist for a policy to be valid and stops insurance from becoming a wager.',
    shortDefinition: 'A real financial stake in what is insured.',
    relatedIds: ['policyholder', 'beneficiary', 'indemnity'],
  },
  {
    id: 'broker',
    name: 'Broker',
    category: 'general',
    definition:
      'An intermediary who represents the buyer and compares policies across multiple insurers to find suitable coverage. Brokers are typically paid by commission or fee.',
    shortDefinition: 'An intermediary shopping multiple insurers for the buyer.',
    relatedIds: ['agent', 'premium', 'underwriting'],
  },
  {
    id: 'agent',
    name: 'Agent',
    category: 'general',
    definition:
      'A representative who sells and services policies on behalf of one or more insurers. Unlike a broker, an agent represents the insurer rather than the customer.',
    shortDefinition: 'A representative selling policies on the insurer behalf.',
    relatedIds: ['broker', 'premium', 'policyholder'],
  },

  // ─── Claims ─────────────────────────────────────────────────────────
  {
    id: 'claim',
    name: 'Claim',
    category: 'claims',
    definition:
      'A formal request from the policyholder asking the insurer to pay for a covered loss or event. The insurer reviews it against the policy terms before deciding to pay.',
    shortDefinition: 'A request asking the insurer to pay for a loss.',
    relatedIds: ['adjudication', 'deductible', 'claims-adjuster'],
  },
  {
    id: 'deductible',
    name: 'Deductible',
    category: 'claims',
    definition:
      'The fixed amount the insured must pay out of pocket before the insurer starts paying on a claim. Choosing a higher deductible usually lowers the premium.',
    shortDefinition: 'What you pay out of pocket before the insurer pays.',
    relatedIds: ['copay', 'coinsurance', 'out-of-pocket-maximum'],
  },
  {
    id: 'copay',
    name: 'Copay',
    category: 'claims',
    definition:
      'A fixed amount the insured pays for a covered service — for example, $20 per doctor visit — with the insurer covering the remainder. It is common in health insurance.',
    shortDefinition: 'A fixed fee you pay per covered service.',
    relatedIds: ['deductible', 'coinsurance', 'coverage'],
  },
  {
    id: 'coinsurance',
    name: 'Coinsurance',
    category: 'claims',
    definition:
      'The share of a covered cost the insured pays after the deductible is met, expressed as a percentage — for example, the plan pays 80% and the insured pays 20%.',
    shortDefinition: 'The percentage of costs you share after the deductible.',
    relatedIds: ['deductible', 'copay', 'out-of-pocket-maximum'],
  },
  {
    id: 'adjudication',
    name: 'Adjudication',
    category: 'claims',
    definition:
      "The insurer's process of reviewing a submitted claim to decide whether, and how much, to pay based on the policy terms and supporting documents.",
    shortDefinition: 'Reviewing a claim to decide whether and how much to pay.',
    relatedIds: ['claim', 'claims-adjuster', 'proof-of-loss'],
  },
  {
    id: 'subrogation',
    name: 'Subrogation',
    category: 'claims',
    definition:
      "The insurer's right, after paying a claim, to pursue a third party that caused the loss and recover the amount paid. It stops the insured from being compensated twice for the same loss.",
    shortDefinition: 'The insurer recovering its payout from the at-fault party.',
    relatedIds: ['indemnity', 'claim', 'salvage'],
  },
  {
    id: 'claims-adjuster',
    name: 'Claims Adjuster',
    category: 'claims',
    definition:
      "The professional who investigates a claim, assesses the extent of the insurer's liability, and recommends a settlement amount.",
    shortDefinition: 'The person who investigates a claim and sets the payout.',
    relatedIds: ['claim', 'adjudication', 'proof-of-loss'],
  },
  {
    id: 'proof-of-loss',
    name: 'Proof of Loss',
    category: 'claims',
    definition:
      'A formal, often sworn statement from the insured documenting the details and value of a loss. Insurers require it to process certain claims.',
    shortDefinition: 'A sworn statement documenting a loss and its value.',
    relatedIds: ['claim', 'adjudication', 'claims-adjuster'],
  },
  {
    id: 'out-of-pocket-maximum',
    name: 'Out-of-Pocket Maximum',
    category: 'claims',
    definition:
      'The most an insured will pay for covered services during a policy period. Once it is reached, the insurer pays 100% of further covered costs.',
    shortDefinition: 'The yearly cap on what you pay before full coverage.',
    relatedIds: ['deductible', 'coinsurance', 'copay'],
  },
  {
    id: 'salvage',
    name: 'Salvage',
    category: 'claims',
    definition:
      'The remaining value of damaged property after a loss, which the insurer may take over and sell to offset the claim it paid — for example, a written-off car.',
    shortDefinition: 'Leftover value of damaged property the insurer can sell.',
    relatedIds: ['subrogation', 'indemnity', 'claim'],
  },

  // ─── Coverage ───────────────────────────────────────────────────────
  {
    id: 'sum-insured',
    name: 'Sum Insured',
    category: 'coverage',
    definition:
      'The maximum amount an insurer will pay for a covered loss under a policy. It is also called the coverage limit, or the sum assured in life insurance.',
    shortDefinition: 'The maximum amount the policy will ever pay out.',
    relatedIds: ['sub-limit', 'annual-limit', 'premium'],
  },
  {
    id: 'annual-limit',
    name: 'Annual Limit',
    category: 'coverage',
    definition:
      'The maximum total amount an insurer will pay for covered claims within a single policy year, regardless of how many claims are made.',
    shortDefinition: 'The most the insurer pays across one policy year.',
    relatedIds: ['sum-insured', 'sub-limit', 'coverage'],
  },
  {
    id: 'sub-limit',
    name: 'Sub-limit',
    category: 'coverage',
    definition:
      'A cap within the overall sum insured that restricts payment for a specific category of claim — for example, a room-rent or maternity sub-limit.',
    shortDefinition: 'A smaller cap for one specific type of claim.',
    relatedIds: ['sum-insured', 'annual-limit', 'exclusion'],
  },
  {
    id: 'exclusion',
    name: 'Exclusion',
    category: 'coverage',
    definition:
      'A condition, event, or item the policy specifically does not cover. Reading the exclusions is essential to understanding what protection a policy actually provides.',
    shortDefinition: 'Something the policy specifically will not cover.',
    relatedIds: ['policy', 'waiting-period', 'pre-existing-condition'],
  },
  {
    id: 'waiting-period',
    name: 'Waiting Period',
    category: 'coverage',
    definition:
      'A defined span after a policy starts during which certain benefits are not yet payable. It is common for maternity, pre-existing conditions, or specific treatments.',
    shortDefinition: 'Time after start before certain benefits become payable.',
    relatedIds: ['pre-existing-condition', 'exclusion', 'grace-period'],
  },
  {
    id: 'pre-existing-condition',
    name: 'Pre-existing Condition',
    category: 'coverage',
    definition:
      "A health condition that existed before the policy's start date. Insurers may exclude it, apply a waiting period, or cover it under specific terms.",
    shortDefinition: 'A health problem you already had before coverage began.',
    relatedIds: ['waiting-period', 'exclusion', 'underwriting'],
  },
  {
    id: 'grace-period',
    name: 'Grace Period',
    category: 'coverage',
    definition:
      'A short window after a premium due date during which the policy stays in force even though payment is late. Missing it can cause the policy to lapse.',
    shortDefinition: 'Extra time to pay a late premium before coverage ends.',
    relatedIds: ['premium', 'lapse', 'policy'],
  },
  {
    id: 'lapse',
    name: 'Lapse',
    category: 'coverage',
    definition:
      'The termination of a policy because a premium was not paid within the grace period, which ends the coverage.',
    shortDefinition: 'A policy ending because the premium went unpaid.',
    relatedIds: ['grace-period', 'premium', 'surrender-value'],
  },
  {
    id: 'coverage',
    name: 'Coverage',
    category: 'coverage',
    definition:
      'The scope of protection a policy provides — the risks, events, and losses it will pay for, subject to its limits and exclusions.',
    shortDefinition: 'The set of risks and losses a policy will pay for.',
    relatedIds: ['exclusion', 'sum-insured', 'benefit'],
  },
  {
    id: 'benefit',
    name: 'Benefit',
    category: 'coverage',
    definition:
      'The payment or service an insurer provides to the insured or beneficiary when a covered event occurs.',
    shortDefinition: 'The payment or service paid out when covered.',
    relatedIds: ['coverage', 'beneficiary', 'claim'],
  },
  {
    id: 'network',
    name: 'Network',
    category: 'coverage',
    definition:
      'The group of doctors, hospitals, and providers that have contracted with a health insurer to deliver services at negotiated rates. Staying in-network lowers the insured cost.',
    shortDefinition: 'Contracted providers offering care at lower negotiated rates.',
    relatedIds: ['copay', 'coverage', 'coinsurance'],
  },

  // ─── Life & Health ──────────────────────────────────────────────────
  {
    id: 'beneficiary',
    name: 'Beneficiary',
    category: 'life-health',
    definition:
      'The person or entity named to receive the policy payout — the death benefit — when the insured dies.',
    shortDefinition: 'Who receives the payout when the insured dies.',
    relatedIds: ['insured', 'policyholder', 'benefit'],
  },
  {
    id: 'maturity',
    name: 'Maturity',
    category: 'life-health',
    definition:
      'The point at which a life or endowment policy reaches the end of its term and pays the maturity benefit to a surviving policyholder.',
    shortDefinition: 'When a policy ends and pays the surviving owner.',
    relatedIds: ['surrender-value', 'benefit', 'term-life'],
  },
  {
    id: 'surrender-value',
    name: 'Surrender Value',
    category: 'life-health',
    definition:
      'The cash amount a policyholder receives if they voluntarily end a cash-value life policy before maturity, after applicable deductions.',
    shortDefinition: 'Cash you get back for ending a life policy early.',
    relatedIds: ['maturity', 'cash-value', 'whole-life'],
  },
  {
    id: 'mortality-table',
    name: 'Mortality Table',
    category: 'life-health',
    definition:
      'A statistical table showing the probability of death at each age. Actuaries use it to price life insurance and to set reserves.',
    shortDefinition: 'A table of death probabilities by age for pricing.',
    relatedIds: ['actuarial', 'actuary', 'premium'],
  },
  {
    id: 'actuarial',
    name: 'Actuarial',
    category: 'life-health',
    definition:
      'Relating to the mathematical and statistical methods used to assess risk, set premiums, and calculate reserves in insurance and pensions.',
    shortDefinition: 'The math and statistics used to price insurance risk.',
    relatedIds: ['actuary', 'mortality-table', 'reserve'],
  },
  {
    id: 'actuary',
    name: 'Actuary',
    category: 'life-health',
    definition:
      'A professional who applies mathematics, statistics, and financial theory to measure and price risk for insurers and pension funds.',
    shortDefinition: 'The expert who measures and prices insurance risk.',
    relatedIds: ['actuarial', 'mortality-table', 'underwriting'],
  },
  {
    id: 'term-life',
    name: 'Term Life',
    category: 'life-health',
    definition:
      'Life insurance that covers the insured for a fixed period and pays a death benefit only if they die during that term. It builds no cash value.',
    shortDefinition: 'Life cover for a fixed term, no cash value.',
    relatedIds: ['whole-life', 'beneficiary', 'premium'],
  },
  {
    id: 'whole-life',
    name: 'Whole Life',
    category: 'life-health',
    definition:
      'Permanent life insurance that covers the insured for their entire life and builds cash value over time alongside a guaranteed death benefit.',
    shortDefinition: 'Lifelong life cover that also builds cash value.',
    relatedIds: ['term-life', 'cash-value', 'surrender-value'],
  },
  {
    id: 'cash-value',
    name: 'Cash Value',
    category: 'life-health',
    definition:
      'The savings component of a permanent life policy that grows over time and can be borrowed against or withdrawn by the policyholder.',
    shortDefinition: 'The savings inside a permanent life policy you can tap.',
    relatedIds: ['whole-life', 'surrender-value', 'maturity'],
  },
  {
    id: 'annuity',
    name: 'Annuity',
    category: 'life-health',
    definition:
      'A financial product, often sold by life insurers, that pays a stream of income for a set period or for life. It is commonly used to fund retirement.',
    shortDefinition: 'A product paying steady income, often for retirement.',
    relatedIds: ['maturity', 'beneficiary', 'actuarial'],
  },

  // ─── Reinsurance ────────────────────────────────────────────────────
  {
    id: 'reinsurance',
    name: 'Reinsurance',
    category: 'reinsurance',
    definition:
      'Insurance bought by an insurer from another insurer to transfer part of its risk. It protects the insurer against large or accumulated losses.',
    shortDefinition: 'Insurance that insurers buy to share their own risk.',
    relatedIds: ['ceding-company', 'treaty', 'retrocession'],
  },
  {
    id: 'ceding-company',
    name: 'Ceding Company',
    category: 'reinsurance',
    definition:
      'The primary insurer that transfers — cedes — part of its risk to a reinsurer in exchange for a share of the premium.',
    shortDefinition: 'The insurer that hands off risk to a reinsurer.',
    relatedIds: ['reinsurance', 'retrocession', 'treaty'],
  },
  {
    id: 'retrocession',
    name: 'Retrocession',
    category: 'reinsurance',
    definition:
      'Reinsurance bought by a reinsurer to pass on part of the risk it has assumed to another reinsurer, known as the retrocessionaire.',
    shortDefinition: 'A reinsurer passing some of its risk to another reinsurer.',
    relatedIds: ['reinsurance', 'ceding-company', 'treaty'],
  },
  {
    id: 'treaty',
    name: 'Treaty',
    category: 'reinsurance',
    definition:
      'A reinsurance agreement that automatically covers a whole class or portfolio of policies, rather than being negotiated risk by risk.',
    shortDefinition: 'Reinsurance covering a whole portfolio automatically.',
    relatedIds: ['facultative', 'reinsurance', 'quota-share'],
  },
  {
    id: 'facultative',
    name: 'Facultative',
    category: 'reinsurance',
    definition:
      'Reinsurance arranged individually for a single risk or policy, which the reinsurer may accept or decline case by case.',
    shortDefinition: 'Reinsurance negotiated one risk at a time.',
    relatedIds: ['treaty', 'reinsurance', 'ceding-company'],
  },
  {
    id: 'quota-share',
    name: 'Quota Share',
    category: 'reinsurance',
    definition:
      "A proportional reinsurance treaty in which the reinsurer takes a fixed percentage of every policy's premium and pays the same percentage of its losses.",
    shortDefinition: 'Reinsurer takes a fixed percent of premiums and losses.',
    relatedIds: ['treaty', 'excess-of-loss', 'reinsurance'],
  },
  {
    id: 'excess-of-loss',
    name: 'Excess of Loss',
    category: 'reinsurance',
    definition:
      'A non-proportional reinsurance arrangement where the reinsurer pays only the part of a loss that exceeds an agreed retention threshold.',
    shortDefinition: 'Reinsurer pays only losses above a set threshold.',
    relatedIds: ['quota-share', 'treaty', 'loss-ratio'],
  },
  {
    id: 'loss-ratio',
    name: 'Loss Ratio',
    category: 'reinsurance',
    definition:
      'The ratio of claims paid plus adjustment expenses to premiums earned. It is a key measure of an insurer’s underwriting profitability.',
    shortDefinition: 'Claims paid as a share of premiums earned.',
    relatedIds: ['combined-ratio', 'premium', 'reserve'],
  },

  // ─── Regulatory ─────────────────────────────────────────────────────
  {
    id: 'solvency',
    name: 'Solvency',
    category: 'regulatory',
    definition:
      "An insurer's ability to meet its long-term obligations by holding enough assets to pay future claims. Regulators monitor it closely to protect policyholders.",
    shortDefinition: 'Having enough assets to pay future claims.',
    relatedIds: ['solvency-margin', 'reserve', 'statutory-reporting'],
  },
  {
    id: 'solvency-margin',
    name: 'Solvency Margin',
    category: 'regulatory',
    definition:
      "The amount by which an insurer's assets exceed its liabilities. Regulators require a minimum margin as a buffer against unexpected losses.",
    shortDefinition: 'The required buffer of assets over liabilities.',
    relatedIds: ['solvency', 'reserve', 'statutory-reporting'],
  },
  {
    id: 'reserve',
    name: 'Reserve',
    category: 'regulatory',
    definition:
      'Funds an insurer sets aside to pay for claims that have been incurred but not yet fully settled. Adequate reserving is central to solvency.',
    shortDefinition: 'Money set aside to pay claims still owed.',
    relatedIds: ['ibnr', 'loss-ratio', 'solvency'],
  },
  {
    id: 'ibnr',
    name: 'IBNR',
    category: 'regulatory',
    definition:
      'Short for "Incurred But Not Reported" — a reserve held for claims from events that have already happened but have not yet been reported to the insurer.',
    shortDefinition: "A reserve for claims that happened but aren't reported yet.",
    relatedIds: ['reserve', 'actuarial', 'statutory-reporting'],
  },
  {
    id: 'statutory-reporting',
    name: 'Statutory Reporting',
    category: 'regulatory',
    definition:
      'The financial reports insurers must file with regulators in a prescribed format to demonstrate solvency and regulatory compliance.',
    shortDefinition: 'Mandatory financial reports filed with regulators.',
    relatedIds: ['compliance', 'solvency', 'reserve'],
  },
  {
    id: 'compliance',
    name: 'Compliance',
    category: 'regulatory',
    definition:
      'Adherence to the laws, regulations, and standards that govern how insurers operate, as enforced by industry regulators.',
    shortDefinition: 'Following the laws and rules governing insurers.',
    relatedIds: ['statutory-reporting', 'solvency', 'combined-ratio'],
  },
  {
    id: 'combined-ratio',
    name: 'Combined Ratio',
    category: 'regulatory',
    definition:
      'The sum of an insurer’s loss ratio and expense ratio. A figure below 100% signals an underwriting profit; above 100% signals an underwriting loss.',
    shortDefinition: 'Losses plus expenses versus premiums; under 100% means profit.',
    relatedIds: ['loss-ratio', 'premium', 'solvency'],
  },
];
