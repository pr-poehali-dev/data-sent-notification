import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 500);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-black/80 pointer-events-none"></div>
      
      <div className="absolute top-0 left-0 w-full h-1 bg-destructive/30 animate-scan"></div>
      
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8 flex justify-center">
          <Icon name="ShieldAlert" size={80} className="text-destructive animate-glitch" />
        </div>
        
        <div className="space-y-6">
          <div className="inline-block border-2 border-destructive bg-destructive/10 px-6 py-3 animate-blink">
            <p className="text-destructive font-bold text-lg tracking-wider">
              !!! СИСТЕМНОЕ ПРЕДУПРЕЖДЕНИЕ !!!
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-glitch mb-4">
            ВСЁ
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-destructive mb-6">
            ТЕБЯ ЗАДОКСИЛИ
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground">
            <p className="text-xl md:text-2xl border-l-4 border-destructive pl-4 py-2">
              Все данные отправлены
            </p>
            
            <p className="text-2xl md:text-3xl font-bold text-accent">
              Ждите
            </p>
          </div>
          
          <div className="mt-12 flex justify-center gap-2 text-destructive/60 text-sm">
            <span className="animate-blink">█</span>
            <span className="animate-blink" style={{ animationDelay: '0.2s' }}>█</span>
            <span className="animate-blink" style={{ animationDelay: '0.4s' }}>█</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 text-destructive/40 text-xs font-mono">
        ID: {Math.random().toString(36).substring(7).toUpperCase()}
      </div>
      
      <div className="absolute bottom-4 right-4 text-destructive/40 text-xs font-mono">
        {new Date().toLocaleTimeString('ru-RU')}
      </div>
    </div>
  );
};

export default Index;
