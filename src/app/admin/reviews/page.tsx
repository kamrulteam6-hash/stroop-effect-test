import type { Metadata } from "next";
import { ReviewsAdmin } from "@/components/admin/ReviewsAdmin";

export const metadata: Metadata = {
  title: "Review Moderation",
  robots: { index: false, follow: false },
};

export default function AdminReviewsPage() {
  return <ReviewsAdmin />;
}
