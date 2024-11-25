import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ArticleService } from './service/article.service';
import { ArticleComponent } from './component/article/article.component';
import { HeaderComponent } from './component/header/header.component';
import { CreatepostComponent } from './component/createpost/createpost.component';
import { DiscoverComponent } from './component/discover/discover.component';
import { AuthorService } from './service/author.service';
import{QuillModule} from 'ngx-quill'


@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent,ArticleComponent, HeaderComponent, CreatepostComponent, DiscoverComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    QuillModule.forRoot()
 ],
  providers: [HttpClient,ArticleService,AuthorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
