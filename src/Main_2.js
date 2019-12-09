
new Vue({
    el: "#vue_test_1",

    data:{ 
        
        age1:55,
        age2:23

    },

    props:{

        
    },

    //bei einer Variablenänderung werden alle Mthoden nochmals ausgeführt
    methods:{

    },

    //bei einer Variablenänderung werden nur betroffene 
    //Computed Properties nochmals ausgeführt
    computed:{

        addAges:function(){
        return this.age1 + this.age2;
    }
    }
})