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
                social:"SOCIAL",
                about:"About Me",
                aboutDet:"Everything about me."
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
                descriptionLinked:"Connect with me professionally on LinkedIn.",
                descriptionInsta:"Follow me on Instagram for personal updates.",
                descriptionGit:"Explore my projects and repositories on GitHub."
            },
            summary: "Hello my name is Halil. As a final year Computer Engineering student, I am a passionate individual in the field of technology and software development. In my third year, I worked part-time as a hybrid front-end developer at a company that develops cloud security systems. During this process, I gained experience in developing modern and user-friendly web applications using HTML, CSS, JavaScript, TailwindCSS, TypeScript and React. I continue to add value to software projects with my dynamic problem-solving skills and tendency to teamwork.You can learn everything projects me on this site I developed. You can test the sample projects I have made.",
            interests: ["Fitness", "Technology", "Motor Sports","Football","Cars","Watches","Shoes"],
            languages: ["English [B1]", "German [A2]"],
            visit:"Visit",
            footer:"This site created and developed by Halil Yuşa Ağca.",
            interestsTitle:"İnterests",
            languagesTitle:"Languages",
            projectsHeader:"Welcome to my personal showcase!",
            projectsIntro: "Here, you'll find a curated selection of projects that reflect both my technical skills and design vision. For more details, feel free to click the links inside each card or explore my complete portfolio.",
            workExperience: [
                {
                    position: "React Intern",
                    company: "LPSChain",
                    location: "Istanbul",
                    description: "Developed web applications using HTML, CSS, JavaScript, Tailwind, and React.",
                    startDate: "June 2023",
                    endDate: "July 2024"
                }
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
                    "name": "Weather App",
                    "description": "The Weather App is a React-based application that provides real-time weather updates using the Open-Meteo API. The app allows users to search for a city's weather conditions, including temperature, precipitation, and wind speed, while displaying a dynamic video background based on weather conditions.",
                    "images": [
                        { "src": "/assets/weather/weather1.png", "alt": "Cloudy" },
                        { "src": "/assets/weather/weather2.png", "alt": "Foggy" },
                        { "src": "/assets/weather/weather3.png", "alt": "Sunny" },
                        { "src": "/assets/weather/weather4.png", "alt": "Rainy" },
                    ],
                    "url": "https://haloweather.vercel.app/",
                    "git":"https://github.com/Yusagca/weatherapp/blob/main/README.md"
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
                    "git":"https://github.com/Yusagca/quiz-app/blob/main/README.md"
                },
                {
                    "name": "TahminPro App",
                    "description": "TahminPro App is a modern financial prediction platform that allows users to visually explore currency and inflation forecasts through interactive line charts. Powered by a SARIMA-based model, the application delivers a professional user experience with real-time data visualization, light/dark theme support, full-screen graph mode, and a fully responsive interface. Designed with clarity, speed, and flexibility in mind, it is ideal for analysts and users dealing with financial data.",
                    "images": [
                        { "src": "/assets/tahmin/tahmin1.png", "alt": "Giriş Ekranı" },
                        { "src": "/assets/tahmin/tahmin2.png", "alt": "Ayar Ekranı" },
                        { "src": "/assets/tahmin/tahmin3.png", "alt": "Soru Ekranı" },
                        { "src": "/assets/tahmin/tahmin4.png", "alt": "Doğru Cevap" },
                    ],
                    "url": "https://tahminpro.vercel.app/",
                    "git": "https://github.com/Yusagca"
                  },
            ],
            try: "Click for try this app.",
            details:"Click for detailed and technical information."

            
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
                social:"Sosyal",
                about:"Hakkımda",
                aboutDet:"Benim hakkımda her şeyi burada bulabilirsiniz."
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
                descriptionLinked:"Benimle LinkedIn üzerinden profesyonel bağlantı kurun.",
                descriptionInsta:"Beni İnstagramdan takip edin.",
                descriptionGit:"Projelerime ve Repolarıma göz atın."
            },
            summary: "Merhaba ben Halil. Son sınıf Bilgisayar Mühendisliği öğrencisi olarak teknoloji ve yazılım geliştirme alanında tutkulu bir bireyim. Üçüncü sınıfta, bulut güvenlik sistemleri geliştiren bir firmada yarı zamanlı hybrid bir front-end developer olarak çalıştım. Bu süreçte HTML, CSS, JavaScript, TailwindCSS, TypeScript ve React kullanarak modern ve kullanıcı dostu web uygulamaları geliştirme deneyimi kazandım. Dinamik problem çözme becerilerim ve ekip çalışmasına yatkınlığım ile yazılım projelerine değer katmaya devam ediyorum.Kendi geliştirdiğim bu sitede benimle ilgili her şeyi öğrenebilirsiniz. Yaptığım örnek projeleri test edebilirsiniz.",
            interests: ["Fitness", "Teknoloji", "Motor Sporları","Futbol","Arabalar","Saatler","Ayakkabılar"],
            languages: ["İngilizce [B1]", "Almanca [A2]"],
            visit:"Git",
            footer:"Bu site Halil Yuşa Ağca tarafından hazırlanıp geliştirilmiştir.",
            interestsTitle:"İlgi Alanları",
            languagesTitle:"Diller",
            projectsHeader:"Sergime Hoşgeldiniz!",
            projectsIntro: "Burada, hem teknik yetkinliğimi hem de tasarım vizyonumu yansıtan seçilmiş projelerimi bulabilirsiniz. Daha fazla detay için her bir kartın içindeki bağlantılara tıklayabilir ya da portföyümün tamamını keşfedebilirsiniz.",
            workExperience: [
                {
                    position: "React Stajyer",
                    company: "LPSChain",
                    location: "İstanbul",
                    description: "HTML, CSS, JavaScript, Tailwind ve React kullanarak web uygulamaları geliştirdim.",
                    startDate: "Haziran 2023",
                    endDate: "Temmuz 2024"
                }
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
                    "name": "Weather App",
                    "description": "Hava Durumu Uygulaması, Open-Meteo API kullanarak gerçek zamanlı hava durumu güncellemeleri sağlayan React tabanlı bir uygulamadır. Kullanıcılar, bir şehrin hava durumu koşullarını (sıcaklık, yağış, rüzgar hızı gibi) arayabilir ve hava durumuna göre değişen dinamik bir video arka planıyla görüntüleyebilir.",
                    "images": [
                        { "src": "/assets/weather/weather1.png", "alt": "Cloudy" },
                        { "src": "/assets/weather/weather2.png", "alt": "Foggy" },
                        { "src": "/assets/weather/weather3.png", "alt": "Sunny" },
                        { "src": "/assets/weather/weather4.png", "alt": "Rainy" },
                    ],
                    "url": "https://haloweather.vercel.app/",
                    "git":"https://github.com/Yusagca/weatherapp/blob/main/README.md"
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
                    "git":"https://github.com/Yusagca/quiz-app/blob/main/README.md"
                },
                {
                    "name": "TahminPro App",
                    "description": "TahminPro App, kullanıcıların döviz kurları ve enflasyon oranlarına ilişkin öngörüleri grafiksel olarak inceleyebileceği modern bir finansal tahmin platformudur. Gerçek verilerle çalışan SARIMA modeli tabanlı bu uygulama, kullanıcı dostu arayüzü, light/dark tema desteği, tam ekran grafik modu ve mobil uyumlu tasarımı ile profesyonel düzeyde bir kullanıcı deneyimi sunar. Özellikle finansal veri analizi yapan kullanıcılar için görsellik, hız ve esneklik ön planda tutulmuştur.",
                    "images": [
                        { "src": "/assets/tahmin/tahmin1.png", "alt": "Giriş Ekranı" },
                        { "src": "/assets/tahmin/tahmin2.png", "alt": "Ayar Ekranı" },
                        { "src": "/assets/tahmin/tahmin3.png", "alt": "Soru Ekranı" },
                        { "src": "/assets/tahmin/tahmin4.png", "alt": "Doğru Cevap" },
                    ],
                    "url": "https://tahminpro.vercel.app/",
                    "git": "https://github.com/Yusagca"
                },

            ],
            try: "Denemek için tıklayın.",
            details:"Detaylar ve teknik bilgiler için tıklayın."

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
