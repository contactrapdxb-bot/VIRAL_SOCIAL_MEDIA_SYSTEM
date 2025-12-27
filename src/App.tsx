import { useState } from 'react';
import { Copy, Instagram, Download, Search, Check } from 'lucide-react';

interface ViralPost {
  id: string;
  timeframe: string;
  thumbnail: string;
  title: string;
  caption: string;
  username: string;
  timeAgo: string;
  link: string;
  instagramLink: string;
}

interface ContentAnalysis {
  thumbnail: string;
  titleEnglish: string;
  titleArabic: string;
  caption: string;
}

const viralPosts: ViralPost[] = [
  {
    id: '1',
    timeframe: 'Last 6 Hours',
    thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Drake Drops Surprise Album Announcement',
    caption: 'OVO Sound boss just revealed his next album dropping next month. The culture is not ready for this...',
    username: '@champagnepapi',
    timeAgo: '2h ago',
    link: 'https://instagram.com/p/C5XaBcDEfG7',
    instagramLink: 'https://instagram.com/p/C5XaBcDEfG7'
  },
  {
    id: '2',
    timeframe: 'Last 6 Hours',
    thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Travis Scott Teases Utopia Tour Dates',
    caption: 'UTOPIA WORLD TOUR coming to a city near you. Presale starts this Friday. Who pulling up?',
    username: '@travisscott',
    timeAgo: '4h ago',
    link: 'https://instagram.com/p/C5WxYzPqRsT',
    instagramLink: 'https://instagram.com/p/C5WxYzPqRsT'
  },
  {
    id: '3',
    timeframe: 'Last 12 Hours',
    thumbnail: 'https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Kendrick Lamar Wins Another Grammy',
    caption: 'Breaking: K-Dot takes home Best Rap Album at the Grammys. The greatest doing greatest things...',
    username: '@kendricklamar',
    timeAgo: '9h ago',
    link: 'https://instagram.com/p/C5VmNoPqXyZ',
    instagramLink: 'https://instagram.com/p/C5VmNoPqXyZ'
  },
  {
    id: '4',
    timeframe: 'Last 24 Hours',
    thumbnail: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Metro Boomin Announces New Collab Album',
    caption: 'Metro and Future linking back up for another classic. Studio sessions been crazy lately...',
    username: '@metroboomin',
    timeAgo: '18h ago',
    link: 'https://instagram.com/p/C5UaBcQrPsM',
    instagramLink: 'https://instagram.com/p/C5UaBcQrPsM'
  }
];

