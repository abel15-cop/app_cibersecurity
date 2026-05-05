/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { 
  Network, 
  Zap, 
  Globe, 
  Key, 
  Shield, 
  Cloud, 
  FileText, 
  CheckCircle2, 
  Circle, 
  ExternalLink, 
  Youtube, 
  Clock, 
  BarChart3,
  BookOpen,
  Trophy,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { STUDY_PLAN } from './data.ts';
import { Module, Topic } from './types.ts';

// Icon mapping
const ICON_MAP: Record<string, any> = {
  Network,
  Zap,
  Globe,
  Key,
  Shield,
  Cloud,
  FileText
};

export default function App() {
  const [completedTopics, setCompletedTopics] = useState<string[]>(() => {
    const saved = localStorage.getItem('cyberpath_progress');
    return saved ? JSON.parse(saved) : [];
  });

  const [activeModuleId, setActiveModuleId] = useState<string>(STUDY_PLAN[0].id);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    localStorage.setItem('cyberpath_progress', JSON.stringify(completedTopics));
  }, [completedTopics]);

  const activeModule = STUDY_PLAN.find(m => m.id === activeModuleId) || STUDY_PLAN[0];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getYoutubeId = (url: string) => {
    try {
      if (url.includes('v=')) return url.split('v=')[1]?.split('&')[0];
      if (url.includes('youtu.be/')) return url.split('youtu.be/')[1]?.split('?')[0];
    } catch (e) { return null; }
    return null;
  };

  const getYoutubeEmbedUrl = (url: string) => {
    const videoId = getYoutubeId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const getYoutubeThumbnail = (url: string) => {
    const videoId = getYoutubeId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
  };

  const toggleTopic = (topicId: string) => {
    setCompletedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId) 
        : [...prev, topicId]
    );
  };

  // Stats calculation
  const stats = useMemo(() => {
    const totalTopics = STUDY_PLAN.reduce((acc, mod) => acc + mod.topics.length, 0);
    const completedCount = completedTopics.length;
    const percentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
    
    return { totalTopics, completedCount, percentage };
  }, [completedTopics]);

  const getModuleProgress = (module: Module) => {
    const completedInModule = module.topics.filter(t => completedTopics.includes(t.id)).length;
    return Math.round((completedInModule / module.topics.length) * 100);
  };

  return (
    <div className="flex flex-col h-screen bg-cyber-bg text-cyber-text font-sans overflow-hidden relative">

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Unified Aabeltech + App Header */}
      <header style={{
        background: 'linear-gradient(135deg, #051535 0%, #0a1f4a 45%, #0d2660 75%, #051535 100%)',
        borderBottom: '1px solid rgba(0,200,255,0.2)',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
        zIndex: 40,
      }}>
        {/* Dot grid background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(0,200,255,0.15) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          opacity: 0.5,
          pointerEvents: 'none',
        }} />
        {/* Glow ring */}
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%,-50%)',
          width: '340px', height: '340px', borderRadius: '50%',
          border: '1px solid rgba(0,200,255,0.1)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%,-50%)',
          width: '200px', height: '200px', borderRadius: '50%',
          border: '1px solid rgba(0,200,255,0.07)',
          pointerEvents: 'none',
        }} />

        {/* Top brand strip */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '8px 28px',
          borderBottom: '1px solid rgba(0,200,255,0.08)',
          position: 'relative', zIndex: 1,
        }}>
          {/* Left: website */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(0,200,255,0.6)" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <a href="https://www.abeltech.com" target="_blank" rel="noopener noreferrer"
               style={{ color: 'rgba(0,200,255,0.65)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.05em', textDecoration: 'none' }}>
              www.abeltech.com
            </a>
          </div>
          {/* Center: brand name */}
          <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="/aabeltech-logo.jpg"
              alt="Aabeltech"
              style={{
                width: '38px', height: '38px', objectFit: 'cover',
                borderRadius: '8px', border: '1px solid rgba(0,200,255,0.3)',
                boxShadow: '0 0 10px rgba(0,200,255,0.2)',
              }}
            />
            <div>
              <span style={{
                fontSize: 'clamp(18px, 3vw, 30px)', fontWeight: '900',
                color: '#00C8FF', letterSpacing: '-0.02em', lineHeight: '1',
                fontFamily: 'Georgia, serif',
                textShadow: '0 0 24px rgba(0,200,255,0.45)',
              }}>Aabeltech</span>
              <span style={{
                display: 'block', fontSize: '8px', fontWeight: '700',
                letterSpacing: '0.22em', color: 'rgba(180,220,255,0.6)',
                textTransform: 'uppercase', marginTop: '1px',
              }}>Construyendo Futuro Digital</span>
            </div>
          </div>
          {/* Right: email */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(0,200,255,0.6)" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span style={{ color: 'rgba(0,200,255,0.65)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.05em' }}>helloabel@gmail.com</span>
          </div>
        </div>

        {/* Bottom nav strip: mobile menu + CyberSec_Plan title + stats */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 24px', position: 'relative', zIndex: 1,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button 
              onClick={() => setIsSidebarOpen(true)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '6px', borderRadius: '8px', border: '1px solid rgba(0,200,255,0.2)',
                background: 'transparent', cursor: 'pointer', color: '#00C8FF',
              }}
              className="lg:hidden"
            >
              <BookOpen style={{ width: '18px', height: '18px' }} />
            </button>
            {/* AT logo badge */}
            <div style={{
              width: '42px', height: '42px', borderRadius: '10px',
              border: '1px solid rgba(0,200,255,0.35)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, boxShadow: '0 0 14px rgba(0,200,255,0.25)',
              overflow: 'hidden', background: '#ffffff',
            }}>
              <img
                src="/aabeltech-logo.jpg"
                alt="Aabeltech logo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h1 style={{
              fontSize: 'clamp(16px, 2.5vw, 28px)', fontWeight: '900',
              letterSpacing: '-0.04em', textTransform: 'uppercase',
              color: '#00C8FF', lineHeight: '1', margin: 0,
            }}>
              Cyber<span style={{ opacity: 0.75 }}>Sec</span>_Plan
            </h1>
          </div>
          <div id="global-stats" style={{ display: 'flex', gap: '24px' }}>
            <div style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: '800', color: '#e2e8f0', lineHeight: '1', marginBottom: '2px' }}>{stats.percentage}%</span>
              <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(148,163,184,0.7)', fontWeight: '700' }}>Progreso</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: '800', color: '#e2e8f0', lineHeight: '1', marginBottom: '2px' }}>{stats.completedCount}/{stats.totalTopics}</span>
              <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(148,163,184,0.7)', fontWeight: '700' }}>Temas</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <aside className={`
          absolute inset-y-0 left-0 z-40 lg:relative lg:z-0
          w-[280px] lg:w-[320px] bg-gradient-to-b from-cyber-panel to-cyber-bg border-r border-cyber-border 
          transform transition-transform duration-300 ease-out custom-scrollbar overflow-y-auto p-5
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <span className="text-[10px] font-black uppercase tracking-widest text-cyber-accent">Seleccionar Módulo</span>
            <button onClick={() => setIsSidebarOpen(false)} className="text-cyber-text-dim hover:text-white">
              <ChevronDown className="w-5 h-5 rotate-90" />
            </button>
          </div>
          <div className="space-y-2">
            {STUDY_PLAN.map((module) => {
              const isActive = activeModuleId === module.id;
              const progress = getModuleProgress(module);
              return (
                <button
                  key={module.id}
                  onClick={() => {
                    setActiveModuleId(module.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group ${
                    isActive 
                      ? 'bg-cyber-accent/15 border-cyber-accent shadow-[0_0_20px_rgba(0,240,255,0.05)]' 
                      : 'border-transparent hover:bg-white/5'
                  }`}
                >
                  <span className={`block font-bold text-sm mb-1 transition-colors ${isActive ? 'text-cyber-accent' : 'text-cyber-text'}`}>
                    {module.title}
                  </span>
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-wider text-cyber-text-dim">
                    <span>{module.difficulty}</span>
                    <span>{module.topics.filter(t => completedTopics.includes(t.id)).length}/{module.topics.length}</span>
                  </div>
                  {/* Progress Line */}
                  <div className="w-full h-1 bg-white/10 mt-3 rounded-full overflow-hidden">
                    <motion.div 
                      initial={false}
                      animate={{ width: `${progress}%` }}
                      className={`h-full ${isActive ? 'bg-cyber-accent' : 'bg-cyber-text-dim/50'}`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Content Pane */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-12 bg-cyber-bg relative custom-scrollbar">
          {/* Active Module Header */}
          <div className="mb-8 lg:mb-12">
            <span className="text-[8px] lg:text-[10px] uppercase tracking-[0.2em] text-cyber-text-dim font-black mb-2 block">
              Módulo Seleccionado
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[64px] font-[900] leading-tight lg:leading-[0.85] uppercase tracking-tighter text-white max-w-2xl">
                {activeModule.title}
              </h2>
              <div className="px-3 py-1 lg:px-4 lg:py-2 border-2 border-cyber-text-dim/30 rounded-lg text-[10px] lg:text-[12px] font-[900] uppercase tracking-widest text-cyber-text-dim self-start lg:self-end shrink-0">
                {activeModule.difficulty}
              </div>
            </div>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 mb-16">
            {activeModule.topics.map((topic) => {
              const isChecked = completedTopics.includes(topic.id);
              return (
                <div 
                  key={topic.id}
                  onClick={() => { setSelectedTopic(topic); setIsPlaying(false); }}
                  className="bg-cyber-panel border border-cyber-border p-5 rounded-2xl flex items-center gap-5 hover:border-cyber-accent/50 transition-colors group cursor-pointer"
                >
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTopic(topic.id);
                    }}
                    className={`w-6 h-6 border-2 rounded flex items-center justify-center transition-all ${
                      isChecked 
                        ? 'bg-cyber-accent border-cyber-accent text-cyber-bg' 
                        : 'border-cyber-accent/30 hover:border-cyber-accent'
                    }`}
                  >
                    {isChecked && <CheckCircle2 className="w-4 h-4 font-bold" />}
                  </button>
                  <div className="flex-1">
                    <h4 className={`text-base font-bold mb-1 transition-colors ${isChecked ? 'text-cyber-text-dim line-through' : 'text-white'}`}>
                      {topic.title}
                    </h4>
                    <div className="flex gap-4">
                      <span className="text-[11px] font-bold text-cyber-accent hover:text-white transition-colors flex items-center gap-1">
                        VER ESTUDIO <Info className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

      {/* Resources Strategic Section */}
          <section className="mt-auto border-t border-cyber-border pt-10 pb-6 hidden sm:block">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-cyber-text-dim mb-6 text-center lg:text-left">
              Recursos Estratégicos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/3 p-5 rounded-xl border border-white/5 hover:bg-white/5 transition-colors">
                <strong className="block text-[10px] uppercase font-black tracking-widest text-cyber-accent mb-2">Teoría Base</strong>
                <p className="text-xs text-cyber-text-dim leading-relaxed">
                  Accede a la documentación técnica y las guías de referencia del módulo actual.
                </p>
              </div>
              <div className="bg-white/3 p-5 rounded-xl border border-white/5 hover:bg-white/5 transition-colors">
                <strong className="block text-[10px] uppercase font-black tracking-widest text-cyber-accent mb-2">Laboratorio Virtual</strong>
                <p className="text-xs text-cyber-text-dim leading-relaxed">
                  Prácticas recomendadas en entornos controlados como Kali Linux y máquinas virtuales.
                </p>
              </div>
              <div className="bg-white/3 p-5 rounded-xl border border-white/5 hover:bg-white/5 transition-colors">
                <strong className="block text-[10px] uppercase font-black tracking-widest text-cyber-accent mb-2">Video Training</strong>
                <p className="text-xs text-cyber-text-dim leading-relaxed">
                  Sesiones de video explicativas seleccionadas en español para refuerzo visual.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedTopic && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setSelectedTopic(null); setIsPlaying(false); }}
              className="absolute inset-0 bg-cyber-bg/95 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full h-full sm:h-auto sm:max-w-4xl max-h-screen bg-cyber-bg border-x sm:border border-cyber-border sm:rounded-[32px] overflow-hidden flex flex-col shadow-2xl z-50 overflow-y-auto custom-scrollbar"
            >
              <div className="p-6 lg:p-12">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {selectedTopic.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-cyber-accent/10 text-cyber-accent px-3 py-1 rounded-full border border-cyber-accent/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl lg:text-4xl font-[900] text-white uppercase tracking-tighter leading-none">{selectedTopic.title}</h2>
                  </div>
                  <button onClick={() => { setSelectedTopic(null); setIsPlaying(false); }} className="text-cyber-text-dim hover:text-white p-2">
                    <ChevronDown className="w-8 h-8 rotate-180" />
                  </button>
                </div>

                <div className="space-y-8">
                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-cyber-accent rounded-full animate-pulse" />
                      <h3 className="text-xs font-black uppercase tracking-widest text-cyber-text-dim">Fundamento Teórico</h3>
                    </div>
                    <div className="bg-[#1C1E26] p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-white/5 text-cyber-text leading-[1.8] text-[14px] lg:text-[15px] font-medium shadow-inner">
                      <p className="opacity-90">{selectedTopic.theory}</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-cyber-accent mb-6 flex items-center gap-2">
                       <span className="w-8 h-[1px] bg-cyber-accent/30" /> Material de Entrenamiento
                    </h3>
                    
                    {/* Embedded Video Player with Cover/Thumbnail support */}
                    {selectedTopic.resources.some(r => r.type === 'video') && (
                      <div className="mb-8 flex flex-col items-center gap-4">
                        <div 
                          className={`relative w-full max-w-lg rounded-3xl overflow-hidden border-2 shadow-[0_0_40px_rgba(0,0,0,0.5)] aspect-video bg-black group/video cursor-pointer transition-all duration-300 ${isPlaying ? 'border-cyber-accent/20' : 'border-cyber-accent/40 hover:border-cyber-accent hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]'}`}
                          onClick={() => setIsPlaying(true)}
                        >
                          {isPlaying ? (
                            <iframe
                              width="100%"
                              height="100%"
                              src={`${getYoutubeEmbedUrl(selectedTopic.resources.find(r => r.type === 'video')?.url || '')}?autoplay=1`}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              className="relative z-10 w-full h-full"
                            />
                          ) : (
                            <>
                              <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/video:scale-110"
                                style={{ backgroundImage: `url(${getYoutubeThumbnail(selectedTopic.resources.find(r => r.type === 'video')?.url || '')})` }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 flex items-center justify-center backdrop-blur-[2px] transition-all group-hover/video:backdrop-blur-sm">
                                <div className="w-20 h-20 bg-cyber-bg/80 border border-cyber-accent/50 rounded-full flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all transform scale-90 group-hover/video:scale-110 group-hover/video:bg-cyber-accent/20 group-hover/video:border-cyber-accent">
                                  <Youtube className="w-10 h-10 text-white ml-1 group-hover/video:text-cyber-accent transition-colors" />
                                </div>
                              </div>
                              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                                <span className="text-[10px] font-black text-white px-4 py-2 bg-black/60 rounded-full border border-white/10 uppercase tracking-[0.2em] backdrop-blur-sm shadow-xl group-hover/video:bg-cyber-accent/90 group-hover/video:text-cyber-bg group-hover/video:border-transparent transition-all">
                                  Reproducir Sesión
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                        
                        <div className="w-full max-w-lg bg-cyber-accent/5 border border-cyber-accent/20 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center shadow-inner">
                              <Youtube className="w-4 h-4 text-red-500" />
                            </div>
                            <span className="text-[11px] font-black text-cyber-accent uppercase tracking-wider">Referencia Directa:</span>
                          </div>
                          <a 
                            href={selectedTopic.resources.find(r => r.type === 'video')?.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[10px] font-black px-6 py-3 bg-cyber-accent/10 hover:bg-cyber-accent text-white hover:text-cyber-bg rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95 border border-cyber-accent/20 hover:border-transparent"
                          >
                            ABRIR EN YOUTUBE <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-4">
                      {selectedTopic.resources.map((res, idx) => (
                        <a 
                          key={idx}
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 lg:p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-cyber-accent hover:bg-cyber-accent/10 lg:hover:translate-x-2 transition-all duration-300 group shadow-lg"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-cyber-bg flex items-center justify-center border border-white/5 group-hover:border-cyber-accent/30">
                              {res.type === 'video' ? <Youtube className="w-4 h-4 text-red-500" /> : <Globe className="w-4 h-4 text-cyber-accent" />}
                            </div>
                            <div>
                               <span className="block text-[8px] lg:text-[10px] uppercase font-black tracking-widest text-cyber-text-dim mb-1 group-hover:text-cyber-accent">
                                 {res.type === 'video' ? 'Sesión de Video' : 'Documentación Web'}
                               </span>
                               <span className="text-sm lg:text-base font-black text-white group-hover:text-cyber-accent leading-none">{res.title}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="hidden lg:block text-[10px] font-black text-cyber-accent opacity-0 group-hover:opacity-100 transition-opacity">ACCEDER</span>
                            <ExternalLink className="w-4 h-4 lg:w-5 h-5 text-cyber-text-dim group-hover:text-cyber-accent" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="mt-12 pt-8 border-t border-cyber-border flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div className="text-[9px] lg:text-[10px] font-bold text-cyber-text-dim italic text-center lg:text-left">
                    * Todos los recursos son externos y seleccionados bajo criterios de calidad técnica.
                  </div>
                  <button 
                    onClick={() => { setSelectedTopic(null); setIsPlaying(false); }}
                    className="w-full sm:w-auto px-10 py-4 bg-cyber-accent text-cyber-bg font-black uppercase tracking-[0.15em] text-[10px] lg:text-xs rounded-2xl hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all transform active:scale-95"
                  >
                    CERRAR EXPEDIENTE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2A2D3A;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #00F0FF;
        }
      `}</style>
    </div>
  );
}


