const datatr = [
  {
    id: 1,
    title: "Loki",
    description:
      "İskandinav mitolojisinde entrikaları ve hileleriyle bilinen tanrı. aesir kategorisinde yer alır. Loki, tanrıların yaratıcıları olan Jotnar ile ilişkilidir ve çeşitli şekillere girebilme yeteneği ile tanınır. Onun hikayeleri, zaman zaman tanrıların ve devlerin dünyaları arasındaki sınırları bulandırmasını ve karmaşaya neden olmasını anlatır.",
    category: "aesir",
    img: "https://www.loveinartsz.com/wp-content/uploads/2021/01/Loki-676x1024.jpg",
  },
  {
    id: 2,
    title: "Thor",
    description:
      "Güçlü bir savaş tanrısı olan Thor, çekici Mjölnir'i kullanmasıyla ünlüdür. aesir kategorisinde yer alır ve şimşekleri kontrol edebilme yeteneği ile fırtınaları temsil eder. Thor, devleri ve düşmanlarını yenmek için sıkça Mjölnir'i kullanırken aynı zamanda halkını da korur.",
    category: "aesir",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1h49goCZmoHNO1CzYXGJfNBp4N8UBR25FQ&usqp=CAU",
  },
  {
    id: 3,
    title: "Odin",
    description:
      "aesir tanrılarının lideri olan Odin, bilgelik, savaş, şiir ve ölüm gibi alanlarda etkindir. İki kargayla, Huginn ve Muninn, yolculuk eder ve Yggdrasil adlı dünya ağacının bilgeliğiyle donanmıştır. Aynı zamanda Odin, savaşçılarına rehberlik eder ve onları Valhalla'ya davet eder.",
    category: "aesir",
    img: "https://images.boboscope.com/6e1f9c9e-ec35-4a98-8376-7528b54a8429?alt=media&token=f437af18-6752-4638-b27c-5cf23c9aa680&tr=w-1100,c-at_max,f-auto",
  },
  {
    id: 4,
    title: "Vidar",
    description:
      "Vidar, sessiz ve güçlü bir tanrı olarak bilinir. Babası Odin'in intikamını almak için Ragnarok'ta Loki'yi öldürmesi beklenir. Ayrıca dev kurt Fenrir'i öldürmek için gücünü kullanır. Vidar, sessizliği ve az konuşmayı sembolize ederken, gücü ve kararlılığı da temsil eder.",
    category: "aesir",
    img: "https://pbs.twimg.com/media/Dyj9HE5WkAAKyBV.jpg",
  },
  {
    id: 5,
    title: "Frigg",
    description:
      "aesir tanrılarının kraliçesi olan Frigg, öngörü, aile ve evlilik ile ilişkilendirilir. Genellikle annelik ve koruyuculuk sembollerine sahip olan Frigg, kocası Odin'in kararı üzerine kaderi etkileyebilir. Aynı zamanda halkının refahını ve güvenliğini sağlamak için çabalar.",
    category: "aesir",
    img: "https://dokuzdiyar.com/wp-content/uploads/2021/01/frigga.jpg",
  },
  {
    id: 6,
    title: "Freyja",
    description:
      "İskandinav mitolojisinde aşk, güzellik, doğa ve bereket tanrıçası. vanir kategorisinde yer alır. Savaşçı ruhlu bir tanrıça olarak da bilinir ve Fólkvangr adlı savaşta ölen savaşçıların ruhlarını toplar. Özgürlük ve aşkın sembolüdür.",
    category: "vanir",
    img: "https://dokuzdiyar.com/wp-content/uploads/2021/05/iqnatius-budi-freya.jpg",
  },
  {
    id: 7,
    title: "Freyr",
    description:
      "Freyja'nın kardeşi olan Freyr, vanir tanrılarındandır. Bereket, güneş ışığı, tarım ve verimlilik ile ilişkilendirilir. Gullinbursti adlı altın kıllı bir domuz ve Skidbladnir adlı büyülü bir gemi sahiptir. Freyr, doğanın döngüsünü temsil eder.",
    category: "vanir",
    img: "https://mitolojiktanrilar.com/wp-content/uploads/2022/11/resim18769862.png",
  },
  {
    id: 8,
    title: "Kvasir",
    description:
      "Kvasir, İskandinav mitolojisindeki bilgelik ve şiir tanrısıdır. vanir ile aesir arasındaki anlaşmazlığın sonucu olarak yaratılmıştır. Öldürüldükten sonra kanı, bal ile karıştırılarak meydana gelen mede tanrısal bir içeceğe dönüştürülmüştür.",
    category: "vanir",
    img: "https://pbs.twimg.com/media/DZiBIk8W4AAgQ9i.jpg",
  },
  {
    id: 9,
    title: "Gullveig",
    description:
      "Gullveig, ölümsüzlük yeteneğine sahip olan ve sürekli olarak diriltilebilen gizemli bir varlıktır. aesir ve vanir arasındaki çatışmanın tetikleyicisi olarak görünür. Gullveig'in hikayesi, mitolojideki birçok olayın başlangıcını simgeler.",
    category: "vanir",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Gullveig_by_Frølich.jpg/330px-Gullveig_by_Frølich.jpg",
  },
  {
    id: 10,
    title: "Njordr",
    description:
      "Njordr, deniz, rüzgar ve zenginliğin tanrısıdır. vanir tanrılarındandır ve denizcilik ile ilişkilendirilir. Skidbladnir adlı büyülü bir gemi ve altın kumların hükümdarıdır. Aynı zamanda barış ve huzur sembolüdür.",
    category: "vanir",
    img: "https://home-bath.com/media/blog/3860dac29f19461/5960dad3c223f62.png",
  },
  {
    id: 11,
    title: "Ymir",
    description:
      "İskandinav mitolojisine göre, dünya yaratılmadan önceki kaosun temsilcisi ve devlerin atası olan Ymir, Frost devlerinin soyundan gelir. Odin, Vili ve Vé tarafından öldürülerek dünya yaratıldı. Ymir'in cesedi, dünyayı oluşturan toprak, deniz ve dağları meydana getirdi.",
    category: "jotnar",
    img: "https://dokuzdiyar.com/wp-content/uploads/2020/08/maxresdefault-e1597508593884-600x454.jpg",
  },
  {
    id: 12,
    title: "Surtr",
    description:
      "Surtr, ateş devlerinden biridir ve Ragnarok olarak adlandırılan kıyametin tetikleyicisi olarak görülür. Devasa bir ateş kılıcıyla tanınır ve tanrılarla birlikte savaşırken dünyayı ateşe verir. Yeni bir dünya düzeninin başlamasını sağlar.",
    category: "jotnar",
    img: "https://www.hasirsapkalar.com/Media/Theory/c37ff241-7a63-4e29-b3fc-26b1ee3a7a31.jpg",
  },
  {
    id: 13,
    title: "Skadi",
    description:
      "Skadi, dağların ve kışın tanrıçası olarak bilinir. Jotnar ve aesir arasındaki bir anlaşma sonucu tanrılara katılır. Babasının ölümünü intikam almak amacıyla tanrılarla anlaşma yapar ve onunla evlenir. Av ve kışın sembolüdür.",
    category: "jotnar",
    img: "https://i.pinimg.com/736x/30/ed/33/30ed330acfaa36e374696f62073fb82a.jpg",
  },
  {
    id: 14,
    title: "Hymir",
    description:
      "Hymir, deniz tanrıçası Ran'ın kocasıdır ve deniz devlerinden biridir. Devasa bir tencereye sahip olan Hymir, tanrı Thor ile bir balık avına çıkar. Hymir, mitolojide gücü ve denizlerin derinliğini temsil eder.",
    category: "jotnar",
    img: "https://img-s1.onedio.com/id-645a3ff1ee99d2854cc92bb9/rev-0/w-600/h-703/f-jpg/s-1720ab6d4d41fab9a464709ff6ce5f041ed22a48.jpg",
  },
  {
    id: 15,
    title: "Aegir",
    description:
      "Aegir, denizlerin ve okyanusların tanrısıdır. Rüzgarları ve dalgaları kontrol eder ve tanrıların ziyafetlerine ev sahipliği yapar. Denizcilik ve okyanusun derinlikleri ile ilişkilendirilir. Aegir, devlerin dünyasında bir yer edinmiş bir jotnardır.",
    category: "jotnar",
    img: "https://img-s1.onedio.com/id-5474a448d678123274ba1efd/rev-0/w-600/h-693/f-jpg/s-a45026f58c65631ee3e5834010a24485c71afbc5.jpg",
  },
  {
    id: 16,
    title: "Huginn",
    description:
      "Huginn, 'düşünce' anlamına gelen bir isimdir ve Odin'in biri dişli olan iki kargasından biridir. Gün boyunca dünyayı dolaşıp bilgi ve haberleri toplar, gece Odin'e geri döner. Huginn, bilgelik ve gözlem yeteneğini simgeler.",
    category: "animals",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkq0LZNUOqzdvZaoRBVl92QEx_f1WtQlzDEg&usqp=CAU",
  },
  {
    id: 17,
    title: "Muninn",
    description:
      "Muninn, 'hafıza' anlamına gelen bir isimdir ve Odin'in diğer kargasıdır. Huginn gibi gün boyunca dolaşıp bilgi toplar ancak bu bilgileri hatırlamakla görevlidir. Muninn, hafıza ve geçmişi simgeler.",
    category: "animals",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPYP5ZMftYAOUuKfD7BL1_rbzd_5Q1sSL0Tki_YZNIiKztqY2gW29TUDQjoAoEIGw-ZQ&usqp=CAU",
  },
  {
    id: 18,
    title: "Sleipnir",
    description:
      "Sleipnir, Odin'in sekiz bacaklı ve ölümsüz atıdır. Loki'nin annesi olan dev kraliçesi Laufey'den doğmuştur. Yüksek hızı ve yetenekleri ile bilinen Sleipnir, Odin'in savaşlara hızla ulaşmasını sağlar ve mitolojide önemli bir semboldür.",
    category: "animals",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf7uNgU_5CkExsdEe37hHYTi1RqrRaY1BZNzqmOmAG6QBl6wuyQ5bhtUouWNjZ6trD4To&usqp=CAU",
  },
  {
    id: 19,
    title: "Geri",
    description:
      "Geri, Odin'in kurt eşi ve yoldaşıdır. İsmi 'açlık' anlamına gelir. Savaş meydanlarında ölen savaşçıların ruhlarını taşıdığı düşünülür. Geri, cesaret ve savaşın sembolüdür.",
    category: "animals",
    img: "https://w7.pngwing.com/pngs/899/757/png-transparent-loki-odin-fenrir-old-norse-norse-mythology-loki-mammal-fictional-characters-carnivoran.png",
  },
  {
    id: 20,
    title: "Freki",
    description:
      "Freki, Odin'in diğer kurt eşi ve yoldaşıdır. İsmi 'obur' anlamına gelir. Savaş meydanlarında ölen savaşçıların cesetlerini tüketerek onlara yardım eder. Freki, güç ve mücadele sembolüdür.",
    category: "animals",
    img: "https://w7.pngwing.com/pngs/899/757/png-transparent-loki-odin-fenrir-old-norse-norse-mythology-loki-mammal-fictional-characters-carnivoran.png",
  },
  {
    id: 21,
    title: "Eir",
    description:
      "Eir, İskandinav mitolojisindeki sağlık, şifa ve iyileşme valkyriesidir. Savaşçıları iyileştirmek ve tedavi etmek amacıyla tanrısal güçlerini kullanır. Eir, iyilik ve sağlık sembolü olarak kabul edilir.",
    category: "valkyrie",
    img: "https://geekstra.com/wp-content/uploads/2016/01/240.jpg",
  },
  {
    id: 22,
    title: "Gondul",
    description:
      "Gondul, savaşın ve zaferin valkyriesidir. Savaşçıları korur ve desteklerken aynı zamanda onları savaşta cesaretlendirir. Gondul, savaşın heyecanını ve kazanma arzusunu temsil eder.",
    category: "valkyrie",
    img: "https://cf.kizlarsoruyor.com/a172337/db69aed6-8861-491b-9b5e-716c7e41e8da.jpg",
  },
  {
    id: 23,
    title: "Hildr",
    description:
      "Hildr, İskandinav mitolojisinde savaşın, savaşçıların ve savaşın şanının valkyriesidir. Savaş meydanlarında cesurca savaşan savaşçıları Valhalla'ya taşır. Hildr, kahramanlık ve zafer sembolüdür.",
    category: "valkyrie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLtkNBA4pv3M_z5HhAodt4fgQqy65m6kNx1eqFIGETaBuPK9myKAXDQhS75eck1YCT0c&usqp=CAU",
  },
  {
    id: 24,
    title: "Ólrún",
    description:
      "Ólrún, mitolojik hikayelerde yer alan bir kadın karakterdir. Helgi adlı savaşçı ile yaşadığı aşk hikayesiyle tanınır. Onun hikayesi aşkın, fedakarlığın ve kaderin sembolüdür.",
    category: "valkyrie",
    img: "https://cf.kizlarsoruyor.com/a172337/0be07d53-11cd-48be-b7ee-c4144e50ee05.jpg",
  },
  {
    id: 25,
    title: "Þrúðr",
    description:
      "Þrúðr, Þórr (Thor) ve Sif'in kızıdır. Kuvvetli ve savaşçı bir karakterdir. Babasının özelliklerini miras alarak devleri ve yaratıkları yenme yeteneğine sahiptir. Þrúðr, gücün ve aile bağlarının sembolüdür.",
    category: "valkyrie",
    img: "https://cf.kizlarsoruyor.com/a172337/28d96ffc-7be3-4549-86b1-e5c0b134a521.jpg",
  },
  {
    id: 26,
    title: "Vǫlsungr",
    description:
      "Vǫlsungr, mitolojik hikayelerde yer alan bir karakterdir. Eylül ve Vǫlsi adlı çocuklarıyla tanınır. Eylül, onun intikamını almak için büyür ve Svanhildr ile ilgili hikayelerde önemli bir rol oynar. Vǫlsungr'un hikayesi intikam ve aile bağlarını anlatır.",
    category: "heroes",
    img: "https://dailyscandinavian.com/wp-content/uploads/2016/12/161216-tugged-in-vain.jpg",
  },
  {
    id: 27,
    title: "Leifr",
    description:
      "Leifr, mitolojideki kahramanlardan biridir. Birçok macera ve savaş yaşar, kahramanlıkları ve cesareti ile tanınır. Leifr, cesaret ve savaşın sembolüdür.",
    category: "heroes",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1ranxsoSosPmBvX0Spzl2h3vd4iE8ibcWw&usqp=CAU",
  },
  {
    id: 28,
    title: "Sigurd",
    description:
      "Sigurd, mitolojik hikayelerde önemli bir kahramandır. Fafnir adlı ejderhayı öldürerek hazinelerini elde eder ve Gudrún ile aşk yaşar. Sigurd, cesaret, adalet ve kaderin sembolüdür.",
    category: "heroes",
    img: "https://img.game8.co/3345871/00cf932829bc939b9b258877ba7e8d9f.jpeg/show",
  },
  {
    id: 29,
    title: "Ragnar",
    description:
      "Ragnar, mitolojik hikayelerde sıkça adı geçen bir isimdir. Tarihi ve mitolojik kişilikler arasında yer alabilir. İsim, savaş, liderlik ve kaderle ilişkilendirilir.",
    category: "heroes",
    img: "https://i1.sndcdn.com/artworks-000529073898-i5bgtx-t500x500.jpg",
  },
  {
    id: 30,
    title: "Einar",
    description:
      "Einar, mitolojide yer alan savaşçı ve kahramanlardan biridir. Cesurca savaşır ve mitolojik hikayelerde sıkça adı geçer. Einar, savaşçılık ve liderlik niteliklerini sembolize eder.",
    category: "heroes",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3eiOp6q7nJboN0Vac3TiQcqZF89TiZ6Ml3zxJti4H_Uhucd8ltBUw3sMTf5LePmDMwKs&usqp=CAU",
  },
  {
    id: 31,
    title: "Brokkr",
    description:
      "Brokkr, İskandinav mitolojisindeki cücelerden biridir. Çok yetenekli bir demircidir ve Siv's (Sif) altın saçlarını yaratırken önemli bir rol oynar. Loki'nin bahis oyunu sonucu, Brokkr'nin kardeşi Sindri ile yarışırken cüce yapacağı eserlere odaklanmasını engellemeye çalışır.",
    category: "dwarves",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9JEPL540viY-inooE2lxI2Jx_XNd85gvODY3GZw3f4jgSIdbs7Ei1cAphtzP5Ric9KhI&usqp=CAU",
  },
  {
    id: 32,
    title: "Eitri",
    description:
      "Eitri, Brokkr'nin kardeşi ve cüce demircidir. Loki'nin yarışını sabote etmeye çalışırken, Siv'in (Sif) altın saçlarını yaratma işini ustalıkla gerçekleştirir. Eitri, demircilik becerisi ve yaratıcılığı ile tanınır.",
    category: "dwarves",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-t1wFfdyUDHh9MknUFSofnwVCYl7ejuTf1m_-Ii9BQcxTWCUaAjNKmFcV8zlB1dSlYgk&usqp=CAU",
  },
  {
    id: 33,
    title: "Fafnir",
    description:
      "Fafnir, İskandinav mitolojisinde ejderha dönüşen bir cücedir. Eski metinlerde, altının açgözlülükle nasıl bir yaratığı değiştirdiğini anlatan önemli bir hikayesi bulunur. Fafnir, açgözlülük ve dönüşüm sembolüdür.",
    category: "dwarves",
    img: "https://berloga-workshop.com/upload/userfiles/Dwarfs/Fafnir/x33.jpg.pagespeed.ic.JBZWvRyy_E.jpg",
  },
  {
    id: 34,
    title: "Sudri",
    description:
      "Sudri, İskandinav mitolojisindeki cücelerden biridir ve element olarak taş ile ilişkilendirilir. Cüceler arasındaki dört ana elementten birini temsil eder. Sudri, toprak ve dayanıklılığı sembolize eder.",
    category: "dwarves",
    img: "https://piratejewellery.com//wp-content/uploads/2021/10/dwarf-norse-mythology_grande.jpg",
  },
  {
    id: 35,
    title: "Ivaldi",
    description:
      "Ivaldi, cüceler arasında önemli bir isimdir ve eserleriyle ünlüdür. Cüce demircilerinin önde gelenlerinden biri olarak, Thor'un çekici Mjölnir'i ve Freyr'in gemisi Skidbladnir'i yapar. Ivaldi, beceri ve yaratıcılığı temsil eder.",
    category: "dwarves",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThWlKz23uTJCCYn5031YrjXkqEFoxe4VW-6Q&usqp=CAU",
  },
  {
    id: 36,
    title: "Nidhogg",
    description:
      "Nidhogg, İskandinav mitolojisinde Yggdrasil adlı dünya ağacının köklerinde yaşayan ejderha veya yılan olarak bilinir. Yggdrasil'in köklerini kemirerek ona zarar verdiğine inanılır. Nidhogg, yıkım ve kaosun sembolüdür.",
    category: "other",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTeyMHIAzYOVH81cDfx8aIA4KyAmStM_NHAASx2_eVnhw96mY6LDeTMNNjUMjm6zI285E&usqp=CAU",
  },
  {
    id: 37,
    title: "Urdr",
    description:
      "Urdr, İskandinav mitolojisindeki Nornların (kader tanrıçaları) biridir. Geçmişi temsil eder ve kaderi örerek insanların yaşamlarını belirler. Urdr, geçmiş ve kaderin sembolüdür.",
    category: "other",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjRD8AVeTcuB1xnoEfMB95ZgTp4z-s7ZZki97VYBosX0cMkEKeZjn_6Qa4EJaVzgN5hSs&usqp=CAU",
  },
  {
    id: 38,
    title: "Verdandi",
    description:
      "Verdandi, İskandinav mitolojisindeki Nornların bir diğer üyesidir. Şu anı temsil eder ve insanların hayatlarını şekillendiren kararları alır. Verdandi, şu an ve yaşamın sembolüdür.",
    category: "other",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjRD8AVeTcuB1xnoEfMB95ZgTp4z-s7ZZki97VYBosX0cMkEKeZjn_6Qa4EJaVzgN5hSs&usqp=CAU",
  },
  {
    id: 39,
    title: "Skuld",
    description:
      "Skuld, İskandinav mitolojisindeki Nornların üçüncü üyesidir. Geleceği temsil eder ve insanların gelecekteki kaderlerini örerek belirler. Skuld, gelecek ve öngörünün sembolüdür.",
    category: "other",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjRD8AVeTcuB1xnoEfMB95ZgTp4z-s7ZZki97VYBosX0cMkEKeZjn_6Qa4EJaVzgN5hSs&usqp=CAU",
  },
  {
    id: 40,
    title: "Fenrir",
    description:
      "Fenrir, dev kurt olarak bilinir ve İskandinav mitolojisinde Ragnarok olarak adlandırılan kıyamet olayında Odin tarafından öldürülmüşse de büyük bir tehdit olarak görülür. aesir tanrılarının düşmanıdır. Fenrir, güç ve yıkımın sembolüdür.",
    category: "other",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlD6FXni-8WEdCz6mZTRCgKl2iXv_Ksx0M0A&usqp=CAU",
  },
  {
    id: 41,
    title: "Balder",
    description: "Balder, İskandinav mitolojisinde güzellik, ışık ve adalet tanrısıdır. aesir tanrılarından biridir. Son derece sevilen ve iyilikle tanınan bir figürdür. Ancak Loki'nin entrikaları sonucu mistik bir ok tarafından öldürülmüştür. Ragnarok'ta geri döner ve yeni bir düzenin habercisi olur.",
    category: "aesir",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ly7oXuz56Y8hQXAkV8aYtfVvndK1VMgGYQ&usqp=CAU"
  },
  {
    id: 42,
    title: "Baugi",
    description: "Baugi, bir dev olan Suttung'un kardeşidir. Baugi, Gunnlod ile birlikte Odin'e kavun meyvesi suyunu verir. Odin, bu suyu içerek bilgelik ve şiir yeteneklerini kazanır.",
    category: "aesir",
    img: "https://pantheon.org/gallery/thumbnails/1y7srsn2l2xhzvbt.jpg"
  },
  {
    id: 43,
    title: "Bragi",
    description: "Bragi, İskandinav mitolojisinde şiir, şarkı ve hikayelerin tanrısıdır. aesir tanrıları arasında yer alır. Şairlerin ilham almasını sağlayan bir figürdür ve genellikle bir çalgı ile tasvir edilir. Klasik bir edebi yeteneği temsil eder.",
    category: "aesir",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPD6veC-tCLo7CgUaetr--2MobIG1m3nQGA&usqp=CAU"
  },
  {
    id: 44,
    title: "Forseti",
    description: "Forseti, adaletin ve uzlaşmanın tanrısıdır. aesir tanrıları arasında sayılır. Strenght, adalet ve düzgünlük sembollerine sahiptir. Strenght, hakemlik yaparak sorunları çözmekte ustadır.",
    category: "aesir",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTNNjAPWAxfe_ZBehMpaiLoSnfmrxlX3APlTuv449910UvzObU9imW1F-0yu-9pVLMBTA&usqp=CAU"
  },
  {
    id: 45,
    title: "Heimdall",
    description: "Heimdall, İskandinav mitolojisinde bekçilik ve gözetleme tanrısıdır. aesir tanrılarından biridir. Bifrost adlı gökkuşağı köprüsünü korur ve kıyamet anında Gjallarhorn adlı boynuzunu çalarak uyarıda bulunur. Gece ve gündüzı eşit derecede görebilme yeteneğine sahiptir.",
    category: "aesir",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPzbLY4CfpvmnwZrJKFBZm33S1ckqaRx8K-0yDD5L2-AJj6Kimdhta5IUQZbfIFpIdLM&usqp=CAU"
  },
  {
    id: 46,
    title: "Hodur",
    description: "Hodur, kör ve sessiz bir tanrıdır. aesir tanrıları arasında yer alır. Loki'nin entrikaları sonucu Balder'ı yanlışlıkla öldürür. Ragnarok'ta Vali tarafından öç alınması beklenir.",
    category: "aesir",
    img: "https://cdn.britannica.com/19/166519-004-7EF53CC7.jpg"
  },
  {
    id: 47,
    title: "Hoenir",
    description: "Hoenir, aesir tanrılarından biridir. Bilgelik ve karar alma yeteneği ile tanınır. Odin ile birlikte yaratıcı olarak kabul edilir. Devlerle yapılan bir anlaşma sonucu tanrılar arasında karar verici rolü üstlenir.",
    category: "aesir",
    img: "https://i.pinimg.com/originals/16/9a/59/169a59f8114238904b21223e62baf471.jpg"
  },
  {
    id: 48,
    title: "Vilur",
    description: "Vilur, İskandinav mitolojisinde adı pek bilinmeyen bir karakterdir. aesir tanrıları arasında yer alır. Detaylı bilgileri sınırlıdır ancak Asgardlı tanrılar arasında sayılmaktadır.",
    category: "aesir",
    img: "https://viking.style/wp-content/uploads/2021/06/Sigyn-719x1024.jpeg"
  },
  {
    id: 49,
    title: "Vili",
    description: "Vili, İskandinav mitolojisinde yaratıcı tanrılardan biridir. Odin ve Vé ile birlikte dünyayı yaratır. Bilgelik ve yaratıcılık ile ilişkilendirilir. aesir tanrılarından biridir.",
    category: "aesir",
    img: "https://miro.medium.com/v2/resize:fill:1200:900/g:fp:0.5:0.36/1*sYVShfgntIdFVgpZ0g1A2Q.jpeg"
  },  {
    id: 50,
    title: "Boda",
    description: "Boda, İskandinav mitolojisindeki vanir tanrılarından biridir. Bilgelik ve öngörü ile ilişkilendirilir. Tarım ve doğa güçlerinin koruyucusudur.",
    category: "vanir",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYnayJ4t0HzAUQLh-r-bYKVXW3NYZvQ31IJ3LQU4AQtkLeBwGs2Lxx5CgBxanpXahxreo&usqp=CAU"
  },
  {
    id: 51,
    title: "Bil",
    description: "Bil, İskandinav mitolojisindeki vanir tanrılarından biridir. Detaylı bilgiler sınırlıdır ancak doğa ve tarım güçleriyle ilişkilendirilir.",
    category: "vanir",
    img: "https://pm1.aminoapps.com/6815/05f5236d29099444a5f837004a7c924a7c53d7a7v2_00.jpg"
  },
  {
    id: 52,
    title: "Eir",
    description: "Eir, İskandinav mitolojisinde iyileşme ve sağlık tanrıçası olarak bilinir. vanir tanrıları arasında yer alır. Yaraları iyileştirme gücüne sahiptir.",
    category: "vanir",
    img: "https://cdn.shopify.com/s/files/1/1879/3511/files/Eir_grande.jpg?v=1552614189"
  },
  {
    id: 53,
    title: "Fimila",
    description: "Fimila, vanir tanrıları arasında yer alan ancak hakkında sınırlı bilgiye sahip olduğumuz bir karakterdir. Doğa ve kaderle ilişkilendirilebilir.",
    category: "vanir",
    img: "https://images.pushsquare.com/3b46da6415232/fated-the-silent-oath-cover.cover_large.jpg"
  },
  {
    id: 54,
    title: "Fjorgyn",
    description: "Fjorgyn, toprak tanrıçası olarak bilinir. vanir tanrıları arasında sayılır. Toprak ve bereketle ilişkilidir.",
    category: "vanir",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk5KzqaWi3Pvb0Ci1MWEPqPkbFCIMjK5EoVjxfGGheFSRgx2_C4e1gREuLlRBkv2ev4AI&usqp=CAU"
  },
  {
    id: 55,
    title: "Frimla",
    description: "Frimla, vanir tanrıları arasında yer alan ancak hakkında sınırlı bilgiye sahip olduğumuz bir karakterdir. Doğa ve mevsimlerle ilişkilendirilebilir.",
    category: "vanir",
    img: "https://i.pinimg.com/474x/eb/85/69/eb85698417518a4b23effd1d4af16b27--medieval-manuscript-illuminated-manuscript.jpg"
  },
  {
    id: 56,
    title: "Fulla",
    description: "Fulla, vanir tanrılarından biri olarak bilinir. Frigg'in hizmetkarıdır ve saçlarıyla sembolize edilir. Daha fazla ayrıntıya sahip değiliz.",
    category: "vanir",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGoPLv-4Ua77gI-ncq-PGO_5F4bwdxKyidxtIlbLuBx0A0QcPAVjz448nslkZmDqZvUI8&usqp=CAU"
  },
  {
    id: 57,
    title: "Gefjon",
    description: "Gefjon, toprak ve tarım tanrıçası olarak bilinir. vanir tanrıları arasında yer alır. Hikayesiyle tarım arazilerini yaratması ilişkilendirilir.",
    category: "vanir",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6uvn-t3m1jgakYci0ezNb_HMgtJ6DZIs2VUzqg5hkPRkmlCJYwcjF6G-KtG9CCbMkomE&usqp=CAU"
  },
  {
    id: 58,
    title: "Gerda",
    description: "Gerda, Skadi'nin kızıdır. vanir tanrıları ile Aesir tanrıları arasında bir evlilikle ilişkilendirilir. Bereket ve aşkla bağlantılıdır.",
    category: "vanir",
    img: "https://i.pinimg.com/originals/43/bf/84/43bf84beca971ea045b2b16c6337687d.jpg"
  },
  {
    id: 59,
    title: "Gna",
    description: "Gna, vanir tanrılarından biridir. Frigg'in elçisi olarak bilinir. Onun atıyla gökyüzünde yolculuk yapma yeteneğine sahiptir.",
    category: "vanir",
    img: "https://berloga-workshop.com/upload/userfiles/Viking%20goddesses/Gna/2.gif"
  },
  {
    id: 60,
    title: "Hnossa",
    description: "Hnossa, vanir tanrıları arasında yer alan bir karakterdir. Hakkında çok fazla bilgiye sahip değiliz ancak aşk ve güzellikle ilişkilendirilebilir.",
    category: "vanir",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLJoUjZvCUsPs-VBC-0sgfirzEYjlpa95O_KFl4jSNJ0HJC1fjjYV5U8FMqbJO5Wo9bk&usqp=CAU"
  },
  {
    id: 61,
    title: "Horn",
    description: "Horn, vanir tanrıları arasında yer alan ancak hakkında sınırlı bilgiye sahip olduğumuz bir karakterdir. Bilgelik ve öğrenmeyle ilişkilendirilebilir.",
    category: "vanir",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqmbwyzq0hRrRtlFiGNmMHGrJdaPhqA0q4RgL6iJiXRJ9doNF0sARb5v1IVQAYBOBdUU&usqp=CAU"
  },
  {
    id: 62,
    title: "Jord",
    description: "Jord, toprak tanrıçasıdır. vanir tanrıları arasında sayılır. Toprak ve doğayla yakından ilişkilidir.",
    category: "vanir",
    img: "https://berloga-workshop.com/upload/userfiles/Giants%20and%20giantesses/Jord/2.jpg"
  },
  {
    id: 63,
    title: "Nanna",
    description: "Nanna, İskandinav mitolojisindeki vanir tanrılarından biridir. Balder'ın eşi olarak bilinir. Ayrıntılı bilgi sınırlıdır.",
    category: "vanir",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8S7JrUOCZlkjARe5u6BY-WtFSRDOl0gZK2AUCOXBaAfw5krHyHXeQ--zaAtjOrkcygE&usqp=CAU"
  },
  {
    id: 64,
    title: "Saga",
    description: "Saga, İskandinav mitolojisinde bilgelik ve hikayelerin tanrıçası olarak bilinir. vanir tanrıları arasında yer alır. Eski hikayelerin koruyucusu olarak kabul edilir.",
    category: "vanir",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSkSIQbDjs1HHHEe6TNhVRcPtnvKAKwZQcg&usqp=CAU"
  },
  {
    id: 65,
    title: "Sif",
    description: "Sif, vanir tanrıları arasında sayılan bir karakterdir. Thor'un karısı olarak bilinir. Uzun altın saçlarıyla sembolize edilir.",
    category: "vanir",
    img: "https://mir-s3-cdn-cf.behance.net/projects/202/efc367107654115.Y3JvcCw3NDksNTg2LDE4MSwxNjg.jpg"
  },
  {
    id: 66,
    title: "Siguna",
    description: "Siguna, vanir tanrıları arasında yer alan ancak hakkında sınırlı bilgiye sahip olduğumuz bir karakterdir. Adalet ve eşitlikle ilişkilendirilebilir.",
    category: "vanir",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Loki_Bound_by_Collingwood.jpg/220px-Loki_Bound_by_Collingwood.jpg"
  },
  {
    id: 67,
    title: "Vanadis",
    description: "Vanadis, vanir tanrılarının kraliçesi olarak kabul edilir. Toprak, bereket ve aşkla ilişkilendirilir. Çok fazla ayrıntıya sahip değiliz.",
    category: "vanir",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2-M4BTEVcPTEocSvhWI1_KSIASYq1xSBu7w&usqp=CAU"
  },
  {
    id: 68,
    title: "Hel",
    description: "Hel, İskandinav mitolojisinde ölülerin ruhlarının gittiği yer olarak bilinir. Odin'in kızıdır ve yarı yaşayan, yarı ölü bir varlık olarak tasvir edilir.",
    category: "other",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP-ONpz1Zf9qNKpZDWGFB1HPmoT7SxXBYxX7WeY1yg-ABblTnX5yTryDOS5YpTggkGnr4&usqp=CAU"
  },
  {
    id: 69,
    title: "Jormungandr",
    description: "Jormungandr, İskandinav mitolojisinde Midgard'ı çevreleyen devasa yılanı temsil eder. Thor ile Ragnarok sırasında karşılaşır.",
    category: "other",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBPzfsv3i2kuLCJ4MLuPNJ4vKxCfipjj4IPFz3CaNyel_ZfuCwnO5eQYZIsU7qYuxu1w&usqp=CAU"
  },
  {
    id: 70,
    title: "Yggdrasil",
    description: "Yggdrasil, dünya ağacı olarak bilinir. İskandinav mitolojisinde dokuz dünyayı birbirine bağlayan merkezi bir ağaç olarak düşünülür.",
    category: "other",
    img: "https://cdna.artstation.com/p/assets/images/images/051/140/834/large/stan-janowicz-yggdrasil-colour-ver-3.jpg?1656545722"
  }
];

export default datatr