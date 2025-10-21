import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [donationAmount, setDonationAmount] = useState("");

  const rituals = [
    {
      title: "Утренняя Молитва",
      description: "Встречайте рассвет с благословением Виталия",
      icon: "Sunrise",
      time: "6:00 - 7:00"
    },
    {
      title: "Священное Омовение",
      description: "Очищение тела и духа в священных водах",
      icon: "Droplets",
      time: "12:00 - 13:00"
    },
    {
      title: "Вечернее Служение",
      description: "Завершение дня в присутствии Божественного",
      icon: "Moon",
      time: "20:00 - 21:00"
    }
  ];

  const teachings = [
    {
      title: "Первое Откровение",
      text: "В начале был Виталий, и Виталий был источником всего сущего. Через него проистекает вечная мудрость и божественная сила."
    },
    {
      title: "Путь Просветления",
      text: "Следуй заповедям Виталия: будь велик в помыслах, чист в деяниях, и щедр в сердце своём."
    },
    {
      title: "Священный Завет",
      text: "Тот, кто посвятит себя служению Виталию, обретёт вечную благодать и покровительство в земной жизни и за её пределами."
    }
  ];

  const gallery = [
    {
      url: "https://cdn.poehali.dev/projects/f32a30b4-ad34-43e4-aada-2261b80a0697/files/09855278-be5b-4fb4-9c57-9e40620aeee0.jpg",
      title: "Символ Божественности"
    },
    {
      url: "https://cdn.poehali.dev/projects/f32a30b4-ad34-43e4-aada-2261b80a0697/files/0560a0bd-82e7-405e-b5c7-b944482b1d1b.jpg",
      title: "Священный Алтарь"
    },
    {
      url: "https://cdn.poehali.dev/projects/f32a30b4-ad34-43e4-aada-2261b80a0697/files/1257ad57-a04f-410a-ab37-0f2c1ba78fc0.jpg",
      title: "Древние Писания"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Crown" className="text-accent animate-glow" size={32} />
            <span className="text-2xl font-bold text-accent">ВИТАЛИЙ</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">Главная</a>
            <a href="#teachings" className="text-foreground hover:text-accent transition-colors">Учение</a>
            <a href="#rituals" className="text-foreground hover:text-accent transition-colors">Ритуалы</a>
            <a href="#gallery" className="text-foreground hover:text-accent transition-colors">Галерея</a>
            <a href="#donate" className="text-foreground hover:text-accent transition-colors">Пожертвования</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background z-0"></div>
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/9369329c-d938-449d-a0ad-0129e12b98b1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
          <Icon name="Sparkles" className="mx-auto text-accent mb-6 animate-glow" size={64} />
          <h1 className="text-6xl md:text-8xl mb-6 text-accent drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]">
            БОГ ВИТАЛИЙ
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-foreground/90 max-w-3xl mx-auto">
            Величие, Мудрость, Вечность
          </p>
          <p className="text-lg md:text-xl mb-12 text-foreground/70 max-w-2xl mx-auto">
            Присоединяйтесь к священному культу поклонения Всевышнему Виталию. 
            Откройте врата к божественной мудрости и вечному благословению.
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl px-12 py-6 shadow-[0_0_30px_rgba(255,215,0,0.3)]"
          >
            <Icon name="Flame" className="mr-2" size={24} />
            Начать Путь
          </Button>
        </div>
      </section>

      {/* Teachings Section */}
      <section id="teachings" className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Icon name="BookOpen" className="mx-auto text-accent mb-4 animate-glow" size={48} />
            <h2 className="text-5xl md:text-6xl mb-4 text-accent">Священное Учение</h2>
            <p className="text-xl text-foreground/70">Откровения Всевышнего Виталия</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teachings.map((teaching, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card border-primary/30 hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl mb-4 text-accent">{teaching.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{teaching.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rituals Section */}
      <section id="rituals" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Icon name="Sparkles" className="mx-auto text-accent mb-4 animate-glow" size={48} />
            <h2 className="text-5xl md:text-6xl mb-4 text-accent">Священные Ритуалы</h2>
            <p className="text-xl text-foreground/70">Ежедневные практики служения</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {rituals.map((ritual, index) => (
              <Card 
                key={index}
                className="p-8 bg-card border-primary/30 hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon 
                  name={ritual.icon as any} 
                  className="text-accent mb-4 group-hover:scale-110 transition-transform" 
                  size={48} 
                />
                <h3 className="text-2xl mb-2 text-accent">{ritual.title}</h3>
                <p className="text-sm text-accent/70 mb-4">{ritual.time}</p>
                <p className="text-foreground/80">{ritual.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Icon name="Image" className="mx-auto text-accent mb-4 animate-glow" size={48} />
            <h2 className="text-5xl md:text-6xl mb-4 text-accent">Священная Галерея</h2>
            <p className="text-xl text-foreground/70">Божественные образы и символы</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {gallery.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg border-2 border-primary/30 hover:border-accent transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                  <h3 className="text-2xl text-accent">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Icon name="HandHeart" className="mx-auto text-accent mb-4 animate-glow" size={48} />
              <h2 className="text-5xl md:text-6xl mb-4 text-accent">Священные Пожертвования</h2>
              <p className="text-xl text-foreground/70">Поддержите культ Виталия</p>
            </div>

            <Card className="p-8 bg-card border-primary/30 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <div className="space-y-6">
                <div>
                  <label className="block text-lg mb-2 text-foreground">Ваше имя</label>
                  <Input 
                    placeholder="Введите ваше имя" 
                    className="bg-background border-primary/30 focus:border-accent"
                  />
                </div>
                
                <div>
                  <label className="block text-lg mb-2 text-foreground">Сумма пожертвования</label>
                  <Input 
                    type="number"
                    placeholder="1000" 
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="bg-background border-primary/30 focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2 text-foreground">Послание Виталию</label>
                  <Textarea 
                    placeholder="Ваши слова благодарности и молитвы..." 
                    className="bg-background border-primary/30 focus:border-accent min-h-32"
                  />
                </div>

                <Button 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-xl py-6 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                >
                  <Icon name="Heart" className="mr-2" size={24} />
                  Совершить Пожертвование
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card/30 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <Icon name="Crown" className="mx-auto text-accent mb-4 animate-glow" size={40} />
          <p className="text-foreground/70 mb-2">Культ Поклонения Богу Виталию</p>
          <p className="text-foreground/50 text-sm">© 2025 Все права принадлежат Всевышнему</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
