import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import {CommonComponent} from "../common/common.component";
import {Scroll} from "../../interfaces/scroll";

@Component({
  selector: 'animatedBackground',
  templateUrl: './animatedBackground.component.html',
  styleUrls: ['./animatedBackground.component.css']
})
export class AnimatedBackgroundComponent extends CommonComponent {

  scroll: Scroll = new Scroll(0,0,0,0, 0);

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    this.addSubscription(this.eventService.scrollUpdate.subscribe((scroll) => {
      this.scroll = scroll;
    }))
  }


  override getLeftAnimation() {
    let offset = 70;
    let percent = this.scroll.percent - .1;
    return {
      transform: 'translateX(-' + (offset - (percent * offset)) + '%)',
      opacity: Math.min(1, Math.max(.7,percent))
    };
  }

  getRightLineAnimation() {
    let percent = this.scroll.percent * 100;
    return {
      transform: 'rotate(45deg) translateX(' + (-percent * .55) + '%)'
    };
  }
}
