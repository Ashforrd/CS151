let pageData = {
    productName: 'Book a Cruise to the Moon',
    productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astr onauts working outside the International Space Station.',
    imageSrc:[
        "work/Galaxy/images/asteroid.jpg",
        "work/Galaxy/images/fantasy.jpg",
        "work/Galaxy/images/space.jpg",
        "work/Galaxy/images/spaceship.jpg"
    ],
    h2ClassController:{
        centered:true,
        colorFont:false
    },
    pStyleController:{
        'margin-left':'50px',
        color:'blue',
        'font-size':'20px',
        'font-style':'italic'
    },
    imageStyleController:{
        margin:'auto',
        display:'block',
        width:'50%'
    },
    imageAlt:"Photo from space",
    productClasses:[ 
        {
            name:'Coach',
            price:125000,
            seatsAvailable:20,
            earlyBird:true
        },
        {
            name:'Business',
            price:275000,
            seatsAvailable:6,
            earlyBird:true
        },
        {
            name:'First',
            price:430000,
            seatsAvailable:2,
            earlyBird:false
        }
    ],
    orderType:[
        'Coach','Business','First'
    ],
    orderShow:false,
    orderTypeIndex:0,
    name:"",
    ticketNumber:0,
    currentSeats:0,
    note:"",
    book_info:"",
    selected:"",
    data:""
};

// var s=$("select[name='sfsname']").val();
// $("#orderType option:selected").val()

let pageMethods = {
    bookSend(curr){
        this.orderShow = true;        
        this.orderTypeIndex = curr
        this.currentSeats = this.productClasses[curr].seatsAvailable
        // console.log(pageData.currentSeats)
    },
    select_change(event){
        this.orderTypeIndex = parseInt(event.target.value);
        this.currentSeats = this.productClasses[this.orderTypeIndex].seatsAvailable;
        console.log(this.productClasses[this.orderTypeIndex].name);
    },
    orderSend(){
        if (this.currentSeats - this.ticketNumber >= 0){
            this.currentSeats = this.currentSeats - this.ticketNumber;
            this.productClasses[this.orderTypeIndex].seatsAvailable = this.currentSeats;
            console.log(this.productClasses)
        }
        this.book_info = `${this.name} - ${this.productClasses[this.orderTypeIndex].name} - ${this.ticketNumber}張 。 備註:${this.note} <br>`;
        this.data += this.book_info;
        this.orderShow = false;
    }
};

const app = Vue.createApp({
    data(){
        return pageData;
    },
    methods:pageMethods,
});
    
app.mount("#app");