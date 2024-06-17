import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  @Output() submitted = new EventEmitter<Post>();
  formPost: Post = {} as Post;
  display: boolean = false;

  submitPost(): void{
    let newPost: Post = {...this.formPost};
    this.submitted.emit(newPost);
    this.formPost = {} as Post;
  }

  toggleDisplay(): void {
    this.display = !this.display;
  }
}
