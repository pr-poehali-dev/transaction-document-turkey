import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const plans = [
    {
      name: "Базовый",
      price: "1 990",
      period: "мес",
      description: "Для начинающих проектов",
      features: [
        "До 1000 пользователей",
        "10 GB хранилища",
        "Базовая поддержка",
        "SSL сертификат"
      ],
      popular: false
    },
    {
      name: "Профессиональный",
      price: "4 990",
      period: "мес",
      description: "Для растущего бизнеса",
      features: [
        "До 10 000 пользователей",
        "100 GB хранилища",
        "Приоритетная поддержка 24/7",
        "SSL сертификат",
        "Аналитика и отчеты",
        "API доступ"
      ],
      popular: true
    },
    {
      name: "Корпоративный",
      price: "9 990",
      period: "мес",
      description: "Для больших проектов",
      features: [
        "Неограниченно пользователей",
        "1 TB хранилища",
        "Персональный менеджер",
        "SSL сертификат",
        "Расширенная аналитика",
        "API доступ",
        "Индивидуальные настройки"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Простое решение для вашего проекта
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
            Выберите подходящий тариф и начните работу прямо сейчас
          </p>
          <div className="pt-4">
            <Button size="lg" className="text-lg px-8 py-6">
              Начать бесплатно
            </Button>
          </div>
        </div>
      </section>

      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы</h2>
            <p className="text-lg text-muted-foreground">
              Прозрачные цены без скрытых платежей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-scale-in ${
                  plan.popular ? "border-primary border-2 shadow-xl" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-6">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">₽/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="pt-6">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    Выбрать тариф
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-12 text-center text-muted-foreground">
          <p>© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
