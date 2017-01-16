import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent{
  stringInterpolation = "J'aime la choucroute";
  numberInterpolation = 3;

  onTest(){
    return false;
  }

  onClicked(value : string){
    alert(value);
  }

}
