export default function CareerQuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50">
      {children}
      
      {/* Additional Info Section */}
      <section className="border-t border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">Personalised Results</h3>
              <p className="text-zinc-600">
                Get detailed insights into career paths that match your unique combination of skills, interests, and personality traits.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">Industry Insights</h3>
              <p className="text-zinc-600">
                Access up-to-date information about different sectors, including salary expectations, required skills, and career progression paths.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">Next Steps</h3>
              <p className="text-zinc-600">
                Receive tailored recommendations for training, qualifications, and networking opportunities in your chosen career paths.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 