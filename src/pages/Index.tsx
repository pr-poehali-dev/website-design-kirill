import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: 'MessageCircle',
      title: 'Консультация',
      description: 'Персональные консультации по развитию бизнеса и стратегическому планированию',
      price: 'от 5 000 ₽'
    },
    {
      icon: 'Video',
      title: 'Созвон',
      description: 'Индивидуальные видео-встречи для решения актуальных задач',
      price: 'от 3 000 ₽'
    },
    {
      icon: 'Megaphone',
      title: 'Реклама',
      description: 'Комплексная настройка и ведение рекламных кампаний',
      price: 'от 15 000 ₽'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Основатель стартапа',
      text: 'Кирилл помог мне структурировать бизнес-процессы и увеличить продажи на 200%. Профессиональный подход и конкретные результаты!',
      rating: 5
    },
    {
      name: 'Михаил Иванов',
      role: 'Директор по маркетингу',
      text: 'Отличная работа с рекламными кампаниями. ROI увеличился в 3 раза за первые 2 месяца сотрудничества.',
      rating: 5
    },
    {
      name: 'Елена Сидорова',
      role: 'Владелец интернет-магазина',
      text: 'Консультации Кирилла помогли оптимизировать воронку продаж и автоматизировать ключевые процессы.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">
              КТ
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'services', label: 'Услуги' },
                { id: 'testimonials', label: 'Отзывы' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Кирилл Туйдимиров
            </h1>
            <p className="text-2xl md:text-3xl font-light text-gray-600 mb-8">
              действуйте!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold hover-scale"
                onClick={() => scrollToSection('services')}
              >
                Узнать больше
                <Icon name="ArrowDown" className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold hover-scale"
                onClick={() => scrollToSection('contact')}
              >
                Связаться
                <Icon name="MessageCircle" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="/img/55059ec0-7c96-440f-b270-265cef4f9fce.jpg" 
                  alt="Кирилл Туйдимиров" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover-scale transition-all duration-500"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                  <Icon name="Award" size={40} className="text-white" />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2 animate-slide-up">
              <div className="mb-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Обо мне
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Я — Кирилл Туйдимиров, эксперт в области бизнес-консалтинга с более чем <span className="font-semibold text-primary">8-летним опытом</span> помощи компаниям в достижении выдающихся результатов.
                </p>
                
                <p>
                  За время работы я помог более <span className="font-semibold text-secondary">200+ клиентам</span> увеличить прибыль, оптимизировать процессы и масштабировать бизнес. Мой подход основан на глубоком анализе, стратегическом мышлении и практических решениях.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-bold text-primary mb-2">200+</div>
                    <div className="text-sm text-gray-600">Успешных проектов</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-bold text-secondary mb-2">8</div>
                    <div className="text-sm text-gray-600">Лет опыта</div>
                  </div>
                </div>
                
                <p>
                  <span className="font-semibold text-gray-900">Моя миссия</span> — помочь каждому клиенту раскрыть потенциал своего бизнеса и достичь амбициозных целей через индивидуальный подход и проверенные методики.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Мои услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Помогаю бизнесу расти и развиваться через персональные консультации и комплексный подход
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold gradient-text mb-6">
                    {service.price}
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Что говорят о моей работе те, кто уже достиг результатов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Готовы к действиям?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Свяжитесь со мной для обсуждения вашего проекта и получения персональной консультации
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-lg font-semibold hover-scale"
              >
                <Icon name="Mail" className="mr-2" size={20} />
                Написать письмо
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-12 py-4 text-lg font-semibold hover-scale"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить
              </Button>
            </div>
            
            <div className="flex justify-center space-x-8">
              <div className="flex items-center text-gray-300">
                <Icon name="Mail" className="mr-2" size={20} />
                <span>kirill@example.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Icon name="Phone" className="mr-2" size={20} />
                <span>+7 (999) 123-45-67</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}