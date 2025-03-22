import { useEffect } from 'react';

const SchemaMarkup = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Mirketgiller',
      url: 'https://www.mirketgiller.com.tr',
      logo: 'https://www.admin.mirketgiller.com.tr/seo/mirketgiller-logo.png',
      description:
        'Biz Mirketgiller ailesi olarak; üniversite öğrencilerinin, hepimiz birimiz birimiz hepimiz için yaklaşımıyla gelişimini amaçlayan üniversite öğrencileriyiz.',
      foundingDate: '2022',
      founders: {
        '@type': 'Person',
        name: 'Afra Sudenaz Uslu',
      },
      member: [
        {
          '@type': 'Person',
          name: 'Afra Sudenaz Uslu',
          jobTitle: 'Kurucu',
          email: 'afrauslu2003@hotmail.com',
          image:
            'https://www.admin.mirketgiller.com.tr/persons/Afra-Sudenaz-Uslu.jpg',
          sameAs: [
            'https://afrasudenazuslu.com/',
            'https://www.linkedin.com/in/afra-sudenaz-uslu-/',
          ],
          birthDate: '2003-07-24',
          alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'İstanbul Sağlık ve Teknoloji Üniversitesi',
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'degree',
              name: 'Endüstri Mühendisliği',
            },
          },
          description:
            "Afra Sudenaz Uslu, İstanbul Sağlık ve Teknoloji Üniversitesi Endüstri Mühendisliği öğrencisidir. Mirketgiller'in kurucusudur ve şu anda Mirketgiller'de Yönetim Kurulu Başkanlığı görevine devam etmektedir.",
        },
        {
          '@type': 'Person',
          name: 'Muzaffer Enes Yıldırım',
          jobTitle:
            'Yönetim Kurulu Başkan Yardımcısı & Medya ve Tasarım Birimi Eş Başkanı',
          email: 'enesmuzaffer22@gmail.com',
          image:
            'https://www.admin.mirketgiller.com.tr/persons/Muzaffer-Enes-Yildirim.jpg',
          sameAs: [
            'https://www.linkedin.com/in/muzaffer-yildirim/',
            'https://www.instagram.com/enesmuzafferr/',
          ],
          birthDate: '2002-09-06',
          alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'İstanbul Sağlık ve Teknoloji Üniversitesi',
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'degree',
              name: 'Bilgisayar Mühendisliği',
            },
          },
          description:
            'Muzaffer Enes Yıldırım, İstanbul Sağlık ve Teknoloji Üniversitesi Bilgisayar Mühendisliği öğrencisidir. Front-End geliştirme ve grafik tasarıma ilgi duyan Muzaffer, bu alanlarda aktif olarak projelerde yer almakta ve yeteneklerini geliştirmektedir.',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Serhat İsmail Zunluoğlu',
          jobTitle: 'Yönetim Kurulu Başkan Yardımcısı',
          email: 'serhatismail12@gmail.com',
          image:
            'https://www.admin.mirketgiller.com.tr/persons/Serhat-Ismail-Zunluoglu.jpg',
          sameAs: [
            'https://www.linkedin.com/in/serhatzunluoglu/',
            'https://www.instagram.com/harry_codder/',
            'https://github.com/serhatzunluoglu',
          ],
          url: 'https://www.linkedin.com/in/serhatzunluoglu/',
          birthDate: '2002-11-14',
          alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'Necmettin Erbakan Üniversitesi',
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'degree',
              name: 'Bilgisayar Mühendisliği',
            },
          },

          description:
            "Serhat İsmail Zunluoğlu, Necmettin Erbakan Üniversitesi mezunu olup şu anda Frontend Developer olarak çalışmaktadır. Mirketgiller'de Ar-Ge Departmanı Başkanlığı ve Yönetim Kurulu Üyeliği yapmış, şimdi ise Yönetim Kurulu Başkan Yardımcısı olarak görevine devam etmektedir.",
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Berke Özkul',
          jobTitle: 'Yönetim Kurulu Üyesi & Ar-Ge Departmanı Eş Başkanı',
          email: 'berke.zkl@gmail.com',
          image:
            'https://www.admin.mirketgiller.com.tr/persons/Berke-Ozkul.jpg',
          sameAs: [
            'https://www.linkedin.com/in/berkeozkul',
            'https://www.instagram.com/berke_ozkl',
          ],
          url: 'https://berkeozkul.com/',
          birthDate: '2001-01-16',
          alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'Muğla Sıtkı Koçman Üniversitesi',
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'degree',
              name: 'Bilgisayar Mühendisliği',
            },
          },
          description:
            'Berke Özkul, Muğla Sıtkı Koçman Üniversitesi Bilgisayar Mühendisliği öğrencisidir. Data ve AI tarafında hem kurumsal hem Ar-Ge hem de startup tarafında deneyim elde eden Berke, veri bilimi alanında çalışmalarını sürdürmektedir.',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Furkan Bozok',
          jobTitle: 'Yönetim Kurulu Üyesi',
          email: 'fbozok26@gmail.com',
          image:
            'https://www.admin.mirketgiller.com.tr/persons/Furkan-Bozok.jpg',
          sameAs: [
            'https://www.instagram.com/bozok.furkan/',
            'https://www.linkedin.com/in/furkanbozok/',
          ],
          birthDate: '2001-11-19',
          alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'Yozgat Bozok Üniversitesi',
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'degree',
              name: 'Bilgisayar Programcılığı',
            },
          },
          description:
            'Furkan Bozok, Bozok Üniversitesi Bilgisayar Programcılığı mezunudur. IT ve Front-End geliştirmeye ilgi duyan Furkan, bu alanlarda kendini geliştirmeye devam etmektedir.',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Ayçanur Betül Çelebi',
          jobTitle: 'Yönetim Kurulu Üyesi & Medya ve Tasarım Birimi Eş Başkanı',
          email: 'a.betul.celebi@gmail.com',
          image:
            'https://www.admin.mirketgiller.com.tr/persons/Aycanur-Betul-Celebi.jpg',
          sameAs: [
            'https://www.linkedin.com/in/aycanurbetulcelebi',
            'https://www.instagram.com/aycanur_betul',
          ],
          birthDate: '2002-08-19',
          alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'Yıldız Teknik Üniversitesi',
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'degree',
              name: 'Matematik Mühendisliği',
            },
          },
          description:
            'Ayçanur Betül Çelebi, Yıldız Teknik Üniversitesi Matematik Mühendisliği öğrencisidir. Yönetim Kurulu Üyesi ve Medya ve Tasarım Birimi Eş Başkanı olarak görev yapmaktadır.',
        },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'mirketgillerresmi@gmail.com',
        contactType: 'customer service',
      },
      sameAs: [
        'https://www.linkedin.com/company/mirketgiller',
        'https://www.instagram.com/mirketgiller_',
        'https://www.youtube.com/@mirketgiller',
        'https://medium.com/mirketgiller',
        'https://x.com/mirketgiller',
        'https://github.com/mirketgiller',
      ],
    });

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default SchemaMarkup;
