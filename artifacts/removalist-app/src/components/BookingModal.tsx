import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({ open, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    moveDate: "",
    fromSuburb: "",
    toSuburb: "",
  });

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: "", phone: "", moveDate: "", fromSuburb: "", toSuburb: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 z-10">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">You're Booked! 🎉</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Thanks <strong>{form.name}</strong>! DashDone has received your move details and will contact you at <strong>{form.phone}</strong> within the next few hours to confirm your removalist.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-6">
              <strong>Your move:</strong> {form.fromSuburb} → {form.toSuburb} on {form.moveDate}
            </div>
            <button
              onClick={handleClose}
              className="bg-slate-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors w-full"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">LIMITED OFFER</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Book Your Move</h3>
              <p className="text-slate-500 text-sm mt-1">
                Introductory booking fee: <span className="font-bold text-amber-600 text-base">$29</span>{" "}
                <span className="line-through text-slate-400">$49</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jane Smith"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0412 345 678"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Move Date</label>
                <input
                  type="date"
                  required
                  value={form.moveDate}
                  onChange={e => setForm(f => ({ ...f, moveDate: e.target.value }))}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">From Suburb</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bondi"
                    value={form.fromSuburb}
                    onChange={e => setForm(f => ({ ...f, fromSuburb: e.target.value }))}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">To Suburb</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Newtown"
                    value={form.toSuburb}
                    onChange={e => setForm(f => ({ ...f, toSuburb: e.target.value }))}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder:text-slate-400"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold text-base py-4 rounded-xl transition-all shadow-lg hover:shadow-amber-300 active:scale-95 mt-2"
              >
                Confirm My Booking — $29
              </button>
              <p className="text-xs text-slate-400 text-center">Sydney suburbs only. We'll call to confirm your removalist match.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
