import 'bootstrap';
export class App {
  constructor() {
    this.message = 'Hello World!';
    this.message1 = 'Aurilia'

  }
  configureRouter(config,router){
    this.router=router
    config.title="myApp"
    config.map([{route:['','home'],name:'home',moduleId:'home',title:'home'},
    {route:'AboutME',name:'AboutME',moduleId:'aboutME',title:'AboutME'},
    {route:'contactUS',name:'contactUS',moduleId:'contactUS',title:'ContactUS'}])
  }
  aboutMEClick(){
    
    this.router.navigateToRoute('AboutME')
  }
  contactUS(){
    this.router.navigateToRoute('contactUS')

  }
  home(){
    this.router.navigateToRoute('home')
  }

}
