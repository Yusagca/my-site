import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            header: {
                title: "Halil Yusa Agca",
                home: "Home",
                projects: "Projects",
                skills: "Skills",
                experience: "Experience",
                social: "SOCIAL",
                about: "About Me",
                aboutDet: "Everything about me."
            },
            personal: {
                hi: "Hi!",
                name: "Halil Yuşa Ağca",
                address: "Güngören/İstanbul",
                phone: "05535272092",
                email: "hyagca@hotmail.com",
                dateOfBirth: "09-09-2003",
                placeOfBirth: "Istanbul",
                gender: "Male",
                maritalStatus: "Single",
                militaryStatus: "Not Completed",
                driverLicense: "B",
                linkedin: "https://www.linkedin.com/in/halil-yusa-a%C4%9Fca-26197b1b6/",
                descriptionLinked: "Connect with me professionally on LinkedIn.",
                descriptionInsta: "Follow me on Instagram for personal updates.",
                descriptionGit: "Explore my projects and repositories on GitHub."
            },
            summary: "Hello, my name is Halil. I am a dedicated professional in the field of technology and software development. During my third year of university, I worked part-time as a hybrid front-end developer at a company specializing in cloud security systems, where I gained solid experience in building modern, responsive web interfaces using HTML, CSS, JavaScript, TailwindCSS, TypeScript, and React. In my fourth year, I completed a 4-month internship at a company working on artificial intelligence and machine learning, where I contributed to projects focused on location-based data analysis. This website showcases a selection of the projects I have developed, along with interactive examples that demonstrate my technical expertise.",
            interests: ["Fitness", "Technology", "Motor Sports", "Football", "Cars", "Watches", "Shoes"],
            languages: ["English [B1]", "German [A2]"],
            visit: "Visit",
            footer: "This site created and developed by Halil Yuşa Ağca.",
            interestsTitle: "İnterests",
            languagesTitle: "Languages",
            projectsHeader: "Welcome to my personal showcase!",
            projectsIntro: "Here, you'll find a curated selection of projects that reflect both my technical skills and design vision. For more details, feel free to click the links inside each card or explore my complete portfolio.",
            workExperience: [
                {
                    position: "FrontEnd Developer",
                    company: "LPSChain",
                    location: "Istanbul",
                    description: "Developed web applications using HTML, CSS, JavaScript, Tailwind, and React.",
                    startDate: "June 2023",
                    endDate: "July 2024"
                },
                {
                    position: "Internship",
                    company: "Maptriks",
                    location: "Istanbul",
                    description: "Developed web applications using HTML, CSS, JavaScript, Tailwind, and React. And developed basic machine learning projects",
                    startDate: "February 2025",
                    endDate: "June 2025"
                },

            ],
            education: [
                {
                    degree: "Computer Engineering",
                    institution: "İnönü University",
                    location: "Malatya",
                    startDate: "September 2021",
                    endDate: "July 2025"
                }
            ],
            references: [
                {
                    name: "Salih Can Terekli",
                    phone: "05313574299",
                    company: "LPSChain"
                }
            ],
            skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Python", "Swift"],
            "projects": [

                {
                    "name": "Dershanet",
                    "description": "Dershanet is an interactive web application designed to help students find the most suitable learning centers. I independently developed the entire frontend from scratch using modern technologies like Next.js, TypeScript, TailwindCSS, Redux, and Axios. The backend is fully powered by RESTful APIs developed by my teammate, and the system interacts dynamically with those APIs. The platform includes user and institution dashboards, advanced filtering, review and rating modules, favorite lists, and detailed institution profile views.",
                    "images": [
                        { "src": "/assets/dershanet/dershanet1.png", "alt": "Home Page" },
                        { "src": "/assets/dershanet/dershanet2.png", "alt": "Institute Detail" },
                        { "src": "/assets/dershanet/dershanet3.png", "alt": "Filter Module" },
                        { "src": "/assets/dershanet/dershanet4.png", "alt": "Registration Page" }
                    ],
                    "url": "https://dershanet.com/",
                    "git": "https://github.com/Yusagca/dershanet/blob/main/README.md"
                },

                {
                    "name": "TahminPro App",
                    "description": "TahminPro App is a modern financial prediction platform that allows users to visually explore currency and inflation forecasts through interactive line charts. Powered by a SARIMA-based model, the application delivers a professional user experience with real-time data visualization, light/dark theme support, full-screen graph mode, and a fully responsive interface. This project has been supported by The Scientific and Technological Research Council of Türkiye (TÜBİTAK) under the 2209-A Program for Supporting Research Projects of Undergraduate Students. TahminPro was developed as an academically grounded project focused on financial data forecasting.",
                    "images": [
                        { "src": "/assets/tahmin/tahmin1.png", "alt": "Giriş Ekranı" },
                        { "src": "/assets/tahmin/tahmin2.png", "alt": "Ayar Ekranı" },
                        { "src": "/assets/tahmin/tahmin3.png", "alt": "Soru Ekranı" },
                        { "src": "/assets/tahmin/tahmin4.png", "alt": "Doğru Cevap" },
                    ],
                    "url": "https://tahminpro.vercel.app/",
                    "git": "https://github.com/Yusagca/currency-forecast-ai/blob/1931c127a0ec63eb56bb5d472496db1a493b65f0/README.md"
                },
                {
                    "name": "HaloWeather",
                    "description": "HaloWeather is a modern, interactive weather application that lets users explore real-time weather data by searching cities and regions directly on a global map. With animated red markers, smooth zoom transitions, a state-only marker system, and locale-aware smart search, it offers both performance and an elegant user experience.",
                    "images": [
                        { "src": "/assets/weather/weather1.png", "alt": "Cloudy" },
                        { "src": "/assets/weather/weather2.png", "alt": "Foggy" },
                        { "src": "/assets/weather/weather3.png", "alt": "Sunny" },
                        { "src": "/assets/weather/weather4.png", "alt": "Rainy" },
                    ],
                    "url": "https://haloweather.vercel.app/",
                    "git": "https://github.com/Yusagca/weatherapp/blob/main/README.md"
                },
                {
                    "name": "Quiz App",
                    "description": "The Quiz App is a React-based interactive quiz platform that fetches questions from the Open Trivia Database (OpenTDB). Users can customize the quiz by selecting the number of questions, categories, and difficulty levels. The app includes features like a countdown timer, real-time feedback for answers, and score tracking.",
                    "images": [
                        { "src": "/assets/quiz/quiz1.png", "alt": "Giriş Ekranı" },
                        { "src": "/assets/quiz/quiz2.png", "alt": "Ayar Ekranı" },
                        { "src": "/assets/quiz/quiz3.png", "alt": "Soru Ekranı" },
                        { "src": "/assets/quiz/quiz4.png", "alt": "Doğru Cevap" },

                    ],
                    "url": "https://quiz-app-blush-seven-64.vercel.app/",
                    "git": "https://github.com/Yusagca/quiz-app/blob/main/README.md"
                },


            ],
            try: "Click for try this app.",
            details: "Click for detailed and technical information."


        }
    },









    tr: {
        translation: {
            header: {
                title: "Halil Yuşa Ağca",
                home: "Ana Sayfa",
                projects: "Projelerim",
                skills: "Yetenekler",
                experience: "Deneyim",
                social: "Sosyal",
                about: "Hakkımda",
                aboutDet: "Benim hakkımda her şeyi burada bulabilirsiniz."
            },
            personal: {
                hi: "Merhaba!",
                name: "Halil Yuşa Ağca",
                address: "Güngören/İstanbul",
                phone: "05535272092",
                email: "hyagca@hotmail.com",
                dateOfBirth: "09-09-2003",
                placeOfBirth: "İstanbul",
                gender: "Erkek",
                maritalStatus: "Bekar",
                militaryStatus: "Yapmadı",
                driverLicense: "B",
                linkedin: "https://www.linkedin.com/in/halil-yusa-a%C4%9Fca-26197b1b6/",
                descriptionLinked: "Benimle LinkedIn üzerinden profesyonel bağlantı kurun.",
                descriptionInsta: "Beni İnstagramdan takip edin.",
                descriptionGit: "Projelerime ve Repolarıma göz atın."
            },
            summary: "Merhaba, ben Halil. Teknoloji ve yazılım geliştirme alanında kendini geliştirmiş bir profesyonelim. Üniversite üçüncü sınıfta, bulut tabanlı güvenlik sistemleri geliştiren bir firmada yarı zamanlı hibrit front-end geliştirici olarak çalıştım. Bu süreçte HTML, CSS, JavaScript, TailwindCSS, TypeScript ve React kullanarak modern ve duyarlı web arayüzleri geliştirme konusunda deneyim kazandım. Dördüncü sınıfta ise, yapay zeka ve makine öğrenmesi alanında çalışan bir şirkette 4 ay süreyle staj yaptım. Bu staj kapsamında, lokasyon tabanlı veri analizi projelerinde görev aldım. Bu web sitesinde, geliştirdiğim projelerden bazılarını ve teknik yetkinliklerimi yansıtan örnek uygulamaları inceleyebilirsiniz.",
            interests: ["Fitness", "Teknoloji", "Motor Sporları", "Futbol", "Arabalar", "Saatler", "Ayakkabılar"],
            languages: ["İngilizce [B1]", "Almanca [A2]"],
            visit: "Git",
            footer: "Bu site Halil Yuşa Ağca tarafından hazırlanıp geliştirilmiştir.",
            interestsTitle: "İlgi Alanları",
            languagesTitle: "Diller",
            projectsHeader: "Sergime Hoşgeldiniz!",
            projectsIntro: "Burada, hem teknik yetkinliğimi hem de tasarım vizyonumu yansıtan seçilmiş projelerimi bulabilirsiniz. Daha fazla detay için her bir kartın içindeki bağlantılara tıklayabilir ya da portföyümün tamamını keşfedebilirsiniz.",
            workExperience: [
                {
                    position: "FrontEnd Developer",
                    company: "LPSChain",
                    location: "İstanbul",
                    description: "HTML, CSS, JavaScript, Tailwind ve React kullanarak web uygulamaları geliştirdim.",
                    startDate: "Haziran 2023",
                    endDate: "Temmuz 2024"
                },
                {
                    position: "Zorunlu Staj",
                    company: "Maptriks",
                    location: "Istanbul",
                    description: "HTML, CSS, JavaScript, Tailwind ve React kullanarak web uygulamaları geliştirdim. Basit makine öğrenmesi projeleri geliştirdim.",
                    startDate: "Şubat 2025",
                    endDate: "Haziran 2025"
                },
            ],
            education: [
                {
                    degree: "Bilgisayar Mühendisliği",
                    institution: "İnönü Üniversitesi",
                    location: "Malatya",
                    startDate: "Eylül 2021",
                    endDate: "Temmuz 2025"
                }
            ],
            references: [
                {
                    name: "Salih Can Terekli",
                    phone: "05313574299",
                    company: "LPSChain"
                }
            ],
            skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Python", "Swift"],
            projects: [
                {
                    "name": "Dershanet",
                    "description": "Dershanet, öğrencilerin en uygun dershaneyi bulmalarını kolaylaştıran etkileşimli bir web uygulamasıdır. Sıfırdan tüm frontend geliştirmeleri tarafımdan yapılmıştır. Next.js, TypeScript, TailwindCSS, Redux ve Axios gibi modern teknolojiler kullanılarak kullanıcı dostu ve performanslı bir arayüz tasarlanmıştır. Backend kısmı proje ortağım tarafından oluşturulan RESTful API’lerle sağlanmakta olup, sistem bu API’lerle tamamen dinamik çalışmaktadır. Uygulamada kullanıcı ve kurum panelleri, filtreleme sistemi, yorum ve puanlama modülleri, favori listesi ve detaylı dershane inceleme ekranları bulunmaktadır.",
                    "images": [
                        { "src": "/assets/dershanet/dershanet1.png", "alt": "Ana Sayfa" },
                        { "src": "/assets/dershanet/dershanet2.png", "alt": "Dershane Detay" },
                        { "src": "/assets/dershanet/dershanet3.png", "alt": "Filtreleme Modülü" },
                        { "src": "/assets/dershanet/dershanet4.png", "alt": "Kayıt Ekranı" }
                    ],
                    "url": "https://dershanet.com",
                    "git": "https://github.com/Yusagca/dershanet/blob/main/README.md"
                },
                {
                    "name": "TahminPro App",
                    "description": "TahminPro App, kullanıcıların döviz kurları ve enflasyon oranlarına ilişkin öngörüleri grafiksel olarak inceleyebileceği modern bir finansal tahmin platformudur. Gerçek verilerle çalışan SARIMA modeli tabanlı bu uygulama, kullanıcı dostu arayüzü, light/dark tema desteği, tam ekran grafik modu ve mobil uyumlu tasarımı ile profesyonel düzeyde bir kullanıcı deneyimi sunar. Bu proje, Türkiye Bilimsel ve Teknolojik Araştırma Kurumu (TÜBİTAK) tarafından 2209-A Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı kapsamında desteklenmiştir. TahminPro, akademik geçerliliği olan ve finansal veri tahminlerine odaklanan bir öğrenci projesi olarak geliştirilmiştir.",
                    "images": [
                        { "src": "/assets/tahmin/tahmin1.png", "alt": "Giriş Ekranı" },
                        { "src": "/assets/tahmin/tahmin2.png", "alt": "Ayar Ekranı" },
                        { "src": "/assets/tahmin/tahmin3.png", "alt": "Soru Ekranı" },
                        { "src": "/assets/tahmin/tahmin4.png", "alt": "Doğru Cevap" },
                    ],
                    "url": "https://tahminpro.vercel.app/",
                    "git": "https://github.com/Yusagca/currency-forecast-ai/blob/1931c127a0ec63eb56bb5d472496db1a493b65f0/README.md"
                },
                {
                    "name": "HaloWeather",
                    "description": "HaloWeather, kullanıcıların dünya haritası üzerinden şehir ve bölgeleri arayarak anlık hava durumu verilerine ulaşmasını sağlayan modern, etkileşimli ve çok dilli bir hava durumu uygulamasıdır.Kırmızı animasyonlu seçim göstergesi, yumuşak harita geçişleri, state-only marker yapısı ve dil duyarlı akıllı arama sistemiyle hem işlevsel hem de görsel bir şölen sunar.",
                    "images": [
                        { "src": "/assets/weather/weather1.png", "alt": "Cloudy" },
                        { "src": "/assets/weather/weather2.png", "alt": "Foggy" },
                        { "src": "/assets/weather/weather3.png", "alt": "Sunny" },
                        { "src": "/assets/weather/weather4.png", "alt": "Rainy" },
                    ],
                    "url": "https://haloweather.vercel.app/",
                    "git": "https://github.com/Yusagca/weatherapp/blob/main/README.md"
                },
                {
                    "name": "Quiz App",
                    "description": "Quiz Uygulaması, Open Trivia Database (OpenTDB) üzerinden sorular getiren, React tabanlı bir interaktif quiz platformudur. Kullanıcılar, soru sayısını, kategoriyi ve zorluk seviyesini seçerek kendi quizlerini oluşturabilir. Uygulama; geri sayım sayacı, cevaplar için anlık geri bildirim ve puan takibi gibi özellikler sunar.",
                    "images": [
                        { "src": "/assets/quiz/quiz1.png", "alt": "Giriş Ekranı" },
                        { "src": "/assets/quiz/quiz2.png", "alt": "Ayar Ekranı" },
                        { "src": "/assets/quiz/quiz3.png", "alt": "Soru Ekranı" },
                        { "src": "/assets/quiz/quiz4.png", "alt": "Doğru Cevap" },

                    ],
                    "url": "https://quiz-app-blush-seven-64.vercel.app/",
                    "git": "https://github.com/Yusagca/quiz-app/blob/main/README.md"
                },

            ],
            try: "Denemek için tıklayın.",
            details: "Detaylar ve teknik bilgiler için tıklayın."

        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
