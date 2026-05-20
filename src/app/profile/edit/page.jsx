"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Toaster, toast } from "react-hot-toast";

function SkeletonEdit() {
  return (
    <div className="pr-page">
      <div className="pr-skel">
        <div className="pr-skel-line" style={{ width: "40%" }} />
        <div className="pr-skel-line-sm" style={{ width: "55%" }} />
        <div className="pr-skel-avatar" />
        <div className="pr-skel-btn" />
        <div className="pr-skel-btn" />
      </div>
    </div>
  );
}

function EditProfileForm({ session, refetch }) {
  const router = useRouter();
  const [name, setName] = useState(session.user.name || "");
  const [image, setImage] = useState(session.user.image || "");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const { data, error } = await authClient.updateUser({
        name: name.trim(),
        image: image.trim() || undefined,
      });

      if (error) throw new Error(error.message || "Failed to update profile");

      await refetch();

      toast.success("Profile updated successfully!");

      setTimeout(() => {
        router.push("/profile");
      }, 2000);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "var(--bg-card)",
            color: "var(--text-primary)",
            border: "1px solid var(--border-default)",
            borderRadius: "var(--radius-md)",
            fontSize: "var(--text-sm)",
          },
          success: {
            iconTheme: { primary: "#16a34a", secondary: "#fff" },
          },
          error: {
            iconTheme: { primary: "var(--color-brand-red)", secondary: "#fff" },
          },
        }}
      />

      <div className="pr-page">
        <div className="pr-form-card">
          <div className="pr-form-header">
            <h1 className="pr-form-title">Edit Profile</h1>
            <p className="pr-form-sub">Update your display name and profile photo</p>
          </div>

          <form className="pr-form" onSubmit={handleSubmit}>
            {image ? (
              <img
                src={image}
                alt="Profile preview"
                className="pr-preview"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            ) : (
              <div className="pr-preview-fallback">
                No photo
              </div>
            )}

            {/* Name field */}
            <div className="pr-form-group">
              <label className="pr-label">Display Name</label>
              <input
                className="pr-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                maxLength={100}
                required
              />
            </div>

            {/* Photo URL field */}
            <div className="pr-form-group">
              <label className="pr-label">
                Profile Photo URL
                <span style={{ fontWeight: "var(--fw-regular)", color: "var(--text-muted)", fontSize: "var(--text-xs)" }}>
                  (optional)
                </span>
              </label>
              <input
                className="pr-input"
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://example.com/photo.jpg"
              />
            </div>

            {/* Actions */}
            <div className="pr-form-actions">
              <Link href="/profile" className="pr-btn pr-btn-secondary">
                Cancel
              </Link>
              <button
                type="submit"
                className="pr-btn pr-btn-primary"
                disabled={saving || !name.trim()}
              >
                {saving ? (
                  <>
                    <span className="spinner-sm" />
                    Saving…
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

/* ─── Outer page component — handles auth ─── */
export default function EditProfilePage() {
  const router = useRouter();
  const { data: session, isPending, refetch } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login?redirect=/profile/edit");
    }
  }, [session, isPending, router]);

  if (isPending) return <SkeletonEdit />;
  if (!session) return null;

  return <EditProfileForm session={session} refetch={refetch} />;
}
