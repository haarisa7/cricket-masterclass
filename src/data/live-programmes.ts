import { getSupabaseClient } from "@/lib/supabase";

export type ProgrammeType = "camp" | "group" | "one_to_one";
export type ProgrammeStatus = "live" | "coming_soon" | "sold_out";
export type ProgrammeGender = "boys_only" | "girls_only" | "mixed";

export interface TimeSlot {
  label: string | null;
  date: string | null;
  start_time: string | null;
  end_time: string | null;
}
export interface Coach {
  name: string;
  role: string | null;
}
export interface Price {
  label: string;
  price_pence: number | null;
  note: string | null;
}
export interface Discount {
  label: string;
  description: string | null;
  amount_pence: number | null;
  percent: number | null;
}
export interface LiveProgramme {
  id: string;
  programme_type: ProgrammeType;
  status: ProgrammeStatus;
  title: string;
  short_summary: string | null;
  slug: string;
  poster_path: string | null;
  mobile_poster_path: string | null;
  venue: string | null;
  ages: string | null;
  gender: ProgrammeGender | null;
  starts_on: string | null;
  ends_on: string | null;
  time_slots: TimeSlot[];
  spaces_total: number | null;
  spaces_available: number | null;
  spaces_note: string | null;
  coaches: Coach[];
  included_items: string[];
  cta_label: string | null;
  cta_url: string | null;
  seo_title: string | null;
  seo_description: string | null;
  camp_pricing_tiers: Price[];
  camp_extras: Price[];
  camp_discounts: Discount[];
  camp_drop_off: {
    early?: Price & { available?: boolean; time?: string | null };
    late?: Price & { available?: boolean; time?: string | null };
  };
  group_block_name: string | null;
  group_dates_note: string | null;
  group_schedule: { day: string; start_time: string; end_time: string; note: string | null }[];
  group_age_ability: string | null;
  group_price_pence: number | null;
  oto_availability: { day: string; window: string; note: string | null }[];
  oto_session_formats: {
    name: string;
    duration_minutes: number | null;
    price_pence: number | null;
    note: string | null;
  }[];
  oto_seasonal_availability: string | null;
  oto_venues: { name: string; note: string | null }[];
  oto_age_range: string | null;
  oto_from_price_pence: number | null;
  oto_enquiry_text: string | null;
  published_at: string | null;
}

const columns =
  "id, programme_type, status, title, short_summary, slug, poster_path, mobile_poster_path, venue, ages, gender, starts_on, ends_on, time_slots, spaces_total, spaces_available, spaces_note, coaches, included_items, cta_label, cta_url, seo_title, seo_description, camp_pricing_tiers, camp_extras, camp_discounts, camp_drop_off, group_block_name, group_dates_note, group_schedule, group_age_ability, group_price_pence, oto_availability, oto_session_formats, oto_seasonal_availability, oto_venues, oto_age_range, oto_from_price_pence, oto_enquiry_text, published_at";

function publicQuery() {
  const client = getSupabaseClient();
  if (!client) return null;
  return client
    .from("live_programme_updates")
    .select(columns)
    .is("archived_at", null)
    .in("status", ["live", "coming_soon", "sold_out"]);
}

export async function getLiveProgrammes(type?: ProgrammeType): Promise<LiveProgramme[]> {
  let query = publicQuery();
  if (!query) return [];
  if (type) query = query.eq("programme_type", type);
  const { data, error } = await query
    .order("published_at", { ascending: false })
    .order("starts_on", { ascending: true });
  if (error) throw error;
  return (data ?? []) as LiveProgramme[];
}

export async function getLiveProgramme(slug: string): Promise<LiveProgramme | null> {
  const query = publicQuery();
  if (!query) return null;
  const { data, error } = await query.eq("slug", slug).maybeSingle();
  if (error) throw error;
  return data as LiveProgramme | null;
}

export function posterUrl(path: string | null) {
  const client = getSupabaseClient();
  return path && client
    ? client.storage.from("programme-posters").getPublicUrl(path).data.publicUrl
    : null;
}

export function money(value: number | null) {
  return value === null
    ? null
    : new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        maximumFractionDigits: 0,
      }).format(value / 100);
}
export function genderLabel(value: ProgrammeGender | null) {
  return value === "boys_only"
    ? "Boys only"
    : value === "girls_only"
      ? "Girls only"
      : value === "mixed"
        ? "Boys & girls"
        : null;
}
export function typeLabel(value: ProgrammeType) {
  return value === "camp" ? "Cricket Camp" : value === "group" ? "Group Session" : "One-to-One";
}
export function dateLabel(start: string | null, end: string | null) {
  if (!start) return end ?? null;
  const format = (d: string) =>
    new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(
      new Date(`${d}T12:00:00`),
    );
  return end && end !== start ? `${format(start)} – ${format(end)}` : format(start);
}
export function nearestSlot(slots: TimeSlot[]) {
  const dated = slots.filter((slot) => slot.date).sort((a, b) => a.date!.localeCompare(b.date!));
  return (
    dated.find((slot) => slot.date! >= new Date().toISOString().slice(0, 10)) ?? dated[0] ?? null
  );
}
