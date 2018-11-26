import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { AuthentificationService } from '../../services/authentification.service';



@Component({
  selector: 'app-anmelden',
  templateUrl: './anmelden.component.html',
  styleUrls: ['./anmelden.component.scss']
})
export class AnmeldenComponent implements OnInit {
  private userId=0;
  name = new FormControl('');
  password = new FormControl('');
  private statusMessage:string;
  private loginmessage:string;
  private type:string;

  constructor(private titleService: Title, private authService: AuthentificationService) { }

  ngOnInit() {
    this.setTitle();
  }
 
  private setTitle() {
    this.titleService.setTitle('Anmelden');
  }

  onSubmit(){
    if(this.name.value == '' || this.password.value == '' ){
      this.type = 'danger';
      this.loginmessage='Bitte Namen und Passwort angeben.';
    }else{

      this.authService.login(this.name.value, this.password.value).subscribe((data:any) => {
        
        this.type = 'success';
        this.loginmessage=data.status;
      });
    }
  }

  
}
