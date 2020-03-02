import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username : string;
  password : string;
  loginData : any;
  message : any = "";
  constructor(private loadingController: LoadingController,private navCtrl: NavController, private service: DataServiceService, private router: Router, private toastCtrl: ToastController) { 
    this.service.getDataLogin().subscribe(result => {
      console.log(result);
    this.loginData = result;
      this.message = this.loginData.message;
    });
  }

  ngOnInit() {
  }

  
  async navigate()
  {
    if (this.loginData.code == 1){
      const loading = await this.loadingController.create({
        message: 'Please wait...',
        duration: 2000
      });


      let toast = this.toastCtrl.create({
        message: this.message,
        duration: 3000,
        position: 'bottom'
      });
      await loading.present();
      setTimeout(()=>{
        this.router.navigate(['/home']);
      },2000);
      
      // this.navCtrl.navigateForward('/home', {
      //   queryParams: {
      //     data: fullName
      //   }
      // })
      setTimeout(async () => {
      (await toast).present();
      },2500);
    }
  
    
    
  }
  
}
