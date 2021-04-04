class User{
    constructor(user_name, user_age, user_city){
        this.username = user_name;
        this.userage = user_age;
        this.usercity = user_city;
    }
    present(){
        return(
            this.username + ' ' + this.userage + ' ' + this.usercity
        );
    }
}

class Orders extends User{
    constructor(user_name, user_age, user_city, order_id, order_amount, order_value){
        super(user_name, user_age, user_city); // refers to the paren class
        this.orderid = order_id;
        this.orderamount = order_amount;
        this.ordervalue = order_value;
    }
    show(){
        return(
            this.present() + 
            'Order details ' + 
            this.orderid + ' ' + this.orderamount + ' ' + this.ordervalue
        );
    }
}

Joe_Wick = new Orders('Joe', 21, 'New York', 01, 15, 'apple');
