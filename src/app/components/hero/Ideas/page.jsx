import Link from 'next/link';

export default function TrendingIdeas() {
  const sampleTrendingIdeas = [
    { id: 1, title: "EcoDrop Logistics", category: "GreenTech", Stage: "Seed", Upvotes: 342 },
    { id: 2, title: "HealthSync AI", category: "MedTech", Stage: "Pre-seed", Upvotes: 289 },
    { id: 3, title: "EduSphere VR", category: "EdTech", Stage: "Concept", Upvotes: 215 },
    { id: 4, title: "FinFlow Ledger", category: "FinTech", Stage: "MVP", Upvotes: 198 },
    { id: 5, title: "AgriBotic Systems", category: "AgriTech", Stage: "Series A", Upvotes: 184 },
    { id: 6, title: "CyberShield Quantum", category: "Cybersecurity", Stage: "MVP", Upvotes: 156 },
  ];

  return (
    <section className="py-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Hot Topics</span>
          <h2 className="text-3xl font-bold mt-1">Trending Pitch Ideas</h2>
        </div>
        <Link href="/ideas" className="btn btn-link text-primary hidden sm:flex">View All Ideas</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleTrendingIdeas.map((idea) => (
          <div key={idea.id} className="card bg-base-100 shadow-md hover:shadow-xl transition-all border border-base-200">
            <div className="card-body">
              <div className="flex justify-between items-start">
                <span className="badge badge-secondary badge-outline font-medium">{idea.category}</span>
                <span className="text-xs text-base-content/60 font-semibold">👍 {idea.Upvotes} votes</span>
              </div>
              <h3 className="card-title text-xl text-base-content mt-2">{idea.title}</h3>
              
              <div className="py-3 my-2 border-y border-base-100 flex flex-wrap gap-x-4 gap-y-2 text-sm text-base-content/70">
                <div>🎯 <span className="font-medium">Stage:</span> {idea.Stage}</div>
                <div>📅 <span className="font-medium">Posted:</span> 2 days ago</div>
                <div>👥 <span className="font-medium">Team Size:</span> 3 Founders</div>
              </div>

              <div className="card-actions justify-end mt-2">
                <Link href={`/ideas/${idea.id}`} className="btn btn-primary btn-sm btn-block sm:btn-inline">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}