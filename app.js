let liste = [];
let toplam = 0;
let yapilan = 0
const listeUl = document.querySelector("#todo-ul");
// ekranda yazan liste lar
const listeInput = document.querySelector("#todo-input");
const listeButton = document.querySelector("#todo-button");

//? Add Buton is clicked.inputa veri girilip buton tıklandığında listes dizisine inputtaki value eklensin.
// sonra bunu showlistes() fonk gidip sayesinde ekrana bastır

document.querySelector("#todo-button").addEventListener("click", () => {
 
      if (!listeInput.value) {
    alert("Please Enter your listes");
  } 
  else if(liste.includes(listeInput.value))
  return;
  
    else {
    liste.push(listeInput.value);
    console.log(liste);
    showListe();
    toplam += 1; 
    document.querySelector("#total").innerHTML = toplam;
    document.querySelector("#ok").innerHTML = yapilan;
  }
});

const showListe = () => {
  //! add e basıldığında hafızaya task eklenecek, ekrana basmak üzere buraya gelecek,
  //  geldiğinde,localStorage deki verileri (ul listesinde bulunan, ekranda duran) 
  //  baştan tekrar girmemesi için ul yi temizliyoruz
  

  listeUl.innerHTML += `
    <li>
      <i class="fa fa-check fa-lg"> </i>
      <p>${listeInput.value}</p>
      <i class="fa fa-trash fa-lg"></i>
    </li>`;

  createSilButon();

  createTikButon(); 


  listeInput.value = "";

  listeInput.focus();
};


createTikButon = () => {
  const TikButon = document.querySelectorAll(".fa-check");
  TikButon.forEach((Tik) => {
    Tik.onclick = () => {
      Tik.parentNode.classList.toggle("checked");

      if (Tik.parentNode.classList.contains("checked")) {
         yapilan += 1;
         document.querySelector("#ok").innerHTML = yapilan;

      } else {
        yapilan -= 1;
        document.querySelector("#ok").innerHTML = yapilan;
      } 
   
    };
  });
};


const createSilButon = () => {
  // deleteBtns=nodelist=nesnedir, foreach olmaz
  const silButon = document.querySelectorAll(".fa-trash");
  silButon.forEach((sil) => {
    sil.onclick = () => {
      liste.splice(sil, 1);
      //!bu listeden siler showListeyi çağırarak ekrana bastırırız

      //!alternatif yol showListeyi çağırmak  (ekrana hepsini tekrar bastırmak) yerine,
      //  (çünkü bu yolla silince liste silinmiyor, siz ekrana listeyi bas deyince silinenler geri gelmiş oluyor)
       // ekrandan direk silmek, ama listede hala durur
      sil.parentNode.remove();
      console.log(liste);

      toplam -= 1 ; 
      document.querySelector("#total").innerHTML = toplam;
      if (yapilan > 0&& sil.parentNode.classList.contains("checked")){
        yapilan -= 1;
        document.querySelector("#ok").innerHTML = yapilan;
      }
    };
  });
};

