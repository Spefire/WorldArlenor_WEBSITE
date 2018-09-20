import { Injectable } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable()
export class RoutesService {

  constructor(private titleService: Title, private meta: Meta, private translate: TranslateService) {}

  public setTitleMetas(pageName: string) {
    this.titleService.setTitle(this.translate.instant('PAGE.' + pageName + '.TITLE'));
    this.meta.updateTag({
      name: 'description',
      content: this.translate.instant('PAGE.' + pageName + '.DESCRIPTION')
    });
  }
}