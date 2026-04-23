export interface Service {
  id: number;
  slug: string;
  title: string;
  icon: string;
  description: string;
  image: string;
  details: string;
  advantages: string[];
}

export const services: Service[] = [
  {
    id: 1,
    slug: 'elektrik-taahhut-hizmetleri',
    title: 'Elektrik Taahhüt Hizmetleri',
    icon: 'ri-flashlight-line',
    description: 'Konut, işyeri ve endüstriyel tesislerde profesyonel elektrik taahhüt hizmetleri sunuyoruz.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=500&fit=crop&auto=format&fm=webp',
    details: 'Area Elektrik olarak, İzmir ve çevresinde her ölçekte elektrik taahhüt projesi gerçekleştiriyoruz. Konutlardan endüstriyel tesislere kadar geniş bir yelpazede hizmet veren firmamız, güvenli ve standartlara uygun elektrik altyapısı kurulumu sağlar. Deneyimli ekibimiz, projenizin ihtiyaçlarını analiz ederek en uygun çözümleri sunar. Kaliteli malzeme kullanımı ve titiz işçilik anlayışımızla uzun ömürlü elektrik sistemleri inşa ediyoruz. Tüm projelerimizde TSE standartlarına uygunluk ve güvenlik önceliğimizdir.',
    advantages: [
      'TSE standartlarına tam uyum',
      'Kaliteli ve sertifikalı malzeme kullanımı',
      'Deneyimli ve uzman teknik ekip',
      'Proje sonrası garanti ve destek',
      'Hızlı ve zamanında teslim'
    ]
  },
  {
    id: 2,
    slug: 'proje-hizmetleri',
    title: 'Proje Hizmetleri',
    icon: 'ri-file-list-3-line',
    description: 'Elektrik projeleriniz için detaylı mühendislik çözümleri ve profesyonel proje hazırlama hizmetleri.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop&auto=format&fm=webp',
    details: 'Elektrik projelerinizin başından sonuna kadar yanınızdayız. Mimari projelere uygun elektrik proje tasarımı, ruhsat işlemleri ve uygulama projelerini hazırlıyoruz. Firmamız, enerji verimliliği odaklı çözümler sunarak hem maliyetlerinizi düşürüyor hem de çevre dostu sistemler kurmanıza yardımcı oluyor. Tüm projelerimiz ilgili belediye ve kurumlarca onaylı, mevzuata uygun şekilde hazırlanır. Aydınlatma hesapları, kablo boyutlandırma, pano şemaları gibi tüm teknik detaylar titizlikle çalışılır.',
    advantages: [
      'Mevzuata uygun proje hazırlama',
      'Enerji verimliliği analizi',
      'Ruhsat ve onay süreçlerinde destek',
      'Detaylı teknik çizimler ve şemalar',
      'Revizyon ve güncelleme hizmetleri'
    ]
  },
  {
    id: 3,
    slug: 'isletme-ve-bakim-hizmetleri',
    title: 'İşletme ve Bakım Hizmetleri',
    icon: 'ri-tools-line',
    description: 'Elektrik sistemlerinizin kesintisiz çalışması için periyodik bakım ve işletme hizmetleri.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=500&fit=crop&auto=format&fm=webp',
    details: 'Elektrik sistemlerinizin uzun ömürlü ve güvenli çalışması için düzenli bakım şarttır. Area Elektrik, işletmelere ve konutlara özel periyodik bakım programları sunarak olası arızaları önceden tespit eder ve önler. Trafo bakımı, jeneratör bakımı, pano bakımı, topraklama kontrolü gibi kritik işlemleri gerçekleştiriyoruz. Acil müdahale ekibimiz 7/24 hizmetinizdedir. Bakım sözleşmeleriyle düzenli kontroller yaparak sistemlerinizin verimliliğini artırıyoruz.',
    advantages: [
      '7/24 acil müdahale hizmeti',
      'Periyodik bakım programları',
      'Arıza öncesi tespit ve önleme',
      'Uzman teknisyen kadrosu',
      'Detaylı bakım raporlaması'
    ]
  },
  {
    id: 4,
    slug: 'test-ve-olcum-hizmetleri',
    title: 'Test ve Ölçüm Hizmetleri',
    icon: 'ri-line-chart-line',
    description: 'Elektrik sistemlerinizin güvenliğini sağlamak için profesyonel test ve ölçüm hizmetleri.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop&auto=format&fm=webp',
    details: 'Elektrik tesisatlarının güvenli çalışması için düzenli test ve ölçüm işlemleri kritik önem taşır. Firmamız, topraklama ölçümü, yalıtım direnci testi, kaçak akım testi, termografik görüntüleme gibi ileri teknoloji ölçüm yöntemleriyle sistemlerinizi analiz eder. Tüm ölçümler kalibrasyonlu cihazlarla yapılır ve detaylı raporlanır. Ölçüm sonuçlarına göre gerekli iyileştirme önerileri sunulur. Periyodik test programlarıyla elektrik güvenliğinizi garanti altına alıyoruz.',
    advantages: [
      'Kalibrasyonlu ölçüm cihazları',
      'Termografik analiz hizmeti',
      'Detaylı test raporları',
      'Mevzuata uygunluk kontrolü',
      'İyileştirme önerileri'
    ]
  },
  {
    id: 5,
    slug: 'uzaktan-sayac-sensor-okuma-sistemi',
    title: 'Uzaktan Sayaç & Sensör Okuma Sistemi',
    icon: 'ri-dashboard-line',
    description: 'Enerji tüketiminizi anlık takip edebileceğiniz akıllı sayaç ve sensör sistemleri.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format&fm=webp',
    details: 'Modern enerji yönetimi için uzaktan izleme sistemleri vazgeçilmezdir. Area Elektrik, akıllı sayaç sistemleri ve IoT tabanlı sensör çözümleriyle enerji tüketiminizi anlık olarak takip etmenizi sağlar. Mobil uygulama ve web panel üzerinden tüketim verilerinize her yerden ulaşabilir, anormal durumlar için alarm alabilirsiniz. Sistem, enerji tasarrufu fırsatlarını tespit ederek maliyetlerinizi düşürmenize yardımcı olur. Apartman, plaza ve endüstriyel tesisler için ideal çözümler sunuyoruz.',
    advantages: [
      'Anlık tüketim takibi',
      'Mobil ve web erişim',
      'Otomatik alarm bildirimleri',
      'Enerji tasarrufu analizi',
      'Detaylı raporlama özellikleri'
    ]
  },
  {
    id: 6,
    slug: 'ip-analog-kamera-sistemleri',
    title: 'IP & Analog Kamera Sistemleri',
    icon: 'ri-camera-line',
    description: 'Güvenliğiniz için yüksek çözünürlüklü IP ve analog kamera sistemleri kurulumu.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop&auto=format&fm=webp',
    details: 'Güvenlik sistemlerinde uzman kadromuzla, işyeri ve konutlarınız için en uygun kamera sistemlerini tasarlıyor ve kuruyoruz. IP kamera sistemleri ile yüksek çözünürlüklü görüntü kalitesi, uzaktan erişim ve akıllı analiz özellikleri sunuyoruz. Analog sistemler için ise maliyet etkin çözümler geliştiriyoruz. Gece görüş, hareket algılama, yüz tanıma gibi ileri teknoloji özellikler mevcuttur. Kayıt cihazları, monitörler ve tüm aksesuarlarla komple sistem kurulumu yapıyoruz.',
    advantages: [
      'Yüksek çözünürlüklü görüntü',
      'Uzaktan mobil erişim',
      'Gece görüş teknolojisi',
      'Hareket algılama ve alarm',
      'Profesyonel kurulum ve ayar'
    ]
  },
  {
    id: 7,
    slug: 'ip-santral-sistemleri',
    title: 'IP Santral Sistemleri',
    icon: 'ri-phone-line',
    description: 'Modern iletişim altyapısı için IP tabanlı santral sistemleri kurulumu ve yönetimi.',
    image: 'https://images.unsplash.com/photo-1560732488-6b0df240254a?w=800&h=500&fit=crop&auto=format&fm=webp',
    details: 'İşletmenizin iletişim altyapısını güçlendirmek için IP santral sistemleri kuruyoruz. Geleneksel santral sistemlerine göre çok daha esnek ve maliyet etkin olan IP santraller, internet üzerinden sesli iletişim sağlar. Dahili hatlar, çağrı yönlendirme, sesli yanıt sistemi, çağrı kayıt gibi profesyonel özellikler sunar. Uzaktan çalışan ekipler için ideal bir çözümdür. Sistem kurulumu, konfigürasyonu ve personel eğitimi hizmetlerimiz mevcuttur.',
    advantages: [
      'Maliyet etkin iletişim',
      'Esnek ve ölçeklenebilir yapı',
      'Uzaktan çalışma desteği',
      'Gelişmiş çağrı yönetimi',
      'Kolay entegrasyon'
    ]
  },
  {
    id: 8,
    slug: 'yangin-alarm-sistemleri',
    title: 'Yangın Alarm Sistemleri',
    icon: 'ri-alarm-warning-line',
    description: 'Can ve mal güvenliğiniz için profesyonel yangın alarm sistemleri projelendirme ve uygulama.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop&auto=format&fm=webp',
    details: 'Güvenliğiniz bizim önceliğimizdir. Area Elektrik, en son teknoloji yangın algılama ve alarm sistemlerini projeler ve uygular. Duman, ısı ve alev dedektörleri kullanarak erken uyarı sistemi oluştururuz. Tüm sistemler GSM modülü ile anlık bildirim gönderir. İtfaiye ve güvenlik birimleriyle entegrasyon sağlanır. Projelerimiz ilgili yönetmeliklere ve standartlara tam uyumludur.',
    advantages: [
      'Erken uyarı ve hızlı müdahale',
      'Anlık GSM bildirimi',
      'İtfaiye entegrasyonu',
      'Standartlara uygun kurulum',
      'Sertifikalı ekipman kullanımı'
    ]
  },
  {
    id: 9,
    slug: 'danismanlik-hizmetleri',
    title: 'Danışmanlık Hizmetleri',
    icon: 'ri-customer-service-2-line',
    description: 'Elektrik ve zayıf akım sistemleri konusunda uzman danışmanlık hizmetleri.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop&auto=format&fm=webp',
    details: 'Projelerinizin planlama aşamasından itibaren yanınızdayız. Elektrik ve zayıf akım sistemleri konusunda teknik danışmanlık hizmeti sunuyoruz. Mevcut sistemlerinizin analizi, enerji verimliliği değerlendirmesi, modernizasyon önerileri ve maliyet optimizasyonu konularında uzman görüşü sağlıyoruz. Yeni yatırımlarınız için fizibilite çalışmaları yapıyor, en uygun teknoloji ve ürün seçiminde rehberlik ediyoruz. Mevzuat uygunluğu, güvenlik standartları ve sektörel en iyi uygulamalar hakkında bilgilendirme yapıyoruz.',
    advantages: [
      'Uzman mühendis kadrosu',
      'Detaylı fizibilite çalışmaları',
      'Enerji verimliliği analizi',
      'Maliyet optimizasyonu',
      'Teknoloji seçim danışmanlığı'
    ]
  },
  {
    id: 10,
    slug: 'busbar-sistemleri',
    title: 'Busbar Sistemleri Projelendirme ve Uygulama',
    icon: 'ri-git-branch-line',
    description: 'Endüstriyel ve ticari tesisler için busbar sistemleri projelendirme, tedarik ve uygulama hizmetleri.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop&auto=format&fm=webp',
    details: 'Area Elektrik, endüstriyel ve ticari tesisler için busbar sistemlerinin projelendirilmesi, tedariki ve uygulamasını gerçekleştirmektedir. Bakır ve alüminyum busbar çözümleriyle yüksek akım taşıma kapasitesi, düşük kayıp ve kolay montaj avantajı sunarız. Pano içi busbar bağlantılarından fabrika dağıtım sistemlerine kadar geniş bir yelpazede hizmet veriyoruz. Tüm uygulamalar IEC standartlarına uygun olarak gerçekleştirilir.',
    advantages: [
      'Yüksek akım taşıma kapasitesi',
      'Düşük enerji kaybı',
      'IEC standartlarına uygunluk',
      'Hızlı ve güvenli montaj',
      'Uzun ömürlü ve dayanıklı çözümler'
    ]
  },
  {
    id: 11,
    slug: 'exproof-sistemler',
    title: 'Exproof Sistemler Projelendirme ve Uygulama',
    icon: 'ri-shield-flash-line',
    description: 'Patlayıcı ortamlarda güvenli çalışma için exproof elektrik sistemleri projelendirme ve uygulama.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop&auto=format&fm=webp',
    details: 'Petrokimya, gaz, madencilik ve benzeri patlayıcı ortamlarda kullanılan exproof (patlamaya karşı korumalı) elektrik sistemlerinin projelendirilmesi ve uygulamasını yapıyoruz. ATEX ve IECEx sertifikalı ekipmanlarla güvenli elektrik altyapısı kuruyoruz. Exproof pano, aydınlatma, motor, kablo ve bağlantı elemanlarının seçimi, montajı ve devreye alınması hizmetlerimiz arasındadır. Tüm projeler ilgili yönetmeliklere ve uluslararası standartlara uygun hazırlanır.',
    advantages: [
      'ATEX ve IECEx sertifikalı ekipman',
      'Patlayıcı ortam güvenliği',
      'Uluslararası standartlara uygunluk',
      'Uzman mühendis kadrosu',
      'Kapsamlı proje yönetimi'
    ]
  },
  {
    id: 12,
    slug: 'akilli-ev-sistemleri',
    title: 'Akıllı Ev Sistemleri',
    icon: 'ri-home-wifi-line',
    description: 'Konforlu ve enerji verimli yaşam için akıllı ev otomasyon sistemleri tasarım ve kurulumu.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=500&fit=crop&auto=format&fm=webp',
    details: 'Area Elektrik, modern yaşam alanları için akıllı ev otomasyon sistemleri tasarlar ve kurar. Aydınlatma kontrolü, perde ve panjur otomasyonu, iklim kontrolü, güvenlik entegrasyonu ve enerji yönetimi gibi tüm sistemleri tek bir platform üzerinden yönetmenizi sağlarız. KNX, Modbus ve diğer endüstri standartlarına uyumlu çözümler sunuyoruz. Akıllı telefon ve tablet üzerinden uzaktan kontrol imkânı mevcuttur. Yeni yapılar ve mevcut konutlar için uygun çözümler geliştiriyoruz.',
    advantages: [
      'Tek platformdan tam kontrol',
      'Enerji tasarrufu ve verimlilik',
      'Uzaktan mobil erişim',
      'KNX ve endüstri standardı uyumu',
      'Yeni ve mevcut yapılara uygun'
    ]
  },
  {
    id: 13,
    slug: 'elektrik-muhendislik-sistemleri',
    title: 'Elektrik Mühendislik ve Uygulama Sistemleri',
    icon: 'ri-settings-4-line',
    description: 'Her ölçekte elektrik mühendislik projelendirme, hesaplama ve uygulama hizmetleri.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop&auto=format&fm=webp',
    details: 'Konuttan endüstriyel tesislere kadar her ölçekte elektrik mühendislik hizmetleri sunuyoruz. Güç sistemleri analizi, kısa devre hesapları, kablo boyutlandırma, koruma koordinasyonu, topraklama tasarımı ve aydınlatma hesapları gibi tüm mühendislik çalışmalarını gerçekleştiriyoruz. Hazırlanan projeler ilgili kurum ve kuruluşlara onaylatılır, uygulama aşamasında da teknik destek sağlanır. Enerji verimliliği ve sürdürülebilirlik odaklı çözümler üretiyoruz.',
    advantages: [
      'Kapsamlı mühendislik hesapları',
      'Kurum onaylı proje hazırlama',
      'Enerji verimliliği odaklı tasarım',
      'Uygulama aşamasında teknik destek',
      'Deneyimli mühendis kadrosu'
    ]
  },
  {
    id: 14,
    slug: 'endustriyel-otomasyon-sistemleri',
    title: 'Endüstriyel Otomasyon Sistemleri',
    icon: 'ri-robot-line',
    description: 'Üretim ve endüstriyel tesisler için PLC, SCADA ve otomasyon sistemleri kurulumu.',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=500&fit=crop&auto=format&fm=webp',
    details: 'Endüstriyel tesislerinizin verimliliğini artırmak için PLC programlama, SCADA sistemleri, motor sürücüleri, enerji izleme ve proses otomasyon çözümleri sunuyoruz. Siemens, Schneider, ABB ve diğer önde gelen markaların ürünleriyle entegre sistemler kuruyoruz. Mevcut sistemlerin modernizasyonu, yeni hat kurulumları ve devreye alma hizmetleri kapsamımızdadır. Uzaktan izleme ve kontrol altyapısıyla üretim süreçlerinizi optimize ediyoruz.',
    advantages: [
      'PLC ve SCADA çözümleri',
      'Önde gelen marka entegrasyonu',
      'Mevcut sistem modernizasyonu',
      'Uzaktan izleme ve kontrol',
      'Verimlilik ve maliyet optimizasyonu'
    ]
  },
  {
    id: 15,
    slug: 'trafo-ve-og-isleri',
    title: 'Trafo, Ana Branşman ve OG İşleri',
    icon: 'ri-plug-line',
    description: 'Trafo merkezi kurulumu, ana branşman tesisatı ve orta gerilim sistemleri uygulamaları.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop&auto=format&fm=webp',
    details: 'Orta gerilim (OG) sistemleri, trafo merkezleri ve ana branşman tesisatı konularında uzman kadromuzla hizmet veriyoruz. Trafo kurulumu ve devreye alınması, OG hücre montajı, kablo döşeme ve bağlantı işlemleri, koruma rölesi ayarları ve enerji nakil hattı çalışmalarını gerçekleştiriyoruz. Tüm çalışmalar TEDAŞ ve ilgili kurum yönetmeliklerine uygun olarak yapılır. Yüksek gerilim güvenlik prosedürlerine tam uyum sağlanır.',
    advantages: [
      'OG ve trafo uzmanı kadro',
      'TEDAŞ yönetmeliklerine uygunluk',
      'Yüksek gerilim güvenlik standartları',
      'Kapsamlı devreye alma hizmetleri',
      'Koruma ve ölçüm sistemleri'
    ]
  },
  {
    id: 16,
    slug: 'jenerator-ups-sistemleri',
    title: 'Jeneratör ve UPS Sistemleri',
    icon: 'ri-battery-charge-line',
    description: 'Kesintisiz güç kaynağı için jeneratör ve UPS sistemleri kurulum, bakım ve servis hizmetleri.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop&auto=format&fm=webp',
    details: 'Güç kesintilerinden etkilenmemek için jeneratör ve UPS sistemleri kurulum, devreye alma ve bakım hizmetleri sunuyoruz. Dizel ve doğalgaz jeneratörlerinin kurulumu, otomatik devreye alma sistemleri (ATS), UPS sistemleri ve akü bakımı hizmetlerimiz arasındadır. Hastane, veri merkezi, endüstriyel tesis ve ticari yapılar için özel çözümler geliştiriyoruz. Periyodik bakım sözleşmeleriyle sistemlerinizin her an hazır olmasını sağlıyoruz.',
    advantages: [
      'Otomatik devreye alma (ATS)',
      'Dizel ve doğalgaz jeneratör',
      'UPS ve akü sistemleri',
      'Periyodik bakım sözleşmeleri',
      'Kritik tesis çözümleri'
    ]
  },
  {
    id: 17,
    slug: 'tasarim-ve-kurulum',
    title: 'Tasarım ve Kurulum',
    icon: 'ri-draft-line',
    description: 'Elektrik ve zayıf akım sistemleri için uçtan uca tasarım, projelendirme ve kurulum hizmetleri.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop&auto=format&fm=webp',
    details: 'Projelerinizin fikir aşamasından teslimata kadar tüm süreçleri yönetiyoruz. Mimari ve mekanik projelerle koordineli elektrik tasarımı, 3D modelleme, teknik şema hazırlama ve saha uygulaması hizmetlerini tek çatı altında sunuyoruz. Konut, ticari yapı, endüstriyel tesis ve altyapı projelerinde deneyimli ekibimizle yanınızdayız. Tasarım ve kurulum süreçlerinde kalite kontrol, iş güvenliği ve zaman yönetimi önceliklerimizdir.',
    advantages: [
      'Uçtan uca proje yönetimi',
      'Koordineli tasarım süreci',
      'Kalite kontrol ve denetim',
      'İş güvenliği öncelikli uygulama',
      'Zamanında teslim garantisi'
    ]
  }
];

export const getServiceSlug = (title: string): string => {
  const service = services.find(s => s.title === title);
  return service?.slug || '';
};

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};

export const featuredServices = services;
