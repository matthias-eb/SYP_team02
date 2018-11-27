import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title }  from '@angular/platform-browser';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-registrieren',
  templateUrl: './registrieren.component.html',
  styleUrls: ['./registrieren.component.scss']
})
export class RegistrierenComponent implements OnInit {
  //In
  private benutzername = new FormControl('');
  private email = new FormControl('');
  private password = new FormControl('');
  private passwordConfirm = new FormControl('');
  //Out
  private userId:number;
  private registrmessage:string;
  private type:string;
  private emailcheck:boolean;

  constructor(private titleService: Title, private authService: AuthentificationService) { }
  
  ngOnInit() {
    this.titleService.setTitle('Registrieren');
    this.email.valueChanges.subscribe((data: any)=>{
      this.emailcheck=this.emailSyntaxCheck(this.email.value);
    });
  }

  onSubmit(){
    /* Die Fehler suche wird extra Step-By-Step gemacht */
    //1. Sind alle Felder ausgefuellt?
    if((this.benutzername.value != '') && (this.password.value != '') && (this.passwordConfirm.value != '')){
      
      //2. Entspricht die Angabe der Email-Adresse der korrekten Form? 
      if(this.emailSyntaxCheck(this.email.value)){
        
        //3. Sind beide Eingaben fuer das Passwort identisch angegeben?
        if(this.password.value == this.passwordConfirm.value){
          
          this.authService.register(this.benutzername.value, this.email.value, this.password.value).subscribe((data: any) => {
            this.userId=data.user.id;
            this.type = 'success';
            this.registrmessage='User erfolgreich registriert. DEV:UserID: '+this.userId;
          },(err:any) => {
            //this.registrmessage='Dieser Benutzername ist bereits vergeben.';
            this.errorHandler(4);
          });

        }else{
          //3. this.registrmessage='Bitte überprüfen sie Ihre Passwort eingaben.';
          this.errorHandler(3);
        }
      }else{
        //2. this.registrmessage='Bitte geben Sie eine gültige E-Mail Adresse an.';
        this.errorHandler(2);
      }
    }else{
      //1. this.registrmessage='Bitte alle Felder ausfüllen.';
      this.errorHandler(1);
    }
  }



  private errorHandler(errId: number){
    this.password.setValue('')
    this.passwordConfirm.setValue('')
    this.userId = 0;
    this.type = 'danger';

    switch(errId){
      case 1:{ this.registrmessage='Bitte alle Felder ausfüllen.'; break;}
      case 2:{ this.registrmessage='Bitte geben Sie eine gültige E-Mail Adresse an.'; break;}
      case 3:{ this.registrmessage='Bitte überprüfen sie Ihre Passwort eingaben.'; break;}
      case 4:{ this.registrmessage='Dieser Benutzername ist bereits vergeben.'; break;}
    }
  }


  private emailSyntaxCheck(emailInput: string): boolean{
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (re.test(emailInput));
  }

}
