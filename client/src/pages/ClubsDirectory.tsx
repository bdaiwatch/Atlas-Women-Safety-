import {
  ArrowRight,
  BadgeCheck,
  Building2,
  GraduationCap,
  MapPin,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { Link } from "wouter";
import { trpc } from "../lib/trpc";
import "../clubsDirectory.css";

const joinPathways = [
  {
    type: "school",
    eyebrow: "Schools · Primary & Secondary",
    title: "Establish a School Digital Safety Club",
    titleBn: "স্কুল ডিজিটাল সেফটি ক্লাব প্রতিষ্ঠা করুন",
    description:
      "Bring structured digital safety and AI awareness education to your school through an Atlas AI Institute Women Safety in AI Era club. Schools can nominate a teacher adviser and safeguarding focal point to support responsible student participation, student awareness activities, and institutional registration verification.",
    cta: "Register a School",
    href: "/clubs/register?type=school",
    icon: Building2,
  },
  {
    type: "college",
    eyebrow: "Colleges · Higher Secondary & University",
    title: "Launch a College Campus Chapter",
    titleBn: "কলেজ ক্যাম্পাস চ্যাপ্টার চালু করুন",
    description:
      "Establish a campus-based initiative that brings students, faculty coordinators, and peer mentors together to promote AI literacy, digital rights, online safety, and responsible technology awareness through peer-led workshops and institutional verification at the college or university level.",
    cta: "Register a College",
    href: "/clubs/register?type=college",
    icon: GraduationCap,
  },
  {
    type: "individual",
    eyebrow: "Individuals · Learners, Educators & Volunteers",
    title: "Join as an Individual Member",
    titleBn: "ব্যক্তিগত সদস্য হিসেবে যোগ দিন",
    description:
      "Participate independently as a learner, educator, parent, or community volunteer. Access learning opportunities, educational resources, and community initiatives while supporting safer digital spaces for women and girls, with responsible participation without claiming to represent an official institutional chapter.",
    cta: "Register as Individual",
    href: "/clubs/register?type=individual",
    icon: UserCheck,
  },
] as const;

export default function ClubsDirectory() {
  const {
    data: clubs = [],
    isLoading,
    isError,
  } = trpc.clubsDirectory.list.useQuery();

  return (
    <>
      <section className="page-intro clubs-directory-intro">
        <p className="eyebrow">Join Us · Atlas AI Institute</p>
        <h1>Join the Women Safety in AI Era Initiative</h1>
        <p>
          Become part of a growing educational and community initiative advancing women&apos;s digital safety, AI literacy, and responsible technology awareness through Atlas AI Institute. We encourage educational institutions, students, faculty, educators, parents, and community advocates to participate through our dedicated registration pathways.
        </p>
        <p className="bn-line">
          স্কুল, কলেজ অথবা ব্যক্তিগত সদস্য হিসেবে—Atlas AI Institute-এর Women Safety in AI Era উদ্যোগে যুক্ত হয়ে ডিজিটাল নিরাপত্তা ও AI সচেতনতা তৈরিতে অংশ নিন।
        </p>
      </section>

      <section
        className="join-pathways content-wrap"
        aria-labelledby="join-pathways-title"
      >
        <div className="clubs-directory-heading">
          <div>
            <p className="eyebrow">Three Registration Pathways · নিবন্ধনের ৩টি পথ</p>
            <h2 id="join-pathways-title">Choose your registration pathway</h2>
          </div>
        </div>

        <div className="join-pathway-grid">
          {joinPathways.map((item) => {
            const Icon = item.icon;
            return (
              <article className="join-pathway-card" key={item.type}>
                <div className="join-pathway-head">
                  <span className="join-pathway-icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="join-pathway-eyebrow">{item.eyebrow}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="join-pathway-bn">{item.titleBn}</p>
                <p className="join-pathway-desc">{item.description}</p>
                <Link href={item.href} className="button primary join-pathway-cta">
                  {item.cta} <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="clubs-directory content-wrap"
        aria-labelledby="clubs-directory-title"
      >
        <div className="clubs-directory-heading">
          <div>
            <p className="eyebrow">Institutional Directory · প্রাতিষ্ঠানিক ডিরেক্টরি</p>
            <h2 id="clubs-directory-title">Verified School &amp; College Chapters</h2>
            <p style={{ margin: "8px 0 0", color: "#525a6f", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Explore participating educational institutions whose registrations have been reviewed and whose chapters have been confirmed as active by Atlas AI Institute.
            </p>
          </div>
          {!isLoading && !isError && (
            <span className="clubs-directory-count">
              {clubs.length} {clubs.length === 1 ? "chapter" : "chapters"}
            </span>
          )}
        </div>

        {isLoading ? (
          <div className="clubs-directory-state" role="status">
            Loading verified chapters…
          </div>
        ) : isError ? (
          <div className="clubs-directory-state is-error" role="alert">
            <ShieldCheck aria-hidden="true" />
            <div>
              <b>Directory temporarily unavailable</b>
              <p>Please try again later.</p>
            </div>
          </div>
        ) : clubs.length === 0 ? (
          <div className="clubs-directory-state">
            <ShieldCheck aria-hidden="true" />
            <div>
              <b>No Verified Chapters Listed Yet</b>
              <p>
                School and college chapters will appear in this directory after institutional verification and activation.
              </p>
              <p className="bn-line">
                প্রাতিষ্ঠানিক পর্যালোচনা, যাচাইকরণ এবং সক্রিয়করণ সম্পন্ন হওয়ার পর স্কুল ও কলেজ চ্যাপ্টারগুলো এখানে প্রদর্শিত হবে।
              </p>
              <div className="empty-register-links">
                <Link href="/clubs/register?type=school" className="text-link">
                  Establish a School Digital Safety Club <ArrowRight size={15} />
                </Link>
                <Link href="/clubs/register?type=college" className="text-link">
                  Launch a College Campus Chapter <ArrowRight size={15} />
                </Link>
                <Link
                  href="/clubs/register?type=individual"
                  className="text-link"
                >
                  Join as an Individual Member <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="verified-club-grid">
            {clubs.map((club) => {
              const location = [club.division, club.district]
                .filter(Boolean)
                .join(" · ");
              const instLabel =
                "institutionType" in club && club.institutionType === "College"
                  ? "College"
                  : "School";
              return (
                <article className="verified-club-card" key={club.id}>
                  <div className="verified-club-card-top">
                    <span className="verified-club-mark">
                      <BadgeCheck size={17} /> Verified {instLabel} Chapter
                    </span>
                    <ShieldCheck size={21} aria-hidden="true" />
                  </div>
                  <h3>{club.clubName}</h3>
                  <p className="verified-club-school">{club.schoolName}</p>
                  {location && (
                    <p className="verified-club-location">
                      <MapPin size={16} aria-hidden="true" />
                      {location}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        )}

        <aside
          className="clubs-directory-state"
          style={{ marginTop: "28px" }}
          aria-labelledby="trust-safeguarding-heading"
        >
          <ShieldCheck aria-hidden="true" />
          <div>
            <b id="trust-safeguarding-heading">Trust, Safeguarding &amp; Participation Notice</b>
            <p>
              Institutional registration is subject to review and verification by Atlas AI Institute. Registering does not automatically establish an official chapter or guarantee institutional partnership. Student club participation requires appropriate safeguarding and adult supervision.
            </p>
            <p>
              Individual registration does not imply employment, professional certification, or institutional endorsement. All registration data is handled responsibly and in accordance with privacy principles.
            </p>
            <p style={{ margin: 0 }}>
              Official institutional inquiries may be directed to{" "}
              <a href="mailto:contact@atlasai.institute" style={{ color: "#6d1d6b", fontWeight: 700 }}>
                contact@atlasai.institute
              </a>.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
