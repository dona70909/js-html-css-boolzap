

const app = new Vue ({
    
    el:"#app",
    
    data:{
        
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
                
                image:"avatar_1.jpg",
                
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
                
                image:"avatar_2.jpg",
                
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
                
                image:"avatar_3.jpg",
                
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
                
                image:"avatar_4.jpg",
                
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
                
                image:"avatar_5.jpg",
                
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
                
                image:"avatar_6.jpg",
                
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
                
                image:"avatar_7.jpg",
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
                
                image:"avatar_8.jpg",
                
            }
        ],
        
        activeClick:null,
        inputMessage:"",
        inputContact:"",
        activeMessage:null,

    },
    

    methods: {
        getActiveClick(index){
            this.activeClick = index;
        },

        getActiveMessage(index){
            this.activeMessage = index;
        },

        pushMessage(pushElement){
            this.contacts.forEach((contact,index) => {
                if(this.activeClick == index){
                    this.contacts[this.activeClick].messages.push(pushElement);
                    console.log("active" +  this.contacts[this.activeClick].messages );
                }else {
                    console.log("not active, no push");
                }
            });
        },

        removeMessage(indexMsg){
            this.contacts.forEach((contact,index) => {
                if((this.activeClick == index) && (this.activeMessage == indexMsg)){
                    this.contacts[this.activeClick].messages.splice(this.activeMessage,1);
                    console.log("active" + " " + this.activeClick + " " + index);
                }else {
                    console.log("not active, no remove");
                }
            });
        },
        
        // ! input without answer
        /*getInput(input){
            if(input != ""){
                newMessage = this.createNewMessage();
                this.pushMessage(newMessage);
                newMessage.message = input;
                this.inputMessage = "";
            } else {
                console.log("empty msg");
            }
        },*/
        
        getInput(input){
            if(input != ""){
                newMessage = this.createNewMessage();
                newAnswer = this.createNewAnswer();
                this.pushMessage(newMessage);
                setTimeout(this.timeFn,3000);
                newMessage.message = input;
                this.inputMessage = "";
            } else {
                console.log("empty msg");
            }
        },
        
        createNewMessage(){
            return {
                date:"",
                message:"",
                status:"sent"
            }
        },

        createNewAnswer(){
            return {
                date:"",
                message:"ok",
                status:"received"
            }
        },

        timeFn(){
            this.pushMessage(newAnswer);
        },
    },

    computed: {
        checkSearchContact(){
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.inputContact.toLowerCase());
            });
        }
    },
})