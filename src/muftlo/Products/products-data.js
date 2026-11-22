import {
  BarChart3,
  Bell,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  FolderKanban,
  LayoutDashboard,
  MessageCircle,
  Megaphone,
  Receipt,
  ShieldCheck,
  Users,
} from "lucide-react";
import suiteCover from "@/assets/products/rd-suite.jpg.asset.json";
import hubCover from "@/assets/products/rd-agency-hub.jpg.asset.json";
import channelCover from "@/assets/products/rd-team-channel.jpg.asset.json";

/*
  Add a new product by appending one object here — the products page,
  the card design and the /products/<slug> detail page pick it up automatically.
  `tint` classes must stay full literal strings so the styles are generated.
*/
export const products = [
  {
    slug: "rd-suite",
    name: "R&D Suite",
    badge: "Billing & CRM",
    tagline: "Billing and client management, finally in one place.",
    summary:
      "Create GST invoices, track payments and manage every client relationship from one clean dashboard.",
    tags: ["GST Billing", "Client CRM"],
    cover: suiteCover.url,
    tint: {
      overlay: "from-product-suite/0 via-product-suite/80 to-product-suite",
      solid: "bg-product-suite",
    },
    description:
      "R&D Suite is built for businesses that are tired of juggling billing software, spreadsheets and notebooks. Raise invoices in seconds, see who has paid and who hasn't, and keep every client's history, documents and follow-ups together.",
    stats: [
      { value: "1-click", label: "GST invoices" },
      { value: "40%", label: "Less admin time" },
      { value: "24/7", label: "Cloud access" },
    ],
    features: [
      { icon: Receipt, title: "GST invoicing", text: "Professional, GST-ready invoices and quotations created in seconds." },
      { icon: Bell, title: "Payment reminders", text: "Automatic reminders so pending payments never slip through." },
      { icon: Users, title: "Client management", text: "Every client's contacts, history, notes and documents in one profile." },
      { icon: CalendarDays, title: "Follow-ups", text: "Schedule calls and follow-ups and get reminded on time." },
      { icon: BarChart3, title: "Revenue reports", text: "Sales, dues and cash-flow dashboards that update themselves." },
      { icon: ShieldCheck, title: "Roles & security", text: "Role-based access keeps billing data safe and controlled." },
    ],
    audience: ["Small & mid-size businesses", "Service providers", "Consultants & freelancers", "Trading & distribution firms"],
  },
  {
    slug: "rd-agency-hub",
    name: "R&D Agency Hub",
    badge: "For Agencies",
    tagline: "The operating system for marketing companies.",
    summary:
      "Plan campaigns, collect client approvals and report results — one workspace made specially for marketing agencies.",
    tags: ["Campaigns", "Client Approvals"],
    cover: hubCover.url,
    tint: {
      overlay: "from-product-hub/0 via-product-hub/80 to-product-hub",
      solid: "bg-product-hub",
    },
    description:
      "Built from our own agency experience, R&D Agency Hub is made specially for marketing companies. Plan content and campaigns, share creatives for approval, track team hours per client and send polished performance reports — without scattered sheets and chats.",
    stats: [
      { value: "50+", label: "Clients managed" },
      { value: "2x", label: "Faster approvals" },
      { value: "1", label: "Hub for everything" },
    ],
    features: [
      { icon: CalendarDays, title: "Content calendar", text: "Plan posts and campaigns across every channel on one calendar." },
      { icon: Megaphone, title: "Campaign tracking", text: "Track every campaign's status, budget and results live." },
      { icon: CheckCircle2, title: "Client approvals", text: "Clients approve creatives in one click — no lost message threads." },
      { icon: LayoutDashboard, title: "Client portal", text: "A branded space where each client sees work, files and progress." },
      { icon: Clock3, title: "Time tracking", text: "Know exactly where team hours go on every retainer." },
      { icon: BarChart3, title: "Auto reports", text: "Monthly performance reports generated and shared automatically." },
    ],
    audience: ["Digital marketing agencies", "Social media agencies", "Creative & branding studios", "Performance marketing teams"],
  },
  {
    slug: "rd-communication-channel",
    name: "R&D Communication Channel",
    badge: "Team Hub",
    tagline: "Your internal team, connected and in sync.",
    summary:
      "Team chat, tasks, announcements and attendance for your internal team — all in one private channel.",
    tags: ["Team Chat", "Task Management"],
    cover: channelCover.url,
    tint: {
      overlay: "from-product-channel/0 via-product-channel/80 to-product-channel",
      solid: "bg-product-channel",
    },
    description:
      "R&D Communication Channel is your company's private space for internal team management. Talk in channels by department, assign and track tasks, share announcements and files, and see who's working on what — so your team stays aligned without endless calls and personal chats.",
    stats: [
      { value: "1", label: "Private team space" },
      { value: "3x", label: "Faster updates" },
      { value: "100%", label: "Company-owned data" },
    ],
    features: [
      { icon: MessageCircle, title: "Team channels", text: "Department and project channels with threads, mentions and files." },
      { icon: FolderKanban, title: "Task management", text: "Assign tasks, set deadlines and track progress on boards." },
      { icon: Megaphone, title: "Announcements", text: "Share company-wide updates that everyone actually reads." },
      { icon: Clock3, title: "Attendance & leave", text: "Daily check-ins, leave requests and approvals in the same app." },
      { icon: FileText, title: "Shared documents", text: "Policies, SOPs and files organised and easy to find." },
      { icon: ShieldCheck, title: "Private & secure", text: "Your data stays inside your company with role-based access." },
    ],
    audience: ["Growing teams of 5–500", "Agencies & studios", "Remote & hybrid teams", "Multi-branch businesses"],
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}