const sampleAnalysis: ContentAnalysis = {
  thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
  titleEnglish: 'Drake Announces Surprise Album Dropping Next Month',
  titleArabic: 'دريك يعلن عن ألبوم مفاجئ يصدر الشهر المقبل',
  caption: 'Breaking news from the 6ix! 🦉 Drake just announced his next album dropping next month and the hip hop world is going crazy. After months of speculation, Champagne Papi confirms the project is finished and ready. Features looking insane. This is about to change the game again. Tag someone who needs to know! #Drake #OVO #NewMusic #HipHop #Viral #Album #ComingSoon'
};

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      setShowAnalysis(true);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = sampleAnalysis.thumbnail;
    link.download = 'content.jpg';
    link.click();
  };

  return (
    <div className="min-h-screen lg:h-screen bg-[#0a0a0a] text-white p-3 lg:p-4 font-mono overflow-y-auto lg:overflow-hidden">
      <div className="lg:h-full max-w-[1800px] mx-auto flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 lg:h-full">
          {/* Left Section - Viral Posts */}
          <div className="flex flex-col lg:h-full">
            <div className="flex justify-center mb-3 lg:mb-4">
              <div className="relative px-4 py-2 lg:px-6 lg:py-2.5 rounded-full bg-gradient-to-r from-[#F6EFD6]/10 via-[#F6EFD6]/5 to-[#F6EFD6]/10 border border-[#F6EFD6]/30 backdrop-blur-xl shadow-[0_0_20px_rgba(246,239,214,0.1)]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#F6EFD6]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                <h2 className="text-[10px] lg:text-xs uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[#F6EFD6] font-bold relative z-10">Viral Posts</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-2.5 lg:flex-1 lg:overflow-y-auto pr-1 lg:pr-2 custom-scrollbar">
              {viralPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="relative rounded-xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-[#F6EFD6]/50 transition-all duration-500 p-3 lg:p-3 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(246,239,214,0.15)] flex flex-col h-fit"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Top Badge */}
                  <div className="absolute top-2 right-2 z-10">
                    <span className="text-[8px] lg:text-[9px] uppercase tracking-wider px-2 py-1 bg-black/70 border border-[#F6EFD6] rounded-lg text-[#F6EFD6] backdrop-blur-md shadow-lg font-bold">
                      {post.timeframe}
                    </span>
                  </div>

                  {/* Header - Instagram icon and username */}
                  <div className="flex items-center gap-2 mb-2.5 lg:mb-2">
                    <div className="w-8 h-8 lg:w-7 lg:h-7 rounded-lg bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] flex items-center justify-center shadow-lg">
                      <Instagram className="w-4.5 h-4.5 lg:w-4 lg:h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs lg:text-[11px] font-semibold text-[#7fb3ff]">{post.username}</p>
                      <p className="text-[10px] lg:text-[9px] text-white/40">{post.timeAgo}</p>
                    </div>
                  </div>

                  {/* Image Preview */}
                  <div className="relative rounded-lg overflow-hidden mb-2.5 lg:mb-2 aspect-video group/img">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm lg:text-xs font-bold text-white mb-2 lg:mb-1.5 line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  {/* Caption */}
                  <p className="text-[11px] lg:text-[10px] text-white/50 mb-2.5 lg:mb-2 line-clamp-2 leading-relaxed">
                    {post.caption}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-end gap-2 lg:gap-1.5 mt-auto pt-2 lg:pt-1.5 border-t border-white/5">
                    <button
                      onClick={() => window.open(post.instagramLink, '_blank')}
                      className="p-2 lg:p-1.5 bg-black/60 hover:bg-[#F6EFD6]/30 border border-white/20 hover:border-[#F6EFD6] rounded-lg backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(246,239,214,0.3)]"
                      title="Open in Instagram"
                    >
                      <Instagram className="w-3.5 h-3.5 lg:w-3 lg:h-3" />
                    </button>
                    <button
                      onClick={() => handleCopy(post.link, post.id)}
                      className="p-2 lg:p-1.5 bg-black/60 hover:bg-[#F6EFD6]/30 border border-white/20 hover:border-[#F6EFD6] rounded-lg backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(246,239,214,0.3)]"
                      title="Copy link"
                    >
                      {copiedId === post.id ? (
                        <Check className="w-3.5 h-3.5 lg:w-3 lg:h-3 text-[#F6EFD6]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 lg:w-3 lg:h-3" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Content Analysis */}
          <div className={`flex flex-col ${!showAnalysis ? 'lg:h-full' : ''}`}>
            <div className="flex justify-center mb-3 lg:mb-4">
              <div className="relative px-4 py-2 lg:px-6 lg:py-2.5 rounded-full bg-gradient-to-r from-[#F6EFD6]/10 via-[#F6EFD6]/5 to-[#F6EFD6]/10 border border-[#F6EFD6]/30 backdrop-blur-xl shadow-[0_0_20px_rgba(246,239,214,0.1)]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#F6EFD6]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                <h2 className="text-[10px] lg:text-xs uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[#F6EFD6] font-bold relative z-10">Content Analysis</h2>
              </div>
            </div>

            {!showAnalysis ? (
              <div className="flex items-center justify-center py-12 lg:py-0 lg:flex-1 lg:-mt-32">
                <div className="w-full max-w-md space-y-6 lg:space-y-8 px-3 lg:px-4">
                  <div className="text-center space-y-4 lg:space-y-5">
                    <div className="relative inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-[#F6EFD6]/10 via-white/5 to-[#F6EFD6]/10 border border-[#F6EFD6]/30 mb-2 backdrop-blur-2xl shadow-[0_8px_32px_rgba(246,239,214,0.15)]">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F6EFD6]/20 to-transparent opacity-50" />
                      <Search className="w-9 h-9 lg:w-10 lg:h-10 text-[#F6EFD6] relative z-10" />
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent to-[#F6EFD6]/10 blur-xl" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-light text-[#F6EFD6] tracking-wide">
                      How may I help you today?
                    </h3>
                    <p className="text-[11px] lg:text-xs text-white/40 tracking-wider">
                      Paste an Instagram link to analyze content
                    </p>
                  </div>

                  <form onSubmit={handleSearch} className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#F6EFD6]/20 via-[#F6EFD6]/5 to-[#F6EFD6]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Paste link here..."
                        className="w-full px-4 py-3.5 lg:px-6 lg:py-4 bg-white/[0.03] border border-white/10 focus:border-[#F6EFD6]/50 focus:bg-white/[0.05] rounded-2xl outline-none transition-all duration-300 placeholder:text-white/30 text-sm backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                      />
                      <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 lg:px-5 lg:py-2.5 bg-gradient-to-r from-[#F6EFD6]/20 to-[#F6EFD6]/10 hover:from-[#F6EFD6]/30 hover:to-[#F6EFD6]/20 border border-[#F6EFD6]/40 hover:border-[#F6EFD6]/60 rounded-xl text-[#F6EFD6] text-[11px] lg:text-xs transition-all duration-300 font-bold hover:shadow-[0_0_20px_rgba(246,239,214,0.4)] backdrop-blur-xl"
                      >
                        Generate
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="space-y-3 lg:space-y-2.5 lg:overflow-y-auto pr-1 lg:pr-2 custom-scrollbar">
                {/* Thumbnail with Download */}
                <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden border border-white/20 group shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-[#F6EFD6]/50 transition-all duration-300">
                  <img
                    src={sampleAnalysis.thumbnail}
                    alt="Content thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <button
                    onClick={handleDownload}
                    className="absolute bottom-3 right-3 lg:bottom-2 lg:right-2 px-3 py-2 lg:px-2.5 lg:py-1.5 bg-black/60 hover:bg-[#F6EFD6]/30 border border-[#F6EFD6]/50 hover:border-[#F6EFD6] rounded-lg backdrop-blur-md transition-all duration-300 flex items-center gap-1.5 text-[11px] lg:text-[10px] shadow-lg hover:shadow-[0_0_15px_rgba(246,239,214,0.3)]"
                  >
                    <Download className="w-3.5 h-3.5 lg:w-3 lg:h-3" />
                    Download
                  </button>
                </div>

                {/* Title English */}
                <div className="relative p-3 lg:p-2.5 bg-white/5 border border-white/10 rounded-xl hover:border-[#F6EFD6]/40 hover:bg-white/[0.07] transition-all duration-300 shadow-lg">
                  <div className="flex justify-between items-start gap-3 lg:gap-2">
                    <div className="flex-1">
                      <p className="text-[10px] lg:text-[9px] text-white/40 mb-1.5 lg:mb-1 uppercase tracking-widest">Title (EN)</p>
                      <p className="text-xs lg:text-[11px] leading-relaxed">{sampleAnalysis.titleEnglish}</p>
                    </div>
                    <button
                      onClick={() => handleCopy(sampleAnalysis.titleEnglish, 'title-en')}
                      className="p-2 lg:p-1.5 bg-white/5 hover:bg-[#F6EFD6]/20 border border-white/10 hover:border-[#F6EFD6] rounded-lg transition-all duration-300 flex-shrink-0 hover:shadow-[0_0_10px_rgba(246,239,214,0.2)]"
                      title="Copy title"
                    >
                      {copiedId === 'title-en' ? (
                        <Check className="w-3.5 h-3.5 lg:w-3 lg:h-3 text-[#F6EFD6]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 lg:w-3 lg:h-3" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Title Arabic */}
                <div className="relative p-3 lg:p-2.5 bg-white/5 border border-white/10 rounded-xl hover:border-[#F6EFD6]/40 hover:bg-white/[0.07] transition-all duration-300 shadow-lg">
                  <div className="flex justify-between items-start gap-3 lg:gap-2">
                    <div className="flex-1">
                      <p className="text-[10px] lg:text-[9px] text-white/40 mb-1.5 lg:mb-1 uppercase tracking-widest">Title (AR)</p>
                      <p className="text-xs lg:text-[11px] leading-relaxed" dir="rtl">{sampleAnalysis.titleArabic}</p>
                    </div>
                    <button
                      onClick={() => handleCopy(sampleAnalysis.titleArabic, 'title-ar')}
                      className="p-2 lg:p-1.5 bg-white/5 hover:bg-[#F6EFD6]/20 border border-white/10 hover:border-[#F6EFD6] rounded-lg transition-all duration-300 flex-shrink-0 hover:shadow-[0_0_10px_rgba(246,239,214,0.2)]"
                      title="Copy title"
                    >
                      {copiedId === 'title-ar' ? (
                        <Check className="w-3.5 h-3.5 lg:w-3 lg:h-3 text-[#F6EFD6]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 lg:w-3 lg:h-3" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Caption */}
                <div className="relative p-3 lg:p-2.5 bg-white/5 border border-white/10 rounded-xl hover:border-[#F6EFD6]/40 hover:bg-white/[0.07] transition-all duration-300 shadow-lg">
                  <div className="flex justify-between items-start gap-3 lg:gap-2">
                    <div className="flex-1">
                      <p className="text-[10px] lg:text-[9px] text-white/40 mb-1.5 lg:mb-1 uppercase tracking-widest">Caption</p>
                      <p className="text-xs lg:text-[11px] leading-relaxed whitespace-pre-line">{sampleAnalysis.caption}</p>
                    </div>
                    <button
                      onClick={() => handleCopy(sampleAnalysis.caption, 'caption')}
                      className="p-2 lg:p-1.5 bg-white/5 hover:bg-[#F6EFD6]/20 border border-white/10 hover:border-[#F6EFD6] rounded-lg transition-all duration-300 flex-shrink-0 hover:shadow-[0_0_10px_rgba(246,239,214,0.2)]"
                      title="Copy caption"
                    >
                      {copiedId === 'caption' ? (
                        <Check className="w-3.5 h-3.5 lg:w-3 lg:h-3 text-[#F6EFD6]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 lg:w-3 lg:h-3" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => {
                    setShowAnalysis(false);
                    setSearchValue('');
                  }}
                  className="w-full px-4 py-2.5 lg:px-3 lg:py-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#F6EFD6]/50 rounded-xl transition-all duration-300 text-xs lg:text-[11px] hover:shadow-[0_0_15px_rgba(246,239,214,0.1)]"
                >
                  Analyze Another Link
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
