export class AppareilService {

appareils= [
  {
  id :1,
  name:'machine à laver',
  status:'éteint'
  },
  {
  id :2,
  name:'machine à cuire',
  status:'allumé'
  },
  {
  id :3,
  name:'machine à rien',
  status:'allumé'
  }
];

getAppareilById(id:number){
const appareil = this.appareils.find(
(appareilObject) => {return appareilObject.id===id;}
);
return appareil;


}

switchOnAll() {
  for (let appareil of this.appareils) {
  appareil.status='allumé'
  }
}
switchOffAll() {
  for (let appareil of this.appareils) {
  appareil.status='éteint'
  }
}
switchOnOne(index:number) {
this.appareils[index].status='allumé';
}
switchOffOne(index:number) {
this.appareils[index].status='éteint';
}




}
