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
                experience: "Experience"
            },
            personal: {
                hi: "Hi!",
                name: "Halil Yuşa Ağca",
                address: "Maresal Çakmak Mh. 589. Sk. No: 11 / 4, Güngören/İstanbul",
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
            interests: ["Fitness", "Technology", "Motor Sports"],
            languages: ["English", "German"],
            visit:"Visit",
            footer:"This site created and developed by Halil Yuşa Ağca.",
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
                        { "src": "src/assets/weather/cloudy.png", "alt": "Cloudy" },
                        { "src": "src/assets/weather/fog.png", "alt": "Foggy" },
                        { "src": "src/assets/weather/sunny.png", "alt": "Sunny" },
                        { "src": "src/assets/weather/rain.png", "alt": "Rainy" },
                        { "src": "src/assets/weather/snow.png", "alt": "Snowy" }
                    ],
                    "url": "https://weatherapp-blond-two.vercel.app/",
                    "git":"https://github.com/Yusagca/weatherapp/blob/main/README.md"
                },
                {
                    "name": "Quiz App",
                    "description": "The Quiz App is a React-based interactive quiz platform that fetches questions from the Open Trivia Database (OpenTDB). Users can customize the quiz by selecting the number of questions, categories, and difficulty levels. The app includes features like a countdown timer, real-time feedback for answers, and score tracking.",
                    "images": [
                        { "src": "src/assets/quiz/quizgiris.png", "alt": "Giriş Ekranı" },
                        { "src": "src/assets/quiz/quizayar.png", "alt": "Ayar Ekranı" },
                        { "src": "src/assets/quiz/quizsoru.png", "alt": "Soru Ekranı" },
                        { "src": "src/assets/quiz/quizdogru.png", "alt": "Doğru Cevap" },
                        { "src": "src/assets/quiz/quizyanlis.png", "alt": "Yanlış Cevap" },
                        { "src": "src/assets/quiz/quizbitis.png", "alt": "Bitiş Ekranı" }

                    ],
                    "url": "https://quiz-app-blush-seven-64.vercel.app/",
                    "git":"https://github.com/Yusagca/quiz-app/blob/main/README.md"
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
                experience: "Deneyim"
            },
            personal: {
                hi: "Merhaba!",
                name: "Halil Yuşa Ağca",
                address: "Mareşal Çakmak Mh. 589. Sk. No: 11 / 4, Güngören/İstanbul",
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
            interests: ["Fitness", "Teknoloji", "Motor Sporları"],
            languages: ["İngilizce", "Almanca"],
            visit:"Git",
            footer:"Bu site Halil Yuşa Ağca tarafından hazırlanıp geliştirilmiştir.",
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
            "projects": [
                {
                    "name": "Weather App",
                    "description": "Hava Durumu Uygulaması, Open-Meteo API kullanarak gerçek zamanlı hava durumu güncellemeleri sağlayan React tabanlı bir uygulamadır. Kullanıcılar, bir şehrin hava durumu koşullarını (sıcaklık, yağış, rüzgar hızı gibi) arayabilir ve hava durumuna göre değişen dinamik bir video arka planıyla görüntüleyebilir.",
                    "images": [
                        { "src": "src/assets/weather/cloudy.png", "alt": "Cloudy" },
                        { "src": "src/assets/weather/fog.png", "alt": "Foggy" },
                        { "src": "src/assets/weather/sunny.png", "alt": "Sunny" },
                        { "src": "src/assets/weather/rain.png", "alt": "Rainy" },
                        { "src": "src/assets/weather/snow.png", "alt": "Snowy" }
                    ],
                    "url": "https://weatherapp-blond-two.vercel.app/",
                    "git":"https://github.com/Yusagca/weatherapp/blob/main/README.md"
                },
                {
                    "name": "Quiz App",
                    "description": "Quiz Uygulaması, Open Trivia Database (OpenTDB) üzerinden sorular getiren, React tabanlı bir interaktif quiz platformudur. Kullanıcılar, soru sayısını, kategoriyi ve zorluk seviyesini seçerek kendi quizlerini oluşturabilir. Uygulama; geri sayım sayacı, cevaplar için anlık geri bildirim ve puan takibi gibi özellikler sunar.",
                    "images": [
                        { "src": "src/assets/quiz/quizgiris.png", "alt": "Giriş Ekranı" },
                        { "src": "src/assets/quiz/quizayar.png", "alt": "Ayar Ekranı" },
                        { "src": "src/assets/quiz/quizsoru.png", "alt": "Soru Ekranı" },
                        { "src": "src/assets/quiz/quizdogru.png", "alt": "Doğru Cevap" },
                        { "src": "src/assets/quiz/quizyanlis.png", "alt": "Yanlış Cevap" },
                        { "src": "src/assets/quiz/quizbitis.png", "alt": "Bitiş Ekranı" }

                    ],
                    "url": "https://quiz-app-blush-seven-64.vercel.app/",
                    "git":"https://github.com/Yusagca/quiz-app/blob/main/README.md"
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
