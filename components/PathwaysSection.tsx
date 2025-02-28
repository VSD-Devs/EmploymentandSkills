import Link from 'next/link';

<section className="bg-gradient-to-br from-emerald-50 via-slate-50 to-blue-50">

{/* Choose one of these container styles */}
<div className="bg-slate-50">

<div className="inline-flex items-center px-3 py-1.5 bg-emerald-100 border border-emerald-200 rounded-full mb-3">
  <span className="text-sm font-medium text-emerald-800">Your Label Here</span>
</div>

{/* Primary button */}
<Link href="#" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-emerald-600/20">
  Button Text
</Link>

{/* Secondary button */}
<Link href="#" className="bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50 px-6 py-3 rounded-lg">
  Button Text
</Link>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
  <div className="p-4 text-center bg-gradient-to-br from-purple-600 to-purple-500">
    <h3 className="text-lg font-semibold text-white">Card Title</h3>
  </div>
</div>

</div>
</section>