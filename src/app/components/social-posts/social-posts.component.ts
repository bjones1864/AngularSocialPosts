import { Component } from '@angular/core';
import { SinglePostComponent } from '../single-post/single-post.component';
import { PostFormComponent } from '../post-form/post-form.component';
import { Post } from '../../models/post';

@Component({
  selector: 'app-social-posts',
  standalone: true,
  imports: [SinglePostComponent, PostFormComponent],
  templateUrl: './social-posts.component.html',
  styleUrl: './social-posts.component.css'
})
export class SocialPostsComponent {
  allPosts: Post[] = [
    {
      title: "Shrimp",
      thought: "Shrimp are neat!"
    },
    {
      title: "Motorcycles",
      thought: "Motorcycles are cool!"
    }
  ];

  onSubmit(p : Post): void{
    this.allPosts.push(p);
  }

  onDelete(p: Post): void{
    this.allPosts.splice(this.allPosts.findIndex(x => x == p), 1);
  }
}
