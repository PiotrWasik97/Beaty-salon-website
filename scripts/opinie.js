const opinie = [
  {
    text: "Sympatyczna Pani Ola profesjonalna w każdym calu w tym co robi. Wytłumaczy co robi, doradzi, zapropnuje konkretną usługę niezdecydowanym ( jak w moim przypadku), bardzo delikatna. Salon bardzo czysty, gustownie urzadzony i super wyposażony sprzetowo. Wyszłam bardzo zadowolona i zrelaksowana po wypiciu przepysznej herbatki. Z całą pewnością tam wrócę i gorąco polecam korzystanie z usług w salonie.",
    author: "Dorota"
  },
  {
    text: "Pani Ola to profesjonalizm w każdym calu. Potrafi idealnie dobrać odpowiedni zabieg, po wcześniejszej analizie skóry. Bogate doświadczenie w zakresie kosmetologii estetycznej, a pomimo tego wciąż się szkoli. I co również ważne — jest cudowną kobietą, z absolutnie indywidualnym podejściem do każdego klienta.",
    author: "Iwona"
  },
  {
    text: "Pełen profesjonalizm, bardzo miła atmosfera podczas wizyty. Wszystkie kroki zabiegów rzetelnie tłumaczy i wyjaśnia. Jest delikatna i potrafi tak dobrać ilość preparatu, że usta wyglądają pięknie i naturalnie. Mogę śmiało powiedzieć, że jeśli myślicie o zabiegach medycyny estetycznej to tylko u Oli.",
    author: "Justyna"
  }
];

let currentIndex = 0;
const paragraf = document.getElementById("opinie-paragraf");
const autor = document.getElementById("opinie-autor");
const dots = document.querySelectorAll(".dot");

function zmienOpinie() {
  currentIndex = (currentIndex + 1) % opinie.length;

  paragraf.style.opacity = "0";
  autor.style.opacity = "0";

  setTimeout(() => {
    paragraf.textContent = opinie[currentIndex].text;
    autor.textContent = opinie[currentIndex].author;

    paragraf.style.opacity = "1";
    autor.style.opacity = "1";

    dots.forEach(dot => dot.style.backgroundColor = "transparent");
    dots[currentIndex].style.backgroundColor = "white";
  }, 500); 
}

setInterval(zmienOpinie, 10000); 