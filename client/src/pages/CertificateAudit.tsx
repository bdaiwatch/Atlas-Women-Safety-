import { useMemo, useState } from "react";
import { ArrowLeft, Ban, CheckCircle2, Search } from "lucide-react";
import { Link } from "wouter";
import { useAuth } from "../_core/hooks/useAuth";
import { trpc } from "../lib/trpc";

export default function CertificateAudit() {
  const { user, loading } = useAuth();
  const certificates = trpc.certificates.auditList.useQuery(undefined, { enabled: Boolean(user?.role === "admin") });
  const revoke = trpc.certificates.revoke.useMutation({ onSuccess: () => certificates.refetch() });
  const [query, setQuery] = useState("");
  const [reason, setReason] = useState<Record<number, string>>({});
  const rows = useMemo(() => (certificates.data ?? []).filter((item) => `${item.certificateId} ${item.learnerName} ${item.courseTitle}`.toLowerCase().includes(query.toLowerCase())), [certificates.data, query]);

  if (loading) return <LayoutShell><div className="loading-state">Checking secure access…</div></LayoutShell>;
  if (!user || user.role !== "admin") return <LayoutShell><section className="admin-gate"><Ban size={32} /><p className="eyebrow">Restricted certificate audit</p><h1>Authorised administrators only.</h1><p>Issued certificate records and revocation actions are protected by admin role-based access.</p><Link href="/admin" className="button primary">Back to admin <ArrowLeft size={16} /></Link></section></LayoutShell>;

  return <LayoutShell><section className="certificate-audit-page content-wrap"><div className="admin-heading"><div><p className="eyebrow">Certificate governance</p><h1>Issued certificate audit table.</h1><p>Review issuance records, search by learner or certificate ID, and record a reason before revoking a certificate.</p></div><Link href="/admin" className="button secondary"><ArrowLeft size={16} /> Admin overview</Link></div><div className="audit-toolbar"><label className="search-box"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search certificate ID, learner or course" /></label><span>{rows.length} record{rows.length === 1 ? "" : "s"}</span></div><div className="audit-table-wrap"><table className="audit-table"><thead><tr><th>Certificate</th><th>Learner</th><th>Course</th><th>Issued</th><th>Status</th><th>Audit action</th></tr></thead><tbody>{rows.length ? rows.map((item) => <tr key={item.id}><td><strong>{item.certificateId}</strong><small>{item.verificationUrl || "Verification URL pending"}</small></td><td>{item.learnerName}</td><td>{item.courseTitle}</td><td>{new Date(item.issuedAt).toLocaleDateString()}</td><td><span className={`audit-status ${item.status === "VALID" ? "valid" : "revoked"}`}>{item.status === "VALID" ? <CheckCircle2 size={14} /> : <Ban size={14} />}{item.status}</span>{item.revocationReason && <small className="audit-reason">Reason: {item.revocationReason}</small>}</td><td>{item.status === "VALID" ? <div className="audit-action"><input value={reason[item.id] ?? ""} onChange={(event) => setReason((current) => ({ ...current, [item.id]: event.target.value }))} placeholder="Reason required" /><button className="button danger small" disabled={!reason[item.id]?.trim() || revoke.isPending} onClick={() => revoke.mutate({ id: item.id, reason: reason[item.id].trim() })}>Revoke</button></div> : <span className="muted-note">No further action</span>}</td></tr>) : <tr><td colSpan={6}><div className="empty-state">No issued certificates match this search.</div></td></tr>}</tbody></table></div><p className="audit-privacy">Audit actions record the authorised administrator, timestamp and reason in the audit log. Learner email addresses, passwords and assessment answers are not displayed here.</p></section></LayoutShell>;
}

function LayoutShell({ children }: { children: React.ReactNode }) { return <div className="site-shell"><main>{children}</main></div>; }
