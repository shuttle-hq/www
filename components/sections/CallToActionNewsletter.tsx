import clsx from "clsx";
import { trackEvent } from "lib/posthog";
import Image from "next/image";
import { useState, FormEvent, useEffect } from "react";

interface CallToActionProps {
  subtext?: string;
  bg?: boolean;
  className?: string;
}

const CallToActionNewsletter = ({
  subtext,
  bg,
  className,
}: CallToActionProps) => {
  const subtext_ =
    subtext || "Get the latest news about Shuttle features and Rust tips";

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  // modal state
  const [modal, setModal] = useState<{
    open: boolean;
    type: "success" | "error";
    email?: string;
  }>({ open: false, type: "success" });

  const openModal = (type: "success" | "error", address?: string) =>
    setModal({ open: true, type, email: address });
  const closeModal = () => setModal((m) => ({ ...m, open: false }));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (modal.open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal.open]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      openModal("success", email);
      setEmail("");
      trackEvent("homepage_newsletter_subscribe_success");
    } catch (err) {
      openModal("error", email);
      trackEvent("homepage_newsletter_subscribe_error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className={clsx(
          "relative w-full overflow-hidden rounded-[2rem] bg-[#0F0F0F] p-4 md:p-6",
          className,
        )}
      >
        {bg ? (
          <div>
            <Image
              src="/images/sections/powered-by/bg.png"
              alt=""
              fill
              className="pointer-events-none absolute left-0 top-0 z-0 select-none"
            />
            <Image
              src="/images/sections/powered-by/stars.png"
              alt=""
              fill
              className="pointer-events-none absolute bottom-0 left-20 z-0 select-none"
            />
          </div>
        ) : null}

        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-[linear-gradient(180deg,#7A5D45_0%,#5E4532_100%)] ring-1 ring-white/15 shrink-0">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 6.5h16v11H4v-11Zm0 0 8 6 8-6"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.95"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-white text-xl font-semibold leading-6">
                Stay updated
              </h3>
              <p className="mt-1 text-sm text-white/70">{subtext_}</p>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="w-full md:w-auto">
            <div className="flex w-full items-center gap-3">
              <input
                type="email"
                name="email"
                id="bd-email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="h-[48px] w-full flex-1 rounded-xl border border-white/15 bg-transparent px-4 text-white placeholder:text-white/70 outline-none focus:ring-2 focus:ring-white/20 md:min-w-[360px] disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={loading}
                className="h-[48px] shrink-0 rounded-full bg-[#E3E3E3] px-6 text-sm font-medium text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/30 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Submitting…" : "Subscribe"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      {modal.open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-[500px] rounded-[2rem] bg-black p-8 shadow-xl ring-1 ring-white/10"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close dialog"
              onClick={closeModal}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.28335 18.8834L5.1167 17.7167L10.8334 12L5.1167 6.28335L6.28335 5.1167L12 10.8334L17.7167 5.1167L18.8834 6.28335L13.1667 12L18.8834 17.7167L17.7167 18.8834L12 13.1667L6.28335 18.8834Z"
                  fill="#EDEDED"
                />
              </svg>
            </button>

            <div className="mx-auto flex w-full max-w-[520px] flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#7A5D45_0%,#5E4532_100%)] ring-1 ring-white/15">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1.59619L20.7808 6.82294C21.0037 6.96794 21.1794 7.15869 21.3078 7.39519C21.4359 7.63169 21.5 7.88328 21.5 8.14994V18.6922C21.5 19.1974 21.325 19.6249 20.975 19.9749C20.625 20.3249 20.1974 20.4999 19.6923 20.4999H4.30775C3.80258 20.4999 3.375 20.3249 3.025 19.9749C2.675 19.6249 2.5 19.1974 2.5 18.6922V8.14994C2.5 7.88328 2.56408 7.63169 2.69225 7.39519C2.82058 7.15869 2.99625 6.96794 3.21925 6.82294L12 1.59619ZM12 12.6499L19.8 7.99994L12 3.34994L4.2 7.99994L12 12.6499ZM12 14.4037L4 9.62294V18.6922C4 18.782 4.02883 18.8558 4.0865 18.9134C4.14417 18.9711 4.21792 18.9999 4.30775 18.9999H19.6923C19.7821 18.9999 19.8558 18.9711 19.9135 18.9134C19.9712 18.8558 20 18.782 20 18.6922V9.62294L12 14.4037ZM12 18.9999H20H4H12Z"
                    fill="#E3E3E3"
                  />
                </svg>
              </div>

              <h2 className="mb-3 text-3xl font-extrabold text-white md:text-4xl">
                {modal.type === "success"
                  ? "Check your inbox"
                  : "Something went wrong"}
              </h2>

              {modal.type === "success" ? (
                <>
                  <p className="mt-2 text-lg text-secondary">
                    We’ve sent a confirmation to{" "}
                    {modal.email ? (
                      <span className="text-white">{modal.email}</span>
                    ) : (
                      "your email"
                    )}
                    .
                  </p>
                  <p className="mt-2 text-lg text-secondary">
                    Click the link to finish subscribing.
                  </p>
                </>
              ) : (
                <>
                  <p className="mt-2 text-lg text-secondary">
                    We couldn’t subscribe{" "}
                    {modal.email ? (
                      <span className="text-white">{modal.email}</span>
                    ) : (
                      "this address"
                    )}
                    .
                  </p>
                  <p className="mt-2 text-lg text-secondary">
                    Please try again in a moment.
                  </p>
                </>
              )}

              <button
                onClick={closeModal}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#E3E3E3] px-6 py-3 text-base font-medium text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CallToActionNewsletter;
