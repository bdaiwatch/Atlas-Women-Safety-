import { ArrowRight, BookOpen, CheckCircle2, ClipboardList, ShieldCheck, Users } from "lucide-react";
import { Link } from "wouter";
import { clubRoles, monthlyClubPlans, schoolToolkit } from "../data/schoolProgramme";

export default function SchoolProgramme() {
  return (
    <>
      <section className="page-intro school-programme-intro">
        <p className="eyebrow">School Deployment Programme</p>
        <h1>Building Safer School Communities in the AI Era</h1>
        <p>
          The Atlas AI Institute School Programme connects foundational AI and digital safety education with a student-led, teacher-supervised Women Safety in AI Era School Club Network. Participating schools follow a structured implementation pathway covering institutional approval, teacher supervision, student learning, practical activities, awareness campaigns and safeguarding.
        </p>
        <div className="school-programme-actions">
          <Link href="/clubs/register?type=school" className="button primary">
            Register a School <ArrowRight size={17} />
          </Link>
          <a href="#six-months" className="button secondary">
            View Six-Month Programme
          </a>
        </div>
      </section>

      <section className="content-wrap school-programme-overview">
        <div>
          <p className="eyebrow">A Scalable Partnership Model</p>
          <h2>Approval First. Learning Next. Safeguarding Always.</h2>
          <p>
            Each participating school follows a structured implementation pathway: (1) school authority approval, (2) appointment of an authorised Teacher Adviser, (3) student course enrolment, (4) establishment of the school club, (5) six months of structured educational activities, and (6) aggregate programme completion and activity reporting.
          </p>
          <p style={{ marginTop: "12px", color: "var(--muted)", fontSize: "14px", lineHeight: 1.65 }}>
            Programme participation provides an educational curriculum and awareness framework; it does not constitute formal statutory accreditation, government endorsement, or guaranteed institutional outcomes.
          </p>
        </div>
        <div className="programme-principles">
          <div>
            <ShieldCheck />
            <span>
              <b>Privacy-First</b>
              No public student profiles, intimate-image collection, or unnecessary sensitive disclosures.
            </span>
          </div>
          <div>
            <Users />
            <span>
              <b>Student-Led, Adult-Supervised</b>
              Students lead educational and awareness activities under an authorised teacher&apos;s supervision.
            </span>
          </div>
          <div>
            <ClipboardList />
            <span>
              <b>Minimum Necessary Data</b>
              Monitor participation and learning outcomes, not sensitive incidents or private student experiences.
            </span>
          </div>
        </div>
      </section>

      <section className="content-wrap school-structure">
        <div className="resource-header resource-header-wide">
          <div>
            <p className="eyebrow">Atlas Women’s AI Safety Club</p>
            <h2>One Approved Club, with Clear Responsibilities</h2>
            <p className="resource-lead">
              The club is an educational and awareness initiative—not a generic technology club, crisis-response inbox, investigation unit, or counselling service. Students coordinate approved awareness activities under adult supervision, while the Teacher Adviser supervises activities and safeguarding. Club members must never investigate abuse allegations or collect intimate images and private incident reports; sensitive concerns must be referred through established school safeguarding procedures.
            </p>
          </div>
          <Users />
        </div>
        <div className="role-grid">
          {clubRoles.map(([title, desc]) => (
            <article className="role-card" key={title}>
              <strong>{title}</strong>
              <p style={{ margin: "6px 0 0", color: "var(--muted)", fontSize: "13px", lineHeight: 1.55 }}>
                {desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="six-months" className="content-wrap six-months">
        <div className="resource-header resource-header-wide">
          <div>
            <p className="eyebrow">Six-Month Club Learning Pathway</p>
            <h2>Learn, Practise, Campaign and Reflect</h2>
            <p className="resource-lead">
              Every month includes one structured learning session, one practical exercise, one awareness campaign, one student-led activity, one short assessment, and one aggregate monthly report.
            </p>
          </div>
          <BookOpen />
        </div>
        <div className="month-grid">
          {monthlyClubPlans.map((plan, index) => (
            <article className="month-card" key={plan.month}>
              <div className="month-number">0{index + 1}</div>
              <p className="eyebrow">{plan.month}</p>
              <h3>{plan.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "13.5px", lineHeight: 1.6, margin: "6px 0 14px" }}>
                {plan.focus}
              </p>
              <dl>
                <div>
                  <dt>Learning session</dt>
                  <dd>{plan.session}</dd>
                </div>
                <div>
                  <dt>Practical exercise</dt>
                  <dd>{plan.exercise}</dd>
                </div>
                <div>
                  <dt>Awareness campaign</dt>
                  <dd>{plan.campaign}</dd>
                </div>
                <div>
                  <dt>Student-led activity</dt>
                  <dd>{plan.studentActivity}</dd>
                </div>
                <div>
                  <dt>Assessment</dt>
                  <dd>{plan.assessment}</dd>
                </div>
                <div>
                  <dt>Monthly report</dt>
                  <dd>{plan.report}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="school-toolkit-band">
        <div>
          <p className="eyebrow">School-Level Programme Toolkit</p>
          <h2>Ready-to-Adapt Educational Materials for Schools and Clubs</h2>
          <p>
            These materials are designed as adaptable educational templates subject to institutional review. Participating schools must customise contact routes, consent wording, and referral procedures to their own institutional safeguarding and child-protection policies before use.
          </p>
        </div>
        <div className="toolkit-list">
          {schoolToolkit.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{item}</span>
              <BookOpen size={15} />
            </div>
          ))}
        </div>
      </section>

      <section className="content-wrap safeguarding-framework">
        <div>
          <p className="eyebrow">Safeguarding & Governance</p>
          <h2>Clear Institutional Boundaries Protect Students and Teachers</h2>
          <p style={{ margin: "10px 0 0", color: "var(--muted)", lineHeight: 1.65, maxWidth: 740 }}>
            School safeguarding policies, applicable child-protection requirements, and institutional procedures take precedence at all times. The programme provides educational literacy and does not deliver emergency intervention, criminal investigation, legal representation, or clinical psychological care.
          </p>
        </div>
        <div className="safeguard-list">
          <p>
            <CheckCircle2 />
            Obtain formal school authority approval before establishing a school club.
          </p>
          <p>
            <CheckCircle2 />
            Appoint an authorised Teacher Adviser to supervise all club activities and safeguarding alignment.
          </p>
          <p>
            <CheckCircle2 />
            Use fictional scenarios and synthetic educational examples; never request, upload, download, or circulate intimate imagery.
          </p>
          <p>
            <CheckCircle2 />
            Never publish identifiable student information, personal disclosures, or private incident records.
          </p>
          <p>
            <CheckCircle2 />
            Teachers and student leaders must not investigate cybercrime or provide clinical counselling.
          </p>
          <p>
            <CheckCircle2 />
            Do not promise confidentiality beyond applicable school safeguarding policies and statutory legal obligations.
          </p>
          <p>
            <CheckCircle2 />
            Establish an appropriate referral pathway to verified official helplines and authorised school counsellors.
          </p>
          <p>
            <CheckCircle2 />
            Escalate safeguarding concerns immediately according to applicable school and statutory child-protection procedures.
          </p>
          <p>
            <CheckCircle2 />
            Monitor programme participation, enrolment, and learning progress strictly through aggregate reporting.
          </p>
          <p>
            <CheckCircle2 />
            Institutional school policies, local child-protection regulations, and student safety mandates take priority at all times.
          </p>
        </div>
      </section>
    </>
  );
}
