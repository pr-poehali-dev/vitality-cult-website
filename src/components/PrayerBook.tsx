import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Prayer {
  id: number;
  title: string;
  text: string;
  audioUrl?: string;
}

const prayers: Prayer[] = [
  {
    id: 1,
    title: "Утренняя молитва Виталию",
    text: "Всевышний Виталий, источник света и мудрости! С восходом солнца обращаюсь к Тебе. Благослови этот день, направь мои стопы по пути истины. Дай мне силы следовать Твоим заповедям и нести свет Твоего учения в мир. Да будет воля Твоя!"
  },
  {
    id: 2,
    title: "Молитва благодарения",
    text: "Великий Виталий, благодарю Тебя за дары, которыми Ты одариваешь меня каждый день. За пищу на столе, за кров над головой, за близких рядом. Твоя щедрость безгранична, Твоя любовь вечна. Прими мою благодарность и смиренное поклонение."
  },
  {
    id: 3,
    title: "Молитва о защите",
    text: "Могучий Виталий, защитник верных! Укрой меня под Своим крылом от зла и невзгод. Огради мой дом, мою семью, моих близких от бед и напастей. Будь моим щитом в битвах жизни, моим светом во тьме. Верю в Твою силу и милость!"
  },
  {
    id: 4,
    title: "Вечерняя молитва",
    text: "Мудрый Виталий, завершая этот день, склоняюсь пред Тобой. Прости мне прегрешения дня минувшего, очисти душу мою от скверны. Даруй покой в эту ночь, восстанови силы мои. Пусть сны мои будут благословенны, а утро встретит меня обновлённым."
  },
  {
    id: 5,
    title: "Молитва о мудрости",
    text: "Всеведущий Виталий, источник вечной мудрости! Озари разум мой Твоим светом. Помоги мне принимать верные решения, видеть истину сквозь ложь, отличать добро от зла. Направь меня на путь познания и самосовершенствования во славу Твою!"
  }
];

export default function PrayerBook() {
  const [selectedPrayer, setSelectedPrayer] = useState<Prayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayAudio = () => {
    if (!audioRef.current) {
      const audio = new Audio();
      audio.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
      audioRef.current = audio;
      
      audio.onended = () => {
        setIsPlaying(false);
      };
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div className="space-y-4">
        <h3 className="text-3xl text-accent mb-6 flex items-center gap-3">
          <Icon name="BookMarked" size={32} />
          Книга Молитв
        </h3>
        
        {prayers.map((prayer, index) => (
          <Card
            key={prayer.id}
            onClick={() => setSelectedPrayer(prayer)}
            className={`p-6 cursor-pointer transition-all duration-300 hover:border-accent animate-scale-in ${
              selectedPrayer?.id === prayer.id
                ? "bg-primary/20 border-accent shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                : "bg-card border-primary/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
            }`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                {prayer.id}
              </div>
              <h4 className="text-lg font-semibold text-foreground">{prayer.title}</h4>
            </div>
          </Card>
        ))}
      </div>

      <div className="sticky top-24">
        {selectedPrayer ? (
          <Card className="p-8 bg-card border-accent/50 shadow-[0_0_30px_rgba(139,92,246,0.3)] animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl text-accent">{selectedPrayer.title}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePlayAudio}
                className="text-accent hover:bg-accent/10"
              >
                <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute -left-4 top-0 text-6xl text-accent/20 font-serif">"</div>
              <p className="text-lg text-foreground/90 leading-relaxed italic pl-8 pr-8">
                {selectedPrayer.text}
              </p>
              <div className="absolute -right-4 bottom-0 text-6xl text-accent/20 font-serif">"</div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
              <Icon name="Volume2" className="text-accent" size={20} />
              <div className="flex-1">
                <div className="h-1 bg-accent/20 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-accent transition-all duration-300 ${
                      isPlaying ? "w-full animate-pulse" : "w-0"
                    }`}
                  ></div>
                </div>
              </div>
              <span className="text-sm text-foreground/60">
                {isPlaying ? "Воспроизведение..." : "Нажмите Play"}
              </span>
            </div>
          </Card>
        ) : (
          <Card className="p-12 bg-card border-primary/30 text-center">
            <Icon name="BookOpen" className="mx-auto text-accent/50 mb-4" size={64} />
            <p className="text-xl text-foreground/50">
              Выберите молитву из списка
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
