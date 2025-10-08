import Link from "next/link";
import Image from "next/image";
import { Search, Home, FileText, User, Sparkles, Gift, MessageSquare, Download, Settings, HelpCircle } from "lucide-react";

export default function JobsPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/logo-1.svg" alt="Jobright" width={120} height={32} />
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/jobs" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-white bg-[#00D68F] rounded-lg">
            <Home className="w-5 h-5" />
            Jobs
          </Link>
          <Link href="/resume" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
            <FileText className="w-5 h-5" />
            Resume
            <span className="ml-auto w-2 h-2 bg-green-500 rounded-full"></span>
          </Link>
          <Link href="/profile" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
            <User className="w-5 h-5" />
            Profile
          </Link>
          <Link href="/agent" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
            <Sparkles className="w-5 h-5" />
            Agent
            <span className="ml-auto px-2 py-0.5 text-xs font-semibold bg-black text-white rounded">NEW</span>
          </Link>
        </nav>

        <div className="p-4 space-y-1 border-t border-gray-200">
          <div className="px-3 py-2 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-4 h-4 text-green-600" />
              <span className="text-xs font-semibold text-gray-900">Refer & Earn</span>
            </div>
            <p className="text-xs text-gray-600 mb-2">Invite friends or share on LinkedIn to earn extra rewards!</p>
          </div>
          
          <Link href="/messages" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
            <MessageSquare className="w-5 h-5" />
            Messages
          </Link>
          <Link href="/download" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
            <Download className="w-5 h-5" />
            Download App
          </Link>
          <Link href="/feedback" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
            <HelpCircle className="w-5 h-5" />
            Feedback
          </Link>
          <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-green-400 to-green-300 px-6 py-3 text-center">
          <span className="text-sm font-semibold text-gray-900">
            🚀 Get Hired Faster with Turbo – Student Discount Available!
          </span>
          <button className="ml-2 text-sm font-semibold underline text-gray-900">Learn More</button>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-gray-200 px-6">
          <div className="flex items-center gap-6">
            <Link href="/jobs" className="px-4 py-4 text-sm font-semibold border-b-2 border-black">
              JOBS
            </Link>
            <Link href="/jobs?filter=recommended" className="px-4 py-4 text-sm font-medium text-gray-600 hover:text-gray-900">
              Recommended
            </Link>
            <Link href="/jobs?filter=liked" className="px-4 py-4 text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-2">
              Liked <span className="px-2 py-0.5 text-xs bg-gray-200 rounded-full">0</span>
            </Link>
            <Link href="/jobs?filter=applied" className="px-4 py-4 text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-2">
              Applied <span className="px-2 py-0.5 text-xs bg-gray-200 rounded-full">7</span>
            </Link>
            <Link href="/jobs?filter=external" className="px-4 py-4 text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-2">
              External <span className="px-2 py-0.5 text-xs bg-gray-200 rounded-full">0</span>
            </Link>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto p-6">
            {/* Status Tabs */}
            <div className="flex items-center gap-4 mb-6">
              <button className="px-4 py-2 text-sm font-semibold bg-white rounded-full border border-gray-300">
                Applied(7)
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-full">
                Interviewing(0)
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-full">
                Offer Received(0)
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-full">
                Rejected(0)
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-full">
                Archived(0)
              </button>
            </div>

            {/* Search Bar */}
            <div className="mb-6 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search by title or company" 
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D68F] focus:border-transparent"
              />
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {/* Job Card 1 */}
              <div className="flex gap-6 bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">4 days ago</p>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">Software Engineer Intern</h3>
                          <p className="text-sm text-gray-600">SingleStore / Computer Software · Growth Stage</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">✕</button>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">📍 United States</span>
                        <span className="flex items-center gap-1">💼 Remote</span>
                        <span className="flex items-center gap-1">🎓 Internship</span>
                        <span className="flex items-center gap-1">👤 Intern</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="px-6 py-2 text-sm font-semibold text-white bg-[#00D68F] rounded-full hover:bg-[#00B87A]">
                          + ASK ORION
                        </button>
                        <button className="px-6 py-2 text-sm font-semibold text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50">
                          Applied
                        </button>
                        <span className="text-xs text-gray-500 ml-auto">Applied on Oct 4, 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Match Score Card */}
                <div className="w-48 bg-gradient-to-br from-teal-900 to-teal-800 rounded-lg p-4 text-white flex-shrink-0">
                  <div className="text-center mb-3">
                    <div className="relative inline-flex items-center justify-center w-20 h-20 mb-2">
                      <svg className="w-20 h-20 transform -rotate-90">
                        <circle cx="40" cy="40" r="36" stroke="rgba(255,255,255,0.2)" strokeWidth="4" fill="none" />
                        <circle cx="40" cy="40" r="36" stroke="#00D68F" strokeWidth="4" fill="none" strokeDasharray="226" strokeDashoffset="23" />
                      </svg>
                      <span className="absolute text-2xl font-bold">90%</span>
                    </div>
                    <p className="text-sm font-bold">STRONG MATCH</p>
                  </div>
                  <div className="space-y-2 text-xs">
                    <p className="flex items-center gap-2">✓ Growth Opportunities</p>
                    <p className="flex items-center gap-2">✓ H1B Sponsor Likely</p>
                  </div>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="flex gap-6 bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌀</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">4 days ago</p>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">Software Engineer - New Grad, 2026</h3>
                          <p className="text-sm text-gray-600">Domino Data Lab / Analytics · Artificial Intelligence (AI) · Late Stage</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">✕</button>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">📍 San Francisco, CA</span>
                        <span className="flex items-center gap-1">🏢 Onsite</span>
                        <span className="flex items-center gap-1">💼 Full-time</span>
                        <span className="flex items-center gap-1">👤 New Grad, Entry Level</span>
                        <span className="flex items-center gap-1">💰 $150K/yr - $150K/yr</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="px-6 py-2 text-sm font-semibold text-white bg-[#00D68F] rounded-full hover:bg-[#00B87A]">
                          + ASK ORION
                        </button>
                        <button className="px-6 py-2 text-sm font-semibold text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50">
                          Applied
                        </button>
                        <span className="text-xs text-gray-500 ml-auto">Applied on Oct 4, 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Match Score Card */}
                <div className="w-48 bg-gradient-to-br from-teal-900 to-teal-800 rounded-lg p-4 text-white flex-shrink-0">
                  <div className="text-center mb-3">
                    <div className="relative inline-flex items-center justify-center w-20 h-20 mb-2">
                      <svg className="w-20 h-20 transform -rotate-90">
                        <circle cx="40" cy="40" r="36" stroke="rgba(255,255,255,0.2)" strokeWidth="4" fill="none" />
                        <circle cx="40" cy="40" r="36" stroke="#00D68F" strokeWidth="4" fill="none" strokeDasharray="226" strokeDashoffset="20" />
                      </svg>
                      <span className="absolute text-2xl font-bold">91%</span>
                    </div>
                    <p className="text-sm font-bold">STRONG MATCH</p>
                  </div>
                  <div className="space-y-2 text-xs">
                    <p className="flex items-center gap-2">✓ Comp. & Benefits</p>
                    <p className="flex items-center gap-2">✓ H1B Sponsor Likely</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar - Orion */}
      <aside className="w-96 bg-white border-l border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Orion</h3>
              <p className="text-xs text-gray-500">Your AI Copilot</p>
            </div>
            <button className="ml-auto px-3 py-1 text-xs font-semibold border border-gray-300 rounded-full hover:bg-gray-50">
              Quick Guide
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4">
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                Welcome back, Faishal Mamzari!
              </p>
              <p className="text-sm text-gray-700 mt-2">
                It&apos;s great to see you again. Let&apos;s resume your journey towards your dream job.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h4 className="text-sm font-bold text-gray-900 mb-2">Tasks I can assist you with:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#00D68F]">🔍</span>
                  <span><strong>Adjust current preference</strong><br />Fine-tune your job search criteria.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500">⭐</span>
                  <span><strong>Top Match jobs</strong><br />Explore jobs where you shine as a top candidate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00D68F]">💬</span>
                  <span><strong>Ask Orion</strong><br />Click on &apos;Ask Orion&apos; to get detailed insights on specific job.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Ask me anything..." 
              className="w-full px-4 py-3 pr-12 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D68F] focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#00D68F] hover:bg-gray-200 rounded-lg">
              <MessageSquare className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}