import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesService } from '../service/services.service.js';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  posts: any;

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  constructor(private postsService: ServicesService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getAllPosts().subscribe((data: any) => {
      this.posts = data;
    });
  }

  deleteItem(id: number) {
    this.postsService.deletePost(id).subscribe((data) => {
      this.posts = data;
      this.getPosts();
    });
  }

  addPost() {
    this.postsService.createPost(this.form.value).subscribe((res) => {
      console.log(res);
      this.getPosts();
      this.form.reset();
    });
  }
}
