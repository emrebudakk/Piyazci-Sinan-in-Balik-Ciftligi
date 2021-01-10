//1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
console.log("Names of fish with stock more than 500 kg;");
showName(findBiggerThan(fishFarm, 500));

//2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
console.log("Names of fish between 9 and 12 Frank;");
showName(findBetween(fishFarm, 9, 12));

//3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
console.log("Names of fish sold in the winter season in BERN;");
showName(findBernWinter(fishFarm));

//4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
console.log("Names of fish with approaching expiration dates;");
let newListToSort = findExpirationDate(fishFarm).sort(
    (a, b) => a.PullDate.getTime() - b.PullDate.getTime()
);
console.log(newListToSort);

//5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
console.log("Names of fish from the EU and cheap 10 frank;");
showName(findFromAB(fishFarm, 10));

//6) Toplam balik stoku ne kadardir?
console.log("Fish stock in total;");
console.log(findTotalStock(fishFarm));

//7) En pahali olan balik hangisidir?
console.log("Our most expensive fish;");
showName(findExpensiveFish(fishFarm));

//8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
console.log("Country where long-term fish come from;");
showCountry(findLongerDuration(fishFarm));

//9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
console.log("Average price of fish sold in swiss-rome in winter and autumn;");
console.log(findAverage(findSwissPrice(fishFarm)));

//10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
console.log("Total number of fish in stock for the Canton of Ticino;");
console.log(findTicinoStock(fishFarm));

//11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?
console.log("Average weight of fish originating in the summer season and coming from outside the EU and sold in ZH;");
console.log(findAverage(findSwissPrice(fishFarm)));