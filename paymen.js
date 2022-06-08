
var x=new Date();

// class PaymentManager
// {
//     constructor()
//     {
//         this.payments=new Payment[20];
//     }
//     pay()
//     {
//       payments[n].paying();
//     }
    

    
    
// }

class Payment
{
    constructor()
    {
        this.code=0;
        this.date=x.getDate();
        this.sum=0;
        this.description='';
        this.status='';
        this.how='';
        this.user=new User('','','');
    }
    paying()
    {
        payments.push(this);
    }
    refund()
    {
        payments.splice(payments.indexOf(this),1);
    }
}
class User
{
    constructor()
    {
        this.name='';
        this.phone=0;
        this.address='';
    }
}
class PaymentOnCredit extends Payment
{
    constructor()
    {
        super();
        this.validity=x.getDate();
        this.recentLiterature=0;
        this.cvc=0;
    }
    paying()
    {
        payments.push(this);
    }
    refund()
    {
        payments.splice(payments.indexOf(this),1);
    }
    updateSum(s)
    {
        this.sum=s;
    }
    updateDescription(d)
    {
        this.description=d;
    }
    updeteDetails(n,p,a)
    {
        this.user=new User(n,p,a);
    }

}
class ClearingCompany extends Payment
{
    constructor()
    {
        super();
        this.id=' ';
    }
    paying()
    {
        payments.push(this);
    }
    refund()
    {
        payments.splice(payments.indexOf(this),1);
    }
}



p = new Payment();
p.code=1;
p.Date=x.getDate();
p.sum=300;
p.description='my first...';
p.status='y';
p.how='credit';
u=new User();
u.name='tzivya';
u.phone=012;
u.address='abc13';
p.user=u;
p1=new PaymentOnCredit();
p1.code=2;
p2=new ClearingCompany();
// payments.paying(p);
payments= [p];
p1.paying();
p.refund();
