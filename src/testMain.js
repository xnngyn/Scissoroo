
new Vue({
   el: '#vue-test',
   //Daten, die sich auf vue-test beziehen
   data:{
       time:'Angebrachte Begrüßung: ',
       name:'shaun',
       job:'wanker',
       website:'http://www.thenetninja.co.uk',
       websiteTag:'<a href="http://www.thenetninja.co.uk"> The Net Ninja Website </a>',
       age: 23,
       x: 0,
       y: 0,
       
       
   },

   //Methoden, die sich auf div vue-test beziehen
   methods: {
       greet: function(time){
           return this.time + 'Good ' + time + ' ' + this.name;
       },

       ageSubtract: function(dec){
           this.age= this.age-dec;
       },

       //event wird automatisch übergeben, in dem Fall mousemove event
       //mousemove hat verschiedene Attribute, z.b. koordinaten (offset)
       //hier wird die x/y anzeige einfach mit den Koordinaten der Maus gleichgesetzt
       updateXY: function(event){
           this.x = event.offsetX;
           this.y = event.offsetY;

       },
       click: function(){
           alert('You clicked me');

       },

       logName: function(){
           alert('You entered your name!')
       }
   }
});
