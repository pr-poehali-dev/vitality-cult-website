import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const galleryImages = [
    {
      url: "https://cdn.poehali.dev/projects/f32a30b4-ad34-43e4-aada-2261b80a0697/files/09855278-be5b-4fb4-9c57-9e40620aeee0.jpg",
      title: "Священный символ Виталия"
    },
    {
      url: "https://cdn.poehali.dev/projects/f32a30b4-ad34-43e4-aada-2261b80a0697/files/0560a0bd-82e7-405e-b5c7-b944482b1d1b.jpg",
      title: "Алтарь поклонения"
    },
    {
      url: "https://cdn.poehali.dev/projects/f32a30b4-ad34-43e4-aada-2261b80a0697/files/1257ad57-a04f-410a-ab37-0f2c1ba78fc0.jpg",
      title: "Древние писания"
    }
  ];

  const rituals = [
    {
      title: "Утреннее Возношение",
      description: "Встречая рассвет, вознеси молитву Виталию",
      icon: "Sunrise",
      time: "На восходе солнца"
    },
    {
      title: "Ритуал Очищения",
      description: "Священный обряд освобождения от мирских тягот",
      icon: "Sparkles",
      time: "Каждое полнолуние"
    },
    {
      title: "Вечерняя Медитация",
      description: "Погружение в божественное присутствие",
      icon: "Moon",
      time: "При закате"
    },
    {
      title: "Великое Празднество",
      description: "Ежегодное торжество в честь Бога Виталия",
      icon: "Flame",
      time: "Раз в год"
    }
  ];

  const teachings = [
    {
      title: "Первая Истина",
      content: "Виталий есть источник всего сущего. В Его свете мы обретаем путь, в Его мудрости находим истину, в Его силе черпаем вдохновение."
    },
    {
      title: "Вторая Истина",
      content: "Служение Виталию есть служение высшему благу. Через преданность культу мы возвышаемся над обыденностью и приближаемся к божественному."
    },
    {
      title: "Третья Истина",
      content: "Роскошь и великолепие — отражение божественной славы. Виталий благословляет тех, кто чтит Его в великолепии и красоте."
    },
    {
      title: "Четвёртая Истина",
      content: "Единство верующих — сила культа. Вместе мы создаём храм духа, где Виталий обитает среди нас."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Flame" className="text-accent animate-glow" size={32} />
              <h1 className="text-2xl font-bold text-accent">Культ Виталия</h1>
            </div>
            <div className="hidden md:flex gap-8">
              {[
                { id: "home", label: "Главная" },
                { id: "teachings", label: "Учение" },
                { id: "rituals", label: "Ритуалы" },
                { id: "gallery", label: "Галерея" },
                { id: "donations", label: "Пожертвования" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? "text-accent" : "text-foreground/70"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <div className="mb-8">
            <Icon name="Crown" className="text-accent mx-auto animate-glow" size={80} />
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-6 text-accent leading-tight">
            Культ Виталия
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto font-light">
            Величественный путь познания божественной истины через поклонение Богу Виталию
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              onClick={() => scrollToSection("teachings")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              <Icon name="BookOpen" className="mr-2" size={20} />
              Познать Учение
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("rituals")}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg"
            >
              <Icon name="Sparkles" className="mr-2" size={20} />
              Обряды и Ритуалы
            </Button>
          </div>
        </div>
      </section>

      <section id="teachings" className="py-24 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Icon name="Book" className="text-accent mx-auto mb-4" size={48} />
            <h2 className="text-5xl font-bold mb-4 text-accent">Священное Учение</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Четыре фундаментальные истины, дарованные Виталием
            </p>
          </div>

          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            {teachings.map((teaching, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-primary/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-accent font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold">{teaching.title}</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 pt-2">
                  <p className="text-lg text-foreground/80 leading-relaxed pl-16">
                    {teaching.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="rituals" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Icon name="Flame" className="text-accent mx-auto mb-4 animate-glow" size={48} />
            <h2 className="text-5xl font-bold mb-4 text-accent">Священные Ритуалы</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Обряды поклонения и духовного возвышения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {rituals.map((ritual, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-accent/50 transition-all hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name={ritual.icon as any} className="text-accent" size={32} />
                  </div>
                  <CardTitle className="text-2xl text-accent">{ritual.title}</CardTitle>
                  <CardDescription className="text-accent/60 font-medium">
                    {ritual.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-center leading-relaxed">
                    {ritual.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Icon name="Image" className="text-accent mx-auto mb-4" size={48} />
            <h2 className="text-5xl font-bold mb-4 text-accent">Священная Галерея</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Образы божественной силы и величия
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-border hover:border-accent transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full aspect-square object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-xl font-semibold text-accent">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="donations" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="Heart" className="text-accent mx-auto mb-4 animate-glow" size={48} />
            <h2 className="text-5xl font-bold mb-4 text-accent">Священные Пожертвования</h2>
            <p className="text-xl text-foreground/70">
              Поддержите культ Виталия и обретите Его благословение
            </p>
          </div>

          <Card className="bg-card border-accent/30 shadow-lg shadow-accent/10">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-accent">
                Форма Пожертвования
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Каждое пожертвование приближает вас к божественной благодати
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Ваше имя</label>
                <Input
                  placeholder="Введите ваше имя"
                  className="bg-background border-border focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Электронная почта</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-background border-border focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Сумма пожертвования</label>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {["1000₽", "5000₽", "10000₽"].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      className="border-accent/30 hover:bg-accent hover:text-accent-foreground"
                    >
                      {amount}
                    </Button>
                  ))}
                </div>
                <Input
                  type="number"
                  placeholder="Или введите свою сумму"
                  className="bg-background border-border focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Послание (необязательно)</label>
                <Textarea
                  placeholder="Ваши слова благодарности Виталию..."
                  className="bg-background border-border focus:border-accent min-h-24"
                />
              </div>

              <Separator className="my-6" />

              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
              >
                <Icon name="Heart" className="mr-2" size={20} />
                Совершить Пожертвование
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                Все пожертвования направляются на развитие культа и служение Виталию
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card/50 border-t border-border py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Icon name="Flame" className="text-accent animate-glow" size={32} />
            <h3 className="text-2xl font-bold text-accent">Культ Виталия</h3>
          </div>
          <p className="text-foreground/60 mb-4">
            Слава Виталию! Да пребудет Его мудрость с нами!
          </p>
          <div className="flex justify-center gap-6 text-sm text-foreground/50">
            <span>© 2025 Культ Виталия</span>
            <span>•</span>
            <span>Все священные права защищены</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
