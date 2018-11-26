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
  private benutzername = new FormControl('');
  private email = new FormControl('');
  private password = new FormControl('');
  private passwordConfirm = new FormControl('');
  private userId:number;
  private registrmessage:string;
  private type:string;

  constructor(private titleService: Title, private authService: AuthentificationService) { }

  ngOnInit() {
    this.titleService.setTitle('Registrieren');
  }

  onSubmit(){
    if((this.benutzername.value != '') && (this.password.value != '') && (this.passwordConfirm.value != '')){

      this.authService.register(this.benutzername.value, this.email.value, this.password.value).subscribe((data: any) => {
        this.userId=data.user.id;
        this.type = 'success';
        this.registrmessage='User erfolgreich registriert. DEV:UserID: '+this.userId;
       },(err:any) => {
        this.password.setValue('')
        this.passwordConfirm.setValue('')
        this.userId = 0;
        this.type = 'danger';
        switch(err.status){
          case 400:{ this.registrmessage='Bitte alle Felder vollständig ausfüllen.'; break;}
          case 409:{ this.registrmessage='Dieser Benutzername ist bereits vergeben.'; break;}
        }
      });

    }else{
      this.type = 'danger';
      this.registrmessage='Bitte alle Felder ausfüllen.';
    }
  }

  setTitle(){
    this.titleService.setTitle('Registrieren');
  }
}
